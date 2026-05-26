#!/usr/bin/env python3
"""
Prompt Quality Evaluator — Invisible Signals™

Runs prompt files against fixture inputs via a local Ollama server,
checks that the output contains the expected section headers, and
optionally runs an LLM-as-judge pass against each fixture's evalCriteria.

Usage:
  python eval/run_eval.py
  python eval/run_eval.py --prompt resume-signal-analysis
  python eval/run_eval.py --model mistral --judge
"""

import argparse
import json
import os
import re
import sys
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.rule import Rule
from rich.table import Table

load_dotenv(Path(__file__).parent / ".env")

REPO_ROOT = Path(__file__).parent.parent
PROMPTS_DIR = REPO_ROOT / "prompts"
FIXTURES_DIR = Path(__file__).parent / "fixtures"
RESULTS_DIR = Path(__file__).parent / "results"

console = Console()

DEFAULT_MODEL = "llama3"

# ── Expected output sections per prompt ───────────────────────────────────────
# Checked as case-insensitive substrings in the model's response.
# Partial matches are intentional to allow minor header variations.

EXPECTED_SECTIONS: dict[str, list[str]] = {
    "resume-signal-analysis": [
        "Context Calibration",
        "Trajectory Read",
        "Signal Hierarchy",
        "Signal Stack",
        "Role-Level Mismatch",
        "Ownership Audit",
        "Tailoring Gap",
        "Risk Signals",
        "Claim Defensibility",
        "De-emphasis Review",
        "AI Misuse Risks",
        "Evidence Recovery",
        "Targeted Rewrite",
        "Top 3 Signal",
    ],
    "behavioral-answer-diagnostic": [
        "Question Intent Detection",
        "Story Fit",
        "STAR Completeness",
        "Ownership Clarity",
        "Outcome Quality",
        "Signal Stack",
        "Role and Level Relevance",
        "Risk Signals",
        "Claim Defensibility",
    ],
    "skeptical-hiring-manager": [
        "Overall Signal Read",
        "Strongest Signals",
        "Weakest Signals",
        "Signal Stack",
        "Claim Defensibility",
        "Language Patterns",
        "Next Practice Plan",
    ],
}

# ── Roleplay appendix for multi-turn prompts ──────────────────────────────────
# Appended to the filled prompt so a single API call covers setup + mock
# conversation + debrief trigger. Keeps the eval stateless.

ROLEPLAY_APPENDIX: dict[str, str] = {
    "skeptical-hiring-manager": """
---

[SIMULATION TRANSCRIPT — automated evaluation]

Hiring Manager: Tell me about yourself — specifically what makes you a strong fit for this role.

Candidate: I've been a backend engineer for about four years. I've worked on APIs and \
built some data pipelines. I think I'm a good fit because I've shipped a lot of features \
and I work well with teams.

Hiring Manager: When you say you've "shipped features" — can you give me a specific \
example? What was your individual contribution?

Candidate: We built a new API for our mobile app. The team worked on it for about three \
months and it went live without any major issues.

---

debrief
""",
}


# ── Markdown extraction ────────────────────────────────────────────────────────


def extract_prompt_text(raw: str) -> str:
    """Extract the fenced code block content from ## Prompt."""
    match = re.search(r"## Prompt\s+```(?:text)?\n([\s\S]*?)\n```", raw)
    return match.group(1).strip() if match else ""


def interpolate(prompt_text: str, inputs: dict) -> str:
    """Replace placeholder keys with fixture values."""
    result = prompt_text
    for key, value in inputs.items():
        result = result.replace(key, str(value))
    return result


def check_sections(output: str, sections: list[str]) -> dict[str, bool]:
    """Check which expected section substrings appear in the output."""
    return {
        s: bool(re.search(re.escape(s), output, re.IGNORECASE)) for s in sections
    }


# ── LLM-as-judge ──────────────────────────────────────────────────────────────

JUDGE_DOMAIN: dict[str, str] = {
    "resume-signal-analysis": "a CANDIDATE'S RESUME",
    "behavioral-answer-diagnostic": "a CANDIDATE'S BEHAVIORAL INTERVIEW ANSWER",
    "skeptical-hiring-manager": "a CANDIDATE'S RESPONSES during a hiring manager screen",
}


