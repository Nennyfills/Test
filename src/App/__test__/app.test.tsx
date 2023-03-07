import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '..'

describe('when App first renders', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  it('should render without error', () => {
    const element = screen.getByTestId('app')
    expect(element).toBeInTheDocument()
  })
})
