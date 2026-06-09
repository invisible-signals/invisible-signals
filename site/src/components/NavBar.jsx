import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'

const signalStackLink = { to: '/signal-stack', label: 'SIGNAL_STACK' }

export default function NavBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  function handleSearch(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  useEffect(() => {
    if (!mobileOpen) return

    function onDocClick(e) {
      const panel = panelRef.current
      const btn = buttonRef.current
      if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) {
        setMobileOpen(false)
      }
    }

    function onKey(e) {
      if (e.key === 'Escape') setMobileOpen(false)
    }

    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('touchstart', onDocClick)
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('touchstart', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <nav className="relative border-b border-is-border bg-is-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center min-w-0 h-12 gap-3 sm:gap-4 md:gap-8">
        {/* Logo */}
        <NavLink to="/" className="font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0">
          Invisible Signals&#x2122;
        </NavLink>

        {/* Separator */}
        <span className="hidden sm:block w-px h-4 bg-is-border shrink-0" />

        {/* Signal Stack — highlighted primary link */}
        <NavLink
          to={signalStackLink.to}
          className={({ isActive }) =>
            `hidden sm:flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all border ${
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
        <span className="hidden sm:block w-px h-4 bg-is-border shrink-0" />

        {/* Secondary nav links */}
        <div className="hidden md:flex items-center">
          {[
            { to: '/frameworks', label: '_01_FRAMEWORKS' },
            { to: '/prompts', label: '_02_PROMPTS' },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${
                  isActive ? 'text-is-text' : 'text-is-secondary hover:text-is-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-0 border border-is-border bg-is-surface min-w-0">
          <span className="pl-2 sm:pl-3 pr-2 flex items-center text-is-secondary">
            <Search size={12} />
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="QUERY_SYSTEM..."
            className="bg-transparent font-mono text-xs tracking-widest text-is-text placeholder:text-is-dim outline-none py-1.5 pr-3 w-24 sm:w-40 md:w-48 min-w-0"
          />
        </form>

        {/* Mobile hamburger (visible < md) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            ref={buttonRef}
            className="p-2 text-is-text"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <span className="font-mono text-xs text-is-dim tracking-widest">V0.1</span>
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

      {mobileOpen && (
        <div ref={panelRef} className="md:hidden absolute inset-x-0 top-full bg-is-bg border-t border-is-border z-40">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex flex-col gap-2">
            <NavLink to="/signal-stack" onClick={() => setMobileOpen(false)} className="px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-text">
              SIGNAL_STACK
            </NavLink>

            <div className="flex flex-col">
              <NavLink to="/frameworks" onClick={() => setMobileOpen(false)} className="px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text">
                _01_FRAMEWORKS
              </NavLink>
              <NavLink to="/prompts" onClick={() => setMobileOpen(false)} className="px-3 py-2 font-mono text-sm uppercase tracking-widest text-is-secondary hover:text-is-text">
                _02_PROMPTS
              </NavLink>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs text-is-dim tracking-widest">V0.1</span>
              <a href="https://github.com/invisible-signals/invisible-signals" target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-primary text-is-primary hover:bg-is-primary hover:text-is-bg-deep transition-all">
                DEPLOY_SIGNAL
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

  
