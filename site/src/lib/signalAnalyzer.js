/**
 * Signal Analyzer — rule-based scoring engine.
 *
 * analyzeSignal(text, type) is a pure function: no side effects, no network,
 * no storage. Text never leaves the browser.
 *
 * To improve scoring accuracy, edit signalDictionaries.js — not this file.
 */
import {
  OWNERSHIP_VERBS, WEAK_VERBS, IMPACT_WORDS, SCALE_INDICATORS,
  LEADERSHIP_INDICATORS, METRIC_PATTERNS, VAGUE_PHRASES, TECHNICAL_TERMS,
  STAR_KEYWORDS,
} from './signalDictionaries.js'

// Which dimensions are scored and displayed for each analysis type
const TYPE_DIMENSIONS = {
  resume:     ['ownership', 'quantification', 'businessImpact', 'technicalDepth', 'scale', 'clarity'],
  interview:  ['ownership', 'quantification', 'businessImpact', 'starCompleteness', 'clarity', 'weakLanguage'],
  linkedin:   ['ownership', 'businessImpact', 'scale', 'leadership', 'clarity', 'weakLanguage'],
  github:     ['ownership', 'technicalDepth', 'scale', 'quantification', 'clarity', 'businessImpact'],
  leadership: ['ownership', 'leadership', 'businessImpact', 'scale', 'clarity', 'weakLanguage'],
}

// Type-specific weights used when computing the overall weighted score
const DIMENSION_WEIGHTS = {
  resume:     { ownership: 2, quantification: 2, businessImpact: 1.5, technicalDepth: 1, scale: 1.5, clarity: 1 },
  interview:  { ownership: 1.5, quantification: 1.5, businessImpact: 1, starCompleteness: 2, clarity: 1, weakLanguage: 1 },
  linkedin:   { ownership: 1, businessImpact: 1.5, scale: 1, leadership: 1.5, clarity: 1.5, weakLanguage: 1 },
  github:     { ownership: 1, technicalDepth: 2, scale: 1, quantification: 1, clarity: 1.5, businessImpact: 1 },
  leadership: { ownership: 1.5, leadership: 2, businessImpact: 1.5, scale: 1, clarity: 1, weakLanguage: 1 },
}

// Human-readable metadata and tagline generators for each dimension
export const DIMENSION_META = {
  ownership: {
    label: 'OWNERSHIP',
    tagline: s => s >= 70 ? 'Direct accountability detected.' : s >= 40 ? 'Some ownership language present.' : 'Ownership signals are weak.',
  },
  quantification: {
    label: 'QUANTIFICATION',
    tagline: s => s >= 70 ? 'Measurable outcomes present.' : s >= 40 ? 'Partial metrics detected.' : 'No quantified results found.',
  },
  businessImpact: {
    label: 'IMPACT',
    tagline: s => s >= 70 ? 'Clear business effect.' : s >= 40 ? 'Measurable results are sparse.' : 'Business impact undetected.',
  },
  technicalDepth: {
    label: 'TECHNICAL_DEPTH',
    tagline: s => s >= 70 ? 'Implementation details are robust.' : s >= 40 ? 'Some technical specificity.' : 'Lacks technical depth.',
  },
  scale: {
    label: 'SCALE',
    tagline: s => s >= 70 ? 'Systems handled large scope.' : s >= 40 ? 'Scope partially indicated.' : 'Scale not communicated.',
  },
  clarity: {
    label: 'CLARITY',
    tagline: s => s >= 70 ? 'Communication is crisp.' : s >= 40 ? 'Some vague language present.' : 'Signal diluted by vague language.',
  },
  leadership: {
    label: 'LEADERSHIP',
    tagline: s => s >= 70 ? 'Evidence of mentoring detected.' : s >= 40 ? 'Some leadership signals.' : 'Leadership signals absent.',
  },
  weakLanguage: {
    label: 'SIGNAL_NOISE',
    tagline: s => s >= 70 ? 'Low noise — clean signal.' : s >= 40 ? 'Some passive or vague phrasing.' : 'High noise from weak language.',
  },
  starCompleteness: {
    label: 'STAR_INDICATORS',
    tagline: s => s >= 75 ? 'S/T/A/R structure is clear.' : s >= 50 ? 'Partial STAR structure detected.' : 'Missing STAR components.',
  },
}

