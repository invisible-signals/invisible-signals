# AGENTS.md — AI Coding Agent Guide

## Read First

Before making any changes, read these files in order:

1. [.github/copilot-instructions.md](copilot-instructions.md) — coding rules, naming conventions, anti-patterns
2. [.github/architecture.md](architecture.md) — system overview and folder structure
3. [.github/codebase-map.md](codebase-map.md) — where to add new code
4. [docs/philosophy.md](../docs/philosophy.md) — project values (affects all content decisions)

---

## Build & Validation Commands

All commands run from `site/`:

```bash
cd site

# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build (validates no import errors, Tailwind compilation)
npm run build

# Preview production build locally
npm run preview
```

**Build must pass before any PR is considered complete.**

---

## How to Approach Tasks

### Adding a new page

1. Create `site/src/pages/NewPage.jsx`
2. Add route to `App.jsx`: `<Route path="/new-page" element={<NewPage />} />`
3. Add nav link to `NavBar.jsx` nav links array
4. Use `StatusPill` with `color="gold"` if the page is not fully implemented
5. Co-locate all page data arrays inside the page file

### Adding a new prompt

1. Create `prompts/{category}/your-prompt.md`
2. Add YAML frontmatter: `title`, `category`, `tags`, `status`, `version`
3. Add a `## Prompt` section with a fenced code block containing the prompt text
4. `PromptsPage.jsx` auto-discovers it via `import.meta.glob` — no registration needed

### Adding a new framework doc

1. Create `frameworks/{topic}/filename.md`
2. Update `frameworks/README.md` index
3. If surfacing in the site, update `FrameworksPage.jsx` `stages` array

### Modifying brand/design

1. Read `assets/branding/IDENTITY.md` first
2. Token changes go in all three places: `invisible-signals-tokens.json`, `invisible-signals-tokens.css`, `tailwind.config.js`
3. Never break zero-radius constraint

---

## Validating Changes

| Change type | Validation |
|---|---|
| Any JSX edit | `npm run build` passes |
| New prompt file | Appears in `npm run dev` → /prompts page |
| Tailwind token change | Token appears correctly in browser, `npm run build` passes |
| Markdown doc | Renders correctly in GitHub markdown preview |
| New npm dependency | `npm install && npm run build` both pass |

---

## Risky Edit Areas — Proceed with Caution

| Area | Risk | Caution |
|---|---|---|
| `site/src/App.jsx` | Breaks all routing | Verify all existing routes still resolve |
| `site/src/components/NavBar.jsx` | Breaks navigation across all pages | Test all nav links after changes |
| `site/tailwind.config.js` | Breaks entire color system | Verify `is-*` tokens still resolve |
| `site/src/index.css` | Global style impact | Test all pages after edits |
| `site/vite.config.js` | `fs.allow: ['..']` enables prompt import from repo root — do not remove | Verify PromptsPage still loads after changes |
| `prompts/**/*.md` frontmatter | Breaks `parsePromptFile()` parser | Follow exact schema |

---

## DO NOT

- **DO NOT** add TypeScript, `.ts`, or `.tsx` files
- **DO NOT** add a backend, server, or database
- **DO NOT** switch from `HashRouter` to `BrowserRouter`
- **DO NOT** add `rounded-*` Tailwind classes anywhere
- **DO NOT** hardcode hex color values in JSX; use `is-*` Tailwind tokens
- **DO NOT** move page data arrays to a `src/data/` directory
- **DO NOT** add authentication flows
- **DO NOT** add a separate markdown parser library; use the existing hand-written parser in `PromptsPage.jsx`
- **DO NOT** invent content in `docs/`, `frameworks/`, `prompts/`, `examples/`, or `templates/` — all content must be grounded in Annyce Davis's source material or clearly marked TODO
- **DO NOT** modify `LICENSE`, `NOTICE`, `CODE_OF_CONDUCT.md` without explicit instruction
- **DO NOT** push secrets, API keys, or tokens

---

## Definition of Done

- [ ] `npm run build` passes with no errors or warnings
- [ ] No hardcoded hex values in JSX
- [ ] No `rounded-*` classes added
- [ ] New prompts auto-appear on `/prompts` page
- [ ] New pages are registered in routes and NavBar
- [ ] Markdown content follows brand voice (technical, precise, no hype)
- [ ] No fabricated domain content — use TODOs for unknowns

---

## Safe Refactoring Guidance

**Safe:**

- Extracting a repeated JSX pattern into a new component in `site/src/components/`
- Updating label strings (SCREAMING_SNAKE_CASE format preserved)
- Adding new `is-*` Tailwind tokens without removing existing ones
- Adding new prompt or framework markdown files
- Updating text content in existing pages

**Requires review:**

- Changing the `import.meta.glob` path in `PromptsPage.jsx`
- Changing `vite.config.js` `base` or `server.fs.allow`
- Reordering or renaming routes in `App.jsx`
- Changing `tailwind.config.js` font families
- Modifying shared component props (`StatusPill`, `NavBar`)

**Do not do autonomously:**

- Removing or renaming existing routes
- Changing the HashRouter configuration
- Modifying any file under `assets/branding/logos/`
- Updating `LICENSE` or `NOTICE`
