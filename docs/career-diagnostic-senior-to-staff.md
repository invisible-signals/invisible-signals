---
title: Senior → Staff Career Diagnostic
version: 1.0
status: approved
category: docs
tags:
  - career-diagnostic
  - signal-stack
  - senior-to-staff
  - career-growth
  - career-signal-intelligence
---

# Senior → Staff Career Diagnostic

## Purpose

This document defines the canonical v1 interpretation and recommendation logic for the paid Invisible Signals™ Career Diagnostic aimed at **Senior engineers growing toward Staff-level impact**.

The diagnostic uses the eight layers of the Signal Stack™ and the canonical 0–4 evidence-strength scale. It is intentionally more opinionated than the general-purpose Signal Scorecard: the goal is not merely to report weak signals, but to tell a Senior engineer which evidence is most important to strengthen next for Staff-level growth.

This is not a personality test.
This is not a confidence score.
This is not a generic readiness percentage.

It is a career signal diagnostic.

---

## Target Audience

Primary audience:

- Senior software engineers preparing for Staff-level scope or influence
- Senior engineers who are performing strongly but are unsure why their work is not translating into broader trust, visibility, or opportunity

The v1 interpretation logic is **not** optimized for Mid → Senior, Staff → Principal, or Engineering Manager career paths. Those may reuse the same Signal Stack™ assessment later with different interpretation profiles.

---

## Signal Stack™ Layers

The diagnostic scores these eight layers:

1. Technical Capability
2. Execution Reliability
3. Ownership
4. Communication
5. Product & Business Judgment
6. Collaboration & Influence
7. Strategic Thinking
8. Leadership Maturity

The assessment uses four evidence-oriented statements per layer, for a total of 32 statements.

---

## Scoring Scale

Use the canonical Invisible Signals™ evidence scale:

| Score | Rating | Meaning |
|---:|---|---|
| 0 | Missing | No visible evidence |
| 1 | Weak | Evidence exists but is vague, generic, buried, or low-confidence |
| 2 | Moderate | Evidence is present and mostly clear, but not yet compelling |
| 3 | Strong | Evidence is clear, specific, relevant, and defensible |
| 4 | Excellent | Evidence is role-aligned, differentiated, credible, and memorable |

For the paid diagnostic, each layer score is the average of its four assessment statements.

### Customer-facing diagnostic bands

| Average | Diagnostic |
|---:|---|
| 0.0–0.9 | SIGNAL MISSING |
| 1.0–1.9 | SIGNAL WEAK |
| 2.0–2.9 | SIGNAL EMERGING |
| 3.0–3.6 | SIGNAL STRONG |
| 3.7–4.0 | SIGNAL DISTINCTIVE |

`SIGNAL EMERGING` is used in the customer-facing experience instead of `Moderate` to communicate that real evidence exists but is not yet consistently legible or compelling.

---

# Senior → Staff Priority Model

The diagnostic does **not** recommend improvement areas by simply sorting the eight scores from lowest to highest.

Staff growth depends on both:

1. evidence strength, and
2. the importance of that signal for Senior → Staff differentiation.

The recommendation model therefore uses three categories:

- **Foundation Gap**
- **Growth Signal**
- **Leverage Signal**

---

## 1. Foundation Gap

Foundation signals:

- Technical Capability
- Execution Reliability

These answer the baseline Staff-readiness questions:

- Can this person do difficult technical work?
- Can people trust this person to deliver reliably?

### Rule

If either foundation layer scores below `2.0`, flag the lowest-scoring foundation layer as the **Foundation Gap**.

```text
IF Technical Capability < 2.0
OR Execution Reliability < 2.0

→ FOUNDATION GAP = lowest-scoring foundation layer
```

If both foundation layers score `>= 2.0`:

```text
FOUNDATION STATUS: STABLE
```

Foundation gaps take precedence over Staff-differentiator recommendations. The diagnostic should not prioritize strategic influence while baseline evidence of technical capability or execution remains weak.

---

## 2. Primary Growth Signal

Primary Staff differentiators:

- Collaboration & Influence
- Strategic Thinking

