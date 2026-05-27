export function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const block = match[1]
  const result = {}
  block.replace(/^(\w+):\s*(.+)$/gm, (_, k, v) => { result[k] = v.trim() })
  const tagsMatch = block.match(/^tags:\n((?:[ \t]+-[ \t]+.+\n?)+)/m)
  if (tagsMatch) {
    result.tags = tagsMatch[1].match(/[ \t]+-[ \t]+(.+)/g)
      ?.map((l) => l.replace(/[ \t]+-[ \t]+/, '').trim()) ?? []
  }
  return result
}

export function parsePromptFile(path, raw) {
  const fm = parseFrontmatter(raw)
  const purposeMatch = raw.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---)/m)
  const purpose = purposeMatch ? purposeMatch[1].split('\n\n')[0].trim() : ''
  const promptMatch = raw.match(/## Prompt\s+```(?:text)?\n([\s\S]*?)\n```/)
  const text = promptMatch ? promptMatch[1].trim() : ''
  const id = path.split('/').pop().replace('.md', '')
  return {
    id,
    title: fm.title || id,
    category: fm.category || 'general',
    tags: fm.tags || [],
    purpose,
    text,
  }
}
