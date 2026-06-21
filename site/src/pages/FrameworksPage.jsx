import { useState } from 'react'
import StatusPill from '../components/StatusPill.jsx'
import PageHeader from '../components/PageHeader.jsx'

export const stages = [
  {
    id: 'RESUME_REVIEW',
    label: '01 // RÉSUMÉ REVIEW',
    question: 'Does this candidate clear the bar on paper?',
    signals: [
      'Trajectory — is scope and responsibility clearly growing?',
      'Impact language — outcomes vs. activities vs. tasks',
      'Signal Stack coverage relative to the role requirements',
      'Tailoring gap — does the candidate match this specific role?',
    ],
    pitfalls: [
      'Activity-based bullets with no outcome or impact',
      'Generic résumés sent without tailoring',
      'Missing evidence for ownership or business judgment',
    ],
    examples: [
      {
        id: 'EX_01',
        label: '01 // ACTIVITY VS IMPACT',
        weak: 'Worked on Android app modernization using Kotlin.',
        strong: 'Migrated critical Android checkout flows from Java to Kotlin, reducing crash-related support tickets by 32% and improving release stability during peak retail periods.',
      },
      {
        id: 'EX_02',
        label: '02 // GENERIC LEADERSHIP',
        weak: 'Led cross-functional collaboration across teams.',
        strong: 'Coordinated API contract alignment between mobile, backend, and platform teams to unblock a multi-quarter authentication migration affecting 4 product surfaces.',
      },
      {
        id: 'EX_03',
        label: '03 // SENIOR-LEVEL SIGNAL',
        weak: 'Responsible for architecture decisions.',
        strong: 'Defined mobile caching strategy for high-traffic commerce APIs, reducing redundant network requests and improving app startup reliability under unstable network conditions.',
      },
      {
        id: 'EX_04',
        label: '04 // ENGINEERING LEADERSHIP',
        weak: 'Managed a team of engineers.',
        strong: 'Led a team of 8 engineers across mobile and platform initiatives, improving sprint predictability and reducing production escalation volume through tighter dependency planning and release coordination.',
      },
      {
        id: 'EX_05',
        label: '05 // AI-ASSISTED RISKS',
        weak: 'Visionary engineering leader driving innovative scalable solutions across cross-functional ecosystems.',
        strong: 'Standardized CI workflows across 12 repositories, reducing release inconsistencies and shortening onboarding time for new engineers.',
      },
    ],
  },
  {
    id: 'RECRUITER_SCREEN',
    label: '02 // RECRUITER SCREEN',
    question: 'Is this a plausible fit for the role and company?',
    signals: [
      'Compensation alignment and timeline',
      'Location / work-model fit',
      'Basic role comprehension — do they understand the scope?',
      'Genuine interest signal vs. spray-and-pray behavior',
    ],
    pitfalls: [
      'Discussing compensation before understanding the role',
      'Treating recruiters as gatekeepers rather than advocates',
      'Under-preparing on why this company specifically',
    ],
  },
  {
    id: 'HM_SCREEN',
    label: '03 // HIRING MANAGER SCREEN',
    question: "Is this someone I'd want on my team?",
    signals: [
      'Ownership — do they drive outcomes or wait for direction?',
      'Judgment — how they have navigated ambiguity and tradeoffs',
      'Communication — can they make complex work understandable?',
      'Collaboration signal — do they make systems around them better?',
    ],
    pitfalls: [
      "Describing what the team did, not what you specifically drove",
      'No concrete examples of business or product judgment',
      'Failing to ask high-signal questions about the role',
    ],
  },
  {
    id: 'TECHNICAL_SCREEN',
    label: '04 // TECHNICAL SCREEN',
    question: 'Can they do the technical work?',
    signals: [
      'Problem decomposition — how they break down complexity',
      'Trade-off reasoning — alternatives considered and why',
      'Communication during the problem, not just the solution',
      'System-level thinking beyond the immediate question',
    ],
    pitfalls: [
      'Silent coding — no narration of thought process',
      'Over-optimizing without articulating the trade-off',
      'Treating it as a quiz rather than a collaborative problem',
    ],
  },
  {
    id: 'ONSITE',
    label: '05 // ONSITE',
    question: 'Is this the right hire?',
    signals: [
      'Consistency across interviewers — same caliber across rounds',
      'Leadership maturity — how they make others better',
      'Strategic thinking — reasoning beyond the immediate task',
      'Cultural signal — how they operate, not just what they deliver',
    ],
    pitfalls: [
      'Energy drop after the technical round',
      'Treating behavioral rounds as less important than technical',
      'No prepared questions that signal strategic curiosity',
    ],
  },
]

