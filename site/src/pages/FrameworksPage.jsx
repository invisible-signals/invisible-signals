import StatusPill from '../components/StatusPill.jsx'

const stages = [
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

export default function FrameworksPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="is-label">_01_FRAMEWORKS</span>
          <StatusPill color="blue">SIGNAL_ACTIVE</StatusPill>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          HIRING FUNNEL
        </h1>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          The hiring funnel is a sequence of increasingly selective conversations. Each stage filters for different signals. Candidates who understand what is actually being evaluated at each stage can communicate their value more clearly.
        </p>
      </div>

      {/* Stage overview table */}
      <div className="is-panel mb-12 overflow-hidden">
        <div className="border-b border-is-border px-5 py-3 bg-is-surface">
          <span className="is-label">STAGE_OVERVIEW // SIGNAL_MAP</span>
        </div>
        <table className="w-full text-sm">
          <thead className="border-b border-is-border">
            <tr>
              <th className="text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest">STAGE</th>
              <th className="text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest">PRIMARY_SIGNAL_QUESTION</th>
              <th className="text-left px-5 py-3 font-mono text-xs text-is-dim uppercase tracking-widest hidden md:table-cell">STATUS</th>
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
              <span className="font-mono text-xs text-is-dim flex-1">{s.question}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border">
              {/* What they're reading */}
              <div className="bg-is-bg px-6 py-5">
                <div className="is-label mb-4">SIGNAL_READS</div>
                <ul className="space-y-2">
                  {s.signals.map((sig) => (
                    <li key={sig} className="flex gap-3">
                      <span className="font-mono text-xs text-is-primary mt-0.5 shrink-0">→</span>
                      <span className="font-body text-sm text-is-dim leading-relaxed">{sig}</span>
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
                      <span className="font-body text-sm text-is-dim leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Source */}
      <div className="mt-10 pt-6 border-t border-is-border">
        <p className="font-mono text-xs text-is-dim">
          SOURCE: Derived from Annyce Davis, <em>Landing Your Next Gig in Tech</em> (2020) · SIGNAL_REF: HIRING_FUNNEL_FRAMEWORK
        </p>
      </div>
    </div>
  )
}