def run_judge_pass(
    client: OpenAI,
    judge_model: str,
    prompt_id: str,
    output: str,
    eval_criteria: list[str],
    candidate_input: str = "",
) -> list[dict]:
    """Evaluate each evalCriteria item with a second Ollama call."""
    results = []
    domain = JUDGE_DOMAIN.get(prompt_id, "a CANDIDATE'S SUBMISSION")
    context_block = (
        f"What the candidate submitted:\n---\n{candidate_input[:2000]}\n---\n\n"
        if candidate_input
        else ""
    )

    for criterion in eval_criteria:
        prompt = (
            f"You are a balanced evaluator checking whether a DIAGNOSTIC AI RESPONSE "
            f"correctly analyzes {domain}.\n"
            "The criterion describes what the diagnostic AI should detect or flag "
            "about the CANDIDATE — not about itself.\n"
            "Score PASS if the criterion is meaningfully addressed, even if implicit. "
            "Score FAIL only if the criterion is clearly absent or directly contradicted.\n\n"
            f"{context_block}"
            f"Criterion: {criterion}\n\n"
            f"Diagnostic AI's full analysis:\n---\n{output}\n---\n\n"
            "Does the diagnostic AI's analysis meet the criterion? "
            "Reply with exactly PASS or FAIL followed by a colon and one sentence of reasoning.\n"
            "Format: PASS: [reason]  OR  FAIL: [reason]"
        )
        response = client.chat.completions.create(
            model=judge_model,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
        )
        text = (response.choices[0].message.content or "").strip()
        verdict = "PASS" if text.upper().startswith("PASS") else "FAIL"
        results.append({"criterion": criterion, "verdict": verdict, "detail": text})

    return results


# ── Core eval runner ───────────────────────────────────────────────────────────


def run_prompt_eval(
    client: OpenAI,
    model: str,
    judge_model: str,
    prompt_id: str,
    prompt_raw: str,
    fixture: dict,
    use_judge: bool,
) -> dict:
    """Run a single prompt + fixture evaluation and return a result dict."""
    prompt_text = extract_prompt_text(prompt_raw)
    filled = interpolate(prompt_text, fixture.get("inputs", {}))

    if "transcript" in fixture:
        filled += fixture["transcript"]
    else:
        appendix = ROLEPLAY_APPENDIX.get(prompt_id, "")
        if appendix:
            filled += appendix

    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": filled}],
        temperature=0.3,
    )
    output = response.choices[0].message.content or ""

    expected = EXPECTED_SECTIONS.get(prompt_id, [])
    section_check = check_sections(output, expected)

    result: dict = {
        "prompt_id": prompt_id,
        "scenario": fixture.get("scenario", "unknown"),
        "model": model,
        "timestamp": datetime.now().isoformat(),
        "output": output,
        "section_check": section_check,
        "sections_found": sum(section_check.values()),
        "sections_total": len(section_check),
    }

    if use_judge and fixture.get("evalCriteria"):
        raw_inputs = fixture.get("inputs", {})
        candidate_input = "\n".join(
            f"{k}: {json.dumps(v)[:300] if isinstance(v, (dict, list)) else str(v)[:300]}"
            for k, v in raw_inputs.items()
        )
        scores = run_judge_pass(
            client, judge_model, prompt_id, output, fixture["evalCriteria"], candidate_input
        )
        result["judge_scores"] = scores
        result["judge_passed"] = sum(1 for s in scores if s["verdict"] == "PASS")
        result["judge_total"] = len(scores)

    return result


# ── File discovery ─────────────────────────────────────────────────────────────


def find_pairs(prompt_filter: str | None = None) -> list[tuple[Path, Path]]:
    """Return (prompt_path, fixture_path) pairs for all prompts with fixtures."""
    pairs: list[tuple[Path, Path]] = []

    for prompt_path in sorted(PROMPTS_DIR.rglob("*.md")):
        if prompt_path.name == "README.md":
            continue
        prompt_id = prompt_path.stem
        if prompt_filter and prompt_id != prompt_filter:
            continue

        fixture_dir = FIXTURES_DIR / prompt_path.parent.name / prompt_id
        if not fixture_dir.exists():
            continue
        for fixture_path in sorted(fixture_dir.glob("*.json")):
            pairs.append((prompt_path, fixture_path))

    if prompt_filter and not pairs:
        console.print(f"[red]No fixtures found for: {prompt_filter}[/red]")
        console.print(
            f"[dim]Run: python eval/generate_fixtures.py --prompt {prompt_filter}[/dim]"
        )
        sys.exit(1)

    return pairs


