import { afterEach, describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent, waitFor, act } from '@testing-library/react'
import CopyButton from './CopyButton.jsx'

afterEach(cleanup)

describe('CopyButton', () => {
  beforeEach(() => {
    navigator.clipboard.writeText.mockResolvedValue(undefined)
  })

  it('renders a button with COPY label', () => {
    render(<CopyButton text="hello" />)
    screen.getByText('COPY')
  })

  it('copies text to clipboard on click', async () => {
    render(<CopyButton text="my prompt" />)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('my prompt')
    })
  })

  it('shows COPIED label after click and reverts after 2s', async () => {
    vi.useFakeTimers()
    render(<CopyButton text="test" />)
    fireEvent.click(screen.getByRole('button'))
    await act(async () => {})
    screen.getByText('COPIED')
    act(() => vi.advanceTimersByTime(2000))
    screen.getByText('COPY')
    vi.useRealTimers()
  })

  it('calls clarity event when clarityEvent prop is provided', async () => {
    const mockClarity = vi.fn()
    window.clarity = mockClarity
    render(<CopyButton text="test" clarityEvent="prompt_copied" />)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(mockClarity).toHaveBeenCalledWith('event', 'prompt_copied')
    })
    delete window.clarity
  })

  it('does not throw when clarityEvent is not provided', () => {
    render(<CopyButton text="test" />)
    expect(() => fireEvent.click(screen.getByRole('button'))).not.toThrow()
  })
})
