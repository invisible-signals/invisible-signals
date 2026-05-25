/**
 * Parses the raw signal-stack.md content into structured layer data.
 *
 * signal-stack.md structure (separated by \n---\n):
 *   chunk 0 — intro
 *   chunk 1 — Scoring Scale table
 *   chunks 2–9 — Layer 1 through Layer 8
 */
export function parseSignalStack(raw) {
  // File-level frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
  const frontmatter = {}
  if (fmMatch) {
    fmMatch[1].replace(/^([\w-]+):\s*(.+)$/gm, (_, k, v) => {
      frontmatter[k] = v.trim()
    })
  }

  const body = fmMatch ? raw.slice(fmMatch[0].length) : raw
  const chunks = body.split(/\n---\n/)

  // Scoring scale rows from chunk[1]
  const scoringRows = []
  if (chunks[1]) {
    for (const m of chunks[1].matchAll(/^\| (\d+) \| ([^|]+?) \| ([^|]+?) \|$/gm)) {
      scoringRows.push({
        score: parseInt(m[1]),
        rating: m[2].trim(),
        meaning: m[3].trim(),
      })
    }
  }

  // Layer chunks start at index 2
  const layers = []
  for (let i = 2; i < chunks.length; i++) {
    const chunk = chunks[i].trim()
    if (!chunk) continue
    const layer = parseLayerChunk(chunk)
    if (layer) layers.push(layer)
  }

  return { frontmatter, scoringRows, layers }
}

function parseLayerChunk(chunk) {
  const headerMatch = chunk.match(/^## Layer (\d+) — (.+)$/m)
  if (!headerMatch) return null

  const num = parseInt(headerMatch[1])
  const name = headerMatch[2].trim()
  const slug = `l${num}`

  // Tagline — first bold phrase in the chunk
  const taglineMatch = chunk.match(/\*\*([^*\n]+)\*\*/)
  const tagline = taglineMatch ? taglineMatch[1].trim() : ''

  // Description — text between the tagline and **Strong signals**
  const descMatch = chunk.match(/\*\*[^*\n]+\*\*\n+([\s\S]*?)\n+\*\*Strong signals\*\*/)
  const description = descMatch ? descMatch[1].trim() : ''

  // Strong signals bullet list
  const strongMatch = chunk.match(/\*\*Strong signals\*\*\n+((?:- .+\n?)+)/)
  const strongSignals = strongMatch
    ? (strongMatch[1].match(/^- (.+)$/gm) ?? []).map(l => l.slice(2).trim())
    : []

  // Weak signals bullet list
  const weakMatch = chunk.match(/\*\*Weak signals\*\*\n+((?:- .+\n?)+)/)
  const weakSignals = weakMatch
    ? (weakMatch[1].match(/^- (.+)$/gm) ?? []).map(l => l.slice(2).trim())
    : []

  // Example evidence blockquotes
  const weakExMatch = chunk.match(/> Weak: "([^"]+)"/)
  const strongExMatch = chunk.match(/> Strong: "([^"]+)"/)
  const exampleWeak = weakExMatch ? weakExMatch[1] : ''
  const exampleStrong = strongExMatch ? strongExMatch[1] : ''

  // Level differentiation table rows — skip header row ("Level") and separator rows ("---")
  const levels = []
  for (const m of chunk.matchAll(/^\| ([A-Za-z][^|]*?) \| ([^|]+?) \|$/gm)) {
    const level = m[1].trim()
    const desc = m[2].trim()
    if (level !== 'Level') levels.push({ level, description: desc })
  }

  return { num, slug, name, tagline, description, strongSignals, weakSignals, exampleWeak, exampleStrong, levels }
}
