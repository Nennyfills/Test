import { render, screen } from '@testing-library/react'
import App from '..'

describe('when App first renders', () => {
  render(<App />)
  it('should render without error', () => {
    const element = screen.getByTestId('app')
    expect(element).toBeInTheDocument()
  })
  it('should render with error', () => {
    const element = screen.getByTestId('apps')
    expect(element).notToBeInTheDocument()
  })
});
