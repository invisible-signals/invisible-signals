# Codebase Map — Invisible Signals™

## Repository Root

```
invisible-signals/
├── .github/              ← AI context, contributing guides, CI (this folder)
├── assets/branding/      ← Design system: tokens, colors, identity specs
├── docs/                 ← Philosophy and conceptual documentation
├── eval/                 ← Python prompt quality evaluator + fixtures + results
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
    │   ├── StatusPill.jsx          ← Colored status badge (blue/coral/gold/dim)
    │   ├── CopyButton.jsx          ← Clipboard copy button; props: text, clarityEvent?
    │   ├── PageHeader.jsx          ← Standard page banner; props: navLabel, pillColor, pillText, title, description, children?
    │   └── TagChip.jsx             ← Metadata tag badge; prop: tag (normalized to UPPER_SNAKE_CASE)
    ├── lib/
    │   ├── parsePrompts.js         ← Frontmatter + prompt body parser (used by PromptsPage + schema tests)
    │   ├── parseSignalStack.js     ← Parses signal-stack.md into layer objects
    │   ├── signalAnalyzer.js       ← Client-side 5-dimension analysis engine
    │   ├── signalAnalyzer.test.js  ← Unit tests for analyzeSignal()
    │   ├── buildSearchIndex.js     ← Aggregates prompts + frameworks + templates into search index
    │   ├── signalDictionaries.js   ← Keyword lists and scoring weights for signal analysis
    │   ├── layerIcons.js           ← LAYER_ICONS map (1–8 → Lucide icon component); shared by SignalStack* pages
    │   └── promptSchema.test.js    ← Validates all prompts/**/*.md frontmatter at build time
    └── pages/
        ├── HomePage.jsx                ← Hero; Signal Stack™; Product modules; Principles
        ├── FrameworksPage.jsx          ← Hiring funnel 5-stage accordion
    │   ├── PromptsPage.jsx             ← import.meta.glob loader; frontmatter parser; copy UI
        ├── TemplatesPage.jsx           ← Signal scorecard + self-assessment templates
        ├── SearchPage.jsx              ← Full-text search across prompts and frameworks
        ├── SignalAnalyzerPage.jsx      ← Interactive signal analyzer; text input → 5-dim radar scores
        ├── SignalStackLayout.jsx       ← Nested layout shell for /#/signal-stack routes
        ├── SignalStackOverviewPage.jsx ← Signal Stack™ 8-layer overview
        ├── SignalStackLayerPage.jsx    ← Individual layer deep-dive (/:layer)
        └── PrivacyPage.jsx             ← Privacy policy; Clarity analytics disclosure
```

---

## Prompt Evaluator (`eval/`)

```
eval/
├── run_eval.py             ← Entry point; runs prompts against fixtures via Ollama
├── generate_fixtures.py    ← Generates fixture JSON files via Ollama
├── requirements.txt        ← Python deps: openai, rich, python-dotenv
├── .env.example            ← OLLAMA_BASE_URL + OLLAMA_MODEL config template
├── fixtures/               ← Input JSON per prompt (“scenario” objects with inputs + evalCriteria)
│   ├── interview/
│   │   ├── behavioral-answer-diagnostic/
│   │   └── skeptical-hiring-manager/
│   └── resume/
│       └── resume-signal-analysis/
└── results/                ← JSON output from eval runs (gitignored except committed samples)
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
| `site/src/pages/PromptsPage.jsx` | `import.meta.glob` + frontmatter parser | Medium — parser is fragile regex |
| `site/src/lib/signalAnalyzer.js` | Powers SignalAnalyzerPage; score/narrative output | Medium — changing scoring breaks analyzer page |
| `site/vite.config.js` | `fs.allow: ['..']` enables prompt imports | High — removing breaks prompt loading |

---

## Shared Components

| Component | Props | Used In |
|---|---|---|
| `StatusPill` | `color` (blue/coral/gold/dim), `children` | HomePage, SignalStackOverviewPage, NavBar, PromptsPage, TemplatesPage, FrameworksPage |
| `NavBar` | none (self-contained) | App.jsx (global layout) |
| `CopyButton` | `text` (required), `clarityEvent`? | HomePage, PromptsPage, TemplatesPage |
| `PageHeader` | `navLabel`, `pillColor`, `pillText`, `title`, `description`, `children`? | FrameworksPage, PromptsPage, TemplatesPage |
| `TagChip` | `tag` | PromptsPage, TemplatesPage |

**Inline-only sub-components** (not in `components/`, not shared):
- `SignalAnalysisPanel()` — defined inside `HomePage.jsx`
- `BarChart()` — defined inside `HomePage.jsx`
- `RadarRing()` — defined inside `HomePage.jsx`

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
| New eval fixture | `eval/fixtures/{category}/{prompt-id}/{scenario}.json` |
| New expected output section (eval) | `EXPECTED_SECTIONS` dict in `eval/run_eval.py` |

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
| `eval/fixtures/` | Prompt eval input scenarios (JSON) | No — used by `eval/run_eval.py` only |

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
