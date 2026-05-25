import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import StatusPill from '../components/StatusPill.jsx'

const resumePrompt = `I am going to share my résumé and a job description. I want you to analyze the signals my résumé sends — both what is visible on the page and what can be inferred about my judgment, trajectory, and ownership.

Here is the job description:

[PASTE JOB DESCRIPTION]

Here is my résumé:

[PASTE RÉSUMÉ]

Please do the following:

1. **Trajectory read** — Based on my job titles, tenures, and progression, what story does the trajectory tell? Is scope and responsibility clearly growing? Are there gaps or reversals that need addressing?

2. **Ownership audit** — For each bullet point, classify it as one of: (a) activity-based — describes what I did, (b) outcome-based — describes the result, or (c) impact-based — describes the result and its business significance. Flag every activity-based bullet and suggest a rewrite using the X/Y/Z formula: accomplished [X] as measured by [Y] by doing [Z].

3. **Signal Stack coverage** — The Signal Stack has eight layers: Technical Capability, Execution Reliability, Ownership, Communication, Product and Business Judgment, Collaboration and Influence, Strategic Thinking, and Leadership Maturity. Which layers does my résumé provide evidence for? Which layers are absent or underrepresented given this role?

4. **Tailoring gap** — Which requirements from the job description are not reflected anywhere in my résumé? List them specifically.

5. **Invisible signal read** — What does my judgment about inclusion and omission suggest? What do I appear to value? What story am I telling about myself that I may not have intended?

6. **Summary** — Give me a ranked list of the three changes that would most improve the signal quality of this résumé for this role.

Be direct. Do not soften observations to be encouraging. I need an honest signal read, not validation.`

const behavioralPrompt = `I am going to share a behavioral interview answer I have prepared. I need you to diagnose the signal quality — not just whether it tells a good story, but whether it transmits the right evidence to a skeptical hiring manager.

Here is the question I was asked:

[PASTE INTERVIEW QUESTION]

Here is my answer:

[PASTE YOUR ANSWER]

Please analyze:

1. **Signal classification** — What layers of the Signal Stack does this answer provide evidence for? Which layers are absent that a strong answer for this question should include?

2. **Ownership signal** — Does the answer clearly distinguish what YOU did vs. what the team did? Are there specific decisions, calls, or judgments that are attributed to you personally?

3. **Business impact translation** — Does the answer land at business or organizational significance, or does it stop at technical completion?

4. **Specificity score** — Rate the answer on a scale of 1–5 for specificity. Generic, reusable answers score low. Answers with concrete numbers, names, stakes, and decisions score high.

5. **Skeptic read** — What would a skeptical hiring manager infer about you from this answer? What might they probe on?

6. **Rewrite** — Provide a tightened version of this answer that scores higher on ownership, impact translation, and specificity without fabricating any claims.

Be direct. Flag weak signals clearly.`

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-dim hover:border-is-primary hover:text-is-primary transition-all"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'COPIED' : 'COPY_PROMPT'}
    </button>
  )
}

const prompts = [
  {
    id: 'RESUME_SIGNAL_ANALYSIS',
    label: '01 // RÉSUMÉ SIGNAL ANALYSIS',
    purpose: 'Identify what signals your résumé is sending — visible and invisible — before a recruiter or hiring manager reads it. This is not a formatting review. It is a signal audit.',
    pill: 'SIGNAL_ACTIVE',
    pillColor: 'blue',
    text: resumePrompt,
    outputs: [
      'Trajectory read with gap analysis',
      'Bullet-by-bullet ownership audit with X/Y/Z rewrites',
      'Signal Stack coverage map for the target role',
      'Tailoring gap — missing JD requirements',
      'Invisible signal interpretation',
      'Ranked top-3 improvement actions',
    ],
    related: ['Résumé Review framework', 'Signal Stack'],
  },
  {
    id: 'BEHAVIORAL_ANSWER_DIAGNOSTIC',
    label: '02 // BEHAVIORAL ANSWER DIAGNOSTIC',
    purpose: 'Diagnose the signal quality of a behavioral answer — not just whether it tells a good story, but whether it transmits the right evidence to a skeptical hiring manager.',
    pill: 'SIGNAL_ACTIVE',
    pillColor: 'blue',
    text: behavioralPrompt,
    outputs: [
      'Signal Stack layer coverage for the answer',
      'Ownership vs. team attribution analysis',
      'Business impact translation score',
      'Specificity rating (1–5)',
      'Skeptic read — what a hiring manager infers',
      'Tightened rewrite with higher signal fidelity',
    ],
    related: ['Hiring Manager Screen framework', 'Onsite framework', 'Signal Stack'],
  },
]

export default function PromptsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="is-label">_02_PROMPTS</span>
          <StatusPill color="blue">SIGNAL_ACTIVE</StatusPill>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          SIGNAL PROMPTS
        </h1>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content.
        </p>
      </div>

      {/* Prompt cards */}
      <div className="space-y-px bg-is-border">
        {prompts.map(({ id, label, purpose, pill, pillColor, text, outputs, related }) => (
          <div key={id} className="bg-is-bg">
            {/* Header */}
            <div className="border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-semibold uppercase text-is-text">{label}</span>
                <StatusPill color={pillColor}>{pill}</StatusPill>
              </div>
              <CopyButton text={text} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border">
              {/* Prompt text */}
              <div className="lg:col-span-2 bg-is-bg p-6">
                <div className="is-label mb-4">PROMPT_BODY</div>
                <div className="is-panel p-4 font-mono text-xs text-is-dim leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto">
                  {text}
                </div>
              </div>

              {/* Metadata */}
              <div className="bg-is-bg p-6 flex flex-col gap-6">
                <div>
                  <div className="is-label mb-3">PURPOSE</div>
                  <p className="font-body text-sm text-is-dim leading-relaxed">{purpose}</p>
                </div>

                <div>
                  <div className="is-label mb-3">OUTPUT_SIGNALS</div>
                  <ul className="space-y-1.5">
                    {outputs.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="font-mono text-xs text-is-primary shrink-0 mt-0.5">→</span>
                        <span className="font-body text-xs text-is-dim leading-relaxed">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="is-label mb-3">RELATED_FRAMEWORKS</div>
                  <div className="flex flex-wrap gap-2">
                    {related.map((r) => (
                      <span key={r} className="border border-is-border px-2 py-0.5 font-mono text-xs text-is-dim">{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy note */}
      <div className="mt-10 pt-6 border-t border-is-border">
        <p className="font-body text-sm text-is-dim leading-relaxed max-w-2xl">
          <span className="font-mono text-is-primary">NOTE:</span> These prompts are not designed to help candidates game interviews. They are designed to help engineers and leaders communicate their actual value more clearly. AI should amplify clarity, not fabricate competence.
        </p>
      </div>
    </div>
  )
}
