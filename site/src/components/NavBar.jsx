import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

const signalStackLink = { to: '/signal-stack', label: 'SIGNAL_STACK' }

const links = [
  { to: '/frameworks', label: '_01_FRAMEWORKS' },
  { to: '/prompts',    label: '_02_PROMPTS'    },
  { to: '/templates',  label: '_03_TEMPLATES'  },
]

export default function NavBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <nav className="border-b border-is-border bg-is-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-12 gap-8">
        {/* Logo */}
        <NavLink to="/" className="font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0">
          Invisible Signals&#x2122;
        </NavLink>

        {/* Separator */}
        <span className="w-px h-4 bg-is-border shrink-0" />

        {/* Signal Stack — highlighted primary link */}
        <NavLink
          to={signalStackLink.to}
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all border ${
              isActive
                ? 'border-is-primary text-is-primary bg-is-primary/10'
                : 'border-is-primary/40 text-is-primary hover:bg-is-primary/10 hover:border-is-primary'
            }`
          }
        >
          <span className="signal-pulse inline-block w-1.5 h-1.5 bg-is-primary shrink-0" />
          {signalStackLink.label}
        </NavLink>

        {/* Separator */}
        <span className="w-px h-4 bg-is-border shrink-0" />

        {/* Nav links */}
        <div className="flex items-center gap-1 overflow-x-auto flex-1 min-w-0">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors border ${
                  isActive
                    ? 'border-is-primary/40 text-is-primary bg-is-primary/10'
                    : 'border-transparent text-is-dim hover:text-is-text hover:border-is-border'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-0 border border-is-border bg-is-surface shrink-0">
          <span className="pl-3 pr-2 flex items-center text-is-dim">
            <Search size={12} />
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="QUERY_SYSTEM..."
            className="bg-transparent font-mono text-xs tracking-widest text-is-text placeholder:text-is-dim outline-none py-1.5 pr-3 w-40 sm:w-48"
          />
        </form>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block font-mono text-xs text-is-dim tracking-widest">V0.1</span>
          <a
            href="https://github.com/invisible-signals/invisible-signals"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all"
          >
            DEPLOY_SIGNAL
          </a>
        </div>
      </div>
    </nav>
  )
}
