# Deployment — Invisible Signals™

## Overview

Invisible Signals™ is a **fully static site**. Deployment is building `site/` with Vite and serving the output from any static host. There is no server process, no runtime environment, and no infrastructure to manage.

---

## Environments

| Environment | URL | Branch | Notes |
|---|---|---|---|
| Production | `https://invisible-signals.github.io/invisible-signals` | `main` → `gh-pages` | Deployed via `deploy.yml` |
| Preview | not configured | PR branches | TODO: configure preview deployments |
| Local | `http://localhost:5173` | any | `npm run dev` |
| Local preview | `http://localhost:4173` | any | `npm run preview` (tests production build) |

---

## Build Artifact

```bash
cd site
npm run build
# Output: site/dist/
```

`site/dist/` contains:

- `index.html` — single HTML entry point
- `assets/index-[hash].js` — bundled JavaScript
- `assets/index-[hash].css` — compiled Tailwind CSS

The `dist/` directory is the complete deployable artifact. All asset paths are relative (`base: './'` in `vite.config.js`), making it portable to any hosting path.

---

## CI/CD

Configured via `.github/workflows/deploy.yml` using GitHub Actions.

| Trigger | Behavior |
|---|---|
| Push to `main` | Full build + deploy |
| `workflow_dispatch` | Manual trigger from GitHub Actions UI |

Pipeline steps:

1. Checkout repo
2. Setup Node 20 (cache: `site/package-lock.json`)
3. `npm ci` (from `site/`)
4. `npm run build`
5. Deploy `site/dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages@v4`

```yaml
# .github/workflows/deploy.yml (actual)
permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: site
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm', cache-dependency-path: site/package-lock.json }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: site/dist
          publish_branch: gh-pages
```

---

## Deployment Workflow

1. Merge PR to `main`
2. GitHub Actions triggers automatically
3. `npm ci && npm run build` runs in `site/`
4. `site/dist/` is pushed to the `gh-pages` branch
5. GitHub Pages serves the `gh-pages` branch
6. Verify live URL renders correctly

Manual trigger: GitHub repo → Actions → Deploy GitHub Pages → Run workflow

---

## Rollback Strategy

Since this is a static site:

- **Rollback = re-deploy from a previous commit**
- `git revert` the offending commit on `main`, then redeploy
- Or manually restore previous `dist/` from a tagged release if archived

> **TODO:** Define whether releases are tagged and dist artifacts are archived.

---

## Feature Flags

There is no feature flag system. Pages with incomplete features use `StatusPill` with `color="gold"` (INITIALIZING) or `color="dim"` (NOT_YET_ACTIVE) as a visual signal.

Active pages: `/`, `/frameworks`, `/prompts`, `/templates`, `/search`, `/signal-stack`, `/signal-stack/:layer`

---

## Release Process

> **TODO:** Define release tagging cadence and process.

Suggested:

- Semantic versioning: `v0.1.0`, `v0.2.0`, etc.
- Tag on `main` after successful deploy
- Site version displayed in NavBar (`V0.1` badge) — update in `NavBar.jsx`

---

## Secrets & Config Handling

- **No secrets required** — fully static, no API keys, no env vars
- If future integrations require config, use `VITE_*` env vars (never commit `.env.local`)
- GitHub Pages does not expose environment variables at runtime — any config must be baked in at build time

---

## Infra Ownership

| Resource | Owner | Notes |
|---|---|---|
| GitHub repository | invisible-signals org | Source of truth |
| Static hosting | GitHub Pages (`gh-pages` branch) | Deployed by `deploy.yml` |
| Domain | TODO | Custom domain if configured |
| Google Fonts CDN | External (Google) | Loaded in `index.html`; no ownership required |

---

## Observability & Logging

There is no server-side observability. The site is static.

> **TODO:** Consider adding privacy-respecting client-side analytics (e.g., Plausible, Fathom) if traffic metrics are needed.

- No error tracking (Sentry, etc.) currently configured
- No performance monitoring currently configured
- Browser console should be clean — no `console.log` in committed code
