import { parseFrontmatter, parsePromptFile } from '../pages/PromptsPage.jsx'
import { stages } from '../pages/FrameworksPage.jsx'

const promptModules = import.meta.glob('../../../prompts/**/*.md', { eager: true, query: '?raw', import: 'default' })
const templateModules = import.meta.glob('../../../templates/**/*.md', { eager: true, query: '?raw', import: 'default' })

function parseTemplateForIndex(path, raw) {
  const fm = parseFrontmatter(raw)
  const purposeMatch = raw.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m)
  const purpose = purposeMatch ? purposeMatch[1].split('\n\n')[0].trim() : ''
  const id = path.split('/').pop().replace('.md', '')
  return {
    id,
    type: 'template',
    title: fm.title || id,
    meta: fm.version || '',
    excerpt: purpose,
    tags: fm.tags || [],
    route: '/templates',
  }
}

const promptItems = Object.entries(promptModules)
  .filter(([path]) => !path.endsWith('README.md'))
  .map(([path, raw]) => {
    const p = parsePromptFile(path, raw)
    return {
      id: p.id,
      type: 'prompt',
      title: p.title,
      meta: p.category,
      excerpt: p.purpose,
      tags: p.tags,
      route: '/prompts',
    }
  })

const templateItems = Object.entries(templateModules)
  .filter(([path]) => !path.split('/').pop().toLowerCase().startsWith('readme'))
  .map(([path, raw]) => parseTemplateForIndex(path, raw))

const frameworkItems = stages.map((stage) => ({
  id: stage.id,
  type: 'framework',
  title: stage.label,
  meta: stage.question,
  excerpt: [...(stage.signals || []), ...(stage.pitfalls || [])].join(' · '),
  tags: [stage.id],
  route: '/frameworks',
}))

export const searchIndex = [...promptItems, ...templateItems, ...frameworkItems]
