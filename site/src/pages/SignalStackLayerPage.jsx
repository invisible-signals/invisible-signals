import { useParams, useOutletContext, Link } from 'react-router-dom'
import {
  Cpu, GitCommit, UserCheck, MessageSquare,
  TrendingUp, Users, Compass, Award,
  Waves, Activity, ChevronLeft, ChevronRight,
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

export default function SignalStackLayerPage() {
  const { layer } = useParams()
  const { frontmatter, layers } = useOutletContext()

  const idx = layers.findIndex(l => l.slug === layer)
  const data = layers[idx]

  if (!data) {
    return (
      <div className="p-12 space-y-4">
        <div className="font-mono text-xs text-is-dim">LAYER_NOT_FOUND // {layer}</div>
        <Link
          to="/signal-stack"
          className="flex items-center gap-1 font-mono text-xs text-is-primary hover:text-is-primary/80 transition-colors uppercase tracking-wider"
        >
          <ChevronLeft size={12} />
          Back to overview
        </Link>
      </div>
    )
  }

  const {
    num, name, tagline, description,
    strongSignals, weakSignals,
    exampleWeak, exampleStrong, levels,
  } = data

  const Icon = LAYER_ICONS[num]
  const prevLayer = idx > 0 ? layers[idx - 1] : null
  const nextLayer = idx < layers.length - 1 ? layers[idx + 1] : null

  const categoryLabel = (frontmatter.category ?? 'docs').toUpperCase()
  const versionLabel = `SIGNAL_STACK · v${frontmatter.version ?? '1.0'} · STATUS: ${(frontmatter.status ?? 'draft').toUpperCase()}`
  const slugLabel = name.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '')

  return (
    <div className="relative">
      {/* Scan line overlay */}
      <div className="scanline" />

      <div className="p-8 md:p-12 max-w-5xl space-y-14 relative z-10">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="border-l-2 border-is-primary pl-8 space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-is-primary/10 text-is-primary border border-is-primary/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
              {categoryLabel}
            </span>
            <span className="font-mono text-[10px] text-is-dim tracking-widest uppercase">
              {versionLabel}
            </span>
          </div>
          <h1 className="font-mono text-3xl md:text-4xl font-semibold uppercase tracking-tight flex items-center gap-4">
            L{num} // {slugLabel}_
            {Icon && <Icon size={20} className="text-is-primary shrink-0" />}
          </h1>
          {(description || tagline) && (
            <p className="font-body text-base text-is-dim max-w-2xl leading-relaxed">
              {description || tagline}
            </p>
          )}
        </section>

        {/* ── Signals Grid ───────────────────────────────────── */}
        {(weakSignals.length > 0 || strongSignals.length > 0) && (
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-dim">
              SIGNAL_DIAGNOSTIC // WEAK_VS_STRONG
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-is-border border border-is-border">
              {/* Weak signals */}
              <div className="bg-is-bg p-7 space-y-5 relative group">
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-is-alert opacity-20 group-hover:opacity-80 transition-opacity" />
                <div className="flex items-center gap-3">
                  <Waves size={14} className="text-is-alert shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-is-alert">
                    WEAK_SIGNALS
                  </span>
                </div>
                <ul className="divide-y divide-is-border">
                  {weakSignals.map((s, i) => (
                    <li key={i} className="flex items-start gap-4 py-3 group/item">
                      <span className="font-mono text-[10px] text-is-dim mt-0.5 shrink-0 group-hover/item:text-is-alert transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-sm text-is-dim leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strong signals */}
              <div className="bg-is-bg p-7 space-y-5 relative group">
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-is-telemetry opacity-20 group-hover:opacity-80 transition-opacity" />
                <div className="flex items-center gap-3">
                  <Activity size={14} className="text-is-telemetry shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-is-telemetry">
                    STRONG_SIGNALS
                  </span>
                </div>
                <ul className="divide-y divide-is-border">
                  {strongSignals.map((s, i) => (
                    <li key={i} className="flex items-start gap-4 py-3 group/item">
                      <span className="font-mono text-[10px] text-is-dim mt-0.5 shrink-0 group-hover/item:text-is-telemetry transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-sm text-is-dim leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ── Evidence ───────────────────────────────────────── */}
        {(exampleWeak || exampleStrong) && (
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-dim">
              EVIDENCE_TAXONOMY // SEMANTIC_UPGRADING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exampleWeak && (
                <div className="border border-is-border border-l-2 border-l-is-alert p-6 bg-is-surface space-y-3">
                  <div className="font-mono text-[10px] text-is-dim uppercase tracking-widest">
                    PASSIVE_EXECUTION
                  </div>
                  <div className="font-mono text-[10px] text-is-alert uppercase tracking-wider">
                    LOW_RESOLUTION_SIGNAL
                  </div>
                  <blockquote className="font-body text-sm text-is-dim italic leading-relaxed border-t border-is-border pt-3">
                    &ldquo;{exampleWeak}&rdquo;
                  </blockquote>
                </div>
              )}
              {exampleStrong && (
                <div className="border border-is-primary/20 border-l-2 border-l-is-primary p-6 bg-is-primary/5 space-y-3">
                  <div className="font-mono text-[10px] text-is-dim uppercase tracking-widest">
                    ACTIVE_MASTERY
                  </div>
                  <div className="font-mono text-[10px] text-is-primary uppercase tracking-wider">
                    HIGH_FIDELITY_INTEL
                  </div>
                  <blockquote className="font-body text-sm text-is-dim italic leading-relaxed border-t border-is-primary/20 pt-3">
                    &ldquo;{exampleStrong}&rdquo;
                  </blockquote>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── Level Differentiation ──────────────────────────── */}
        {levels.length > 0 && (
          <section>
            <h2 className="font-mono text-[10px] uppercase tracking-widest border-l-2 border-is-primary pl-4 mb-6 text-is-dim">
              LEVEL_DIFFERENTIATION_MATRIX
            </h2>
            <div className="border border-is-border overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-is-surface border-b border-is-border">
                    <th className="px-6 py-4 text-left font-mono text-[10px] text-is-dim font-normal uppercase tracking-widest w-32">
                      LEVEL
                    </th>
                    <th className="px-6 py-4 text-left font-mono text-[10px] text-is-dim font-normal uppercase tracking-widest">
                      WHAT_STRONG_LOOKS_LIKE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-is-border">
                  {levels.map(({ level, description: desc }, i) => (
                    <tr key={i} className="hover:bg-is-surface-low transition-colors group">
                      <td className="px-6 py-4 font-mono text-xs text-is-dim group-hover:text-is-primary transition-colors font-medium whitespace-nowrap align-top">
                        {level}
                      </td>
                      <td className="px-6 py-4 font-body text-sm text-is-dim leading-relaxed">
                        {desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── Layer navigation ───────────────────────────────── */}
        <div className="flex items-center justify-between border-t border-is-border pt-8">
          {prevLayer ? (
            <Link
              to={`/signal-stack/${prevLayer.slug}`}
              className="flex items-center gap-2 font-mono text-[11px] text-is-dim hover:text-is-primary transition-colors uppercase tracking-wider"
            >
              <ChevronLeft size={12} />
              L{prevLayer.num} · {prevLayer.name}
            </Link>
          ) : (
            <Link
              to="/signal-stack"
              className="flex items-center gap-2 font-mono text-[11px] text-is-dim hover:text-is-primary transition-colors uppercase tracking-wider"
            >
              <ChevronLeft size={12} />
              Overview
            </Link>
          )}
          {nextLayer && (
            <Link
              to={`/signal-stack/${nextLayer.slug}`}
              className="flex items-center gap-2 font-mono text-[11px] text-is-dim hover:text-is-primary transition-colors uppercase tracking-wider"
            >
              L{nextLayer.num} · {nextLayer.name}
              <ChevronRight size={12} />
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}
