import { Link, useOutletContext } from 'react-router-dom'
import {
  Cpu, GitCommit, UserCheck, MessageSquare,
  TrendingUp, Users, Compass, Award,
} from 'lucide-react'

const LAYER_ICONS = {
  1: Cpu,
  2: GitCommit,
  3: UserCheck,
  4: MessageSquare,
  5: TrendingUp,
  6: Users,
  7: Compass,
  8: Award,
}

const SCORE_COLORS = {
  0: 'text-is-dim',
  1: 'text-is-alert',
  2: 'text-is-warning',
  3: 'text-is-primary',
  4: 'text-is-telemetry',
}

const SCORE_STATUS = {
  0: 'MISSING',
  1: 'LOW',
  2: 'WARN',
  3: 'NOMINAL',
  4: 'OPTIMAL',
}

export default function SignalStackOverviewPage() {
  const { frontmatter, scoringRows, layers } = useOutletContext()
  const reversed = [...layers].reverse()

  return (
    <div className="p-8 md:p-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-is-primary">
            SYSTEM STATUS: OPERATIONAL
          </span>
        </div>
        <h1 className="font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text mb-4">
          Signal Stack Overview
        </h1>
        <p className="font-body text-base text-is-dim max-w-2xl leading-relaxed">
          A diagnostic framework for mapping evidence across eight critical layers of career signal
          intelligence. A weak layer does not disqualify — an invisible layer does.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Layer stack — L8 down to L1 */}
        <div className="xl:col-span-8 flex flex-col gap-2">
          {reversed.map(({ num, slug, name, tagline }) => {
            const Icon = LAYER_ICONS[num]
            return (
              <Link
                key={slug}
                to={`/signal-stack/${slug}`}
                className="group border border-is-border p-5 bg-is-surface flex items-center justify-between glow-border transition-all"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-is-dim w-6 shrink-0">L{num}</span>
                  <div>
                    <div className="font-mono text-sm font-medium uppercase tracking-wider text-is-text group-hover:text-is-primary transition-colors">
                      {name}
                    </div>
                    <div className="font-mono text-[10px] text-is-dim mt-0.5">{tagline}</div>
                  </div>
                </div>
                {Icon && (
                  <Icon
                    size={14}
                    className="text-is-dim group-hover:text-is-primary group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right column */}
        <div className="xl:col-span-4 space-y-6">
          {/* Scoring Scale — content from signal-stack.md */}
          <div className="border border-is-border">
            <div className="px-4 py-3 border-b border-is-border">
              <span className="is-label">SCORING_SCALE</span>
            </div>
            <div className="p-4">
              <table className="w-full font-mono text-xs">
                <thead>
                  <tr className="text-is-dim border-b border-is-border">
                    <th className="text-left py-2 font-normal">SCORE</th>
                    <th className="text-left py-2 font-normal">RATING</th>
                    <th className="text-right py-2 font-normal">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringRows.map(({ score, rating }) => (
                    <tr key={score} className="border-b border-is-border/40 last:border-0">
                      <td className="py-2.5 text-is-dim">{score}</td>
                      <td className={`py-2.5 ${SCORE_COLORS[score] ?? 'text-is-dim'}`}>{rating}</td>
                      <td className="py-2.5 text-right text-is-dim">
                        {SCORE_STATUS[score] ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Confidence Tier — decorative, from stitch design */}
          <div className="border border-is-border">
            <div className="px-4 py-3 border-b border-is-border">
              <span className="is-label">CONFIDENCE_TIER</span>
            </div>
            <div className="p-4 space-y-4">
              {[
                { label: 'HIGH', pct: 100, color: 'bg-is-telemetry', desc: 'Explicit · easy to validate' },
                { label: 'MEDIUM', pct: 65, color: 'bg-is-warning', desc: 'Present · needs clarification' },
                { label: 'LOW', pct: 30, color: 'bg-is-alert', desc: 'Depends on interpretation' },
              ].map(({ label, pct, color, desc }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-is-text">{label}</span>
                    <span className="font-mono text-[10px] text-is-dim">{desc}</span>
                  </div>
                  <div className="h-px w-full bg-is-border">
                    <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
