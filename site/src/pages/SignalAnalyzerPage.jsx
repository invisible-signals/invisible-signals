import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Lock, Activity, BarChart2, Eye, CheckCircle2, AlertTriangle,
  Target, ChevronDown, RotateCcw,
} from 'lucide-react'
import StatusPill from '../components/StatusPill.jsx'
import { analyzeSignal, DIMENSION_META } from '../lib/signalAnalyzer.js'

// ─── Constants ────────────────────────────────────────────────────────────────

const ANALYSIS_TYPES = [
  { key: 'resume',     label: 'RESUME_BULLET' },
  { key: 'interview',  label: 'INTERVIEW_ANSWER' },
  { key: 'linkedin',   label: 'LINKEDIN_SUMMARY' },
  { key: 'github',     label: 'GITHUB_DESCRIPTION' },
  { key: 'leadership', label: 'LEADERSHIP_UPDATE' },
]

const SAMPLES = {
  strong: 'Led migration of monolithic auth service to OAuth 2.0 microservices, reducing login latency by 40% and enabling 3 new product integrations across 2M users.',
  weak:   'Helped with various backend improvements and participated in team code reviews.',
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-is-alert/50" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-is-alert/50" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-is-alert/50" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-is-alert/50" />
    </>
  )
}

function RadarVisualizer({ active }) {
  return (
    <div
      className="relative w-full aspect-square max-w-sm mx-auto"
      style={{
        backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
        {/* Outer dashed ring — slow CW */}
        <circle
          cx="100" cy="100" r="88"
          fill="none"
          stroke="rgba(38,38,38,0.8)"
          strokeWidth="1"
          strokeDasharray="4 4"
          style={{ transformOrigin: '100px 100px', animation: 'orbit-cw 20s linear infinite' }}
        />
        {/* Middle dashed ring — medium CCW */}
        <circle
          cx="100" cy="100" r="62"
          fill="none"
          stroke="rgba(232,105,97,0.25)"
          strokeWidth="1"
          strokeDasharray="3 6"
          style={{ transformOrigin: '100px 100px', animation: 'orbit-ccw 12s linear infinite' }}
        />
        {/* Inner ring — slow pulse */}
        <circle
          cx="100" cy="100" r="38"
          fill="none"
          stroke="rgba(232,105,97,0.15)"
          strokeWidth="1"
          className="signal-pulse"
        />
        {/* Scanner sweep — rotates around center */}
        <g style={{ transformOrigin: '100px 100px', animation: 'orbit-cw 4s linear infinite' }}>
          <line
            x1="100" y1="100" x2="100" y2="14"
            stroke="rgba(232,105,97,0.45)"
            strokeWidth="1"
          />
          <circle cx="100" cy="100" r="4" fill="rgba(232,105,97,0.2)" />
        </g>
        {/* Center dot */}
        <circle cx="100" cy="100" r="2" fill="rgba(232,105,97,0.6)" />
        {/* Node tick marks */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const rad = (deg * Math.PI) / 180
          const x1 = 100 + 85 * Math.sin(rad)
          const y1 = 100 - 85 * Math.cos(rad)
          const x2 = 100 + 90 * Math.sin(rad)
          const y2 = 100 - 90 * Math.cos(rad)
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(232,105,97,0.3)" strokeWidth="1" />
        })}
      </svg>

      {/* Status overlay text */}
      <div className="absolute inset-0 pointer-events-none p-3">
        <div className="absolute top-3 left-3 font-mono text-[9px] text-is-dim leading-relaxed">
          <div>STATUS: {active ? 'PROCESSING' : 'AWAITING_INPUT'}</div>
          <div>BUFFER: CLEAR</div>
        </div>
        <div className="absolute top-3 right-3 font-mono text-[9px] text-is-dim text-right">
          <div>NODE_01</div>
        </div>
        <div className="absolute bottom-3 right-3 font-mono text-[9px] text-is-dim text-right leading-relaxed">
          <div>SIG_IDLE</div>
          <div>SCAN_RES: 1.25μs</div>
          <div>FREQ: 2.45GHz</div>
        </div>
      </div>
    </div>
  )
}

function ScoreDisplay({ overall }) {
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(overall), 100)
    return () => clearTimeout(t)
  }, [overall])

  const barColor = overall >= 70 ? 'bg-is-alert' : overall >= 40 ? 'bg-is-warning' : 'bg-red-600'
  const pillText = overall >= 70 ? 'STRONG_SIGNAL_QUALITY' : overall >= 40 ? 'MODERATE_SIGNAL' : 'WEAK_SIGNAL'
  const pillColor = overall >= 70 ? 'coral' : overall >= 40 ? 'gold' : 'coral'

  return (
    <div className="is-panel p-6 relative overflow-hidden">
      <div className="scanline" />
      <div className="is-label mb-4">SIGNAL_SCORE</div>
      <div className="flex items-end gap-2 mb-1">
        <span className="font-mono text-7xl font-semibold text-is-alert leading-none">{overall}</span>
        <span className="font-mono text-lg text-is-dim mb-2">/100</span>
      </div>
      <div className="h-1 bg-is-surface-high mb-5">
        <div
          className={`h-full ${barColor} transition-all duration-1000`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
      <StatusPill color={pillColor}>{pillText}</StatusPill>
    </div>
  )
}