// ─── Match helpers ────────────────────────────────────────────────────────────

function matchWords(lower, list) {
  return list.filter(phrase => {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return new RegExp(`\\b${escaped}\\b`, 'i').test(lower)
  })
}

function matchPatterns(text, patterns) {
  const matches = []
  for (const pattern of patterns) {
    const m = text.match(new RegExp(pattern.source, 'g'))
    if (m) matches.push(...m)
  }
  return [...new Set(matches)]
}

function clamp(v) {
  return Math.max(0, Math.min(100, Math.round(v)))
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// ─── Dimension scorers ────────────────────────────────────────────────────────

function scoreOwnership(ownershipMatches, weakMatches) {
  const penalty = weakMatches.length * 25
  if (!ownershipMatches.length) return clamp(-penalty)
  // First ownership verb is worth 70; each additional adds 15 (capped at 100)
  const base = Math.min(100, 70 + (ownershipMatches.length - 1) * 15)
  return clamp(base - penalty)
}

function scoreQuantification(text, metricMatches) {
  if (!text.trim() || !metricMatches.length) return 0
  const wc = Math.max(1, wordCount(text))
  const density = metricMatches.length / (wc / 10)
  return clamp(density * 100)
}

function scoreBusinessImpact(impactMatches, metricMatches) {
  const base = Math.min(80, impactMatches.length * 18)
  const bonus = metricMatches.length > 0 ? 20 : 0
  return clamp(base + bonus)
}

function scoreTechnicalDepth(techMatches) {
  return clamp(techMatches.length * 22)
}

function scoreScale(scaleMatches) {
  return clamp(scaleMatches.length * 60)
}

function scoreClarity(text, vagueMatches) {
  const wc = wordCount(text)
  const inRange = wc >= 8 && wc <= 60 ? 10 : 0
  const penalty = vagueMatches.length * 22
  return clamp(80 + inRange - penalty)
}

function scoreWeakLanguage(weakMatches) {
  return clamp(100 - weakMatches.length * 30)
}

function scoreLeadership(leadershipMatches) {
  return clamp(leadershipMatches.length * 28)
}

function scoreStarCompleteness(lower) {
  let buckets = 0
  for (const keywords of Object.values(STAR_KEYWORDS)) {
    if (keywords.some(kw => lower.includes(kw))) buckets++
  }
  return clamp((buckets / 4) * 100)
}

// ─── Weighted overall score ───────────────────────────────────────────────────

function computeOverall(allScores, type) {
  const weights = DIMENSION_WEIGHTS[type] || DIMENSION_WEIGHTS.resume
  let total = 0
  let weightSum = 0
  for (const [dim, weight] of Object.entries(weights)) {
    if (allScores[dim] !== undefined) {
      total += allScores[dim] * weight
      weightSum += weight
    }
  }
  return clamp(total / weightSum)
}

// ─── Output generators ────────────────────────────────────────────────────────

function generateStrengths(dimensions, detectedPhrases) {
  const strengths = []
  for (const [key, { score }] of Object.entries(dimensions)) {
    if (score < 70) continue
    const meta = DIMENSION_META[key]
    if (key === 'ownership') {
      const verbs = detectedPhrases.positive.filter(p => /^[a-z]+$/.test(p) && p.length <= 15)
      if (verbs.length) {
        strengths.push(`Strong ownership verbs detected: ${verbs.slice(0, 3).join(', ')}`)
      } else {
        strengths.push(meta.tagline(score))
      }
    } else if (key === 'quantification') {
      const metrics = detectedPhrases.positive.filter(p => /\d/.test(p))
      if (metrics.length) {
        strengths.push(`Quantified outcomes present: ${metrics.slice(0, 2).join(', ')}`)
      } else {
        strengths.push(meta.tagline(score))
      }
    } else if (meta) {
      strengths.push(meta.tagline(score))
    }
  }
  return strengths.length
    ? strengths
    : ['Expand on specific outcomes and ownership for stronger signals.']
}

function generateGaps(dimensions) {
  return Object.entries(dimensions)
    .filter(([, { score }]) => score < 50)
    .map(([key, { score }]) => DIMENSION_META[key]?.tagline(score) ?? '')
    .filter(Boolean)
}

function generateImprovements(dimensions, detectedPhrases) {
  const items = []

  if ((dimensions.ownership?.score ?? 100) < 50) {
    items.push('Open with a direct ownership verb: "Led", "Built", "Architected", or "Designed" — before any qualifiers.')
  }

  const weakFound = detectedPhrases.negative.find(p =>
    WEAK_VERBS.includes(p)
  )
  if (weakFound) {
    items.push(`Replace "${weakFound}" with a direct ownership verb (e.g., "led", "built", "owned").`)
  }

  if ((dimensions.quantification?.score ?? 100) < 50) {
    items.push('Add a measurable outcome: percentage change, dollar impact, user count, or time reduction.')
  }

  if ((dimensions.businessImpact?.score ?? 100) < 50) {
    items.push('Connect the work to a business outcome: revenue, retention, error rate, deploy frequency, or customer satisfaction.')
  }

  if ((dimensions.scale?.score ?? 100) < 50) {
    items.push('Quantify scale: how many users, teams, services, or requests were affected?')
  }

  const vagueFound = detectedPhrases.negative.find(p =>
    VAGUE_PHRASES.includes(p)
  )
  if (vagueFound) {
    items.push(`Remove or replace vague language like "${vagueFound}" — specificity is the signal.`)
  }

  if (dimensions.leadership !== undefined && (dimensions.leadership.score ?? 100) < 50) {
    items.push('Add a leadership signal: who did you mentor, influence, or align? What cross-functional impact did you drive?')
  }

  return items.slice(0, 5)
}

const READER_SIGNALS = {
  strong: [
    'This signals a high-ownership individual who drives measurable outcomes. Readers will likely categorize this as staff-level execution.',
    'Strong signal fidelity. This communicates a driver, not a passenger — with evidence. Hiring committees will register clear accountability.',
  ],
  moderate: [
    'This signals a capable contributor with some measurable outcomes. Strengthening ownership language and adding scale context would lift this to senior-level signal.',
    'Moderate signal detected. The execution is visible but the business context needs more specificity to compete at senior or staff levels.',
  ],
  weak: [
    'This currently signals a supportive contributor role. Readers cannot determine accountability or measurable outcomes. The work may be excellent — but the signal is not transmitting.',
    'Weak signal detected. The text describes participation rather than ownership. Reframe around what you initiated, delivered, and measured.',
  ],
}

function generateReaderSignal(overall, dimensions) {
  const tier = overall >= 70 ? 'strong' : overall >= 40 ? 'moderate' : 'weak'
  const options = READER_SIGNALS[tier]
  const weakestKey = Object.entries(dimensions)
    .sort((a, b) => a[1].score - b[1].score)[0]?.[0] ?? ''
  const idx = weakestKey.charCodeAt(0) % options.length
  return options[idx]
}

function generateNarrativeParts(overall, dimensions, type) {
  const strong = Object.entries(dimensions)
    .filter(([, v]) => v.score >= 70)
    .map(([k]) => DIMENSION_META[k]?.label.toLowerCase().replace(/_/g, ' ') ?? k)
  const weak = Object.entries(dimensions)
    .filter(([, v]) => v.score < 50)
    .map(([k]) => DIMENSION_META[k]?.label.toLowerCase().replace(/_/g, ' ') ?? k)

  const typeLabels = {
    resume: 'resume bullet', interview: 'interview answer',
    linkedin: 'LinkedIn summary', github: 'GitHub description',
    leadership: 'leadership update',
  }
  const typeLabel = typeLabels[type] ?? 'text'

  const parts = []
  parts.push({ text: `This ${typeLabel} communicates ` })

  if (strong.length) {
    parts.push({ text: strong.slice(0, 2).join(' and '), bold: true })
    if (weak.length) {
      parts.push({ text: ' but under-signals ' })
      parts.push({ text: weak.slice(0, 2).join(' and '), bold: true })
    }
  } else if (weak.length) {
    parts.push({ text: 'limited signal strength, under-delivering on ' })
    parts.push({ text: weak.slice(0, 2).join(' and '), bold: true })
  } else {
    parts.push({ text: 'balanced signal across all dimensions' })
  }

  const tail = overall >= 70
    ? `. While the execution is clear, minor gaps remain in lower-scoring dimensions.`
    : `. The ownership framing and measurable outcomes need strengthening to compete at senior or staff levels.`
  parts.push({ text: tail })

  return parts
}

function generateMiniStats(text, dimensions) {
  const wc = wordCount(text)
  const detectionConfidence = wc >= 30 ? 'High' : wc >= 15 ? 'Medium' : 'Low'

  const allScores = Object.values(dimensions).map(d => d.score)
  const avg = allScores.reduce((a, b) => a + b, 0) / Math.max(1, allScores.length)
  const semanticDensity = avg >= 65 ? 'High' : avg >= 40 ? 'Medium' : 'Low'

  const impactScore = dimensions.businessImpact?.score ?? 50
  const impactVariance = impactScore < 40 ? 'Critical' : impactScore < 70 ? 'Elevated' : 'Normal'

  return { detectionConfidence, semanticDensity, impactVariance }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * analyzeSignal(text, type)
 *
 * @param {string} text - The career text to analyze (resume bullet, etc.)
 * @param {'resume'|'interview'|'linkedin'|'github'|'leadership'} type
 * @returns {{
 *   overall: number,
 *   dimensions: Record<string, { score: number, label: string }>,
 *   strengths: string[],
 *   gaps: string[],
 *   detectedPhrases: { positive: string[], negative: string[] },
 *   improvements: string[],
 *   readerSignal: string,
 *   narrativeParts: Array<{ text: string, bold?: boolean }>,
 *   miniStats: { detectionConfidence: string, semanticDensity: string, impactVariance: string }
 * }}
 */
export function analyzeSignal(text, type = 'resume') {
  const lower = text.toLowerCase()

  // Compute all matches
  const ownershipMatches = matchWords(lower, OWNERSHIP_VERBS)
  const weakMatches      = matchWords(lower, WEAK_VERBS)
  const impactMatches    = matchWords(lower, IMPACT_WORDS)
  const scaleMatches     = matchWords(lower, SCALE_INDICATORS)
  const leadershipMatches = matchWords(lower, LEADERSHIP_INDICATORS)
  const techMatches      = matchWords(lower, TECHNICAL_TERMS)
  const vagueMatches     = matchWords(lower, VAGUE_PHRASES)
  const metricMatches    = matchPatterns(text, METRIC_PATTERNS)

  // Compute all dimension scores
  const allScores = {
    ownership:        scoreOwnership(ownershipMatches, weakMatches),
    quantification:   scoreQuantification(text, metricMatches),
    businessImpact:   scoreBusinessImpact(impactMatches, metricMatches),
    technicalDepth:   scoreTechnicalDepth(techMatches),
    scale:            scoreScale(scaleMatches),
    clarity:          scoreClarity(text, vagueMatches),
    leadership:       scoreLeadership(leadershipMatches),
    weakLanguage:     scoreWeakLanguage(weakMatches),
    starCompleteness: type === 'interview' ? scoreStarCompleteness(lower) : undefined,
  }

  // Build dimensions object — only the relevant dimensions for this type
  const dims = TYPE_DIMENSIONS[type] || TYPE_DIMENSIONS.resume
  const dimensions = {}
  for (const dim of dims) {
    if (allScores[dim] !== undefined) {
      dimensions[dim] = {
        score: allScores[dim],
        label: DIMENSION_META[dim]?.label ?? dim.toUpperCase(),
      }
    }
  }

  const overall = computeOverall(allScores, type)

  // Build detected phrases
  const positiveList = [
    ...ownershipMatches.slice(0, 4),
    ...metricMatches.slice(0, 3),
    ...impactMatches.slice(0, 2),
  ]
  const negativeList = [
    ...weakMatches.slice(0, 3),
    ...vagueMatches.slice(0, 3),
  ]

  const detectedPhrases = {
    positive: [...new Set(positiveList)].slice(0, 8),
    negative: [...new Set(negativeList)].slice(0, 6),
  }

  const strengths      = generateStrengths(dimensions, detectedPhrases)
  const gaps           = generateGaps(dimensions)
  const improvements   = generateImprovements(dimensions, detectedPhrases)
  const readerSignal   = generateReaderSignal(overall, dimensions)
  const narrativeParts = generateNarrativeParts(overall, dimensions, type)
  const miniStats      = generateMiniStats(text, dimensions)

  return {
    overall,
    dimensions,
    strengths,
    gaps,
    detectedPhrases,
    improvements,
    readerSignal,
    narrativeParts,
    miniStats,
  }
}
