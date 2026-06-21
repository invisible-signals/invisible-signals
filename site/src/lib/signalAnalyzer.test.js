import { describe, it, expect } from 'vitest'
import { analyzeSignal } from './signalAnalyzer.js'

// ─── Test fixtures ────────────────────────────────────────────────────────────

const STRONG_RESUME =
  'Led migration of monolithic auth service to OAuth 2.0 microservices, reducing login latency by 40% and enabling 3 new product integrations across 2M users.'

const WEAK_RESUME =
  'Helped with various backend improvements and participated in team code reviews.'

const MIXED_RESUME =
  'Worked on the infrastructure migration project and helped reduce latency by 15%.'

const STRONG_INTERVIEW =
  'When our payment service started failing under load, I was tasked with stabilizing it. ' +
  'I implemented a Redis-based caching layer and deployed circuit breakers, which resulted in ' +
  '99.9% uptime over the following quarter.'

// ─── Overall score tests ──────────────────────────────────────────────────────

describe('analyzeSignal — overall scores', () => {
  it('strong resume bullet scores above 70 overall', () => {
    const { overall } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(overall).toBeGreaterThan(70)
  })

  it('weak resume bullet scores below 55 overall', () => {
    const { overall } = analyzeSignal(WEAK_RESUME, 'resume')
    expect(overall).toBeLessThan(55)
  })

  it('strong bullet scores higher than weak bullet', () => {
    const strong = analyzeSignal(STRONG_RESUME, 'resume').overall
    const weak   = analyzeSignal(WEAK_RESUME, 'resume').overall
    expect(strong).toBeGreaterThan(weak)
  })

  it('mixed bullet scores between strong and weak', () => {
    const strong = analyzeSignal(STRONG_RESUME, 'resume').overall
    const mixed  = analyzeSignal(MIXED_RESUME, 'resume').overall
    const weak   = analyzeSignal(WEAK_RESUME, 'resume').overall
    expect(mixed).toBeLessThan(strong)
    expect(mixed).toBeGreaterThan(weak)
  })
})

// ─── Dimension-level tests ────────────────────────────────────────────────────

describe('analyzeSignal — dimension scoring', () => {
  it('weak-verb-heavy text scores low on ownership', () => {
    const { dimensions } = analyzeSignal(WEAK_RESUME, 'resume')
    expect(dimensions.ownership.score).toBeLessThan(40)
  })

  it('strong ownership text scores high on ownership', () => {
    const { dimensions } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(dimensions.ownership.score).toBeGreaterThan(50)
  })

  it('text with metric pattern scores above 60 on quantification', () => {
    const { dimensions } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(dimensions.quantification.score).toBeGreaterThan(60)
  })

  it('text without metrics scores 0 on quantification', () => {
    const { dimensions } = analyzeSignal('I helped the team with backend tasks.', 'resume')
    expect(dimensions.quantification.score).toBe(0)
  })
})

// ─── Type-specific dimension tests ───────────────────────────────────────────

describe('analyzeSignal — type-specific dimensions', () => {
  it('interview type includes starCompleteness dimension', () => {
    const { dimensions } = analyzeSignal(STRONG_INTERVIEW, 'interview')
    expect(dimensions).toHaveProperty('starCompleteness')
  })

  it('resume type does not include starCompleteness dimension', () => {
    const { dimensions } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(dimensions).not.toHaveProperty('starCompleteness')
  })

  it('strong interview answer scores above 50 on starCompleteness', () => {
    const { dimensions } = analyzeSignal(STRONG_INTERVIEW, 'interview')
    expect(dimensions.starCompleteness.score).toBeGreaterThan(50)
  })

  it('leadership type includes leadership dimension', () => {
    const { dimensions } = analyzeSignal(STRONG_RESUME, 'leadership')
    expect(dimensions).toHaveProperty('leadership')
  })
})

// ─── Detected phrases tests ───────────────────────────────────────────────────

describe('analyzeSignal — detected phrases', () => {
  it('detects ownership verbs in positive phrases', () => {
    const { detectedPhrases } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(detectedPhrases.positive.length).toBeGreaterThan(0)
    expect(detectedPhrases.positive.some(p => p === 'led')).toBe(true)
  })

  it('detects weak verbs in negative phrases', () => {
    const { detectedPhrases } = analyzeSignal(WEAK_RESUME, 'resume')
    expect(detectedPhrases.negative.length).toBeGreaterThan(0)
  })

  it('detects metric patterns in positive phrases', () => {
    const { detectedPhrases } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(detectedPhrases.positive.some(p => /\d/.test(p))).toBe(true)
  })
})

// ─── Improvements and output shape tests ─────────────────────────────────────

describe('analyzeSignal — improvements and output shape', () => {
  it('returns non-empty improvements for weak text', () => {
    const { improvements } = analyzeSignal(WEAK_RESUME, 'resume')
    expect(improvements.length).toBeGreaterThan(0)
  })

  it('returns improvements with at most 5 items', () => {
    const { improvements } = analyzeSignal(WEAK_RESUME, 'resume')
    expect(improvements.length).toBeLessThanOrEqual(5)
  })

  it('returns all required output fields', () => {
    const result = analyzeSignal(STRONG_RESUME, 'resume')
    expect(result).toHaveProperty('overall')
    expect(result).toHaveProperty('dimensions')
    expect(result).toHaveProperty('strengths')
    expect(result).toHaveProperty('gaps')
    expect(result).toHaveProperty('detectedPhrases')
    expect(result).toHaveProperty('improvements')
    expect(result).toHaveProperty('readerSignal')
    expect(result).toHaveProperty('narrativeParts')
    expect(result).toHaveProperty('miniStats')
  })

  it('overall score is between 0 and 100', () => {
    const { overall } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(overall).toBeGreaterThanOrEqual(0)
    expect(overall).toBeLessThanOrEqual(100)
  })

  it('narrativeParts is a non-empty array of text objects', () => {
    const { narrativeParts } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(Array.isArray(narrativeParts)).toBe(true)
    expect(narrativeParts.length).toBeGreaterThan(0)
    expect(narrativeParts[0]).toHaveProperty('text')
  })

  it('miniStats contains the three expected keys', () => {
    const { miniStats } = analyzeSignal(STRONG_RESUME, 'resume')
    expect(miniStats).toHaveProperty('detectionConfidence')
    expect(miniStats).toHaveProperty('semanticDensity')
    expect(miniStats).toHaveProperty('impactVariance')
  })
})
