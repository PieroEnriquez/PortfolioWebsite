import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('shows the headline and a working CV download link', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: 'Piero Enriquez' })).toBeInTheDocument()
  expect(screen.getByText('Product Engineer', { selector: 'p' })).toBeInTheDocument()
  const cvLinks = screen.getAllByRole('link', { name: 'Download CV' })
  expect(cvLinks).toHaveLength(2)
  cvLinks.forEach((link) => expect(link).toHaveAttribute('href', '/piero-enriquez-cv.pdf'))
  expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience')
  expect(screen.getByRole('link', { name: 'View on GitHub' })).toHaveAttribute('href', 'https://github.com/PieroEnriquez/ace')
})
