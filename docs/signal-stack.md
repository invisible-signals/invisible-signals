---
title: The Signal Stack™
version: 1.0
status: draft
category: docs
tags:
  - signal-stack
  - hiring
  - evaluation
  - career-signal-intelligence
---

# The Signal Stack™

The Signal Stack™ describes the layers of evidence hiring teams, managers, and peers use to evaluate technical talent.

The eight layers are independent dimensions, not a progression. Strong candidates show evidence across multiple layers simultaneously. A weak layer does not disqualify — but an invisible layer often does. Evaluators infer from what they can see. If evidence is missing, they fill the gap with assumptions, and assumptions skew negative.

For guidance on how to use AI tools to surface and strengthen your signals without fabricating experience, see [responsible-ai-use.md](responsible-ai-use.md).

---

## Scoring Scale

Use this scale when assessing signal strength in any layer. This is the canonical reference for all scoring in this toolkit.

| Score | Rating | Meaning |
|---:|---|---|
| 0 | Missing | No visible evidence |
| 1 | Weak | Evidence exists but is vague, generic, buried, or low-confidence |
| 2 | Moderate | Evidence is present and mostly clear, but not yet compelling |
| 3 | Strong | Evidence is clear, specific, relevant, and defensible |
| 4 | Excellent | Evidence is role-aligned, differentiated, credible, and memorable |

For each score, also assign a **confidence tier**:

| Confidence | Meaning |
|---|---|
| High | Evidence is explicit and easy to validate |
| Medium | Evidence is present but needs clarification |
| Low | Evidence depends heavily on assumption or interpretation |

---

## Layer 1 — Technical Capability

**Can you do the work?**

Technical capability is the baseline signal. It is the most legible layer to hiring teams and the most commonly over-represented on résumés. Strong evidence goes beyond listing tools or technologies — it shows applied judgment in choosing, implementing, and debugging systems under real constraints.

**Strong signals**

- Specific problem solved with specific technology
- Tradeoffs considered and stated
- Quantified performance, scale, or outcome
- Evidence of debugging, recovery, or handling edge cases
- Decision rationale, not just output

**Weak signals**

- Technology lists without context
- "Worked on" or "helped with" language
- Vague contributions to large systems with no individual ownership visible
- No indication of scale, complexity, or constraint

**Example evidence**

> Weak: "Used Kotlin to rewrite the Android app."
>
> Strong: "Migrated a 40K-line Android codebase from Java to Kotlin in three phases, reducing crash rate by 22% and improving build time by 35% through incremental module conversion."

See [`examples/resumes/weak-vs-strong-bullets.md`](../examples/resumes/weak-vs-strong-bullets.md) for detailed before/after patterns.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Solves well-scoped problems with the right tools |
| Senior | Navigates ambiguity, selects appropriate approaches, explains tradeoffs |
| Staff | Shapes technical direction across teams or domains |
| EM | Evaluates technical output of others accurately; does not need to do the work but must assess it |

---

## Layer 2 — Execution Reliability

**Can people trust you to follow through?**

Execution reliability is less visible on a résumé than technical capability but is often the deciding signal for senior and staff roles. Strong evidence shows a pattern of follow-through under pressure — not just a list of projects that shipped.

**Strong signals**

- Projects completed despite obstacles, with specifics about what the obstacles were
- Examples of unblocking yourself or others without escalating
- Consistent delivery across multiple examples
- Evidence of scope management, deadline recovery, or risk flagging

**Weak signals**

- Every project succeeded with no friction mentioned
- Passive delivery language ("was part of", "contributed to")
- Long tenure with no clear shipped outcomes
- Projects described as handed off before completion

**Example evidence**

> Weak: "Delivered features across the Android team."
>
> Strong: "Led delivery of the offline sync feature across a six-week timeline after a late design change; coordinated with platform and QA to restructure scope without missing the release window."

See [`frameworks/hiring-funnel/onsite.md`](../frameworks/hiring-funnel/onsite.md) for how this layer appears in structured panel interviews.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Delivers assigned work reliably and flags blockers early |
| Senior | Manages own scope, surfaces risk, adjusts without waiting for direction |
| Staff | Ensures delivery across multiple workstreams or teams |
| EM | Creates conditions for team delivery; accountable for outcomes, not effort |

---

## Layer 3 — Ownership

