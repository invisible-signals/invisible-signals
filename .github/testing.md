# Testing — Invisible Signals™

## Current Status

> **101 tests passing across 5 files.** Run `npm test` from `site/` to run in watch mode, or `npx vitest run` for a single pass.

| File | Tests |
|---|---|
| `src/pages/PromptsPage.test.js` | 12 — `parseFrontmatter`, `parsePromptFile` |
| `src/components/StatusPill.test.jsx` | 9 — all color variants, dot indicator, defaults |
| `src/components/NavBar.test.jsx` | 2 — brand logo render, active link classes |
| `src/lib/promptSchema.test.js` | 57 — 7 assertions × 8 prompt files + 1 inventory check |
| `src/lib/signalAnalyzer.test.js` | 21 — `analyzeSignal()` scoring, dimensions, output shape |

---

## Setup

Installed dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jsdom`

`site/package.json` scripts:

```json
{
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest run --coverage"
}
```

`site/vite.config.js` test block:

```js
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/test-setup.js',
}
```

`site/src/test-setup.js` — mocks the clipboard API, which jsdom does not implement.

---

## Testing Philosophy

Invisible Signals™ is a static knowledge-surface app with minimal logic. The primary test value is:

1. **Component rendering** — pages and components render without crashing
2. **Logic unit tests** — `parseFrontmatter()` and `parsePromptFile()` are pure functions and high-value test targets
3. **Integration** — routing resolves to correct pages

No backend, no database, no authentication — no need for API mocking, DB fixtures, or auth flows.

---

## Test Pyramid

```
          ┌───────────────┐
          │   E2E (none)  │  Playwright — TODO if needed
          ├───────────────┤
          │  Integration  │  NavBar route-active state ✓  Prompt schema ✓
          ├───────────────┤
          │  Unit Tests   │  parseFrontmatter ✓  parsePromptFile ✓  StatusPill ✓
          └───────────────┘
```

Prioritize unit tests for pure functions. Integration tests for page rendering. E2E only if the routing complexity warrants it.

---

## High-Value Test Targets

### `parseFrontmatter()` — `site/src/lib/parsePrompts.js` ✓

Exported from `parsePrompts.js` (shared lib). Pure function — takes a raw markdown string, returns a key-value object from YAML frontmatter. Covered cases: missing block, title/category parsing, block-style tag arrays, empty block, value whitespace trimming.

### `parsePromptFile()` — `site/src/lib/parsePrompts.js` ✓

Exported from `parsePrompts.js` (shared lib). Pure function — extracts id, title, category, tags, purpose, and the fenced code block under `## Prompt`. Covered cases: id from path, frontmatter extraction, prompt text extraction, missing `## Prompt` section, missing frontmatter fallbacks, purpose paragraph.

### `StatusPill` — `site/src/components/StatusPill.test.jsx` ✓

All four color variants (`blue`, `coral`, `gold`, `dim`), dot indicator presence/absence, default prop, unknown color fallback.

### `NavBar` — `site/src/components/NavBar.test.jsx` ✓

Brand logo render, active link classes (`text-is-primary`) for the Signal Stack route. Wrapped in `MemoryRouter` with `initialEntries`.

### Prompt Schema — `site/src/lib/promptSchema.test.js` ✓

Validates every `prompts/**/*.md` file against the required frontmatter schema at build time via `import.meta.glob`. Generates 7 assertions per prompt file (currently 8 files = 56 tests) plus 1 inventory check. Covered cases: at least one prompt exists, all required keys present (`title`, `version`, `status`, `category`, `tags`), valid `status` values, valid `category` values, non-empty `tags` array, `## Purpose` section present, `## Prompt` section with fenced code block present, no empty `[]` placeholder brackets in the prompt body.

### `analyzeSignal()` — `site/src/lib/signalAnalyzer.test.js` ✓

Exported from `signalAnalyzer.js`. Tests the client-side analysis engine across all supported input types. Covered cases: strong/weak/mixed resume bullets, ownership and quantification dimension scoring, interview `starCompleteness` dimension, leadership dimension presence, positive/negative phrase detection, improvement suggestion count and shape, required output fields (`dimensions`, `overall`, `narrativeParts`, `miniStats`, `improvements`), score bounds (0–100).

---

## Prompt Eval (Python)

A separate Python-based evaluation system lives under `eval/`. It is **not** part of the Vitest suite — it requires a running [Ollama](https://ollama.com) server.

```bash
# From repo root
cd eval
pip install -r requirements.txt
cp .env.example .env   # set OLLAMA_BASE_URL and OLLAMA_MODEL

# Run all prompt evals
python run_eval.py

# Run a single prompt
python run_eval.py --prompt resume-signal-analysis

# Run with LLM-as-judge scoring
python run_eval.py --judge

# Regenerate fixtures
python generate_fixtures.py
```

Results are written as JSON to `eval/results/`. Fixtures live in `eval/fixtures/{category}/{prompt-id}/`. The eval checks that the model's output contains all expected section headers defined in `EXPECTED_SECTIONS` in `run_eval.py`.

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

- **import.meta.glob**: Vitest resolves `import.meta.glob` natively via the Vite transform pipeline — no manual mocking required. The actual markdown files in `prompts/` are loaded during the test run.
- **React Router**: Wrap components in `MemoryRouter` for route-dependent tests

---

## Coverage Expectations

Baseline targets:

- `parseFrontmatter`: 100% line coverage
- `parsePromptFile`: 100% line coverage
- Component render tests: all pages render without error

Run `npm run test:coverage` to generate a coverage report (requires `@vitest/coverage-v8` to be added as a dev dependency).

---

## Flaky Test Guidance

- Avoid `setTimeout`-based assertions; use `waitFor` from `@testing-library/react`
- The `CopyButton` 2-second timeout reset should be tested with `vi.useFakeTimers()`
- CSS animation tests are unreliable in jsdom — test class presence, not visual output

---

## Running Tests

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
