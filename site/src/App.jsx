import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import FrameworksPage from './pages/FrameworksPage.jsx'
import PromptsPage from './pages/PromptsPage.jsx'
import AgentsPage from './pages/AgentsPage.jsx'
import WorkflowsPage from './pages/WorkflowsPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-is-bg-deep">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/frameworks" element={<FrameworksPage />} />
            <Route path="/prompts" element={<PromptsPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/workflows" element={<WorkflowsPage />} />
          </Routes>
        </main>
        <footer className="border-t border-is-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="font-mono text-xs text-is-dim">© 2026 INVISIBLE_SIGNALS™ · IS_RIGHTS_RESERVED</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/invisible-signals/invisible-signals" target="_blank" rel="noreferrer" className="font-mono text-xs text-is-dim hover:text-is-text transition-colors">GITHUB</a>
            <a href="https://github.com/invisible-signals/invisible-signals/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noreferrer" className="font-mono text-xs text-is-dim hover:text-is-text transition-colors">CODE_OF_CONDUCT</a>
            <a href="https://github.com/invisible-signals/invisible-signals/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="font-mono text-xs text-is-dim hover:text-is-text transition-colors">CONTRIBUTING</a>
            <span className="font-mono text-xs text-is-dim">SECURITY: APACHE-2.0 // OPEN_SOURCE_LICENSED</span>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}
