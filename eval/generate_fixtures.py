#!/usr/bin/env python3
"""
Fixture Generator — Invisible Signals™

Generates realistic test fixture JSON files for prompt evaluation using
a local Ollama server (via the OpenAI SDK). Reads each prompt's calibration
rules to ground the generation so fixtures clearly demonstrate weak, strong,
or edge-case signal patterns.

Generated fixtures are saved to eval/fixtures/ and should be reviewed and
edited before committing.

Usage:
  python eval/generate_fixtures.py
  python eval/generate_fixtures.py --prompt resume-signal-analysis
  python eval/generate_fixtures.py --model mistral
  python eval/generate_fixtures.py --force   # overwrite existing fixtures
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI
from rich.console import Console
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.rule import Rule

load_dotenv(Path(__file__).parent / ".env")

REPO_ROOT = Path(__file__).parent.parent
PROMPTS_DIR = REPO_ROOT / "prompts"
FIXTURES_DIR = Path(__file__).parent / "fixtures"

console = Console()

DEFAULT_MODEL = "llama3"

# ── Per-prompt scenario definitions ───────────────────────────────────────────

SCENARIOS: dict[str, list[dict]] = {
    "resume-signal-analysis": [
        {
            "name": "weak-signal",
            "role": "Software Engineer II targeting Senior Software Engineer (backend)",
            "description": (
                "Mid-level backend engineer with activity-based bullets, no measurable "
                "outcomes, and minimal ownership language. Heavy task descriptions with "
                "no results."
            ),
        },
        {
            "name": "strong-signal",
            "role": "Senior Software Engineer targeting Staff Software Engineer (platform infrastructure)",
            "description": (
                "Senior IC with outcome-based bullets, measurable impact metrics, clear "
                "individual ownership, and cross-team influence. Well-calibrated for the "
                "target level."
            ),
        },
        {
            "name": "edge-case-career-changer",
            "role": "Product Manager transitioning to Software Engineer II",
            "description": (
                "Non-engineering background making an IC transition. Strong product and "
                "business judgment signals but no direct software engineering work "
                "experience on the résumé."
            ),
        },
    ],
    "behavioral-answer-diagnostic": [
        {
            "name": "weak-signal",
            "role": "Software Engineer II targeting Senior Software Engineer",
            "question": "Tell me about a time you led a complex technical project.",
            "description": (
                "Answer dominated by collective 'we' language, vague outcome, no "
                "reflection, no measurable result, and unclear individual contribution."
            ),
        },
        {
            "name": "strong-signal",
            "role": "Senior Software Engineer targeting Staff Software Engineer",
            "question": (
                "Tell me about a time you drove an ambiguous technical decision "
                "under uncertainty."
            ),
            "description": (
                "Clear individual ownership, specific metric outcome, explicit tradeoff "
                "reasoning, and brief reflection on what they would do differently."
            ),
        },
        {
            "name": "edge-case-failure-story",
            "role": "Software Engineer II targeting Senior Software Engineer (promotion candidate)",
            "question": "Tell me about a time you failed.",
            "description": (
                "Candidate minimizes the failure, deflects blame to circumstances or "
                "teammates, no clear lesson, and no stated behavior change afterward."
            ),
        },
    ],
    "skeptical-hiring-manager": [
        {
            "name": "weak-background",
            "role": "Software Engineer II targeting Senior Software Engineer (backend)",
            "description": (
                "Candidate with vague résumé claims, activity-based bullets, no concrete "
                "outcomes, and no specific examples ready to defend under scrutiny."
            ),
        },
        {
            "name": "strong-background",
            "role": "Senior Software Engineer targeting Staff Software Engineer (platform)",
            "description": (
                "Prepared candidate with concrete ownership stories, defensible claims, "
                "specific and measurable outcomes, and clear tradeoff reasoning."
            ),
        },
    ],
}


# ── Markdown extraction helpers ────────────────────────────────────────────────


def extract_section(raw: str, header: str) -> str:
    """Extract a named ## section from a markdown file."""
    pattern = rf"## {re.escape(header)}\s*\n([\s\S]*?)(?=\n## |\Z)"
    match = re.search(pattern, raw)
    return match.group(1).strip() if match else ""


