import { Link } from 'react-router-dom'
import StatusPill from '../components/StatusPill.jsx'

// Signal strength bars — CSS pulse animation, each bar at its own rhythm
function BarChart() {
  return (
    <div className="h-32 flex items-end gap-1 overflow-hidden opacity-40">
      <div className="flex-1 bg-is-primary/20 animate-[pulse_2s_infinite]"   style={{ height: '20%' }} />
      <div className="flex-1 bg-is-primary/30 animate-[pulse_2.2s_infinite]" style={{ height: '45%' }} />
      <div className="flex-1 bg-is-primary/20 animate-[pulse_1.8s_infinite]" style={{ height: '70%' }} />
      <div className="flex-1 bg-is-primary/25 animate-[pulse_2.5s_infinite]" style={{ height: '30%' }} />
      <div className="flex-1 bg-is-primary/40 animate-[pulse_1.5s_infinite]" style={{ height: '90%' }} />
      <div className="flex-1 bg-is-primary/20 animate-[pulse_2.1s_infinite]" style={{ height: '50%' }} />
      <div className="flex-1 bg-is-primary/35 animate-[pulse_2.4s_infinite]" style={{ height: '65%' }} />
      <div className="flex-1 bg-is-primary/20 animate-[pulse_1.9s_infinite]" style={{ height: '25%' }} />
      <div className="flex-1 bg-is-primary/50 animate-[pulse_1.2s_infinite]" style={{ height: '100%' }} />
      <div className="flex-1 bg-is-primary/20 animate-[pulse_2.3s_infinite]" style={{ height: '40%' }} />
      <div className="flex-1 bg-is-primary/30 animate-[pulse_1.7s_infinite]" style={{ height: '80%' }} />
    </div>
  )
}

// Radar ring decorative element
function RadarRing() {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <div className="absolute inset-0 border border-is-primary/20 rounded-full" />
      <div className="absolute inset-4 border border-is-primary/30 rounded-full" />
      <div className="absolute inset-8 border border-is-primary/50 rounded-full" />
      <div className="absolute inset-12 border border-is-primary/70 rounded-full" />
      <div className="w-3 h-3 bg-is-primary rounded-full" />
      <div className="absolute top-4 right-8" style={{ animation: 'orbit-cw 7s linear infinite', transformOrigin: '-42px 64px' }}>
        <div className="w-1.5 h-1.5 bg-is-alert" style={{ animation: 'orbit-ccw 7s linear infinite' }} />
      </div>
      <div className="absolute bottom-6 left-6" style={{ animation: 'orbit-cw 5.5s linear infinite', transformOrigin: '56px -50px' }}>
        <div className="w-1.5 h-1.5 bg-is-warning" style={{ animation: 'orbit-ccw 5.5s linear infinite' }} />
      </div>
    </div>
  )
}

const signalLayers = [
  { id: '01_LAYER', name: 'TECHNICAL BASE',  tier: 'FREE +AE', desc: 'Demonstrate and articulate your system-level skills and complexity with transparency.' },
  { id: '02_LAYER', name: 'OWNERSHIP',        tier: 'FREE +AE', desc: 'Source and accountability for project-critical decisions and outcomes.' },
  { id: '03_LAYER', name: 'TRANSLATION',      tier: 'FREE +JRE', desc: 'Distilling technical complexity into business-centric language that lands with stakeholders.', accent: true },
]

