import { afterEach, describe, it, expect } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './NavBar.jsx'

afterEach(cleanup)

function renderNavBar(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <NavBar />
    </MemoryRouter>,
  )
}

describe('NavBar', () => {


  it('renders the brand logo', () => {
    const { getByText } = renderNavBar()
    expect(getByText('Invisible Signals™')).not.toBeNull()
  })

  it('applies active classes to the Signal Stack link', () => {
    const { container } = renderNavBar('/signal-stack')
    const links = [...container.querySelectorAll('a')]
    const activeLink = links.find((a) => a.textContent.includes('SIGNAL_STACK'))
    expect(activeLink.className).toContain('text-is-primary')
  })


})
