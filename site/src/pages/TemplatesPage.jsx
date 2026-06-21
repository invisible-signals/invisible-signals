import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import StatusPill from '../components/StatusPill.jsx'

const modules = import.meta.glob('../../../templates/**/*.md', { eager: true, query: '?raw', import: 'default' })

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

function parseTemplateFile(path, raw) {
  const fm = parseFrontmatter(raw)
  const purposeMatch = raw.match(/## Purpose\s*\n+([\s\S]*?)(?=\n## |\n---|\n# )/m)
  const purpose = purposeMatch ? purposeMatch[1].split('\n\n')[0].trim() : ''
  const sectionMatches = [...raw.matchAll(/^# (\d+\. .+)$/gm)]
  const sections = sectionMatches.map((m) => m[1])
  const id = path.split('/').pop().replace('.md', '')
  return {
    id,
    title: fm.title || id,
    version: fm.version || '',
    tags: fm.tags || [],
    purpose,
    sections,
    text: raw,
  }
}

const templates = Object.entries(modules)
  .filter(([path]) => !path.split('/').pop().toLowerCase().startsWith('readme'))
  .map(([path, raw]) => parseTemplateFile(path, raw))

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      window.clarity?.('event', 'template_copied')
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-secondary hover:border-is-primary hover:text-is-primary transition-all"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'COPIED' : 'COPY_TEMPLATE'}
    </button>
  )
}

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-is-border pb-10 mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="is-label">_05_TEMPLATES</span>
          <StatusPill color="gold">TEMPLATE_ACTIVE</StatusPill>
        </div>
        <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
          SIGNAL TEMPLATES
        </h1>
        <p className="font-body text-base text-is-secondary leading-relaxed max-w-2xl">
          Structured documents for auditing, scoring, and improving your career signals. Copy a template into your own editor and work through it at your own pace.
        </p>
      </div>

      {/* Template cards */}
      <div className="space-y-px bg-is-border">
        {templates.map(({ id, title, version, purpose, sections, tags, text }, index) => (
          <div key={id} className="bg-is-bg">
            {/* Card header */}
            <div className="border-b border-is-border px-6 py-4 bg-is-surface flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-semibold uppercase text-is-text">
                  {String(index + 1).padStart(2, '0')} // {title.toUpperCase()}
                </span>
                {version && (
                  <span className="font-mono text-xs text-is-secondary border border-is-border px-2 py-0.5">
                    V{version}
                  </span>
                )}
                <StatusPill color="gold">TEMPLATE_ACTIVE</StatusPill>
              </div>
              <CopyButton text={text} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-is-border">
              {/* Sections list */}
              <div className="lg:col-span-2 bg-is-bg p-6">
                <div className="is-label mb-4">SECTIONS</div>
                <div className="space-y-px">
                  {sections.map((section, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3 py-2 border border-is-border bg-is-surface"
                    >
                      <span className="font-mono text-xs text-is-primary w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-xs text-is-text uppercase tracking-wide">
                        {section.replace(/^\d+\. /, '').replace(/\s*&\s*/g, ' AND ').replace(/ /g, '_')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metadata */}
              <div className="bg-is-bg p-6 flex flex-col gap-6">
                {purpose && (
                  <div>
                    <div className="is-label mb-3">PURPOSE</div>
                    <p className="font-body text-sm text-is-text leading-relaxed">{purpose}</p>
                  </div>
                )}

                {tags.length > 0 && (
                  <div>
                    <div className="is-label mb-3">TAGS</div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="border border-is-border px-2 py-0.5 font-mono text-xs text-is-secondary">
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

      {/* Footer note */}
      <div className="mt-10 pt-6 border-t border-is-border">
        <p className="font-body text-sm text-is-secondary leading-relaxed max-w-2xl">
          <span className="font-mono text-is-primary">NOTE:</span> Templates are fill-in-the-blank markdown documents. Copy the full template and open it in your own text editor or note-taking tool. Do not invent evidence — use the recovery questions inside each section to surface real experience.
        </p>
      </div>
    </div>
  )
}