const modules = [
  {
    to: '/frameworks',
    tag: 'FRAMEWORKS',
    icon: '⬡',
    title: 'Frameworks',
    desc: 'No-code meta models for evaluating architectural judgment beyond the job log.',
    pill: 'SIGNAL_LOOP',
    pillColor: 'blue',
  },
  {
    to: '/prompts',
    tag: 'PROMPTS',
    icon: '···',
    title: 'Prompts',
    desc: 'System-level instructions to analyze career metadata and generate telemetry goals.',
    pill: 'SIGNAL_MAP',
    pillColor: 'blue',
  },
  {
    to: '/agents',
    tag: 'AGENTS',
    icon: '◈',
    title: 'Agents',
    desc: 'Automated workflows that scan project history and generate high-fidelity impact reports.',
    pill: 'V0.4 / PUBLIC',
    pillColor: 'gold',
  },
  {
    to: '/workflows',
    tag: 'WORKFLOWS',
    icon: '↻',
    title: 'Workflows',
    desc: 'Repeatable pipelines for live interview calibration, performance cycles, and promotion runs.',
    pill: 'V0.3 MAT',
    pillColor: 'dim',
  },
]

const principles = [
  {
    num: '01',
    title: 'VALUE MODULATION',
    body: 'Stop describing tasks; start describing outcomes. High-value work is invisible until translated in the language of organizational growth.',
  },
  {
    num: '02',
    title: 'ALGORITHMIC SHARPNESS',
    body: 'Use AI to retrieve value from your narrative. Intelligence tools should work for you; they should diagnose your architectural logic.',
  },
  {
    num: '03',
    title: 'SIGNAL INTERPRETATION',
    body: 'Hiring systems are human and machine signal processors. Your objective is to raise the signal-to-noise ratio in every transmission.',
  },
  {
    num: '04',
    title: 'REPEATABLE TELEMETRY',
    body: 'Career growth is a series of repeatable processes for surfacing and presenting progress. Lucky signals are not engineered; signals are permanent.',
  },
]

