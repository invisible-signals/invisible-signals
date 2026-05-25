import { NavLink } from 'react-router-dom'

const links = [
  { to: '/frameworks', label: '_01_FRAMEWORKS' },
  { to: '/prompts',    label: '_02_PROMPTS'    },
  { to: '/agents',     label: '_03_AGENTS'     },
  { to: '/workflows',  label: '_04_WORKFLOWS'  },
  { to: '/templates',  label: '_05_TEMPLATES'  },
]

export default function NavBar() {
  return (
    <nav className="border-b border-is-border bg-is-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-12 gap-8">
        {/* Logo */}
        <NavLink to="/" className="font-mono text-xs font-semibold tracking-widest text-is-text uppercase whitespace-nowrap shrink-0">
          Invisible Signals&#x2122;
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

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0 ml-auto">
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