**Do you drive outcomes or wait for direction?**

Ownership is the single most mis-communicated signal in behavioral interviews. It shows up in language ("I decided" vs. "we tried"), in the scope of actions taken, and in whether problems were solved or escalated. Evaluators listen for who the actor was in every story.

**Strong signals**

- First-person decision language with specific choices named
- Evidence of acting without being asked
- End-to-end problem solving — identified it, drove it, closed it
- Willingness to state what they would do differently in retrospect

**Weak signals**

- Consistent "we" language with no individual contribution visible
- Outcomes described with no actor ("the feature shipped", "the issue was resolved")
- Problems handed off rather than resolved
- Credit distributed across the team with no personal stake evident

**Example evidence**

> Weak: "We improved the CI pipeline performance."
>
> Strong: "I identified a 14-minute average build time as the main barrier to deploy frequency. I profiled the pipeline, proposed a caching strategy, got buy-in from the platform team, and implemented it — bringing build time down to 4 minutes."

See [`prompts/interview/skeptical-hiring-manager.md`](../prompts/interview/skeptical-hiring-manager.md) for a roleplay prompt that pressure-tests ownership language in behavioral answers.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Owns their own tasks; pulls in help proactively |
| Senior | Owns a feature or component end-to-end including upstream and downstream impact |
| Staff | Owns a technical problem at the org level; drives resolution across team boundaries |
| EM | Owns team health and output, not just individual deliverables |

---

## Layer 4 — Communication

**Can you make complex work understandable?**

Communication is evaluated as an engineering skill, not a soft skill. Hiring teams watch whether you can explain technical work to non-technical audiences, give status updates that surface the right information, write clearly, and adjust your register to your audience.

**Strong signals**

- Clear, structured answers in interviews without prompting
- Examples of docs, RFCs, or briefs that drove alignment
- Ability to explain technical decisions in business terms
- Communication that adapts to engineer vs. PM vs. executive audience

**Weak signals**

- Long, unstructured answers that bury the point
- No examples of written communication
- Inability to explain technical choices without jargon when talking to a non-technical audience
- Communication described as something others handled ("the PM managed the stakeholder updates")

**Example evidence**

> Weak: "I documented the migration."
>
> Strong: "I wrote a two-page migration brief for the Android team that reduced integration questions by 80% in the first sprint — the PM used it directly in the launch readiness review."

See [`examples/interviews/star-answer-diagnostic.md`](../examples/interviews/star-answer-diagnostic.md) for how communication quality is scored in behavioral answer evaluation.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Communicates clearly within the team |
| Senior | Drives cross-team alignment through written and verbal communication |
| Staff | Shapes how complex technical topics are understood across the org |
| EM | Sets communication norms for the team; translates between engineering and leadership |

---

## Layer 5 — Product and Business Judgment

**Do you understand why the work matters?**

Product and business judgment shows whether you connect your work to outcomes the business cares about — not just whether you implemented it correctly. This layer is lightly evaluated at mid-level and becomes central at senior and above.

**Strong signals**

- References to user impact, revenue, retention, cost, or reliability
- Evidence of contributing to product decisions or roadmap conversations
- Ability to explain why a technical choice was the right one for the business moment
- Examples of scope reduction or reprioritization that served a larger goal

**Weak signals**

- All answers framed in pure technical terms
- No mention of user outcomes or business context
- Product decisions attributed entirely to others
- Inability to explain why a project mattered beyond its implementation

**Example evidence**

> Weak: "Implemented push notifications."
>
> Strong: "Push notifications had been deprioritized for two cycles. I ran a small experiment, tied the engagement lift to our D7 retention metric, and presented the case to product — it moved into the next sprint and became a top-5 retention driver."

See [`prompts/resume/resume-signal-analysis.md`](../prompts/resume/resume-signal-analysis.md) for how this layer is evaluated in résumé signal audits.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Understands how their work maps to user outcomes |
| Senior | Contributes to prioritization conversations with data and user context |
| Staff | Helps engineering and product align on what to build and why |
| EM | Accountable for team output in terms of business outcomes, not engineering effort |

---

## Layer 6 — Collaboration and Influence

**Can you move work through people and systems?**

Collaboration and influence distinguishes candidates who multiply team output from those who only deliver individually. At senior and above, unilateral execution is not enough — the question is whether you can get the right outcomes through people and systems you do not control.

