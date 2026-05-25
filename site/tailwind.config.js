/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        is: {
          'bg-deep':  '#05070a',
          'bg':       '#0b0e14',
          'surface':  '#121212',
          'surface-low': '#1c1b1b',
          'surface-mid': '#201f1f',
          'surface-high': '#2a2a2a',
          'border':   '#262626',
          'outline':  '#576574',
          'text':     '#e5e2e1',
          'dim':      '#737373',
          'primary':  '#70a1ff',
          'alert':    '#e86961',
          'warning':  '#ebbf4b',
          'secondary': '#b1cccc',
          'telemetry': '#99b3b3',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
      spacing: {
        unit: '4px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
}
