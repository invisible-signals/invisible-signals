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

Diagnose the signal quality of a behavioral interview answer.

This prompt evaluates not only whether the answer follows a structure like STAR, but what it communicates about capability, judgment, ownership, communication, and role-level readiness.

The goal is to identify whether the answer is the right story, whether it addresses the interviewer’s likely intent, and whether it provides enough evidence to be credible under follow-up.

This is not answer polishing. It is signal testing.

---

## Best used with

This prompt works best when you provide:

- The behavioral question
- Your current answer
- The role you are interviewing for
- Your current level
- Your target level
- The role type
- Optional job description excerpt or key requirements
- Optional career context, such as layoff, promotion target, career transition, industry pivot, IC-to-manager transition, manager-to-IC transition, or return from career break

---

## How to use this prompt

Paste the setup prompt into an AI tool. Replace the bracketed placeholders with your actual content.

Use it on one behavioral answer at a time.

After revising multiple stories, use the **Cross-Story Pattern Mode** prompt at the bottom to identify patterns across your full interview story portfolio.

---

## Prompt

```text
I am preparing a behavioral answer for an interview.

I want you to diagnose the signal quality of my answer — not just whether it follows STAR, but what it actually communicates about my capabilities, judgment, ownership, communication, and role fit.

This is not answer polishing. It is signal testing.

Use a direct but constructive tone. Be honest, specific, and actionable. Do not flatter me, but do not be harsh for effect.

Do not invent details, metrics, decisions, responsibilities, conflict, scope, business outcomes, customer impact, technical depth, team size, or leadership authority.

If evidence is missing, identify the gap and ask targeted questions to uncover truthful evidence.

## Context

Behavioral question:
[PASTE BEHAVIORAL QUESTION]

Current answer:
[PASTE YOUR ANSWER]

Current level/title:
[PASTE CURRENT LEVEL / TITLE]

Target level/title:
[PASTE TARGET LEVEL / TITLE]

Role type:
[senior IC / staff IC / principal IC / engineering manager / director+ / mobile engineer / platform engineer / data engineer / career changer / returning-to-work candidate / other]

Role / job description excerpt:
[PASTE ROLE TITLE, KEY REQUIREMENTS, OR JOB DESCRIPTION EXCERPT]

Relevant career context:
[OPTIONAL CONTEXT — layoff, promotion target, career transition, industry pivot, IC-to-manager transition, manager-to-IC transition, return from career break, etc.]

## Calibration Rules

Calibrate the review based on:

- the behavioral question
- current level
- target level
- role type
- role requirements
- career context, if provided

Do not evaluate every candidate against the same standard.

For example:

- For senior IC roles, look for ownership, execution reliability, technical judgment, and independent delivery.
- For staff/principal IC roles, look for influence, ambiguity navigation, architecture or systems thinking, tradeoffs, and cross-team impact.
- For engineering manager roles, look for people leadership, coaching, prioritization, delivery systems, stakeholder management, and team outcomes.
- For director+ roles, look for portfolio judgment, operating cadence, org-level outcomes, executive communication, business alignment, and talent-system thinking.
- For career changers or returning-to-work candidates, look for transferability, learning velocity, self-awareness, and credible readiness.

When making observations, separate:

- Evidence — what is directly present in the answer
- Inference — what an interviewer may reasonably assume
- Confidence — high, medium, or low

Do not present inference as fact.

For each issue, classify severity:

- High — likely to reduce confidence for this role or level
- Medium — weakens the answer but may be fixable with better evidence or structure
- Low — clarity, phrasing, or polish issue

## Signal Stack

Evaluate the answer using the Signal Stack when relevant:

1. Technical Capability
2. Execution Reliability
3. Ownership
4. Communication
5. Product and Business Judgment
6. Collaboration and Influence
7. Strategic Thinking
8. Leadership Maturity

## Return the analysis in this structure

### 1. Question Intent Detection

Identify what the interviewer is likely trying to assess with this behavioral question.

Classify the question as primarily probing one or more of:

- ownership
- conflict
- failure / learning
- ambiguity
- leadership
- stakeholder management
- technical judgment
- prioritization
- communication
- execution under pressure
- collaboration and influence
- product or business judgment

Then explain whether the answer actually addresses that intent.

### 2. Story Fit

Classify whether this is the right story for the question:

- Strong fit — directly answers the likely intent
- Partial fit — usable, but missing important signal
- Weak fit — structurally okay, but the story does not strongly support the question
- Poor fit — does not answer the question being asked

If the story is a weak or poor fit, explain what kind of story would send a stronger signal.

### 3. STAR Completeness

Evaluate whether the answer includes:

- Situation
- Task
- Action
- Result

Flag any component that is missing, underspecified, overexplained, or buried.

Also identify whether the answer needs a brief reflection or lesson learned, especially for questions about failure, conflict, ambiguity, or growth.

### 4. Ownership Clarity

Evaluate whether the answer makes the candidate’s individual contribution clear.

Look for:

- overuse of “we,” “the team,” or passive phrasing
- unclear decision ownership
- vague contribution language
- hidden dependency on others
- inflated ownership claims
- missing explanation of what the candidate personally did

Count or estimate the balance between first-person singular language and collective language.

If collective language dominates, flag the sentences and suggest how to clarify individual contribution without misrepresenting the team context.

### 5. Outcome Quality

Evaluate whether the result is specific, measurable, or observable.

Flag vague outcomes such as:

- “the project was successful”
- “the team responded well”
- “stakeholders were happy”
- “we improved the process”
- “it went well”
- “we delivered value”

If there is no quantified result, identify what type of evidence would strengthen the answer, such as:

- metric change
- before/after comparison
- adoption
- reduced risk
- faster delivery
- improved reliability
- better customer experience
- stakeholder decision
- team behavior change
- operational improvement

Do not invent the result.

### 6. Signal Stack Mapping

Identify which Signal Stack layers the answer provides evidence for.

For each relevant layer, include:

- visible evidence
- likely inference
- confidence
- strength of signal
- what would make the signal stronger

Also identify which Signal Stack layer the question was most likely designed to probe, and whether the answer actually supports that layer.

### 7. Role and Level Relevance

Evaluate whether the answer fits the role requirements and target level.

Call out if the answer:

- sounds underleveled for the target role
- over-indexes on task execution
- lacks decision-making evidence
- lacks strategic or business context
- lacks people, influence, or stakeholder complexity
- uses an example with too little scope
- is too abstract and lacks grounded detail
- proves a strength that is not central to this role

Explain whether this answer should be strengthened, reframed, or replaced.

### 8. Risk Signals

Flag any language or content that may unintentionally send a negative signal, including:

- blaming others
- hedging on personal contribution
- excessive defensiveness
- outcomes that sound like luck instead of skill
- lack of accountability
- weak conflict handling
- shallow reflection
- inflated scope
- unsupported seniority claims
- unclear role in the outcome
- examples inconsistent with the target level

For each risk, include:

- severity
- evidence
- likely inference
- confidence
- recommended fix

### 9. Claim Defensibility

Identify claims in the answer that may be hard to defend under follow-up questioning.

For each claim, include:

- the claim
- why it may be vulnerable
- what evidence would make it stronger
- a likely follow-up question an interviewer may ask

Pay special attention to claims involving:

- leadership
- ownership
- conflict resolution
- strategy
- influence
- technical judgment
- measurable impact
- decision-making authority

### 10. Rewrite Guidance

Do not automatically produce a full polished answer.

First provide a stronger answer outline using STAR or CAR:

- Situation / Context
- Task / Challenge
- Action
- Result
- Reflection / Learning, if relevant

Only provide a full rewritten answer if the original answer contains enough evidence to do so truthfully.

If evidence is missing, provide:

- improved outline
- missing evidence
- targeted questions the candidate should answer before rewriting

Do not invent facts.

### 11. Top 3 Improvements

Give the three highest-impact improvements to strengthen this answer.

For each, include:

- why it matters
- what signal it improves
- what to change
- whether the story should be revised or replaced
```

