# Codebase Map — Invisible Signals™

## Repository Root

```
invisible-signals/
├── .github/              ← AI context, contributing guides, CI (this folder)
├── assets/branding/      ← Design system: tokens, colors, identity specs
├── docs/                 ← Philosophy and conceptual documentation
├── examples/             ← Annotated weak-vs-strong examples
├── frameworks/           ← Hiring funnel stage guides
├── prompts/              ← AI prompts (auto-loaded by the site)
├── templates/            ← Reusable self-assessment templates
└── site/                 ← React SPA (the web application)
```

---

## Web Application (`site/`)

```
site/
├── index.html                      ← SPA shell; Google Fonts CDN link; mounts #root
├── package.json                    ← Dependencies; npm scripts
├── vite.config.js                  ← Build config; base:'./'; fs.allow:['..'] for prompt import
├── tailwind.config.js              ← Design tokens; is-* color namespace; font families
├── postcss.config.js               ← tailwindcss + autoprefixer
└── src/
    ├── main.jsx                    ← React 18 StrictMode mount
    ├── App.jsx                     ← HashRouter; all routes; layout shell; footer
    ├── index.css                   ← Tailwind directives; global styles; component classes
    ├── components/
    │   ├── NavBar.jsx              ← Global nav; NavLink active states; version badge
    │   └── StatusPill.jsx          ← Colored status badge (blue/coral/gold/dim)
    └── pages/
        ├── HomePage.jsx            ← Hero; Signal Stack™; Product modules; Principles
        ├── FrameworksPage.jsx      ← Hiring funnel 5-stage accordion
        ├── PromptsPage.jsx         ← import.meta.glob loader; frontmatter parser; CopyButton
        ├── AgentsPage.jsx          ← Coming soon placeholder
        └── WorkflowsPage.jsx       ← Coming soon placeholder
```

---

## Entry Points

| Entry Point | Purpose |
|---|---|
| `site/index.html` | HTML shell; everything starts here |
| `site/src/main.jsx` | React mount; wraps in StrictMode |
| `site/src/App.jsx` | Router + layout; defines all URL routes |
| `site/src/index.css` | Global CSS; Tailwind directives; brand overrides |

---

## Critical Modules

| Module | Why Critical | Risk of Change |
|---|---|---|
| `site/src/App.jsx` | All routing lives here | High — changing breaks navigation |
| `site/src/components/NavBar.jsx` | Global nav; active link styling | Medium — test all routes after changes |
| `site/tailwind.config.js` | Entire color/font system | High — breaking a token breaks visual output |
| `site/src/index.css` | Global radius override (`0 !important`); keyframes | Medium — affects all pages |
| `site/src/pages/PromptsPage.jsx` | `import.meta.glob` + frontmatter parser + CopyButton | Medium — parser is fragile regex |
| `site/vite.config.js` | `fs.allow: ['..']` enables prompt imports | High — removing breaks prompt loading |

---

## Shared Components

| Component | Props | Used In |
|---|---|---|
| `StatusPill` | `color` (blue/coral/gold/dim), `children` | HomePage, AgentsPage, WorkflowsPage, NavBar |
| `NavBar` | none (self-contained) | App.jsx (global layout) |

**Inline-only sub-components** (not in `components/`, not shared):
- `BarChart()` — defined inside `HomePage.jsx`
- `RadarRing()` — defined inside `HomePage.jsx`
- `CopyButton` — defined inside `PromptsPage.jsx`

---

## Where to Add New Code

| What you're adding | Where it goes |
|---|---|
| New page | `site/src/pages/NewPage.jsx` + register in `App.jsx` + add to `NavBar.jsx` |
| New shared component (used in 2+ pages) | `site/src/components/NewComponent.jsx` |
| Page-specific sub-component | Inline at top of the page file |
| New AI prompt | `prompts/{category}/name.md` (auto-discovered) |
| New framework doc | `frameworks/{topic}/name.md` |
| New example | `examples/{type}/name.md` |
| New template | `templates/name.md` |
| New design token | `assets/branding/tokens/invisible-signals-tokens.json` + `.css` + `tailwind.config.js` |
| New documentation | `docs/name.md` |

---

## Where NOT to Put Code

| Anti-pattern | Why |
|---|---|
| `site/src/data/` | Data co-location rule — keep page data inside page files |
| `site/src/store/` | No global state management |
| `site/src/utils/` | No utility abstraction layer |
| `site/src/hooks/` | No custom hooks abstraction (use inline `useState`/`useEffect`) |
| `site/src/types/` | No TypeScript |
| Root-level `*.jsx` | All React code lives under `site/src/` |
| Prompt files inside `site/` | Prompts belong at repo root under `prompts/` |

---

## Markdown Knowledge Base

| Directory | Contents | Auto-surfaced in site? |
|---|---|---|
| `prompts/` | 3 production AI prompts (resume + interview) | Yes — `PromptsPage.jsx` via `import.meta.glob` |
| `frameworks/hiring-funnel/` | 5 stage guides | Yes — data manually maintained in `FrameworksPage.jsx` |
| `docs/` | Philosophy, signal stack, responsible AI use | No — linked from README |
| `examples/` | Weak vs. strong bullet examples | No — referenced in `FrameworksPage.jsx` data |
| `templates/` | Signal scorecard template | No — distributed directly |

---

## Prompt File Schema

All prompts under `prompts/` must follow this structure:

```markdown
---
title: Human-readable title
category: resume | interview
tags: [tag1, tag2]
status: active | draft
version: "1.0"
---

## Overview (optional prose)

## Prompt

```text
<the actual prompt text here>
```
```

The `## Prompt` fenced code block is extracted by `parsePromptFile()` in `PromptsPage.jsx`.

---

## Design Token Locations

| Token format | File | Consumed by |
|---|---|---|
| JSON | `assets/branding/tokens/invisible-signals-tokens.json` | Source of truth |
| CSS custom props (`--is-*`) | `assets/branding/tokens/invisible-signals-tokens.css` | Browser, static reference |
| Tailwind classes (`is-*`) | `site/tailwind.config.js` | All JSX in `site/src/` |

---

## Legacy / Deprecated Areas

| Area | Status | Notes |
|---|---|---|
| `assets/branding/references/signal-logic-identity-prototype.html` | Reference only | HTML prototype for design exploration; not deployed |
| `assets/branding/references/signal-logic-identity-design.md` | Reference only | Design system spec in YAML+prose format |
| `assets/branding/colors/annyce-davis-palette.*` | Superseded | Canva Brand Kit source; `invisible-signals-tokens.*` is the active derivative |

---

## Generated / Build Output

| Path | Generated by | Gitignored? |
|---|---|---|
| `site/dist/` | `npm run build` | Yes |
| `site/node_modules/` | `npm install` | Yes |
