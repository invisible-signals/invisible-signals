import StatusPill from '../components/StatusPill.jsx'

export default function AgentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="is-label">_03_AGENTS</span>
          <StatusPill color="gold">INITIALIZING</StatusPill>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          SIGNAL AGENTS
        </h1>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          Automated workflows that scan project history and generate high-fidelity impact reports. Agents are in active development.
        </p>
      </div>

      {/* Coming soon panel */}
      <div className="is-panel overflow-hidden">
        <div className="border-b border-is-border px-5 py-3 bg-is-surface flex items-center justify-between">
          <span className="is-label">MODULE_STATUS</span>
          <StatusPill color="gold">SIGNAL_PENDING</StatusPill>
        </div>
        <div className="px-8 py-20 flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 border border-is-border flex items-center justify-center">
            <span className="font-mono text-2xl text-is-dim">◈</span>
          </div>
          <div>
            <div className="font-mono text-xl font-semibold uppercase text-is-text mb-2">AGENTS_COMING_SOON</div>
            <p className="font-body text-sm text-is-dim leading-relaxed max-w-sm">
              Career signal agents are being developed. They will automate project history scanning, impact extraction, and high-fidelity report generation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'PROJECT_HISTORY_SCAN',
              'IMPACT_EXTRACTION',
              'SIGNAL_REPORT_GEN',
              'PROMO_PACKET_ASSEMBLY',
            ].map((tag) => (
              <span key={tag} className="border border-is-border px-3 py-1 font-mono text-xs text-is-dim">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/invisible-signals/invisible-signals"
            target="_blank"
            rel="noreferrer"
            className="is-btn-ghost mt-4"
          >
            FOLLOW_DEVELOPMENT →
          </a>
        </div>
      </div>
    </div>
  )
}
