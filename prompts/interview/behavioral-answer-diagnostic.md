---
title: Behavioral Answer Diagnostic
version: 1.0
status: draft
category: interview
tags:
  - interview
  - behavioral
  - star
  - signal-stack
  - ai-prompt
  - career-signal-intelligence
---

# Prompt: Behavioral Answer Diagnostic

## Purpose

Evaluate a behavioral answer before you give it in an interview. This prompt analyzes a STAR story for signal strength — not just whether the format is correct, but whether the answer communicates ownership, specificity, and the signal layers relevant to the role.

---

## How to use this prompt

Paste the prompt into an AI tool. Replace the bracketed placeholders with the interview question you are preparing for and your drafted answer.

---

## Prompt

```
I am preparing a behavioral answer for an interview. I want you to diagnose the signal quality of my answer — not just the structure, but what it actually communicates about my capabilities, judgment, and ownership.

Here is the question I was asked:

[PASTE BEHAVIORAL QUESTION]

Here is my current answer:

[PASTE YOUR ANSWER]

Here is the role I am interviewing for:

[PASTE ROLE TITLE AND KEY REQUIREMENTS OR JOB DESCRIPTION EXCERPT]

Please evaluate my answer on the following dimensions:

1. **STAR completeness** — Does the answer include a clear Situation, Task, Action, and Result? Flag any component that is missing, underspecified, or buried.

2. **Ownership clarity** — Count how many times I used first-person singular ("I did," "I decided," "I built") versus collective language ("we," "the team," "our"). If collective language dominates, flag specific sentences and suggest rewrites that accurately represent my individual contribution without misrepresenting the team context.

3. **Outcome quality** — Is the result specific and measurable? If I said something vague like "the project was successful" or "the team responded well," flag it and suggest how to make it concrete. If there is no quantified result, explain what kind of metric or evidence would strengthen it.

4. **Signal Stack mapping** — The Signal Stack has eight layers: Technical Capability, Execution Reliability, Ownership, Communication, Product and Business Judgment, Collaboration and Influence, Strategic Thinking, and Leadership Maturity. Which layers does this answer provide evidence for? Which layer is the question most likely designed to probe? Is my answer actually addressing that layer?

5. **Relevance to this role** — Given the role requirements I provided, does this answer address what the interviewer is likely trying to evaluate? Is this the right story for this question, or would a different story from my experience send a stronger signal?

6. **Red flags** — Flag any language that might unintentionally send a negative signal: blaming others, hedging on your own contribution, outcomes that reflect luck rather than skill, or scope that seems inconsistent with the level I am interviewing for.

7. **Rewrite recommendation** — Provide a rewritten version of the answer that preserves my actual experience but strengthens the ownership language, outcome specificity, and signal relevance. Do not fabricate details — only rework what I have already provided.

Be direct. I need signal-level feedback, not encouragement.
```

---

## Running multiple stories

If you are preparing several STAR stories for an onsite, run each one through this diagnostic. Then ask:

```
I have now shared [N] behavioral stories. Across all of them, what patterns do you see in my weaknesses? What signal layers am I consistently underrepresenting?
```

---

## What to do with the output

- Accept the rewrite as a starting point, not a final answer — make sure it still sounds like you
- Fix ownership language across all stories, not just the one you ran through this diagnostic
- Use the Signal Stack mapping to check that your story bank covers all the layers the role is likely to probe
- If a story is flagged as the wrong fit for the question, find a better story before the interview — do not try to force a weak fit

## Related frameworks

- [Onsite](../../frameworks/hiring-funnel/onsite.md)
- [Hiring Manager Screen](../../frameworks/hiring-funnel/hiring-manager-screen.md)
- [Signal Stack](../../docs/signal-stack.md)
