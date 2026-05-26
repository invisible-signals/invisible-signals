import { describe, it, expect } from 'vitest'
import { parseFrontmatter } from '../pages/PromptsPage.jsx'

const modules = import.meta.glob('../../../prompts/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const VALID_STATUSES = ['draft', 'active', 'deprecated']
const VALID_CATEGORIES = ['resume', 'interview']

const promptFiles = Object.entries(modules).filter(
  ([path]) => !path.endsWith('README.md'),
)

describe('prompt file inventory', () => {
  it('has at least one prompt file', () => {
    expect(promptFiles.length).toBeGreaterThan(0)
  })
})

for (const [path, raw] of promptFiles) {
  const filename = path.split('/').pop()
  const fm = parseFrontmatter(raw)

  describe(filename, () => {
    it('has all required frontmatter keys', () => {
      expect(fm.title, 'missing: title').toBeTruthy()
      expect(fm.version, 'missing: version').toBeTruthy()
      expect(fm.status, 'missing: status').toBeTruthy()
      expect(fm.category, 'missing: category').toBeTruthy()
      expect(fm.tags, 'missing: tags').toBeTruthy()
    })

    it(`status is one of: ${VALID_STATUSES.join(', ')}`, () => {
      expect(VALID_STATUSES).toContain(fm.status)
    })

    it(`category is one of: ${VALID_CATEGORIES.join(', ')}`, () => {
      expect(VALID_CATEGORIES).toContain(fm.category)
    })

    it('tags is a non-empty array', () => {
      expect(Array.isArray(fm.tags)).toBe(true)
      expect(fm.tags.length).toBeGreaterThan(0)
    })

    it('has a ## Purpose section', () => {
      expect(raw).toMatch(/## Purpose/)
    })

    it('has a ## Prompt section with a fenced code block', () => {
      expect(raw).toMatch(/## Prompt\s+```/)
    })

    it('has no empty brackets [] in the prompt code block', () => {
      const match = raw.match(/## Prompt\s+```(?:text)?\n([\s\S]*?)\n```/)
      if (match) {
        expect(match[1]).not.toMatch(/\[\]/)
      }
    })
  })
}