# ── Entry point ────────────────────────────────────────────────────────────────


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Evaluate prompt quality via a local Ollama server"
    )
    parser.add_argument(
        "--prompt",
        help="Prompt ID to evaluate (e.g. resume-signal-analysis)",
    )
    parser.add_argument(
        "--judge",
        action="store_true",
        help="Run a second LLM pass scoring each fixture's evalCriteria",
    )
    parser.add_argument(
        "--judge-model",
        default=None,
        help="Ollama model for the judge pass (default: llama3.1:8b)",
    )
    args = parser.parse_args()

    model = os.environ.get("OLLAMA_MODEL", DEFAULT_MODEL)
    judge_model = args.judge_model or os.environ.get("OLLAMA_JUDGE_MODEL", "llama3.1:8b")
    base_url = os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434/v1")

    client = OpenAI(base_url=base_url, api_key="ollama")

    pairs = find_pairs(args.prompt)
    if not pairs:
        console.print(
            "[yellow]No prompt+fixture pairs found. "
            "Run generate_fixtures.py first.[/yellow]"
        )
        sys.exit(1)

    RESULTS_DIR.mkdir(parents=True, exist_ok=True)

    if args.judge and model == judge_model:
        console.print(
            "[yellow]Warning: using the same model for generation and judging. "
            "Self-judging produces unreliable scores — use --judge-model to set a different model.[/yellow]\n"
        )

    console.print(Rule("[bold]Invisible Signals™ — Prompt Evaluator[/bold]"))
    judge_label = judge_model if args.judge else "no"
    console.print(
        f"Model: [cyan]{model}[/cyan]  |  "
        f"Pairs: [cyan]{len(pairs)}[/cyan]  |  "
        f"Judge: [cyan]{judge_label}[/cyan]\n"
    )

    results: list[dict] = []

    for prompt_path, fixture_path in pairs:
        prompt_id = prompt_path.stem
        fixture = json.loads(fixture_path.read_text(encoding="utf-8"))
        scenario = fixture.get("scenario", fixture_path.stem)
        prompt_raw = prompt_path.read_text(encoding="utf-8")
        label = f"[bold]{prompt_id}[/bold] / {scenario}"

        with Progress(
            SpinnerColumn(),
            TextColumn(f"  {label}..."),
            console=console,
            transient=True,
        ) as progress:
            progress.add_task("", total=None)
            try:
                result = run_prompt_eval(
                    client, model, judge_model, prompt_id, prompt_raw, fixture, args.judge
                )
            except Exception as exc:
                console.print(f"  [red]✗ {prompt_id} / {scenario}: {exc}[/red]")
                continue

        results.append(result)

        # Save individual result file
        ts = datetime.now().strftime("%Y%m%d-%H%M%S")
        out_path = RESULTS_DIR / f"{ts}-{prompt_id}-{scenario}.json"
        out_path.write_text(
            json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8"
        )

        # Inline status line
        sf, st = result["sections_found"], result["sections_total"]
        sec_style = "green" if sf == st else ("yellow" if sf > st // 2 else "red")
        line = f"  {label}  sections: [{sec_style}]{sf}/{st}[/{sec_style}]"

        if args.judge and "judge_passed" in result:
            jp, jt = result["judge_passed"], result["judge_total"]
            j_style = "green" if jp == jt else ("yellow" if jp >= jt // 2 else "red")
            line += f"  judge: [{j_style}]{jp}/{jt}[/{j_style}]"

        console.print(line)

    if not results:
        console.print("[red]No results produced.[/red]")
        sys.exit(1)

    # ── Summary table ──────────────────────────────────────────────────────────
    console.print()
    console.print(Rule("Summary"))
    table = Table(show_header=True, header_style="bold")
    table.add_column("Prompt")
    table.add_column("Scenario")
    table.add_column("Sections", justify="center")
    if args.judge:
        table.add_column("Judge", justify="center")

    for r in results:
        sf, st = r["sections_found"], r["sections_total"]
        sec_style = "green" if sf == st else ("yellow" if sf > st // 2 else "red")
        row = [r["prompt_id"], r["scenario"], f"[{sec_style}]{sf}/{st}[/{sec_style}]"]

        if args.judge and "judge_passed" in r:
            jp, jt = r["judge_passed"], r["judge_total"]
            j_style = "green" if jp == jt else ("yellow" if jp >= jt // 2 else "red")
            row.append(f"[{j_style}]{jp}/{jt}[/{j_style}]")

        table.add_row(*row)

    console.print(table)
    console.print(Rule())
    console.print(
        f"Results saved to [dim]{RESULTS_DIR.relative_to(REPO_ROOT)}[/dim]"
    )


if __name__ == "__main__":
    main()