**Strong signals**

- Examples of cross-functional coordination with a specific outcome
- Evidence of technical persuasion — changing a decision with data or reasoning
- Examples of unblocking others or accelerating teammates
- Participation in design reviews, RFCs, or architectural decisions
- Informal mentorship or onboarding that measurably changed someone

**Weak signals**

- All examples are solo or single-team
- No evidence of navigating disagreement or resistance
- Influence described abstractly ("I was a team player", "I collaborated closely")
- No examples of others whose work improved through a direct interaction

**Example evidence**

> Weak: "Mentored junior engineers on the team."
>
> Strong: "Paired with two junior engineers weekly during the authentication migration — both shipped independently by the end of the quarter. One has since taken on tech lead responsibilities for a new module."

See [`frameworks/hiring-funnel/hiring-manager-screen.md`](../frameworks/hiring-funnel/hiring-manager-screen.md) for how collaboration signals are assessed in hiring manager conversations.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Collaborates reliably within the team |
| Senior | Coordinates across teams; influences technical decisions outside their immediate scope |
| Staff | Shapes technical culture and direction through influence without authority |
| EM | Builds psychological safety, removes blockers, creates conditions for the team to collaborate |

---

## Layer 7 — Strategic Thinking

**Can you reason beyond the immediate task?**

Strategic thinking shows whether you anticipate downstream effects, identify second-order risks, and frame current work in the context of longer-term technical and organizational goals. It is lightly evaluated at mid-level but is a primary differentiator at staff and above.

**Strong signals**

- Examples of anticipating a problem before it occurred
- Architectural decisions made with future constraints in mind
- Ability to describe how a current technical choice connects to a 12–24 month horizon
- Examples of influencing the roadmap or reducing future rework

**Weak signals**

- All answers are reactive — responding to problems after they emerged
- No future-looking reasoning in any story
- Technical decisions described only in terms of immediate implementation
- Scope confined to the current sprint or quarter in every example

**Example evidence**

> Weak: "Refactored the auth module when it became unmaintainable."
>
> Strong: "Before the platform migration, I mapped the authentication module's dependency graph and flagged three integration points that would break at scale. We refactored proactively — avoiding an estimated six weeks of emergency rework eighteen months later."

See [`frameworks/hiring-funnel/onsite.md`](../frameworks/hiring-funnel/onsite.md) for how this layer is probed in panel and system design interviews.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Considers how their decisions affect teammates downstream |
| Senior | Anticipates technical debt; builds with future extension in mind |
| Staff | Shapes architectural strategy; helps the org avoid expensive pivots |
| EM | Aligns team investment with org-level goals and multi-quarter planning |

---

## Layer 8 — Leadership Maturity

**Do you make the people and system around you better?**

Leadership maturity is not about managing people — it applies to ICs at every level. It shows up in how you handle ambiguity, how you respond to failure, whether you give and receive feedback constructively, and whether you leave the codebase, the team culture, and the processes better than you found them.

**Strong signals**

- Feedback given constructively and received with openness
- Examples of navigating ambiguity without waiting for perfect information
- Post-mortems or retrospectives that resulted in a concrete change
- Process improvements that reduced friction for others
- Consistent behavior under pressure — same judgment in difficult moments as easy ones

**Weak signals**

- Only positive outcomes with no setbacks mentioned
- Ambiguity always resolved by others
- Feedback described as something received but never given
- Process improvements attributed entirely to management
- No evidence of growth from difficulty

**Example evidence**

> Weak: "I helped improve team processes."
>
> Strong: "After a two-week outage investigation, I ran a blameless postmortem with the team and identified three process gaps. I drafted follow-up proposals, got sign-off from engineering leadership, and we implemented all three within a quarter — similar incidents dropped by 70%."

See [`templates/signal-scorecard.md`](../templates/signal-scorecard.md) for how to self-assess this layer before a performance review or promotion conversation.

**Level differentiation**

| Level | What strong looks like |
|---|---|
| Mid-level | Acts on ambiguity without requiring complete information; gives and receives feedback constructively |
| Senior | Models engineering judgment; helps shape team norms through behavior |
| Staff | Raises the quality bar of technical decisions across the org |
| EM | Builds a team culture where others grow, ship, and develop resilience |