const coachingLens = [
  { id: 'PROOF_OF_OWNERSHIP', label: 'PROOF OF OWNERSHIP', question: 'What are you truly driving end-to-end?' },
  { id: 'PROBLEM_SOLVING_DEPTH', label: 'PROBLEM-SOLVING DEPTH', question: 'Where did you personally reduce ambiguity or unblock something hard?' },
  { id: 'BOUNDARY_CLARITY', label: 'BOUNDARY CLARITY', question: 'What do you own — and what should you stop absorbing?' },
  { id: 'VISIBLE_SIGNAL', label: 'VISIBLE SIGNAL', question: 'What artifact or outcome shows your impact clearly and honestly?' },
]

const coachingPatterns = [
  {
    id: 'COORDINATION_VS_OWNERSHIP',
    label: '01 // COORDINATION vs OWNERSHIP',
    question: 'What work are you truly owning vs. just coordinating?',
    signals: [
      'Named scope with clear delivery accountability',
      'End-to-end ownership of an outcome — not just a task',
      'Proof-point project with measurable, attributable result',
      'Technical leadership visible beyond orchestration',
    ],
    pitfalls: [
      'All work described as "helping," "supporting," or "coordinating"',
      'No single outcome the person can fully claim',
      'Growth stalls because no delivery signal is accumulating',
    ],
    dropIn: [
      'What work are you truly owning end-to-end — not just coordinating?',
      'What proof-point project would make your impact obvious in 60–90 days?',
      'What outcome from the last quarter can you fully claim?',
    ],
  },
  {
    id: 'DIAGNOSE_NOT_MONITOR',
    label: '02 // DIAGNOSE, NOT MONITOR',
    question: 'Where are you reviewing progress instead of helping unblock it?',
    signals: [
      'Drills into blockers — does not just collect status',
      'Applies technical judgment to ambiguous situations',
      'Offers concrete paths forward, not just escalation pathways',
      'Problem-solving depth visible beyond stakeholder updates',
    ],
    pitfalls: [
      'Asking for status without understanding root causes',
      'Offering options instead of helping solve the problem',
      'Delegation without technical depth erodes leadership signal',
    ],
    dropIn: [
      'Where are you reviewing progress instead of helping unblock it?',
      'What issue this week required deeper technical judgment from you?',
      'Where did you go one level deeper than status last week?',
    ],
  },
  {
    id: 'DECISION_RIGHTS_CLARITY',
    label: '03 // DECISION RIGHTS CLARITY',
    question: 'What decision do you think you own that others may think they own too?',
    signals: [
      'Can name the DRI for every active cross-team decision',
      'Leaves every discussion with decision, owner, escalation path, and handoff stated',
      'Proactively surfaces ownership ambiguity before it becomes a blocker',
      'Clarity around approval boundaries reduces churn and wasted cycles',
    ],
    pitfalls: [
      'Ownership ambiguity costing time and eroding trust',
      'Cross-team decisions stalling without a named driver',
      'Confusing contribution with accountability',
    ],
    dropIn: [
      'What decision do you think you own that others may think they own too?',
      'Where is ambiguity costing you time or trust right now?',
      'After your last cross-team meeting, could you state the decision, the DRI, the escalation path, and the handoff boundary?',
    ],
  },
  {
    id: 'BOUNDARY_SETTING',
    label: '04 // BOUNDARY SETTING',
    question: 'What work are you carrying that should belong to someone else?',
    signals: [
      'Support is bounded and communicated proactively',
      'Responsibility transitions back to the right owner',
      'Contribution is real, visible, and sustainable',
      'Protects their own cycles and signal integrity',
    ],
    pitfalls: [
      "Support drifting into shaping other teams' artifacts",
      "Absorbing other teams' responsibilities without visibility",
      'Helpfulness that hides ownership problems',
    ],
    dropIn: [
      'What work are you carrying that should belong to someone else?',
      'Where are you being helpful in a way that hides an ownership problem?',
      'What support commitment do you need to define a boundary around?',
    ],
  },
  {
    id: 'BLOCKERS_TO_SIGNAL',
    label: '05 // BLOCKERS TO LEADERSHIP SIGNAL',
    question: 'What blocker did you convert into a concrete recommendation this week?',
    signals: [
      'Risk framing and proposed paths forward — not just problem reporting',
      'Dependency maps and decision framing created proactively for others',
      'Ambiguity reduced through artifacts, not just flagged in meetings',
      'Blockers converted into structured leadership communication',
    ],
    pitfalls: [
      'Reporting friction without proposing a path forward',
      'Blockers listed without ownership of resolution',
      'Ambiguity escalated without reducing it first',
    ],
    dropIn: [
      'What blocker did you convert into a concrete recommendation this week?',
      'What ambiguity did you reduce for others — not just surface?',
      'What artifact did you create that made the work easier to understand?',
    ],
  },
  {
    id: 'HONEST_VISIBILITY',
    label: '06 // HONEST VISIBILITY',
    question: 'What is the most credible evidence of your growth right now?',
    signals: [
      'Contribution translated into clear, honest signal',
      'Named ownership, measurable results, reduced risk',
      'Growth visible to someone who only has the last 60 days of evidence',
      'Impact communicated without relying on explanation or context',
    ],
    pitfalls: [
      'Visibility built on self-promotion rather than earned contribution',
      'Contributions that require extensive explanation to sound significant',
      'Growth narrative inflated beyond what evidence supports',
    ],
    dropIn: [
      'What is the most credible evidence of your growth right now?',
      'If someone senior looked only at your last 60 days, what signal would they see?',
      'What contribution have you made that improved clarity, speed, or quality for the team?',
    ],
  },
]

