import { Outlet, NavLink } from 'react-router-dom'
import {
  Cpu, GitCommit, UserCheck, MessageSquare,
  TrendingUp, Users, Compass, Award, LayoutGrid,
} from 'lucide-react'
import { parseSignalStack } from '../lib/parseSignalStack.js'
import rawSignalStack from '../../../docs/signal-stack.md?raw'

const { frontmatter, scoringRows, layers } = parseSignalStack(rawSignalStack)

const LAYER_ICONS = {
  1: Cpu,
  2: GitCommit,
  3: UserCheck,
  4: MessageSquare,
  5: TrendingUp,
  6: Users,
  7: Compass,
  8: Award,
}

export default function SignalStackLayout() {
  return (
    <div
      className="flex min-h-[calc(100vh-3rem)]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(38,38,38,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-is-border bg-is-surface sticky top-12 self-start h-[calc(100vh-3rem)] overflow-y-auto">
        <div className="px-6 py-5 border-b border-is-border">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-is-text">
            SIGNAL STACK
          </div>
          <div className="font-mono text-[10px] text-is-dim mt-0.5 tracking-widest">
            L1–L8 ANALYSIS
          </div>
        </div>

        <nav className="flex-1 py-2">
          <NavLink
            to="/signal-stack"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${
                isActive
                  ? 'text-is-primary border-r-2 border-is-primary bg-is-surface-low'
                  : 'text-is-text hover:bg-is-surface-high hover:text-is-primary'
              }`
            }
          >
            <LayoutGrid size={13} className="shrink-0" />
            <span>Overview</span>
          </NavLink>

          {layers.map(({ num, slug, name }) => {
            const Icon = LAYER_ICONS[num]
            const label = `L${num} // ${name.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '')}`
            return (
              <NavLink
                key={slug}
                to={`/signal-stack/${slug}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-is-primary border-r-2 border-is-primary bg-is-surface-low'
                      : 'text-is-text hover:bg-is-surface-high hover:text-is-primary'
                  }`
                }
              >
                {Icon && <Icon size={13} className="shrink-0" />}
                <span className="truncate">{label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="px-6 py-5 border-t border-is-border">
          <button className="w-full border border-is-primary text-is-primary font-mono text-[10px] uppercase tracking-widest py-2.5 hover:bg-is-primary/10 transition-colors">
            REBOOT_SESSION
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <Outlet context={{ frontmatter, scoringRows, layers }} />
      </div>
    </div>
  )
}