def extract_prompt_text(raw: str) -> str:
    """Extract the fenced code block content from ## Prompt."""
    match = re.search(r"## Prompt\s+```(?:text)?\n([\s\S]*?)\n```", raw)
    return match.group(1).strip() if match else ""


def extract_placeholders(prompt_text: str) -> list[str]:
    """Extract unique [PLACEHOLDER] strings from a prompt code block."""
    raw_matches = re.findall(r"\[([^\]]+)\]", prompt_text)
    seen: set[str] = set()
    result: list[str] = []
    for m in raw_matches:
        # Skip single-letter format-template placeholders like [X], [Y], [Z]
        # which appear in output-format instructions, not as user inputs.
        if re.fullmatch(r"[A-Za-z]", m):
            continue
        key = f"[{m}]"
        if key not in seen:
            seen.add(key)
            result.append(key)
    return result


# ── JSON extraction ────────────────────────────────────────────────────────────


def extract_json(text: str) -> dict:
    """Extract and parse a JSON object from model output."""
    try:
        return json.loads(text.strip())
    except json.JSONDecodeError:
        pass

    match = re.search(r"```(?:json)?\s*(\{[\s\S]*?\})\s*```", text)
    if match:
        try:
            return json.loads(match.group(1))
        except json.JSONDecodeError:
            pass

    match = re.search(r"\{[\s\S]*\}", text)
    if match:
        try:
            return json.loads(match.group(0))
        except json.JSONDecodeError:
            pass

    raise ValueError(f"Could not parse JSON from model output:\n{text[:500]}")


# ── Fixture generation ─────────────────────────────────────────────────────────


def generate_fixture(
    client: OpenAI,
    model: str,
    prompt_id: str,
    prompt_raw: str,
    scenario: dict,
) -> dict:
    """Call Ollama to generate a single fixture JSON."""
    calibration = extract_section(prompt_raw, "Calibration Rules")
    prompt_text = extract_prompt_text(prompt_raw)
    placeholders = extract_placeholders(prompt_text)

    placeholder_list = "\n".join(f"  - {p}" for p in placeholders)
    scenario_label = scenario["name"].replace("-", " ")

    question_context = ""
    if "question" in scenario:
        question_context = f"\nBehavioral question being answered: {scenario['question']}"

    system_msg = (
        "You are generating test fixture data for evaluating a career intelligence prompt. "
        "Your output must be a single valid JSON object and nothing else. "
        "No markdown fences, no preamble, no explanation — just raw JSON."
    )

    user_msg = f"""Generate a realistic test fixture for the "{prompt_id}" prompt.

Scenario: {scenario["name"]}
Role context: {scenario["role"]}{question_context}
Description: {scenario["description"]}

## Calibration rules from the prompt
{calibration or "(not available)"}

## Input placeholders to fill
{placeholder_list}

## Instructions

Generate realistic, synthetic content for each placeholder above that clearly
demonstrates {scenario_label} signals as defined in the calibration rules.

Use fictional companies (e.g. Acme Corp, DataScale Inc, Meridian Health, Cloudpath).
Write like a real engineer: slightly rough, not polished marketing copy.
For résumé content, write full bullet points (not summaries of bullet points).
For answer content, write as the candidate would actually speak.

Return this exact JSON structure. Keys in "inputs" must be the exact placeholder
strings shown above, including the square brackets:

{{
  "scenario": "{scenario["name"]}",
  "description": "{scenario["description"]}",
  "inputs": {{
    "[PLACEHOLDER1]": "value",
    "[PLACEHOLDER2]": "value"
  }},
  "evalCriteria": [
    "Should recognize that ... [specific evidence from the submission]",
    "Should flag that the candidate lacks ... [specific signal]",
    "Should correctly identify ... as a strength given [specific evidence]",
    "Should identify that ... is absent or underdeveloped",
    "Should ask evidence recovery questions about ..."
  ]
}}

Include 4-6 evalCriteria items that are specific and testable for this scenario.

## Rules for writing evalCriteria

Criteria must have unambiguous polarity — make it clear whether the AI should
detect something as PRESENT or flag something as ABSENT/WEAK:

- For weak-signal or edge-case scenarios: test that the AI correctly identifies
  problems, gaps, or missing signals.
  Use: "Should flag that...", "Should detect the absence of...",
       "Should identify that the candidate lacks..."

- For strong-signal scenarios: test that the AI correctly recognizes strengths
  AND any legitimate gaps for the target level.
  Use: "Should recognize that...", "Should correctly identify X as a strength
       given [specific evidence in the submission]"

Criteria must reference specific content you generate — an exact metric, a
specific phrase, a claim, or a named pattern — not generic categories.

Do NOT prescribe exact rating words (avoid "Should rate X as Strong").
Instead ground ratings in evidence: "Should correctly identify X as a strength
given [specific evidence]".

A judge reading only the AI's output and the candidate's submission must be
able to determine PASS or FAIL without ambiguity."""

    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_msg},
            {"role": "user", "content": user_msg},
        ],
        temperature=0.7,
    )

    raw = response.choices[0].message.content or ""
    return extract_json(raw)


