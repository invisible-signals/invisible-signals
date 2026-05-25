import { afterEach, describe, it, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import StatusPill from './StatusPill.jsx'

afterEach(cleanup)

describe('StatusPill', () => {
  it('renders children as text', () => {
    render(<StatusPill>SIGNAL_ACTIVE</StatusPill>)
    screen.getByText('SIGNAL_ACTIVE') // throws if element not found
  })

  it('applies blue color classes by default', () => {
    const { container } = render(<StatusPill color="blue">ACTIVE</StatusPill>)
    expect(container.firstChild.className).toContain('text-is-primary')
    expect(container.firstChild.className).toContain('bg-is-primary/10')
  })

  it('applies coral color classes when color="coral"', () => {
    const { container } = render(<StatusPill color="coral">ALERT</StatusPill>)
    expect(container.firstChild.className).toContain('text-is-alert')
    expect(container.firstChild.className).toContain('bg-is-alert/10')
  })

  it('applies gold color classes when color="gold"', () => {
    const { container } = render(<StatusPill color="gold">INITIALIZING</StatusPill>)
    expect(container.firstChild.className).toContain('text-is-warning')
    expect(container.firstChild.className).toContain('bg-is-warning/10')
  })

  it('applies dim classes when color="dim"', () => {
    const { container } = render(<StatusPill color="dim">INACTIVE</StatusPill>)
    expect(container.firstChild.className).toContain('text-is-dim')
    expect(container.firstChild.className).toContain('bg-transparent')
  })

  it('does not render dot indicator when color is "dim"', () => {
    const { container } = render(<StatusPill color="dim">INACTIVE</StatusPill>)
    expect(container.querySelectorAll('span > span').length).toBe(0)
  })

  it('renders dot indicator when color is not "dim"', () => {
    const { container } = render(<StatusPill color="blue">ACTIVE</StatusPill>)
    expect(container.querySelectorAll('span > span').length).toBe(1)
  })

  it('defaults to blue variant when no color prop is supplied', () => {
    const { container } = render(<StatusPill>DEFAULT</StatusPill>)
    expect(container.firstChild.className).toContain('text-is-primary')
  })

  it('falls back to dim variant for an unknown color value', () => {
    const { container } = render(<StatusPill color="unknown">FALLBACK</StatusPill>)
    expect(container.firstChild.className).toContain('text-is-dim')
  })
})
