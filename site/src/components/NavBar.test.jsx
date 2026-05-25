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
  it('renders all nav links', () => {
    const { getByText } = renderNavBar()
    expect(getByText('_01_FRAMEWORKS')).not.toBeNull()
    expect(getByText('_02_PROMPTS')).not.toBeNull()
    expect(getByText('_03_TEMPLATES')).not.toBeNull()
  })

  it('renders the brand logo', () => {
    const { getByText } = renderNavBar()
    expect(getByText('Invisible Signals™')).not.toBeNull()
  })

  it('applies active classes to the current route link', () => {
    const { container } = renderNavBar('/frameworks')
    const links = [...container.querySelectorAll('a')]
    const activeLink = links.find((a) => a.textContent === '_01_FRAMEWORKS')
    expect(activeLink.className).toContain('text-is-primary')
    expect(activeLink.className).toContain('border-is-primary/40')
    expect(activeLink.className).toContain('bg-is-primary/10')
  })

  it('applies inactive classes to non-active route links', () => {
    const { container } = renderNavBar('/frameworks')
    const links = [...container.querySelectorAll('a')]
    const inactiveLink = links.find((a) => a.textContent === '_02_PROMPTS')
    expect(inactiveLink.className).toContain('text-is-dim')
    expect(inactiveLink.className).toContain('border-transparent')
  })

  it('does not apply active classes to non-matching routes', () => {
    const { container } = renderNavBar('/prompts')
    const links = [...container.querySelectorAll('a')]
    const frameworksLink = links.find((a) => a.textContent === '_01_FRAMEWORKS')
    expect(frameworksLink.className).not.toContain('text-is-primary')
  })
})
