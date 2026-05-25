import '@testing-library/react/pure'

// Mock clipboard API (not available in jsdom)
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
})