export default function HomePage() {
  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="border-b border-is-border bg-is-bg px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Status row */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <StatusPill color="blue">● SYSTEM STATUS: ONLINE // ESTABLISHED</StatusPill>
            <span className="font-mono text-xs text-is-dim tracking-widest hidden sm:block">
              SIGNAL_DISPATCH · ER_MH · PROCESS: INPUT_TRANSMISSION · V1.0
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-is-text uppercase mb-6">
                CAREER SIGNAL<br />
                <em className="not-italic text-is-primary">INTELLIGENCE.</em>
              </h1>
              <p className="font-body text-base text-is-dim leading-relaxed max-w-xl mb-10">
                Open-source telemetry for engineers and leaders. Detect, refine, and transmit professional impact in the age of algorithmic hiring.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/invisible-signals/invisible-signals" target="_blank" rel="noreferrer" className="is-btn-primary">
                  INITIALIZE SIGNAL
                </a>
                <Link to="/frameworks" className="is-btn-ghost">DOCUMENTATION</Link>
              </div>
            </div>

            {/* Bar chart visualization */}
            <div className="is-panel p-4 relative">
              <div className="absolute -top-3 -left-1 px-2 bg-is-bg-deep font-mono text-[10px] text-is-primary">SIG_TRACE_01</div>
              <div className="is-label mb-3">SIGNAL_STRENGTH_READOUT</div>
              <BarChart />
              <div className="grid grid-cols-3 gap-px mt-1 border-t border-is-border pt-3">
                {['TECHNICAL', 'OWNERSHIP', 'TRANSLATION'].map((l) => (
                  <div key={l} className="font-mono text-xs text-is-dim">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SKILL IS NOT THE ISSUE ─────────────── */}
      <section className="border-b border-is-border px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="is-label mb-6">DIAGNOSTIC: CLARITY_GAP</div>
            <h2 className="font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text mb-8">
              TECHNICAL SKILL<br />IS NOT THE{' '}
              <em className="not-italic text-is-alert">ISSUE.</em>
            </h2>
            <p className="font-body text-base text-is-dim leading-relaxed mb-8 max-w-lg">
              In a market saturated with technical noise, your ability to "translate" until transmitted. The clarity of your signal determines your career trajectory.
            </p>

            {/* Alert callout */}
            <div className="is-panel border-l-2 border-l-is-alert p-4">
              <div className="font-mono text-xs text-is-alert uppercase tracking-widest mb-2">
                ⚠ CRITICAL_FAILURE_RETURN
              </div>
              <p className="font-body text-sm text-is-dim leading-relaxed">
                Most engineers fail to communicate ownership, organizational judgment, and business impact to humans and in hires.
              </p>
            </div>
          </div>

          {/* Radar + signal bars */}
          <div className="flex flex-col items-center gap-8">
            <div className="is-panel p-6 w-full flex flex-col items-center">
              <div className="is-label mb-4">SEARCHING_FOR_SIGNAL...</div>
              <RadarRing />
            </div>
            <div className="is-panel p-4 w-full">
              <div className="is-label mb-3">SIGNAL_ANALYSIS</div>
              <div className="space-y-2">
                {[
                  { label: 'TECHNICAL NOISE', pct: 88, color: 'bg-is-dim' },
                  { label: 'OWNERSHIP SIGNAL', pct: 34, color: 'bg-is-primary' },
                  { label: 'IMPACT CLARITY', pct: 21, color: 'bg-is-alert' },
                ].map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-xs text-is-dim">{label}</span>
                      <span className="font-mono text-xs text-is-dim">{pct}%</span>
                    </div>
                    <div className="h-1 bg-is-surface-high w-full">
                      <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNAL STACK ──────────────────────────────────── */}
      <section className="border-b border-is-border bg-is-bg px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div className="is-label mb-2">BUILT_ON</div>
              <h2 className="font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text">
                SIGNAL_STACK
              </h2>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs text-is-dim">PROGRESS_REFERENCE: CODE: 1</div>
              <div className="font-mono text-xs text-is-dim">LATEST_EFFECTIVE: 17 / 22</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-is-border">
            {signalLayers.map(({ id, name, tier, desc, accent }) => (
              <div key={id} className="bg-is-bg p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-is-dim">{id}</span>
                  <StatusPill color={accent ? 'coral' : 'blue'}>{tier}</StatusPill>
                </div>
                <div className="font-mono text-sm font-semibold text-is-text uppercase tracking-wide">{name}</div>
                <p className="font-body text-xs text-is-dim leading-relaxed flex-1">{desc}</p>
                <div className="h-px bg-is-border" />
                <div className="font-mono text-xs text-is-dim">LAYER_DETAIL →</div>
              </div>
            ))}

            {/* More layers indicator */}
            <div className="bg-is-bg p-5 flex flex-col items-center justify-center gap-3 border border-is-border">
              <div className="w-8 h-8 border border-is-border flex items-center justify-center">
                <span className="font-mono text-lg text-is-dim">+</span>
              </div>
              <div className="font-mono text-xs text-is-dim text-center">5 MORE LAYERS</div>
              <Link to="/frameworks" className="font-mono text-xs text-is-primary hover:underline">VIEW_ALL →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODULES ───────────────────────────────── */}
      <section className="border-b border-is-border px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-is-border">
            {modules.map(({ to, tag, icon, title, desc, pill, pillColor }) => (
              <Link
                key={to}
                to={to}
                className="group bg-is-bg p-6 flex flex-col gap-4 hover:bg-is-surface transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xl text-is-dim">{icon}</div>
                  <StatusPill color={pillColor}>{pill}</StatusPill>
                </div>
                <div>
                  <div className="is-label mb-1">{tag}</div>
                  <div className="font-mono text-base font-semibold uppercase text-is-text group-hover:text-is-primary transition-colors">{title}</div>
                </div>
                <p className="font-body text-xs text-is-dim leading-relaxed flex-1">{desc}</p>
                <div className="font-mono text-xs text-is-primary opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNAL CALIBRATION ────────────────────────────── */}
      <section className="border-b border-is-border bg-is-bg px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="is-label mb-3">SIGNAL_SIGNAL_SPECTRUM</div>
            <h2 className="font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text">
              SIGNAL CALIBRATION
            </h2>
          </div>

          <div className="is-panel p-0 overflow-hidden">
            {/* Panel header */}
            <div className="border-b border-is-border px-5 py-3 flex items-center justify-between bg-is-surface">
              <div className="flex items-center gap-4">
                <span className="is-label">PROCESS_ID: SIGNAL_PARALLAX</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-is-dim">STEP: 1 / 3</span>
                <StatusPill color="gold">CALIBRATING</StatusPill>
                <StatusPill color="blue">SIGNAL_BLANKET</StatusPill>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-is-border">
              {/* Raw input */}
              <div className="bg-is-bg p-6">
                <div className="is-label mb-4">RAW_INPUT_SIGNAL</div>
                <div className="is-panel p-4 font-mono text-xs text-is-dim leading-relaxed italic">
                  "I helped build a signup feature for a new user flow. It was a difficult project but we finished it on time."
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { label: 'ENGINEER_CONFIDENCE', val: '0.13 (CRITICAL_LOW)', color: 'text-is-alert' },
                    { label: 'INPUT_RESOLUTION', val: 'NULL_DETECTED', color: 'text-is-alert' },
                    { label: 'COMPLEXITY_INDEX', val: 'GHOST_RUN', color: 'text-is-warning' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="border border-is-border p-2">
                      <div className="font-mono text-xs text-is-dim mb-1">{label}</div>
                      <div className={`font-mono text-xs font-semibold ${color}`}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processed signal */}
              <div className="bg-is-bg p-6">
                <div className="is-label mb-4">PROCESSED_SIGNAL_CLARITY</div>
                <div className="is-panel border-is-primary/30 p-4 font-mono text-xs text-is-text leading-relaxed">
                  "Led the end-to-end migration of the critical 'Core-Billing' service to AWS, eliminating $482k in maintenance debt and achieving 99.99% availability."
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[
                    { label: 'ENGINEER_CONFIDENCE', val: '0.94 CONFIRMED', color: 'text-is-primary' },
                    { label: 'INPUT_RESOLUTION', val: 'QUANTIFIED', color: 'text-is-primary' },
                    { label: 'COMPLEXITY_INDEX', val: 'HYPERLINK_HIGH', color: 'text-is-primary' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="border border-is-border p-2">
                      <div className="font-mono text-xs text-is-dim mb-1">{label}</div>
                      <div className={`font-mono text-xs font-semibold ${color}`}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────── */}
      <section className="border-b border-is-border px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <div className="is-label">BUILT_ON // CODE_PRINCIPLES</div>
              <div className="is-label">BUILT_BY: ANNYCE_DAVIS</div>
            </div>
            <h2 className="font-mono text-4xl md:text-5xl font-semibold leading-tight uppercase text-is-text">
              NOT HACKING.<br />
              <em className="not-italic text-is-alert">RESOLUTION.</em>
            </h2>
            <p className="font-body text-base text-is-dim leading-relaxed mt-6 max-w-2xl">
              The underlying philosophy of signal intelligence is that technical work is inherently ideas unless it is invisible until translated for the observer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-is-border">
            {principles.map(({ num, title, body }) => (
              <div key={num} className="bg-is-bg p-8">
                <div className="font-mono text-xs text-is-primary mb-4">{num}</div>
                <div className="font-mono text-sm font-semibold uppercase text-is-text mb-3 tracking-wide">{title}</div>
                <p className="font-body text-sm text-is-dim leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 py-32 bg-is-bg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-px bg-is-primary" />
          </div>
          <h2 className="font-mono text-4xl md:text-6xl font-semibold uppercase leading-none text-is-text mb-4">
            INITIALIZE<br />
            <em className="not-italic text-is-primary">YOUR SIGNAL.</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/invisible-signals/invisible-signals"
              target="_blank"
              rel="noreferrer"
              className="is-btn-primary"
            >
              ↗ SIGNAL REPOSITORY
            </a>
            <span className="font-mono text-xs text-is-dim">FRAMEWORK: V0.1</span>
          </div>
        </div>
      </section>
    </div>
  )
}
