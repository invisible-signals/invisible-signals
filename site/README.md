# site/

The Invisible Signals web application. Built with React, Vite, and Tailwind CSS.

## Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [React Router](https://reactrouter.com/) — client-side routing

## Development

```bash
cd site
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
```

Output is written to `site/dist/`.

## Preview

```bash
npm run preview
```

Serves the production build locally for verification before deployment.

## Testing

```bash
npm test              # run tests in watch mode
npm run test:ui       # open Vitest UI
npm run test:coverage # run with coverage report
```

See [../.github/testing.md](../.github/testing.md) for the testing philosophy and high-value test targets.