# ── File discovery ─────────────────────────────────────────────────────────────


def find_prompt_files(prompt_filter: str | None = None) -> list[Path]:
    """Find prompt .md files, optionally filtered by ID."""
    paths = [p for p in PROMPTS_DIR.rglob("*.md") if p.name != "README.md"]
    if prompt_filter:
        paths = [p for p in paths if p.stem == prompt_filter]
        if not paths:
            console.print(f"[red]Prompt not found: {prompt_filter}[/red]")
            sys.exit(1)
    return sorted(paths)


# ── Entry point ────────────────────────────────────────────────────────────────


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate eval fixtures using a local Ollama server"
    )
    parser.add_argument(
        "--prompt",
        help="Prompt ID to generate fixtures for (e.g. resume-signal-analysis)",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing fixture files",
    )
    args = parser.parse_args()

    model = os.environ.get("OLLAMA_MODEL", DEFAULT_MODEL)
    base_url = os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434/v1")

    client = OpenAI(base_url=base_url, api_key="ollama")

    prompt_files = find_prompt_files(args.prompt)

    console.print(Rule("[bold]Invisible Signals™ — Fixture Generator[/bold]"))
    console.print(
        f"Model: [cyan]{model}[/cyan]  |  "
        f"Prompts: [cyan]{len(prompt_files)}[/cyan]  |  "
        f"Force: [cyan]{'yes' if args.force else 'no'}[/cyan]\n"
    )

    total_generated = 0
    total_skipped = 0

    for prompt_path in prompt_files:
        prompt_id = prompt_path.stem
        scenarios = SCENARIOS.get(prompt_id, [])

        if not scenarios:
            console.print(
                f"[yellow]No scenarios defined for {prompt_id}, skipping.[/yellow]\n"
            )
            continue

        prompt_raw = prompt_path.read_text(encoding="utf-8")
        fixture_dir = FIXTURES_DIR / prompt_path.parent.name / prompt_id
        fixture_dir.mkdir(parents=True, exist_ok=True)

        console.print(f"[bold]{prompt_id}[/bold] — {len(scenarios)} scenario(s)")

        for scenario in scenarios:
            output_path = fixture_dir / f"{scenario['name']}.json"

            if output_path.exists() and not args.force:
                console.print(
                    f"  [dim]↳ {scenario['name']}.json exists — skipping "
                    f"(use --force to regenerate)[/dim]"
                )
                total_skipped += 1
                continue

            with Progress(
                SpinnerColumn(),
                TextColumn(f"  Generating [cyan]{scenario['name']}[/cyan]..."),
                console=console,
                transient=True,
            ) as progress:
                progress.add_task("", total=None)
                try:
                    fixture = generate_fixture(
                        client, model, prompt_id, prompt_raw, scenario
                    )
                except Exception as exc:
                    console.print(f"  [red]✗ {scenario['name']}: {exc}[/red]")
                    continue

            output_path.write_text(
                json.dumps(fixture, indent=2, ensure_ascii=False), encoding="utf-8"
            )
            rel = output_path.relative_to(REPO_ROOT)
            console.print(f"  [green]✓[/green] {scenario['name']}.json → {rel}")
            total_generated += 1

        console.print()

    console.print(Rule())
    console.print(
        f"Generated [bold green]{total_generated}[/bold green] fixture(s), "
        f"skipped [dim]{total_skipped}[/dim]."
    )
    if total_generated > 0:
        console.print(
            "[dim]Review generated fixtures for accuracy before committing.[/dim]"
        )


if __name__ == "__main__":
    main()