export default function FrameworksPage() {
  const [openExamples, setOpenExamples] = useState(null)
  const [openDropIn, setOpenDropIn] = useState(null)
  const [activeFramework, setActiveFramework] = useState('HIRING_FUNNEL')

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <PageHeader
        navLabel="_01_FRAMEWORKS"
        pillColor="blue"
        pillText="SIGNAL_ACTIVE"
        title={activeFramework === 'HIRING_FUNNEL' ? 'HIRING FUNNEL' : 'COACHING'}
        description={
          activeFramework === 'HIRING_FUNNEL'
            ? 'The hiring funnel is a sequence of increasingly selective conversations. Each stage filters for different signals. Candidates who understand what is actually being evaluated at each stage can communicate their value more clearly.'
            : 'Career coaching through signal clarity. Helping engineers and technical leaders own something real, solve something hard, clarify boundaries, and leave behind visible evidence of impact.'
        }
      >
        <div className="flex gap-1">
          {[
            { id: 'HIRING_FUNNEL', label: 'HIRING_FUNNEL' },
            { id: 'COACHING', label: 'COACHING' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFramework(f.id)}
              className={`font-mono text-xs px-3 py-1.5 border uppercase tracking-widest transition-all ${
                activeFramework === f.id
                  ? 'border-is-primary text-is-primary bg-is-primary/10'
                  : 'border-is-border text-is-secondary hover:border-is-primary/40 hover:text-is-text'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </PageHeader>

      {activeFramework === 'HIRING_FUNNEL' && (
        <>
          {/* Stage overview table */}
          <div className="is-panel mb-12 overflow-hidden">
            <div className="border-b border-is-border px-5 py-3 bg-is-surface">
              <span className="is-label">STAGE_OVERVIEW // SIGNAL_MAP</span>
            </div>
            <table className="w-full text-sm">
              <thead className="border-b border-is-border">
                <tr>
                  <th className="text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest">STAGE</th>
                  <th className="text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest">PRIMARY_SIGNAL_QUESTION</th>
                  <th className="text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest hidden md:table-cell">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-is-border">
                {stages.map((s) => (
                  <tr key={s.id} className="hover:bg-is-surface transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-is-primary">{s.label}</td>
                    <td className="px-5 py-3 font-body text-sm text-is-text">{s.question}</td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <StatusPill color="blue">ACTIVE</StatusPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stage detail panels */}
          <div className="space-y-px bg-is-border">
            {stages.map((s) => (
              <div key={s.id} className="bg-is-bg">
                {/* Stage header */}
                <div className="border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4">
                  <span className="font-mono text-sm font-semibold uppercase text-is-text">{s.label}</span>
                  <span className="font-mono text-xs text-is-secondary flex-1">{s.question}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border">
                  {/* What they're reading */}
                  <div className="bg-is-bg px-6 py-5">
                    <div className="is-label mb-4">SIGNAL_READS</div>
                    <ul className="space-y-2">
                      {s.signals.map((sig) => (
                        <li key={sig} className="flex gap-3">
                          <span className="font-mono text-xs text-is-primary mt-0.5 shrink-0">→</span>
                          <span className="font-body text-sm text-is-text leading-relaxed">{sig}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common failures */}
                  <div className="bg-is-bg px-6 py-5">
                    <div className="is-label text-is-alert mb-4">COMMON_SIGNAL_LOSS</div>
                    <ul className="space-y-2">
                      {s.pitfalls.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="font-mono text-xs text-is-alert mt-0.5 shrink-0">⚠</span>
                          <span className="font-body text-sm text-is-text leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Examples panel — only rendered for stages that have examples */}
                {s.examples && (
                  <div className="border-t border-is-border">
                    <button
                      onClick={() => setOpenExamples(openExamples === s.id ? null : s.id)}
                      className="w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left"
                    >
                      <span className="is-label">EXAMPLES // SIGNAL_CALIBRATION</span>
                      <span className="font-mono text-xs text-is-secondary">
                        {openExamples === s.id ? '[−]' : '[+]'}
                      </span>
                    </button>

                    {openExamples === s.id && (
                      <div className="px-6 py-5 space-y-6">
                        {s.examples.map((ex) => (
                          <div key={ex.id}>
                            <div className="is-label text-is-secondary mb-3">{ex.label}</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border">
                              <div className="bg-is-bg px-4 py-4">
                                <div className="font-mono text-xs text-is-alert mb-2 flex items-center gap-2">
                                  <span>⚠</span> WEAK
                                </div>
                                <p className="font-mono text-xs text-is-text leading-relaxed">{ex.weak}</p>
                              </div>
                              <div className="bg-is-bg px-4 py-4">
                                <div className="font-mono text-xs text-is-primary mb-2 flex items-center gap-2">
                                  <span>→</span> STRONG
                                </div>
                                <p className="font-mono text-xs text-is-text leading-relaxed">{ex.strong}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Source */}
          <div className="mt-10 pt-6 border-t border-is-border">
            <p className="font-mono text-xs text-is-secondary">
              SOURCE: Derived from Annyce Davis, <em>Landing Your Next Gig in Tech</em> (2020) · SIGNAL_REF: HIRING_FUNNEL_FRAMEWORK
            </p>
          </div>
        </>
      )}

      {activeFramework === 'COACHING' && (
        <>
          {/* 4-part lens table */}
          <div className="is-panel mb-12 overflow-hidden">
            <div className="border-b border-is-border px-5 py-3 bg-is-surface">
              <span className="is-label">COACHING_LENS // 4_PART_FRAMEWORK</span>
            </div>
            <table className="w-full text-sm">
              <thead className="border-b border-is-border">
                <tr>
                  <th className="text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest">LENS</th>
                  <th className="text-left px-5 py-3 font-mono text-xs text-is-secondary uppercase tracking-widest">CORE_QUESTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-is-border">
                {coachingLens.map((l) => (
                  <tr key={l.id} className="hover:bg-is-surface transition-colors">
                    <td className="px-5 py-3 font-mono text-xs text-is-primary whitespace-nowrap">{l.label}</td>
                    <td className="px-5 py-3 font-body text-sm text-is-text">{l.question}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Coaching pattern panels */}
          <div className="space-y-px bg-is-border">
            {coachingPatterns.map((p) => (
              <div key={p.id} className="bg-is-bg">
                <div className="border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center gap-4">
                  <span className="font-mono text-sm font-semibold uppercase text-is-text">{p.label}</span>
                  <span className="font-mono text-xs text-is-secondary flex-1">{p.question}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border">
                  <div className="bg-is-bg px-6 py-5">
                    <div className="is-label mb-4">SIGNAL_READS</div>
                    <ul className="space-y-2">
                      {p.signals.map((sig) => (
                        <li key={sig} className="flex gap-3">
                          <span className="font-mono text-xs text-is-primary mt-0.5 shrink-0">→</span>
                          <span className="font-body text-sm text-is-text leading-relaxed">{sig}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-is-bg px-6 py-5">
                    <div className="is-label text-is-alert mb-4">COMMON_SIGNAL_LOSS</div>
                    <ul className="space-y-2">
                      {p.pitfalls.map((pit) => (
                        <li key={pit} className="flex gap-3">
                          <span className="font-mono text-xs text-is-alert mt-0.5 shrink-0">⚠</span>
                          <span className="font-body text-sm text-is-text leading-relaxed">{pit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-is-border">
                  <button
                    onClick={() => setOpenDropIn(openDropIn === p.id ? null : p.id)}
                    className="w-full flex items-center justify-between px-6 py-3 bg-is-surface hover:bg-is-border transition-colors text-left"
                  >
                    <span className="is-label">DROP-IN_QUESTIONS // 1:1_USE</span>
                    <span className="font-mono text-xs text-is-secondary">
                      {openDropIn === p.id ? '[−]' : '[+]'}
                    </span>
                  </button>

                  {openDropIn === p.id && (
                    <div className="px-6 py-5">
                      <ul className="space-y-3">
                        {p.dropIn.map((q) => (
                          <li key={q} className="flex gap-3">
                            <span className="font-mono text-xs text-is-primary mt-0.5 shrink-0">?</span>
                            <span className="font-body text-sm text-is-text leading-relaxed">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Source */}
          <div className="mt-10 pt-6 border-t border-is-border">
            <p className="font-mono text-xs text-is-secondary">
              SOURCE: Annyce Davis · SIGNAL_REF: COACHING_FRAMEWORK
            </p>
          </div>
        </>
      )}
    </div>
  )
}
