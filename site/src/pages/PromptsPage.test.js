import { describe, it, expect } from 'vitest'
import { parseFrontmatter, parsePromptFile } from '../lib/parsePrompts.js'

// ─── parseFrontmatter ────────────────────────────────────────────────────────

describe('parseFrontmatter', () => {
  it('returns empty object when no frontmatter block is present', () => {
    expect(parseFrontmatter('# Heading\n\nContent')).toEqual({})
  })

  it('parses title and category correctly', () => {
    const raw = `---\ntitle: Resume Signal Analysis\ncategory: resume\n---`
    const result = parseFrontmatter(raw)
    expect(result.title).toBe('Resume Signal Analysis')
    expect(result.category).toBe('resume')
  })

  it('parses block-style tag arrays', () => {
    const raw = `---\ntitle: Test\ntags:\n  - resume\n  - signals\n---`
    expect(parseFrontmatter(raw).tags).toEqual(['resume', 'signals'])
  })

  it('returns empty object for empty frontmatter block', () => {
    expect(parseFrontmatter('---\n---')).toEqual({})
  })

  it('trims whitespace from values', () => {
    const raw = `---\ntitle:   Padded Title   \n---`
    expect(parseFrontmatter(raw).title).toBe('Padded Title')
  })
})

// ─── parsePromptFile ─────────────────────────────────────────────────────────

describe('parsePromptFile', () => {
  function makeRaw({
    title = 'My Prompt',
    category = 'resume',
    purpose = 'Useful purpose.',
    prompt = 'Analyze: [INPUT]',
  } = {}) {
    return `---\ntitle: ${title}\ncategory: ${category}\n---\n\n## Purpose\n\n${purpose}\n\n## Prompt\n\n\`\`\`text\n${prompt}\n\`\`\``
  }

  it('extracts id from file path', () => {
    const result = parsePromptFile('prompts/resume/my-prompt.md', makeRaw())
    expect(result.id).toBe('my-prompt')
  })

  it('extracts title and category from frontmatter', () => {
    const result = parsePromptFile(
      'prompts/resume/my-prompt.md',
      makeRaw({ title: 'Signal Prompt', category: 'resume' }),
    )
    expect(result.title).toBe('Signal Prompt')
    expect(result.category).toBe('resume')
  })

  it('extracts prompt text from fenced code block', () => {
    const result = parsePromptFile(
      'prompts/resume/my-prompt.md',
      makeRaw({ prompt: 'You are an expert.' }),
    )
    expect(result.text).toBe('You are an expert.')
  })

  it('returns empty text when ## Prompt section is missing', () => {
    const raw = `---\ntitle: No Prompt\ncategory: resume\n---\n\n## Purpose\n\nJust purpose.\n`
    const result = parsePromptFile('prompts/resume/no-prompt.md', raw)
    expect(result.text).toBe('')
  })

  it('uses file id as title when frontmatter title is missing', () => {
    const result = parsePromptFile('prompts/resume/fallback.md', '## Purpose\n\nContent')
    expect(result.title).toBe('fallback')
    expect(result.category).toBe('general')
  })

  it('returns empty tags array when no tags are defined', () => {
    const result = parsePromptFile('prompts/resume/no-tags.md', makeRaw())
    expect(result.tags).toEqual([])
  })

  it('extracts purpose paragraph', () => {
    const result = parsePromptFile(
      'prompts/resume/with-purpose.md',
      makeRaw({ purpose: 'This prompt analyzes your resume for signals.' }),
    )
    expect(result.purpose).toBe('This prompt analyzes your resume for signals.')
  })
})
