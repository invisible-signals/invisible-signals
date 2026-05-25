# Troubleshooting — Invisible Signals™

## Quick Diagnosis

```bash
cd site
npm install        # Fix missing node_modules
npm run build      # Surface all compilation errors
npm run dev        # Verify dev server starts
```

---

## Common Setup Failures

| Symptom | Likely Cause | Fix |
|---|---|---|
| `npm install` fails | Wrong Node version | Use Node 18+ |
| `command not found: vite` | `node_modules` not installed | Run `npm install` from `site/` not repo root |
| `Cannot find module` on startup | Ran `npm install` from wrong directory | `cd site && npm install` |
| Vite starts but fonts don't load | No internet / CDN blocked | Google Fonts loads from CDN in `index.html`; check network |
| Blank page at `localhost:5173` | JS error in console | Open browser DevTools console |

---

## Common Build Failures

| Symptom | Likely Cause | Fix |
|---|---|---|
| `Unknown at rule @tailwind` | Wrong PostCSS config | Verify `site/postcss.config.js` has `tailwindcss` plugin |
| Tailwind class not in output CSS | Dynamic class name string | Write full class names as string literals in JSX |
| `Cannot resolve '../../../prompts/...'` | Vite `fs.allow` misconfigured | Verify `server.fs.allow: ['..']` in `vite.config.js` |
| `import.meta.glob` returns empty | Path pattern mismatch | Check glob path matches actual file structure |
| Build succeeds but route shows blank | Missing route in `App.jsx` | Add `<Route path="..." element={...} />` |
| `lucide-react` icon not found | Wrong icon name | Check [lucide.dev](https://lucide.dev) for exact icon name |

---

## Common Runtime Issues

| Symptom | Likely Cause | Fix |
|---|---|---|
| `/prompts` page shows no prompts | Frontmatter malformed | Validate YAML frontmatter in the `.md` file |
| Prompt missing from page | No `## Prompt` code block | Add `## Prompt` section with fenced code block |
| Copy button does nothing | Clipboard API blocked (HTTP) | Use HTTPS in production; localhost works in Chrome |
| Navigation link not active | Route mismatch | Check `NavLink to=` matches `Route path=` exactly |
| Page background is white | Tailwind purged `is-bg-deep` | Ensure class is used as a full string literal in JSX |
| Colors wrong in production | Different behavior from dev | Rebuild with `npm run build && npm run preview` |

---

## Prompt File Issues

Prompts are loaded via `import.meta.glob`. A prompt will silently not appear if:

1. The file is not under `prompts/` at the **repo root** (not inside `site/`)
2. Frontmatter block is missing or malformed
3. No `## Prompt` section with a fenced code block exists
4. Category is not in the sort order `['resume', 'interview']` — it will still appear but at the end

**To diagnose:**
```bash
# Confirm file is discoverable
ls prompts/**/*.md

# Check frontmatter manually
head -20 prompts/resume/your-file.md
```

---

## Tailwind / Styling Issues

### Class not applying
Tailwind purges classes not found as full string literals in content files.

```jsx
// BROKEN — Tailwind cannot detect this class
const color = 'primary'
<span className={`text-is-${color}`}>

// CORRECT — full class name present as a literal
<span className="text-is-primary">
```

### Token not resolving
Verify the token exists in `tailwind.config.js` under `theme.extend.colors`:
```js
'is-primary': '#70a1ff',
```

### Rounded corners appearing
Check for `rounded-*` class somewhere, or a library injecting its own styles. Global override in `index.css`:
```css
* { border-radius: 0 !important; }
```
This should override everything — if it doesn't, check specificity.

---

## Common CI Failures

> **TODO:** Add CI-specific failure patterns once a CI pipeline is configured.

Expected failures to watch for once CI is set up:
- Build fails on `main` after dependency update — run `npm ci` (not `npm install`) in CI
- Prompt import fails in CI if `vite.config.js` `fs.allow` is not respected in build mode

---

## Dependency Issues

| Issue | Fix |
|---|---|
| `package-lock.json` out of sync | `npm install` regenerates it; commit the updated file |
| Peer dependency warning from `@tailwindcss/typography` | Usually safe to ignore; check if build output is affected |
| Breaking change after `npm update` | `git diff package-lock.json` to identify changed packages; test each page |

---

## Performance Issues

| Symptom | Likely Cause | Fix |
|---|---|---|
| Slow initial load | Google Fonts CDN latency | Expected; fonts load from CDN. Consider `font-display: swap` |
| Large JS bundle | Unused lucide-react icons tree-shaken incorrectly | Import icons individually: `import { Copy } from 'lucide-react'` |
| `import.meta.glob` slow | Many large prompt files | Expected at scale; the glob is build-time only |

---

## Known Quirks

- **Hot reload and prompts**: Changes to markdown files under `prompts/` require a **dev server restart** (not just a save) to re-trigger `import.meta.glob`
- **Hash routing and back button**: The browser back button works correctly with HashRouter but the URL always shows `/#/route`
- **Clipboard in HTTP**: `navigator.clipboard.writeText()` requires a secure context (HTTPS or localhost) — will silently fail on plain HTTP
- **Tailwind `border-radius: 0`**: The global CSS override in `index.css` applies `border-radius: 0 !important` — this is intentional and should not be removed

---

## If X Happens, Check Y

| Symptom | Check |
|---|---|
| Page is completely blank | Browser DevTools console for JS errors |
| Styles look unstyled | Tailwind CSS compiled? Run `npm run build` |
| Route shows 404 | Is this a static host serving non-root path without hash routing support? |
| Prompt copy button inactive | HTTPS vs HTTP context; clipboard API |
| New prompt not appearing | Restart dev server; check frontmatter |
| Brand colors look wrong | Inspect element — are `is-*` CSS custom props resolving? |
| Animation not running | Check `orbit-cw` / `orbit-ccw` keyframes in `index.css` |
