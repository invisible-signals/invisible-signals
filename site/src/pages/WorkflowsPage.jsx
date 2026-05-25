import StatusPill from '../components/StatusPill.jsx'

export default function WorkflowsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="is-label">_04_WORKFLOWS</span>
          <StatusPill color="dim">SIGNAL_PENDING</StatusPill>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          SIGNAL WORKFLOWS
        </h1>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          Repeatable pipelines for live interview calibration, performance cycles, and promotion runs. Workflows are in active design.
        </p>
      </div>

      {/* Coming soon panel */}
      <div className="is-panel overflow-hidden">
        <div className="border-b border-is-border px-5 py-3 bg-is-surface flex items-center justify-between">
          <span className="is-label">MODULE_STATUS</span>
          <StatusPill color="dim">NOT_YET_ACTIVE</StatusPill>
        </div>
        <div className="px-8 py-20 flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 border border-is-border flex items-center justify-center">
            <span className="font-mono text-2xl text-is-dim">↻</span>
          </div>
          <div>
            <div className="font-mono text-xl font-semibold uppercase text-is-text mb-2">WORKFLOWS_COMING_SOON</div>
            <p className="font-body text-sm text-is-dim leading-relaxed max-w-sm">
              Career signal workflows are in design. They will provide repeatable, end-to-end pipelines for interview calibration, performance cycles, and promotion packet assembly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'INTERVIEW_CALIBRATION',
              'PERFORMANCE_CYCLE',
              'PROMOTION_PIPELINE',
              'SIGNAL_REVIEW',
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
