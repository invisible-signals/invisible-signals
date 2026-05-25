import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import StatusPill from '../components/StatusPill.jsx'

const modules = import.meta.glob('../../../prompts/**/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
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

function parsePromptFile(path, raw) {
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

const CATEGORY_ORDER = ['resume', 'interview']

const prompts = Object.entries(modules)
  .map(([path, raw]) => parsePromptFile(path, raw))
  .sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category)
    const bi = CATEGORY_ORDER.indexOf(b.category)
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
    return a.id.localeCompare(b.id)
  })

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-dim hover:border-is-primary hover:text-is-primary transition-all"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'COPIED' : 'COPY_PROMPT'}
    </button>
  )
}

export default function PromptsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="is-label">_02_PROMPTS</span>
          <StatusPill color="blue">SIGNAL_ACTIVE</StatusPill>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          SIGNAL PROMPTS
        </h1>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content.
        </p>
      </div>

      {/* Prompt cards */}
      <div className="space-y-px bg-is-border">
        {prompts.map(({ id, title, purpose, tags, text }, index) => (
          <div key={id} className="bg-is-bg">
            {/* Header */}
            <div className="border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-semibold uppercase text-is-text">
                  {String(index + 1).padStart(2, '0')} // {title.toUpperCase()}
                </span>
                <StatusPill color="blue">SIGNAL_ACTIVE</StatusPill>
              </div>
              <CopyButton text={text} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border">
              {/* Prompt text */}
              <div className="lg:col-span-2 bg-is-bg p-6">
                <div className="is-label mb-4">PROMPT_BODY</div>
                <div className="is-panel p-4 font-mono text-xs text-is-dim leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto">
                  {text}
                </div>
              </div>

              {/* Metadata */}
              <div className="bg-is-bg p-6 flex flex-col gap-6">
                <div>
                  <div className="is-label mb-3">PURPOSE</div>
                  <p className="font-body text-sm text-is-dim leading-relaxed">{purpose}</p>
                </div>

                {tags.length > 0 && (
                  <div>
                    <div className="is-label mb-3">TAGS</div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="border border-is-border px-2 py-0.5 font-mono text-xs text-is-dim">
                          {t.toUpperCase().replace(/-/g, '_')}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy note */}
      <div className="mt-10 pt-6 border-t border-is-border">
        <p className="font-body text-sm text-is-dim leading-relaxed max-w-2xl">
          <span className="font-mono text-is-primary">NOTE:</span> These prompts are not designed to help candidates game interviews. They are designed to help engineers and leaders communicate their actual value more clearly. AI should amplify clarity, not fabricate competence.
        </p>
      </div>
    </div>
  )
}