These represent the strongest shift from strong Senior execution toward Staff-level impact: influencing beyond immediate scope and shaping future direction.

### Rule

If one or both primary Staff differentiators score below `3.0`, select the lower-scoring layer as the **Primary Growth Signal**.

```text
Collaboration & Influence
Strategic Thinking
        ↓
lowest score < 3.0
        ↓
PRIMARY GROWTH SIGNAL
```

If both score `>= 3.0`, select the lowest-scoring layer below `3.0` from the secondary Staff-relevant set:

- Ownership
- Communication
- Product & Business Judgment
- Leadership Maturity

If all eight layers are already Strong or Distinctive, select the lowest Staff-relevant layer as the next refinement opportunity rather than labeling it a deficiency.

---

## 3. Secondary Growth Signal

After selecting the Primary Growth Signal, choose the next-highest-priority gap using the same ordering rules.

The purpose is to focus the user's development plan on no more than two active growth areas at a time.

Example:

```text
PRIMARY GROWTH
Strategic Thinking       1.8

SECONDARY GROWTH
Collaboration & Influence 2.3
```

---

## 4. Leverage Signal

The Leverage Signal is **not** the next weakest score.

It identifies an important Staff-oriented signal that is already emerging or strong and could become a differentiated part of the engineer's Staff narrative with focused evidence-building.

### Candidate range

Prefer Staff-relevant signals scoring approximately `2.5–3.6`.

### Selection principle

Ask:

> Where could a modest amount of deliberate evidence-building create disproportionately strong career signal?

Prefer signals that:

- already have credible evidence,
- are relevant to Staff-level scope,
- reinforce or complement the engineer's strongest capabilities, and
- could become part of a coherent Staff-level narrative.

Do not label the Leverage Signal as a weakness or remediation area.

---

# Priority Output

The diagnostic should present recommendations in this order:

```text
CAREER SIGNAL PRIORITIES
SENIOR → STAFF

FOUNDATION
✓ STABLE

PRIMARY GROWTH SIGNAL
STRATEGIC THINKING
1.8 / 4.0  SIGNAL WEAK

SECONDARY GROWTH SIGNAL
COLLABORATION & INFLUENCE
2.3 / 4.0  SIGNAL EMERGING

LEVERAGE SIGNAL
LEADERSHIP MATURITY
3.2 / 4.0  SIGNAL STRONG
```

The result should feel like a diagnosis, not a leaderboard of weaknesses.

---

# Important Design Decisions

## No single career score

The paid Career Diagnostic does **not** collapse the eight layers into a single total, percentage, or readiness score.

A single number hides the pattern that makes the diagnostic useful. A person can be highly credible technically while lacking visible evidence of strategic thinking or cross-team influence.

The profile is the result.

## Trust & Defensibility is a quality check, not a ninth career layer

The general Signal Scorecard includes Trust & Defensibility as a scored area. In this Career Diagnostic, it should instead operate as a quality check on the evidence supporting the eight Signal Stack™ layers.

The user should be prompted to ask:

- Can I defend this claim?
- Is my contribution clear?
- Is the evidence specific and credible?
- Would this remain true under detailed questioning?

Trust affects confidence in a signal; it does not become an additional career dimension.

## Two growth areas maximum

The diagnostic should produce at most:

- one Foundation Gap, when applicable,
- one Primary Growth Signal,
- one Secondary Growth Signal,
- one Leverage Signal.

The resulting 90-day plan should focus on the two growth signals rather than attempting to improve all eight layers simultaneously.

---

# Senior → Staff Interpretation Principle

The central transition is:

```text
SENIOR
│
├── Can do difficult work
├── Delivers reliably
├── Owns meaningful scope
│
▼
STAFF
│
├── Influences beyond immediate team
├── Shapes direction
├── Connects technical work to business outcomes
├── Creates leverage through others
└── Raises the quality of the surrounding system
```

The diagnostic should help the user identify where their **real capability exists but the Staff-level evidence is not yet strong, visible, or defensible**.

Strong career signals are not manufactured.
They are clarified, strengthened, and made observable.
