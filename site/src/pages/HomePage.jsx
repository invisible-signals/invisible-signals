import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Linkedin, Github, MessageSquare, TrendingUp, Users } from 'lucide-react'
import StatusPill from '../components/StatusPill.jsx'
import CopyButton from '../components/CopyButton.jsx'
import { parseSignalStack } from '../lib/parseSignalStack.js'
import { parsePromptFile } from '../lib/parsePrompts.js'
import rawSignalStack from '../../../docs/signal-stack.md?raw'

const quickSignalModules = import.meta.glob('../../../prompts/quick-signal/*.md', { eager: true, query: '?raw', import: 'default' })

const QUICK_PROMPT_ORDER = ['resume-bullet-check', 'interview-answer-check']
const quickPrompts = Object.entries(quickSignalModules)
  .filter(([path]) => !path.endsWith('README.md'))
  .map(([path, raw]) => parsePromptFile(path, raw))
  .filter((p) => QUICK_PROMPT_ORDER.includes(p.id))
  .sort((a, b) => QUICK_PROMPT_ORDER.indexOf(a.id) - QUICK_PROMPT_ORDER.indexOf(b.id))

// Signal analysis panel — realistic diagnostic output
function SignalAnalysisPanel() {
  const signals = [
    { label: 'TECHNICAL_DEPTH', pct: 91, color: 'bg-is-secondary' },
    { label: 'OWNERSHIP',       pct: 78, color: 'bg-is-primary'   },
    { label: 'EXECUTION',       pct: 84, color: 'bg-is-warning'   },
    { label: 'BUSINESS_IMPACT', pct: 42, color: 'bg-is-alert'     },
    { label: 'LEADERSHIP',      pct: 61, color: 'bg-is-primary'   },
  ]
  return (
    <div className="space-y-3">
      {signals.map(({ label, pct, color }) => (
        <div key={label}>
          <div className="flex justify-between mb-1">
            <span className="font-mono text-xs text-is-text">{label}</span>
            <span className="font-mono text-xs text-is-text">{pct}%</span>
          </div>
          <div className="h-1 bg-is-surface-high w-full">
            <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-is-border">
        <div className="font-mono text-xs text-is-alert uppercase tracking-widest mb-1">▶ PRIMARY_SIGNAL_GAP</div>
        <p className="font-body text-xs text-is-text leading-relaxed">
          Business impact is implied but not explicitly stated.
        </p>
      </div>
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

const { layers: signalLayers } = parseSignalStack(rawSignalStack)

const LAYER_META = [
  { freq: '440Hz',  barColor: 'bg-is-secondary',  textColor: 'text-is-secondary',  freqClass: 'border-is-secondary/50 text-is-secondary',  pct: 100 },
  { freq: '880Hz',  barColor: 'bg-is-alert',       textColor: 'text-is-alert',       freqClass: 'border-is-alert/50 text-is-alert',           pct: 85  },
  { freq: '1.2GHz', barColor: 'bg-is-warning',     textColor: 'text-is-warning',     freqClass: 'border-is-warning/50 text-is-warning',       pct: 70  },
  { freq: '2.4GHz', barColor: 'bg-is-primary',     textColor: 'text-is-primary',     freqClass: 'border-is-primary/50 text-is-primary',       pct: 60  },
  { freq: '4.8GHz', barColor: 'bg-is-secondary',   textColor: 'text-is-secondary',   freqClass: 'border-is-secondary/50 text-is-secondary',   pct: 55  },
  { freq: '9.6GHz', barColor: 'bg-is-alert',       textColor: 'text-is-alert',       freqClass: 'border-is-alert/50 text-is-alert',           pct: 45  },
  { freq: '19GHz',  barColor: 'bg-is-warning',     textColor: 'text-is-warning',     freqClass: 'border-is-warning/50 text-is-warning',       pct: 40  },
  { freq: '38GHz',  barColor: 'bg-is-primary',     textColor: 'text-is-primary',     freqClass: 'border-is-primary/50 text-is-primary',       pct: 35  },
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
    to: '/analyzer',
    tag: 'ANALYZER',
    icon: '◈',
    title: 'Analyzer',
    desc: 'Paste resume bullets, interview answers, or LinkedIn summaries. Get an instant signal score and gap analysis — no external AI tool needed.',
    pill: 'SIGNAL_ACTIVE',
    pillColor: 'gold',
  },
  {
    to: '/prompts',
    tag: 'PROMPTS',
    icon: '···',
    title: 'Prompts',
    desc: 'System-level instructions to analyze career metadata and generate telemetry goals.',
    pill: 'SIGNAL_MAP',
    pillColor: 'coral',
  },
  {
    to: '/templates',
    tag: 'TEMPLATES',
    icon: '◻',
    title: 'Templates',
    desc: 'Structured markdown documents for auditing, scoring, and improving your career signals.',
    pill: 'SIGNAL_ACTIVE',
    pillColor: 'gold',
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

const ANALYZE_TARGETS = [
  { id: 'RESUME',     label: 'Resume',                  desc: 'Analyze ownership, impact, technical depth, and clarity.',       Icon: FileText,       to: '/analyzer?type=resume' },
  { id: 'LINKEDIN',   label: 'LinkedIn Profile',         desc: 'Surface the signals your headline and summary transmit.',         Icon: Linkedin,       to: '/analyzer?type=linkedin' },
  { id: 'GITHUB',     label: 'GitHub Profile',           desc: 'Evaluate technical depth and contribution patterns.',             Icon: Github,         to: '/analyzer?type=github' },
  { id: 'INTERVIEW',  label: 'Interview Answer',         desc: 'Detect ownership, specificity, and leadership signal.',           Icon: MessageSquare,  to: '/analyzer?type=interview' },
  { id: 'PROMOTION',  label: 'Promotion Packet',         desc: 'Identify gaps in scope, impact, and cross-functional influence.', Icon: TrendingUp,     to: null },
  { id: 'LEADERSHIP', label: 'Leadership Communication', desc: 'Assess clarity, strategic framing, and credibility signals.',     Icon: Users,          to: null },
]

export default function HomePage() {
  const [showAllLayers, setShowAllLayers] = useState(false)
  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="border-b border-is-border bg-is-bg px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Status row */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <StatusPill color="blue">● SYSTEM STATUS: ONLINE // ESTABLISHED</StatusPill>
            <span className="font-mono text-xs text-is-secondary tracking-widest hidden sm:block">
              SIGNAL_DISPATCH · ER_MH · PROCESS: INPUT_TRANSMISSION · V1.0
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-is-text uppercase mb-6">
                DETECT YOUR SIGNALS<br />
                <em className="not-italic text-is-alert">IN SECONDS.</em>
              </h1>
              <p className="font-body text-base text-is-text leading-relaxed max-w-xl mb-10">
                Analyze resumes, interview answers, GitHub profiles, and leadership communication.
                Surface the signals recruiters, hiring managers, and leadership teams actually see.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/analyzer" className="is-btn-primary">
                  ANALYZE_SIGNAL
                </Link>
                <Link to="/signal-stack" className="is-btn-ghost">
                  SIGNAL_STACK →
                </Link>
              </div>
            </div>

            {/* Signal analysis diagnostic */}
            <div className="is-panel p-4 relative">
              <div className="absolute -top-3 -left-1 px-2 bg-is-bg-deep font-mono text-[10px] text-is-primary">SIG_TRACE_01</div>
              <div className="is-label mb-3">SIGNAL_ANALYSIS</div>
              <SignalAnalysisPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT CAN YOU ANALYZE? ─────────────────────────── */}
      <section className="border-b border-is-border bg-is-bg-deep px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="is-label mb-2">ANALYZE_TARGETS</div>
            <h2 className="font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text">
              WHAT CAN YOU ANALYZE?
            </h2>
            <p className="font-body text-base text-is-text mt-3">
              Paste content. Detect signals. Improve clarity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-is-border">
            {ANALYZE_TARGETS.map(({ id, label, desc, Icon, to }) => {
              if (to) {
                return (
                  <Link key={id} to={to} className="bg-is-bg p-5 flex flex-col gap-2 hover:bg-is-surface transition-colors group">
                    <Icon size={20} className="text-is-primary mb-1" />
                    <div className="is-label">{id}</div>
                    <div className="font-mono text-sm font-semibold uppercase text-is-text">{label}</div>
                    <p className="font-body text-xs text-is-text leading-relaxed">{desc}</p>
                    <div className="font-mono text-[10px] text-is-primary opacity-0 group-hover:opacity-100 transition-opacity mt-auto">ANALYZE_NOW →</div>
                  </Link>
                )
              }
              return (
                <div key={id} className="bg-is-bg p-5 flex flex-col gap-2 opacity-60 cursor-default">
                  <Icon size={20} className="text-is-dim mb-1" />
                  <div className="is-label">{id}</div>
                  <div className="font-mono text-sm font-semibold uppercase text-is-text">{label}</div>
                  <p className="font-body text-xs text-is-text leading-relaxed">{desc}</p>
                  <div className="font-mono text-[10px] text-is-dim uppercase tracking-widest mt-auto">COMING_SOON</div>
                </div>
              )
            })}
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
              <div className="font-mono text-xs text-is-secondary mt-2">L1–L8 ANALYSIS FRAMEWORK</div>
            </div>
            <Link
              to="/signal-stack"
              className="font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors"
            >
              ENTER SIGNAL_STACK →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-is-border">
            {(showAllLayers ? signalLayers : signalLayers.slice(0, 3)).map(({ num, slug, name, tagline }, i) => {
              const meta = LAYER_META[i] ?? LAYER_META[0]
              return (
                <Link
                  key={slug}
                  to={`/signal-stack/${slug}`}
                  className="group bg-is-bg p-5 flex flex-col gap-3 hover:bg-is-surface transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs text-is-secondary">{String(num).padStart(2, '0')}_LAYER</span>
                    <span className={`font-mono text-xs px-1.5 py-0.5 border ${meta.freqClass} shrink-0`}>FREQ: {meta.freq}</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-is-text uppercase tracking-wide">{name}</div>
                  <p className="font-body text-xs text-is-text leading-relaxed flex-1">{tagline}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-0.5 bg-is-surface-high flex-1">
                      <div className={`h-full ${meta.barColor}`} style={{ width: `${meta.pct}%` }} />
                    </div>
                    <span className={`font-mono text-xs shrink-0 ${meta.textColor}`}>{meta.pct}%</span>
                  </div>
                </Link>
              )
            })}
            {!showAllLayers && (
              <button
                onClick={() => setShowAllLayers(true)}
                className="group bg-is-bg p-5 flex flex-col items-center justify-center gap-3 hover:bg-is-surface transition-colors w-full"
              >
                <div className="font-mono text-2xl text-is-dim group-hover:text-is-text transition-colors">↓</div>
                <div className="font-mono text-xs uppercase tracking-widest text-is-dim group-hover:text-is-text transition-colors">LOAD MORE LAYERS</div>
                <div className="font-mono text-xs text-is-alert">04-08 HIDDEN</div>
              </button>
            )}
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
            <div className="border-b border-is-border px-3 sm:px-5 py-2 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 bg-is-surface">
              <div className="flex items-center gap-4">
                <span className="is-label">PROCESS_ID: SIGNAL_PARALLAX</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-start">
                <span className="font-mono text-xs text-is-secondary">STEP: 1 / 3</span>
                <StatusPill color="gold">CALIBRATING</StatusPill>
                <StatusPill color="blue">SIGNAL_BLANKET</StatusPill>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-is-border">
              {/* Raw input */}
              <div className="bg-is-bg p-6">
                <div className="is-label mb-4">RAW_INPUT_SIGNAL</div>
                <div className="is-panel p-4 font-mono text-xs text-is-text leading-relaxed italic">
                  {`"I helped build a signup feature for a new user flow. It was a difficult project but we finished it on time."`}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                  {[
                    { label: 'ENGINEER_CONFIDENCE', val: '0.13 (CRITICAL_LOW)', color: 'text-is-alert' },
                    { label: 'INPUT_RESOLUTION', val: 'NULL_DETECTED', color: 'text-is-alert' },
                    { label: 'COMPLEXITY_INDEX', val: 'GHOST_RUN', color: 'text-is-warning' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="border border-is-border p-3 sm:p-2">
                      <div className="font-mono text-xs text-is-secondary mb-1">{label}</div>
                      <div className={`font-mono text-xs font-semibold ${color}`}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processed signal */}
              <div className="bg-is-bg p-6">
                <div className="is-label mb-4">PROCESSED_SIGNAL_CLARITY</div>
                <div className="is-panel border-is-primary/30 p-4 font-mono text-xs text-is-text leading-relaxed">
                  {`"Led the end-to-end migration of the critical 'Core-Billing' service to AWS, eliminating $482k in maintenance debt and achieving 99.99% availability."`}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                  {[
                    { label: 'ENGINEER_CONFIDENCE', val: '0.94 CONFIRMED', color: 'text-is-primary' },
                    { label: 'INPUT_RESOLUTION', val: 'QUANTIFIED', color: 'text-is-primary' },
                    { label: 'COMPLEXITY_INDEX', val: 'HYPERLINK_HIGH', color: 'text-is-primary' },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="border border-is-border p-3 sm:p-2">
                      <div className="font-mono text-xs text-is-secondary mb-1">{label}</div>
                      <div className={`font-mono text-xs font-semibold ${color}`}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK SIGNAL PROMPTS ──────────────────────────── */}
      <section id="quick-prompts" className="border-b border-is-border bg-is-bg px-6 py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="is-label mb-2">MANUAL_PROMPTS // FOR_EXTERNAL_AI</div>
              <h2 className="font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text">
                SIGNAL_PROMPTS
              </h2>
              <p className="font-body text-base text-is-text mt-3 max-w-xl">
                Prefer to use ChatGPT, Claude, or another AI tool? Copy a focused prompt and run it yourself.
              </p>
            </div>
            <div className="font-mono text-xs text-is-secondary uppercase tracking-widest text-right shrink-0">
              EXTERNAL_AI_COMPATIBLE<br />COPY_AND_PASTE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickPrompts.map((prompt, i) => (
              <div key={prompt.id} className="is-panel p-6 relative overflow-hidden">
                {/* Card header */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="font-mono text-sm font-semibold uppercase text-is-text mb-2">
                      {String(i + 1).padStart(2, '0')} // {prompt.title.toUpperCase()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {prompt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] border border-is-border px-2 py-0.5 text-is-secondary uppercase tracking-widest"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CopyButton text={prompt.text} />
                </div>

                {/* 3-col inner: 2/3 prompt body, 1/3 purpose + telemetry */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2">
                    <div className="is-label mb-2">PROMPT_BODY</div>
                    <div className="bg-is-bg border border-is-border p-4 font-mono text-xs text-is-text leading-relaxed h-48 overflow-y-auto whitespace-pre-wrap">
                      {prompt.text}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="is-label mb-2">PURPOSE</div>
                      <p className="font-body text-sm text-is-text leading-relaxed">
                        {prompt.purpose}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-is-border">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-is-telemetry signal-pulse" />
                        <span className="font-mono text-[10px] text-is-telemetry uppercase tracking-widest">
                          TELEMETRY: READY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/prompts"
              className="font-mono text-xs text-is-primary border border-is-primary/30 px-3 py-1.5 hover:bg-is-primary/10 transition-colors"
            >
              VIEW ALL PROMPTS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY THIS EXISTS ───────────────────────────────── */}
      <section className="border-b border-is-border bg-is-bg-deep px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="is-label mb-2">PROVENANCE</div>
            <h2 className="font-mono text-3xl md:text-4xl font-semibold uppercase text-is-text">
              WHY THIS EXISTS
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-base text-is-text leading-relaxed mb-6">
                Built from years of hiring, coaching, promoting, and leading software engineers and technical leaders.
              </p>
              <p className="font-body text-base text-is-text leading-relaxed">
                Invisible Signals&#x2122; distills recurring patterns observed across resumes, interviews, promotion reviews, and leadership assessments.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 content-start">
              {['ENGINEERING_LEADERSHIP', 'HIRING_&_PROMOTION', 'CAREER_GROWTH', 'TECHNICAL_COMMUNICATION'].map((tag) => (
                <span key={tag} className="font-mono text-xs border border-is-border px-3 py-1.5 text-is-secondary uppercase tracking-widest">
                  {tag}
                </span>
              ))}
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
                  <div className="font-mono text-xl text-is-secondary">{icon}</div>
                  <StatusPill color={pillColor}>{pill}</StatusPill>
                </div>
                <div>
                  <div className="is-label mb-1">{tag}</div>
                  <div className="font-mono text-base font-semibold uppercase text-is-text group-hover:text-is-primary transition-colors">{title}</div>
                </div>
                <p className="font-body text-xs text-is-text leading-relaxed flex-1">{desc}</p>
                <div className="font-mono text-xs text-is-primary opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</div>
              </Link>
            ))}


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
            <p className="font-body text-base text-is-text leading-relaxed mt-6 max-w-2xl">
              The underlying philosophy of signal intelligence is that technical work is inherently ideas unless it is invisible until translated for the observer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-is-border">
            {principles.map(({ num, title, body }) => (
              <div key={num} className="bg-is-bg p-8">
                <div className="font-mono text-xs text-is-primary mb-4">{num}</div>
                <div className="font-mono text-sm font-semibold uppercase text-is-text mb-3 tracking-wide">{title}</div>
                <p className="font-body text-sm text-is-text leading-relaxed">{body}</p>
              </div>
            ))}
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
            <p className="font-body text-base text-is-text leading-relaxed mb-8 max-w-lg">
              Amidst technical noise, the clarity of your signal—how well you communicate your capabilities—determines your career trajectory.
            </p>

            {/* Alert callout */}
            <div className="is-panel border-l-2 border-l-is-alert p-4">
              <div className="font-mono text-xs text-is-alert uppercase tracking-widest mb-2">
                ⚠ CRITICAL_FAILURE_RETURN
              </div>
              <p className="font-body text-sm text-is-text leading-relaxed">
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
                      <span className="font-mono text-xs text-is-text">{label}</span>
                      <span className="font-mono text-xs text-is-text">{pct}%</span>
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

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 py-16 md:py-28 bg-is-bg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-px bg-is-primary" />
          </div>
          <h2 className="font-mono text-4xl md:text-6xl font-semibold uppercase leading-none text-is-text mb-4">
            INITIALIZE<br />
            <em className="not-italic text-is-primary">YOUR SIGNAL.</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link to="/analyzer" className="is-btn-primary">
              ANALYZE_YOUR_SIGNALS
            </Link>
            <Link to="/prompts" className="is-btn-ghost">
              BROWSE_PROMPTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
