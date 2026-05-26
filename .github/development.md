# Development Guide — Invisible Signals™

## Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Node.js | ≥ 18.x | 20.x recommended |
| npm | ≥ 9.x | bundled with Node |
| Git | any recent | — |

No other global tools required.

---

## Environment Setup

```bash
# Clone repository
git clone https://github.com/invisible-signals/invisible-signals.git
cd invisible-signals

# Install site dependencies
cd site
npm install

# Start dev server
npm run dev
# → http://localhost:5173
```

The dev server hot-reloads on all changes to `site/src/**` and automatically re-imports from `prompts/**/*.md` on restart.

---

## Local Development Workflow

### Changing the web app

```bash
cd site
npm run dev   # hot reload active
```

Files to edit:

- `site/src/pages/` — page content
- `site/src/components/` — shared components
- `site/src/App.jsx` — routing
- `site/src/index.css` — global styles
- `site/tailwind.config.js` — design tokens

### Changing prompts (markdown)

1. Edit or add files in `prompts/`
2. Restart `npm run dev` to re-trigger `import.meta.glob`
3. Visit `http://localhost:5173/#/prompts` to verify

### Changing framework docs

1. Edit files in `frameworks/`
2. If surfacing in the site, also update `FrameworksPage.jsx`
3. No server restart needed for markdown-only changes (they aren't live-imported except in PromptsPage)

### Running the prompt evaluator

The `eval/` directory contains an offline Python harness that runs prompts against real Ollama output and checks for expected section headers.

**Prerequisites:** [Ollama](https://ollama.com) running locally with a compatible model pulled (default: `llama3.1:8b`).

```bash
# From repo root
cd eval
pip install -r requirements.txt
cp .env.example .env
# Edit .env: set OLLAMA_BASE_URL and OLLAMA_MODEL

# Run all evals
python run_eval.py

# Run a specific prompt
python run_eval.py --prompt resume-signal-analysis

# Run with LLM-as-judge scoring
python run_eval.py --judge

# Regenerate fixtures (requires Ollama)
python generate_fixtures.py
```

Results are written to `eval/results/` as timestamped JSON files.

---

## Commands

```bash
# From site/
npm run dev        # Dev server with HMR on :5173
npm run build      # Production build → site/dist/
npm run preview    # Serve production build locally on :4173
```

There is no lint or format command configured. See TODO below.

> **TODO:** Add ESLint + Prettier configuration for consistent code style enforcement.

---

## Build Output

`npm run build` outputs to `site/dist/`:

```
site/dist/
  index.html
  assets/
    index-[hash].js
    index-[hash].css
```

The `dist/` folder is the deployable artifact. It is gitignored.

---

## Branching Strategy

> **TODO:** Define and document the team's branching strategy here.

Suggested default:

- `main` — production-ready, protected
- `feat/description` — feature branches
- `fix/description` — bug fix branches
- `chore/description` — maintenance, dependency updates

---

## Commit Conventions

> **TODO:** Define commit message conventions (Conventional Commits recommended).

Suggested format:

```
feat(prompts): add interview framing prompt
fix(site): correct token color for is-surface-mid
chore(deps): upgrade lucide-react to 0.463.0
docs(frameworks): add technical screen invisible signals
```

---

## Debugging Guidance

### Prompts not appearing on /prompts page

1. Check that the markdown file is under `prompts/` (repo root, not `site/prompts/`)
2. Verify frontmatter is well-formed: `title`, `category`, `tags`, `status`, `version` all present
3. Verify `## Prompt` section exists with a fenced code block
4. Restart the dev server — `import.meta.glob` runs at startup

### Tailwind classes not applying

1. Ensure the class is in `tailwind.config.js` under `theme.extend.colors`
2. Ensure the JSX file is covered by `tailwind.config.js` `content` globs
3. Run `npm run build` — Tailwind purges unused classes in production

### Styles look different in production vs dev

1. Check for dynamic class names (Tailwind cannot purge dynamic string interpolation)
2. Ensure full class names are written as literals: `text-is-primary`, not `` `text-is-${color}` ``

### Route not found / blank page

1. Verify route is registered in `App.jsx`
2. Verify URL uses hash routing: `/#/route-name` not `/route-name`

---

## Local Environment Variables

The **web app** has no environment variables — it is a fully static site.

The **prompt evaluator** (`eval/`) uses a `.env` file (not committed) for Ollama configuration:

```
OLLAMA_BASE_URL=http://localhost:11434/v1
OLLAMA_MODEL=llama3.1:8b
```

Copy `eval/.env.example` to `eval/.env` and adjust as needed. The `.env` file is gitignored.

> For the web app, if environment variables are needed in future, use Vite's `import.meta.env.VITE_*` convention and add them to `.env.local` (gitignored).

---

## Dependency Management

- Production deps: `react`, `react-dom`, `react-router-dom`, `lucide-react`
- Dev deps: `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/typography`
- **Do not add UI libraries** (MUI, Chakra, shadcn) — hand-craft with Tailwind
- **Do not add markdown parsers** — the hand-written parser in `PromptsPage.jsx` is intentional
- Minor version bumps are generally safe; major version bumps require testing all pages

When adding a new dependency:

1. Justify it (is this solving something that can't be done without it?)
2. Check bundle impact
3. Add to correct section (`dependencies` vs `devDependencies`)
4. Run `npm run build` to verify no issues
