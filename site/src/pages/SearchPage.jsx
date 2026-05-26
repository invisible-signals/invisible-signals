import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { searchIndex } from '../lib/buildSearchIndex.js'

const TYPE_CONFIG = {
  prompt:    { label: 'PROMPT',    color: 'text-is-primary',   border: 'border-is-primary/30'   },
  template:  { label: 'TEMPLATE',  color: 'text-is-secondary', border: 'border-is-secondary/30' },
  framework: { label: 'FRAMEWORK', color: 'text-is-warning',   border: 'border-is-warning/30'   },
}

const ALL_TYPES = ['prompt', 'template', 'framework']

function matchesQuery(item, q) {
  const hay = [item.title, item.meta, item.excerpt, item.tags.join(' ')].join(' ').toLowerCase()
  return hay.includes(q)
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const q = (searchParams.get('q') || '').trim().toLowerCase()

  const [activeTypes, setActiveTypes] = useState(new Set(ALL_TYPES))

  function toggleType(type) {
    setActiveTypes((prev) => {
      const next = new Set(prev)
      if (next.has(type)) {
        if (next.size === 1) return prev // keep at least one
        next.delete(type)
      } else {
        next.add(type)
      }
      return next
    })
  }

  const matches = useMemo(
    () => (q ? searchIndex.filter((item) => matchesQuery(item, q)) : []),
    [q]
  )

  const filtered = useMemo(
    () => matches.filter((item) => activeTypes.has(item.type)),
    [matches, activeTypes]
  )

  const countByType = useMemo(
    () => Object.fromEntries(ALL_TYPES.map((t) => [t, matches.filter((i) => i.type === t).length])),
    [matches]
  )

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Page header */}
      <div className="border-b border-is-border pb-6 mb-8">
        <span className="is-label">SIGNAL_QUERY</span>
        {q ? (
          <p className="font-mono text-xs text-is-dim mt-1 tracking-widest">
            QUERY: <span className="text-is-text">{q.toUpperCase()}</span>
          </p>
        ) : null}
      </div>

      <div className="flex gap-6 items-start">
        {/* Sidebar — QUERY_FILTERS */}
        <aside className="w-52 shrink-0">
          <div className="is-panel p-4">
            <span className="is-label block mb-4">QUERY_FILTERS</span>
            <div className="flex flex-col gap-3">
              {ALL_TYPES.map((type) => {
                const cfg = TYPE_CONFIG[type]
                const count = countByType[type] ?? 0
                const active = activeTypes.has(type)
                return (
                  <label
                    key={type}
                    className="flex items-center justify-between gap-2 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => toggleType(type)}
                        className="appearance-none w-3 h-3 border border-is-border bg-is-surface checked:bg-is-primary checked:border-is-primary transition-colors cursor-pointer"
                      />
                      <span className={`font-mono text-xs tracking-widest uppercase transition-colors ${active ? cfg.color : 'text-is-dim'}`}>
                        {cfg.label}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-is-dim tabular-nums">{count}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </aside>

        {/* Main results area */}
        <div className="flex-1 min-w-0">
          {/* Results status bar */}
          <div className="flex items-center justify-between mb-6">
            {!q ? (
              <span className="font-mono text-xs text-is-dim tracking-widest">AWAITING_QUERY</span>
            ) : filtered.length === 0 ? (
              <span className="font-mono text-xs text-is-alert tracking-widest">
                NO_SIGNAL_FOUND // QUERY: {q.toUpperCase()}
              </span>
            ) : (
              <span className="font-mono text-xs text-is-dim tracking-widest">
                Showing{' '}
                <span className="text-is-text">{filtered.length}</span>
                {' '}signal{filtered.length !== 1 ? 's' : ''} found // PROTOCOL:{' '}
                <span className="text-is-secondary">SCAN_COMPLETE</span>
              </span>
            )}
            {filtered.length > 0 && (
              <span className="font-mono text-xs text-is-dim tracking-widest">SORT: RELEVANCE</span>
            )}
          </div>

          {/* Empty-query state */}
          {!q && (
            <div className="is-panel p-12 flex flex-col items-center justify-center gap-3">
              <span className="font-mono text-2xl text-is-border">···</span>
              <span className="is-label">ENTER_QUERY_TO_SCAN</span>
              <p className="font-mono text-xs text-is-dim text-center max-w-xs">
                Search across prompts, templates, and frameworks. Use the input in the nav to begin.
              </p>
            </div>
          )}

          {/* Results list */}
          {filtered.length > 0 && (
            <div className="flex flex-col gap-3">
              {filtered.map((item) => {
                const cfg = TYPE_CONFIG[item.type]
                const excerpt = item.excerpt.length > 140
                  ? item.excerpt.slice(0, 140).trimEnd() + '…'
                  : item.excerpt
                return (
                  <div key={`${item.type}-${item.id}`} className={`is-panel p-5 border-l-2 ${cfg.border}`}>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className={`font-mono text-xs uppercase tracking-widest ${cfg.color}`}>
                        {cfg.label} //
                      </span>
                      <Link
                        to={item.route}
                        className="font-mono text-xs uppercase tracking-widest text-is-dim hover:text-is-primary transition-colors whitespace-nowrap shrink-0"
                      >
                        VIEW_SIGNAL →
                      </Link>
                    </div>
                    <h2 className="font-mono text-sm font-semibold uppercase text-is-text mb-2 tracking-wide">
                      {item.title}
                    </h2>
                    {excerpt && (
                      <p className="font-mono text-xs text-is-dim leading-relaxed mb-3">
                        {excerpt}
                      </p>
                    )}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2 py-0.5 bg-is-surface-low border border-is-border text-is-dim uppercase tracking-widest"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* No results state */}
          {q && filtered.length === 0 && matches.length > 0 && (
            <div className="is-panel p-8 text-center">
              <span className="is-label block mb-2">FILTER_MISMATCH</span>
              <p className="font-mono text-xs text-is-dim">
                {matches.length} result{matches.length !== 1 ? 's' : ''} found but hidden by active filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