---

## Cross-Story Pattern Mode

Use this after you have run several behavioral answers through the diagnostic.

```text
I have now shared [N] behavioral stories.

Analyze patterns across them as a behavioral interview story portfolio.

Identify:

- repeated weak Signal Stack layers
- overused examples
- missing conflict, failure, ambiguity, or leadership stories
- too much “we” language across answers
- lack of measurable or observable outcomes
- stories that all prove the same strength but leave other signals uncovered
- target-level gaps
- stories that are too tactical for the role level
- stories that are too abstract and lack grounded detail

Then recommend:

1. Which stories to keep
2. Which stories to revise
3. Which stories to replace
4. What additional story types I should prepare
5. The top three patterns I should fix before the interview loop
```

---

## What to do with the output

- Fix the story intent before polishing the wording.
- Strengthen ownership language without erasing team context.
- Add measurable or observable outcomes where truthful evidence exists.
- Replace stories that are structurally fine but weak for the question.
- Prepare follow-up answers for any claim that may be challenged.
- Run multiple stories through the diagnostic before an onsite.

## Responsible AI note

Use this prompt to communicate real experience more clearly.

Do not use it to invent stories, fabricate ownership, exaggerate impact, claim false leadership scope, or rehearse misleading answers.

If the diagnostic exposes a weak claim, recover truthful evidence or reframe the story honestly.

## Related frameworks

- [Onsite](../../frameworks/hiring-funnel/onsite.md)
- [Hiring Manager Screen](../../frameworks/hiring-funnel/hiring-manager-screen.md)
- [Signal Stack](../../docs/signal-stack.md)
- [Responsible AI Use](../../docs/responsible-ai-use.md)
