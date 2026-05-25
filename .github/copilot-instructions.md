# Copilot Instructions — Invisible Signals™

## Project Purpose
Invisible Signals™ is an open-source career intelligence toolkit by Annyce Davis. It helps engineers and technical leaders translate their experience into clear, credible hiring signals. Core thesis: engineers fail interviews not from lack of skill, but from poor signal communication.

Two distinct artifacts live in this repo:
- **Markdown knowledge base** — frameworks, prompts, templates, examples under `docs/`, `frameworks/`, `prompts/`, `examples/`, `templates/`
- **React web app** — static site under `site/` that surfaces the knowledge base

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 + JSX |
| Build | Vite 5 |
| Routing | React Router DOM v6, HashRouter |
| Styling | Tailwind CSS v3, custom `is-*` token namespace |
| Icons | lucide-react |
| PostCSS | postcss + autoprefixer |
| Hosting | Static (GitHub Pages compatible) |
| Languages | JavaScript (JSX), CSS, HTML, Markdown |

**No TypeScript. No backend. No database. No authentication.**

---

## Architecture Pattern
- Single-page app with `HashRouter` (no server routing required)
- All page data (arrays, configs) is co-located within each page file — no separate data layer
- Prompts are loaded via `import.meta.glob('../../../prompts/**/*.md', { as: 'raw' })` at build time
- Layout shell in `App.jsx`; pages render inside a `<main>` flex container
- Design tokens flow: `invisible-signals-tokens.json` → `tailwind.config.js` → Tailwind classes

---

## Coding Standards

- **JSX only** — no TypeScript, no `.ts` files
- **Functional components only** — no class components
- **No external state management** — use `useState`/`useEffect` only
- **Tailwind-first styling** — use `is-*` color tokens, never hardcode hex values in JSX
- Component classes defined in `index.css` under `@layer components`: `.is-panel`, `.is-label`, `.is-btn-primary`, `.is-btn-ghost`
- Global radius override: `border-radius: 0 !important` everywhere — **never add rounded corners**
- Use `lucide-react` for all icons

---

## Naming Conventions

| Context | Convention | Example |
|---|---|---|
| Tailwind color tokens | `is-{name}` | `is-primary`, `is-alert`, `is-bg-deep` |
| CSS custom properties | `--is-{name}` | `--is-primary`, `--is-background` |
| Page components | PascalCase + "Page" | `HomePage.jsx`, `PromptsPage.jsx` |
| Shared components | PascalCase | `NavBar.jsx`, `StatusPill.jsx` |
| Nav label strings | `_NN_SCREAMING_SNAKE` | `_01_FRAMEWORKS` |
| Status/ID strings | SCREAMING_SNAKE_CASE | `SIGNAL_ACTIVE`, `RESUME_REVIEW` |
| Routes | lowercase kebab | `/frameworks`, `/prompts` |
| Markdown frontmatter | lowercase keys | `title`, `category`, `tags` |

---

## What NOT To Do

- **Do not add TypeScript** — this is a JS-only project
- **Do not add a backend, API, or database**
- **Do not add rounded corners** — zero border radius is a hard brand constraint
- **Do not use `<img>` tags in JSX without `alt` attributes**
- **Do not hardcode colors as hex values** in JSX — use Tailwind `is-*` tokens
- **Do not add new npm dependencies without strong justification** — keep the bundle lean
- **Do not create separate data files** — keep page data co-located in the page component
- **Do not use class components or lifecycle methods**
- **Do not add a router other than HashRouter** — static hosting constraint
- **Do not invent content** in markdown docs — this is a knowledge base rooted in Annyce Davis's source material; add TODO markers instead

---

## PR Expectations

- PRs must not break the Vite build (`npm run build` passes)
- New pages must be registered in `App.jsx` routes and `NavBar.jsx` nav links
- New prompts must follow frontmatter schema: `title`, `category`, `tags`, `status`, `version`
- Tailwind classes must use only documented `is-*` tokens for colors
- Brand visual constraints (zero radius, dark backgrounds, JetBrains Mono for headings) must be maintained

---

## Testing Expectations

**Vitest is configured.** Run `npm test` from `site/` to execute the test suite. See [testing.md](testing.md) for full guidance.

- Test runner: Vitest with `jsdom` environment
- Setup file: `site/src/test-setup.js` (mocks clipboard API)
- High-value targets: `parseFrontmatter()`, `parsePromptFile()`, `StatusPill` variants
- Scripts: `npm test`, `npm run test:ui`, `npm run test:coverage`

---

## Dependency Rules

- React, React Router DOM, lucide-react → production deps
- Vite, Tailwind, PostCSS, @vitejs/plugin-react → dev deps only
- Vitest, @testing-library/react, @testing-library/user-event, jsdom → dev deps only
- No UI component libraries (MUI, Chakra, shadcn) — hand-craft with Tailwind
- No markdown parsing libraries — PromptsPage uses a hand-written regex parser

---

## Security Constraints

- No secrets, API keys, or tokens in any file
- No user input is sent to any server (static site only)
- Clipboard access via `navigator.clipboard.writeText()` is the only browser API used

---

## Preferred Implementation Patterns

```jsx
// Data co-location in page files
const stages = [
  { id: 'RESUME_REVIEW', label: '01_RESUME_REVIEW', signals: [...] },
];

// Inline sub-components for page-specific visuals
function RadarRing() { return <div className="...">...</div>; }

// StatusPill usage
<StatusPill color="gold">INITIALIZING</StatusPill>
<StatusPill color="blue">SIGNAL_ACTIVE</StatusPill>

// Tailwind panel pattern
<div className="is-panel p-4">
  <span className="is-label">SECTION_HEADER</span>
</div>
```

---

## Anti-Patterns to Avoid

- Importing `gray-matter` or any markdown parser — use the hand-written parser in `PromptsPage.jsx`
- Using `BrowserRouter` — will break on static hosting
- Adding `className="rounded-*"` — violates zero-radius brand constraint
- Using `style={{ color: '#70a1ff' }}` — use `text-is-primary` instead
- Creating `src/data/` or `src/store/` directories — keep data in page files
- Adding `console.log` statements to committed code
