# Testing — Invisible Signals™

## Current Status

> **There is no test framework configured in this repository.**

Do not add tests without first configuring a test runner. The recommended option is **Vitest** (aligns with the existing Vite build toolchain).

---

## Recommended Setup (Not Yet Implemented)

```bash
# From site/
npm install --save-dev vitest @testing-library/react @testing-library/user-event jsdom
```

Add to `site/package.json` scripts:
```json
{
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest run --coverage"
}
```

Add to `site/vite.config.js`:
```js
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/test-setup.js',
}
```

---

## Testing Philosophy

Invisible Signals™ is a static knowledge-surface app with minimal logic. The primary test value is:

1. **Component rendering** — pages and components render without crashing
2. **Logic unit tests** — `parseFrontmatter()` and `parsePromptFile()` are pure functions and high-value test targets
3. **Integration** — routing resolves to correct pages

No backend, no database, no authentication — no need for API mocking, DB fixtures, or auth flows.

---

## Test Pyramid (When Implemented)

```
          ┌───────────────┐
          │   E2E (none)  │  Playwright — TODO if needed
          ├───────────────┤
          │  Integration  │  Route resolution, PromptsPage load
          ├───────────────┤
          │  Unit Tests   │  parseFrontmatter, parsePromptFile
          └───────────────┘
```

Prioritize unit tests for pure functions. Integration tests for page rendering. E2E only if the routing complexity warrants it.

---

## High-Value Test Targets

### `parseFrontmatter()` in `site/src/pages/PromptsPage.jsx`
Pure function. Takes a raw markdown string, returns a key-value object from YAML frontmatter.

```js
// Expected behavior
parseFrontmatter(`---
title: Resume Signal Analysis
category: resume
tags: [resume, signals]
---`) 
// → { title: 'Resume Signal Analysis', category: 'resume', tags: ['resume', 'signals'] }

// Edge cases to test:
// - Missing frontmatter block
// - Frontmatter with multi-value tags
// - Empty frontmatter
// - Malformed YAML
```

### `parsePromptFile()` in `site/src/pages/PromptsPage.jsx`
Pure function. Extracts title, category, tags, purpose, and the fenced code block under `## Prompt`.

```js
// Edge cases to test:
// - Missing ## Prompt section
// - Prompt block with no language specifier
// - File with no frontmatter
```

### `StatusPill` component
Renders with all four color variants: `blue`, `coral`, `gold`, `dim`.

### `NavBar` active state
Active route should have `border-is-primary/40 text-is-primary bg-is-primary/10` classes applied.

---

## Test Naming Conventions

```js
// Format: describe('ComponentOrFunction') > it('should behavior when condition')
describe('parseFrontmatter', () => {
  it('should return empty object when no frontmatter block present', () => { ... })
  it('should parse title and category correctly', () => { ... })
  it('should parse tag arrays correctly', () => { ... })
})

describe('StatusPill', () => {
  it('should render children as text', () => { ... })
  it('should apply blue color classes when color="blue"', () => { ... })
})
```

---

## Mocking Guidance

- **Clipboard API**: Mock `navigator.clipboard.writeText` — it is not available in jsdom
  ```js
  Object.assign(navigator, { clipboard: { writeText: vi.fn() } })
  ```
- **import.meta.glob**: Mock the glob result as a plain object mapping paths to raw strings
- **React Router**: Wrap components in `MemoryRouter` for route-dependent tests

---

## Coverage Expectations

> **TODO:** Define coverage thresholds once testing is configured.

Suggested baseline when testing is added:
- `parseFrontmatter`: 100% line coverage
- `parsePromptFile`: 100% line coverage
- Component render tests: all pages render without error

---

## Flaky Test Guidance

No tests exist yet. When added:
- Avoid `setTimeout`-based assertions; use `waitFor` from `@testing-library/react`
- The `CopyButton` 2-second timeout reset should be tested with `vi.useFakeTimers()`
- CSS animation tests are unreliable in jsdom — test class presence, not visual output

---

## Running Tests (Once Configured)

```bash
cd site
npm test              # Watch mode
npm run test:coverage # Single run with coverage report
```

Target specific files:
```bash
npx vitest PromptsPage
npx vitest src/components/StatusPill
```
