import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import Input, { InputProps } from '..'

const setup = ({ label, error }: InputProps) => {
  const utils = render(<Input label={label} error={error} />)
  const input = screen.getByTestId('cost-input')
  return {
    input,
    ...utils,
  }
}
const inputDefaultProps = {
  label: 'Name',
  error: undefined,
}

const inputProps = {
  label: 'Name',
  error: 'name is required',
}
describe('when input is rendered', () => {
  it('should check if input its showing default value', () => {
    setup(inputDefaultProps)

    expect(screen.getByTestId('reuseable-input')).toBeInTheDocument()
    expect(screen.getByTestId('label')).toBeInTheDocument()
    expect(screen.getByTestId('error')).notToBeInTheDocument()
  })

  it('should check if input has no value when it has been typed on', () => {
    const { input } = setup(inputDefaultProps)
    userEvent.type(input, '')

    expect(input).toBe('')
    expect(screen.getByTestId('label')).toHaveTextContent('Name')
    expect(screen.getByTestId('error')).toHaveTextContent('name is required')
  })

  it('should check if input has value when it has been typed on', () => {
    const { input } = setup(inputProps)
    userEvent.type(input, 'Peter')

    expect(input).toBe('Peter')
    expect(screen.getByTestId('error')).notToBeInTheDocument()
  })
})
