import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import StatusPill from '../components/StatusPill.jsx'

const modules = import.meta.glob('../../../prompts/**/*.md', { eager: true, query: '?raw', import: 'default' })

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

const CATEGORY_ORDER = ['resume', 'interview']
const QUICK_PROMPT_ORDER = [
  'resume-bullet-check',
  'interview-answer-check',
  'github-profile-check',
  'linkedin-profile-check',
]

const prompts = Object.entries(modules)
  .filter(([path]) => !path.endsWith('README.md'))
  .map(([path, raw]) => parsePromptFile(path, raw))
  .sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category)
    const bi = CATEGORY_ORDER.indexOf(b.category)
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
    return a.id.localeCompare(b.id)
  })

const quickPrompts = prompts
  .filter((prompt) => prompt.category === 'quick-signal')
  .sort((a, b) => QUICK_PROMPT_ORDER.indexOf(a.id) - QUICK_PROMPT_ORDER.indexOf(b.id))
const otherPrompts = prompts.filter((prompt) => prompt.category !== 'quick-signal')

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
        <h2 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          QUICK SIGNAL PROMPTS
        </h2>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          Want fast feedback? Copy one focused prompt and run it in your preferred AI tool. System-level instructions to analyze career metadata and generate telemetry goals.
        </p>
      </div>

      {/* Quick signal prompts */}
      {quickPrompts.length > 0 && (
        <div className="mb-12">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {quickPrompts.map(({ id, title, purpose, tags, text }, index) => (
              <section key={id} className="border border-is-border bg-is-surface-container-lowest p-6 relative group overflow-hidden glow-border transition-all">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-is-text mb-3">
                      {String(index + 1).padStart(2, '0')} // {title.toUpperCase()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="border border-is-border px-2 py-0.5 font-mono text-[10px] uppercase text-is-dim">
                          #{t.replace(/-/g, '_').toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <CopyButton text={text} />
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,4fr)_200px] gap-6">
                  <div>
                    <div className="is-label mb-3">PROMPT_BODY</div>
                    <div className="is-panel p-6 font-mono text-xs text-is-dim leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-72 overflow-y-auto">
                      {text}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <div className="is-label mb-3">PURPOSE</div>
                      <p className="font-body text-sm text-is-dim leading-relaxed">{purpose}</p>
                    </div>
                    <div className="border-t border-is-border pt-5 text-[10px] uppercase tracking-widest text-is-dim flex items-center gap-3">
                      <span className="font-mono">TELEMETRY:</span>
                      <span className="text-is-primary">{tags.includes('quick-check') ? 'READY' : 'ACTIVE'}</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      )}

      {/* Prompt cards */}
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <StatusPill color="blue">SIGNAL_ACTIVE</StatusPill>
        </div>
        <h2 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          SIGNAL PROMPTS
        </h2>
        <p className="font-body text-base text-is-dim leading-relaxed max-w-2xl">
          System-level instructions to analyze career metadata and generate telemetry goals. Paste these prompts into any AI tool and replace the bracketed placeholders with your actual content.
        </p>
      </div>
      <div className="space-y-px bg-is-border">
        {otherPrompts.map(({ id, title, purpose, tags, text }, index) => (
          <div key={id} className="bg-is-bg border border-is-border glow-border transition-all">
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

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_280px] gap-px bg-is-border">
              {/* Prompt text */}
              <div className="bg-is-bg p-6">
                <div className="is-label mb-4">PROMPT_BODY</div>
                <div className="is-panel p-6 font-mono text-xs text-is-dim leading-relaxed whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto">
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