function DimensionCard({ dimKey, score }) {
  const [barWidth, setBarWidth] = useState(0)
  const meta = DIMENSION_META[dimKey]

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(score), 200)
    return () => clearTimeout(t)
  }, [score])

  const scoreColor = score >= 70 ? 'text-is-alert' : score >= 40 ? 'text-is-warning' : 'text-red-400'
  const barColor   = score >= 70 ? 'bg-is-alert'   : score >= 40 ? 'bg-is-warning'   : 'bg-red-600'

  return (
    <div className="is-panel p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="is-label">{meta?.label}</span>
        <span className={`font-mono text-sm font-semibold ${scoreColor}`}>{score}%</span>
      </div>
      <div className="h-1 bg-is-surface-high mb-2">
        <div className={`h-full ${barColor} transition-all duration-700`} style={{ width: `${barWidth}%` }} />
      </div>
      <p className="font-body text-xs text-is-dim">{meta?.tagline(score)}</p>
    </div>
  )
}

function NarrativeSummary({ narrativeParts, miniStats }) {
  return (
    <div className="is-panel p-6 h-full">
      <div className="is-label mb-4">NARRATIVE_SUMMARY</div>
      <p className="font-body text-sm text-is-text leading-relaxed mb-6">
        {narrativeParts.map((part, i) =>
          part.bold
            ? <strong key={i} className="text-is-alert font-semibold">{part.text}</strong>
            : <span key={i}>{part.text}</span>
        )}
      </p>
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-is-border">
        <div>
          <div className="is-label mb-1">DETECTION_CONFIDENCE</div>
          <div className="font-mono text-sm text-is-text">{miniStats.detectionConfidence}</div>
        </div>
        <div>
          <div className="is-label mb-1">SEMANTIC_DENSITY</div>
          <div className="font-mono text-sm text-is-text">{miniStats.semanticDensity}</div>
        </div>
        <div>
          <div className="is-label mb-1">IMPACT_VARIANCE</div>
          <div className={`font-mono text-sm ${
            miniStats.impactVariance === 'Critical' ? 'text-is-alert' :
            miniStats.impactVariance === 'Elevated' ? 'text-is-warning' :
            'text-is-text'
          }`}>{miniStats.impactVariance}</div>
        </div>
      </div>
    </div>
  )
}

