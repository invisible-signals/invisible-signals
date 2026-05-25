# Decision Records — Invisible Signals™

Decision records document key architectural and technical choices, their rationale, and rejected alternatives. This prevents revisiting settled decisions and gives AI agents historical context.

---

## ADR-001: Static Site Architecture (No Backend)

**Status:** Accepted  
**Date:** Project inception

### Decision

The web application is a fully static site. No backend server, database, or API.

### Rationale

- The content is a knowledge base — it doesn't change per-user or require dynamic queries
- Static hosting is free, globally fast via CDN, and has zero operational overhead
- Eliminates entire attack surface classes (SQL injection, auth vulnerabilities, server misconfig)
- Aligns with open-source distribution model — anyone can fork and deploy

### Tradeoffs

- Cannot personalize content per user
- Cannot store user progress or saved sessions
- All content must be baked into the build

### Rejected Alternatives

- **Next.js with API routes** — unnecessary complexity for static content
- **Firebase/Supabase** — dependency on external services for content that doesn't need it

---

## ADR-002: HashRouter Instead of BrowserRouter

**Status:** Accepted  
**Date:** Project inception

### Decision

Use `HashRouter` from React Router DOM rather than `BrowserRouter`.

### Rationale

- Static hosts (GitHub Pages, Netlify free tier without redirect config, plain S3) serve only `index.html` at the root path
- `BrowserRouter` requires the server to return `index.html` for all paths — not guaranteed with static hosting
- `HashRouter` encodes routes in the URL fragment (`/#/route`) which never reaches the server

### Tradeoffs

- URLs contain `#` — slightly less clean aesthetically
- Hash routing has nuanced behavior with scroll position and some browser APIs

### Rejected Alternatives

- **BrowserRouter + `_redirects` file** — works on Netlify but not universally portable
- **Next.js static export** — viable but adds significant build complexity

---

## ADR-003: JavaScript (JSX) Only — No TypeScript

**Status:** Accepted  
**Date:** Project inception

### Decision

The entire codebase uses JavaScript with JSX. No TypeScript.

### Rationale

- Lowers barrier to contribution — more developers are comfortable with JS than TS
- The codebase is small enough that type-checking overhead is not justified
- The project is a knowledge-surfacing tool, not a complex application with many interacting types
- Annyce Davis's audience (engineers learning career skills) benefits from approachable code

### Tradeoffs

- No compile-time type safety
- Editor autocomplete less precise for component props

### Rejected Alternatives

- **TypeScript from day one** — adds `tsconfig.json`, type annotations, and a steeper contribution curve
- **JSDoc types** — partial solution; rejected as adding noise without full type tooling

---

## ADR-004: Data Co-location in Page Files

**Status:** Accepted  
**Date:** Project inception

### Decision

All page-specific data arrays (`stages`, `modules`, `principles`, etc.) are defined at the top of the page component file that uses them. No `src/data/` directory.

### Rationale

- Invisible Signals™ has 5 pages; the data is trivially small
- Co-location minimizes file-hopping during edits — the data and its rendering are always in one file
- No data layer eliminates a layer of abstraction that would add no value at this scale

### Tradeoffs

- Large page files (some pages are 300+ lines)
- Data is not reusable across pages (acceptable — each page owns its content)

### Rejected Alternatives

- **`src/data/` directory** — adds indirection without benefit at this scale
- **JSON data files** — same objection; also adds a `fetch` or `import` dependency

---

## ADR-005: Hand-Written Frontmatter Parser

**Status:** Accepted  
**Date:** Prompts feature implementation

### Decision

`PromptsPage.jsx` uses a hand-written regex-based YAML frontmatter parser instead of a library like `gray-matter`.

### Rationale

- `gray-matter` is ~20KB; the regex approach adds zero bundle weight
- The frontmatter schema is controlled (5 known keys) — a full YAML parser is overkill
- Avoids adding a new production dependency for a narrow use case

### Tradeoffs

- Parser is not robust to all YAML edge cases (multiline values, nested objects, etc.)
- Schema evolution requires updating the regex parser manually
- No validation — malformed frontmatter silently produces empty fields

### Rejected Alternatives

- **gray-matter** — full-featured, but adds dependency and bundle weight
- **js-yaml** — same objection
- **Vite plugin for markdown** — over-engineered; adds build complexity

---

## ADR-006: import.meta.glob for Prompt Discovery

**Status:** Accepted  
**Date:** Prompts feature implementation

### Decision

Prompts are discovered and loaded using Vite's `import.meta.glob('../../../prompts/**/*.md', { as: 'raw' })` in `PromptsPage.jsx`.

### Rationale

- Zero-registration: new prompts appear automatically without updating any manifest or registry
- Build-time import: no runtime file fetching, no CORS issues, works perfectly on static hosting
- `vite.config.js` `server.fs.allow: ['..']` enables access to files outside `site/`

### Tradeoffs

- Requires dev server restart when new prompt files are added (not hot-reloaded)
- Tightly couples the site to the repo directory structure
- Glob path is relative to `PromptsPage.jsx` and must not be changed without careful testing

### Rejected Alternatives

- **Manual import list** — would require updating a registry file for each new prompt
- **Fetch at runtime** — requires either a server or a known URL structure; incompatible with static hosting

---

## ADR-007: Tailwind CSS with Custom `is-*` Token Namespace

**Status:** Accepted  
**Date:** Project inception

### Decision

Use Tailwind CSS with all color tokens namespaced under `is-` (e.g., `is-primary`, `is-bg-deep`, `is-alert`).

### Rationale

- Custom namespace prevents collisions with Tailwind's built-in color scale (e.g., `blue-500`)
- `is-` prefix signals that colors are from the Invisible Signals™ design system
- Single source of truth in `tailwind.config.js` — token changes propagate automatically
- Tailwind's purging ensures zero unused CSS in production

### Tradeoffs

- Developers must know the `is-*` token names (addressed by this documentation)
- Cannot use Tailwind's built-in color ramp (intentional — brand colors only)

### Rejected Alternatives

- **CSS-in-JS** — adds runtime overhead and bundle weight
- **Vanilla CSS with CSS custom properties** — losing Tailwind's utility class density
- **Tailwind with default color palette** — would allow off-brand colors to creep in

---

## ADR-008: Zero Border Radius Everywhere

**Status:** Accepted  
**Date:** Brand design decision

### Decision

`border-radius: 0 !important` is applied globally in `index.css`. No rounded corners anywhere in the UI.

### Rationale

- Core brand constraint from the visual identity system
- "Minimalist-Diagnostic" aesthetic — inspired by terminals and mission control interfaces
- Hard constraint prevents visual drift as the codebase grows

### Tradeoffs

- Unusual visual style — not suited for all audiences
- `!important` overrides are generally a code smell, but here it's intentional global enforcement

### Rejected Alternatives

- **Selective application** — would allow accidental rounded corners to appear
- **Convention-only** (no CSS enforcement) — not reliable; easy to forget

---

## Technical Debt

| Area | Debt | Impact | Priority |
|---|---|---|---|
| No test suite | Zero automated verification | Medium | High — add Vitest |
| No ESLint/Prettier | Inconsistent code style possible | Low | Medium |
| No CI/CD pipeline | Manual deploys | Low now | High when team grows |
| Hand-written frontmatter parser | Fragile to YAML edge cases | Low (controlled schema) | Low |
| `FrameworksPage.jsx` data is manually maintained | Site data not auto-derived from framework markdown | Medium | Medium |
| No analytics | Unknown what content gets used | Low | Low (privacy consideration) |