function StrengthsGaps({ dimensions, strengths, gaps, improvements }) {
  const sortedDims = Object.entries(dimensions).sort((a, b) => b[1].score - a[1].score)
  const topDim    = sortedDims[0]
  const bottomDim = sortedDims[sortedDims.length - 1]

  const topLabel    = topDim    ? `STRONG_${topDim[1].label}`    : 'STRENGTHS'
  const bottomLabel = bottomDim ? `${bottomDim[1].label}_GAP`    : 'GAPS'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Strengths */}
      <div className="is-panel p-6 border-l-2 border-is-secondary/40">
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 size={15} className="text-is-secondary shrink-0" />
          <span className="is-label">{topLabel}</span>
        </div>
        <div className="space-y-4">
          {strengths.map((s, i) => (
            <div key={i} className="border-l-2 border-is-secondary/25 pl-3">
              <div className="is-label mb-1 text-is-dim text-[10px]">
                EVIDENCE_{String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-mono text-xs text-is-text leading-relaxed">"{s}"</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gaps */}
      <div className="is-panel p-6 border-l-2 border-is-alert/30">
        <div className="flex items-center gap-2 mb-5">
          <AlertTriangle size={15} className="text-is-alert shrink-0" />
          <span className="is-label">{bottomLabel}</span>
        </div>
        <div className="space-y-4">
          <div>
            <div className="is-label mb-1 text-is-dim text-[10px]">RISK_DETECTED</div>
            <div className="font-body text-sm text-is-secondary leading-relaxed">
              {gaps[0] ?? 'Signal quality is sufficient for the current context.'}
            </div>
          </div>
          {improvements[0] && (
            <div>
              <div className="is-label mb-1 text-is-dim text-[10px]">SUGGESTION</div>
              <div className="font-body text-sm text-is-secondary leading-relaxed">
                {improvements[0]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function RecalibrationTasks({ improvements }) {
  if (!improvements.length) return null
  return (
    <div className="is-panel p-6 mb-8">
      <div className="flex items-center gap-2 mb-5">
        <Target size={15} className="text-is-warning shrink-0" />
        <span className="is-label">RECALIBRATION_TASKS</span>
      </div>
      <ol className="space-y-3">
        {improvements.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="font-mono text-xs text-is-alert shrink-0 w-5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-body text-sm text-is-secondary leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DetectedPhrases({ detectedPhrases }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Positive signals */}
      <div className="is-panel p-5">
        <div className="is-label mb-4">POSITIVE_SIGNALS</div>
        {detectedPhrases.positive.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {detectedPhrases.positive.map((phrase, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2 py-1 bg-is-alert/10 text-is-alert border border-is-alert/25"
              >
                {phrase}
              </span>
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-is-dim">NO_POSITIVE_SIGNALS_DETECTED</p>
        )}
      </div>

      {/* Noise */}
      <div className="is-panel p-5">
        <div className="is-label mb-4">NOISE_DETECTED</div>
        {detectedPhrases.negative.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {detectedPhrases.negative.map((phrase, i) => (
              <span
                key={i}
                className="font-mono text-xs px-2 py-1 bg-is-surface-high text-is-dim border border-is-border line-through"
              >
                {phrase}
              </span>
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-is-dim">NO_NOISE_DETECTED</p>
        )}
      </div>
    </div>
  )
}

// ─── Main page component ──────────────────────────────────────────────────────

export default function SignalAnalyzerPage() {
  const [searchParams] = useSearchParams()
  const [view, setView]               = useState('input')
  const [text, setText]               = useState('')
  const [analysisType, setAnalysisType] = useState(() => {
    const type = searchParams.get('type')
    return ANALYSIS_TYPES.some(t => t.key === type) ? type : 'resume'
  })
  const [result, setResult]           = useState(null)
  const [runTimestamp, setRunTimestamp] = useState('')
  const [analysisId]                  = useState(() => Math.floor(Math.random() * 9000 + 1000))

  const charCount = text.length

  function handleAnalyze() {
    const r = analyzeSignal(text, analysisType)
    setResult(r)
    setRunTimestamp(
      new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC'
    )
    setView('results')
    window.scrollTo(0, 0)
  }

  function handleReAnalyze() {
    setView('input')
    window.scrollTo(0, 0)
  }

  // ── INPUT VIEW ──────────────────────────────────────────────────────────────
  if (view === 'input') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">

          {/* Left — Input card */}
          <div className="is-panel p-6 relative">
            <CornerBrackets />

            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="is-label">_03_ANALYZER</span>
              <StatusPill color="coral">SIGNAL_ACTIVE</StatusPill>
            </div>
            <h1 className="font-mono text-2xl md:text-3xl font-semibold uppercase text-is-text mb-2">
              WHAT_ARE_YOU_SIGNALING?
            </h1>
            <p className="font-body text-sm text-is-secondary leading-relaxed mb-6">
              Paste a resume bullet, interview answer, LinkedIn summary, GitHub profile,
              or leadership update to evaluate the signals you&apos;re sending.
            </p>

            {/* Signal type selector */}
            <div className="mb-5">
              <div className="is-label mb-2">SIGNAL_TYPE</div>
              <div className="relative">
                <select
                  value={analysisType}
                  onChange={(e) => setAnalysisType(e.target.value)}
                  className="w-full bg-is-surface border border-is-border px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-is-text focus:outline-none focus:border-is-alert cursor-pointer appearance-none pr-8"
                >
                  {ANALYSIS_TYPES.map(t => (
                    <option key={t.key} value={t.key} className="bg-is-surface text-is-text">
                      {t.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-is-dim pointer-events-none" />
              </div>
            </div>

            {/* Textarea */}
            <div className="mb-2">
              <div className="is-label mb-2">INPUT_DATA</div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={2500}
                rows={10}
                placeholder="PASTE_HERE..."
                className="w-full bg-is-surface border border-is-border px-4 py-3 font-mono text-xs text-is-text placeholder:text-is-dim focus:outline-none focus:border-is-alert resize-none leading-relaxed"
              />
            </div>
            <div className="flex justify-end mb-5">
              <span className={`font-mono text-[10px] ${charCount > 0 ? 'text-is-alert' : 'text-is-dim'}`}>
                CH_COUNT: {charCount} / 2500
              </span>
            </div>

            {/* Sample inputs */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="is-label">EXAMPLES:</span>
              <button
                onClick={() => { setText(SAMPLES.strong); setAnalysisType('resume') }}
                className="font-mono text-[10px] px-2 py-1 border border-is-border text-is-dim hover:text-is-text hover:border-is-outline transition-colors"
              >
                &quot;Led cross-functional team...&quot;
              </button>
              <button
                onClick={() => { setText(SAMPLES.weak); setAnalysisType('resume') }}
                className="font-mono text-[10px] px-2 py-1 border border-is-border text-is-dim hover:text-is-text hover:border-is-outline transition-colors"
              >
                &quot;Helped with various tasks...&quot;
              </button>
            </div>

            {/* Analyze button */}
            <button
              onClick={handleAnalyze}
              disabled={charCount < 20}
              className="w-full font-mono text-xs uppercase tracking-widest py-3 bg-is-alert text-white border border-is-alert transition-all hover:bg-is-alert/90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Activity size={13} />
              ANALYZE_SIGNAL
            </button>
            <div className="mt-2 flex justify-end">
              <span className="font-mono text-[10px] text-is-dim">
                SECURE_TUNNEL_ESTABLISHED · LATENCY: &lt;1ms
              </span>
            </div>

            {/* Privacy strip */}
            <div className="mt-6 pt-5 border-t border-is-border flex items-start gap-2">
              <Lock size={13} className="text-is-dim mt-0.5 shrink-0" />
              <p className="font-mono text-[10px] text-is-dim leading-relaxed">
                Analysis runs locally in your browser. Nothing is uploaded or stored. SIG_PROC_v4.2
              </p>
            </div>
          </div>

          {/* Right — Radar + info */}
          <div className="flex flex-col gap-6">
            <RadarVisualizer active={false} />

            {/* Dimension preview */}
            <div className="is-panel p-5">
              <div className="is-label mb-3">WHAT_GETS_ANALYZED</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {['Ownership language', 'Quantified outcomes', 'Business impact', 'Technical depth', 'Scale & scope', 'Clarity & specificity', 'Leadership signals', 'STAR completeness*'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-is-alert/60 shrink-0" style={{ minWidth: 4, minHeight: 4 }} />
                    <span className="font-body text-xs text-is-dim">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] text-is-dim mt-3">
                * STAR_COMPLETENESS applies to INTERVIEW_ANSWER type only
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── RESULTS VIEW ────────────────────────────────────────────────────────────
  const typeLabel = ANALYSIS_TYPES.find(t => t.key === analysisType)?.label ?? analysisType.toUpperCase()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

      {/* Breadcrumb / metadata bar */}
      <div className="border-b border-is-border pb-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-is-dim mb-1">
              ARCHIVE › ANALYSIS_{analysisId}
            </div>
            <h1 className="font-mono text-xl md:text-2xl font-semibold uppercase text-is-text mb-1">
              SIGNAL_ANALYSIS_REPORT
            </h1>
            <div className="font-mono text-[10px] text-is-dim">
              TIMESTAMP: {runTimestamp} // SOURCE: {typeLabel}_PARSER
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <StatusPill color="coral">ANALYSIS: COMPLETE</StatusPill>
            <button
              onClick={handleReAnalyze}
              className="font-mono text-xs uppercase tracking-widest px-4 py-1.5 bg-transparent text-is-text border border-is-border transition-all hover:border-is-outline flex items-center gap-1.5"
            >
              <RotateCcw size={11} />
              RE_ANALYZE
            </button>
          </div>
        </div>
      </div>

      {/* Score + Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 mb-8">
        <ScoreDisplay overall={result.overall} />
        <NarrativeSummary narrativeParts={result.narrativeParts} miniStats={result.miniStats} />
      </div>

      {/* Signal Breakdown */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <BarChart2 size={15} className="text-is-secondary" />
          <span className="is-label">SIGNAL_BREAKDOWN</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(result.dimensions).map(([key, { score }]) => (
            <DimensionCard key={key} dimKey={key} score={score} />
          ))}
        </div>
      </div>

      {/* Executive Perception Analysis */}
      <div className="is-panel p-6 relative mb-8 border-l-4 border-is-alert/30">
        <Eye
          size={48}
          className="absolute right-5 top-5 text-is-text opacity-5 pointer-events-none"
        />
        <div className="is-label mb-3">EXECUTIVE_PERCEPTION_ANALYSIS</div>
        <p className="font-body text-sm text-is-secondary leading-relaxed max-w-3xl">
          {result.readerSignal}
        </p>
      </div>

      {/* Strengths / Gaps */}
      <StrengthsGaps
        dimensions={result.dimensions}
        strengths={result.strengths}
        gaps={result.gaps}
        improvements={result.improvements}
      />

      {/* Recalibration Tasks */}
      <RecalibrationTasks improvements={result.improvements} />

      {/* Detected Phrases */}
      <DetectedPhrases detectedPhrases={result.detectedPhrases} />

      {/* Footer privacy strip */}
      <div className="mt-10 pt-5 border-t border-is-border flex items-center gap-2">
        <Lock size={12} className="text-is-dim shrink-0" />
        <p className="font-mono text-[10px] text-is-dim">
          Analysis ran locally in your browser. No text was uploaded or stored. SIG_PROC_v4.2
        </p>
      </div>
    </div>
  )
}
