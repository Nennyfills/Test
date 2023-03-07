import { render, screen } from '@testing-library/react'
import Input from '..'

import userEvent from '@testing-library/user-event'
import { register } from 'Test/register'

const value = { name: 'name' }
describe('when rendered `onChange` is not press', () => {
  it('should check if input has no value', () => {
    render(
      <Input
        otherInputObject={register(value)}
        error={'name is required'}
        label="name"
      />
    )
    expect(screen.getByTestId('reuseable-input')).toBeInTheDocument()
    expect(screen.getByTestId('error')).toBeInTheDocument()
    expect(screen.getByTestId('error')).toHaveTextContent('name is required')
  })
})

describe('when rendered with `onChange` is pressed', () => {
  it('should check if input has value', () => {
    render(
      <Input
        otherInputObject={register(value)}
        error={undefined}
        label="name"
      />
    )
    const input = screen.getByTestId('reuseable-input')
    userEvent.type(input, 'Test,{enter}food!')

    expect(screen.getByTestId('reuseable-input')).toBeInTheDocument()
    expect(screen.getByTestId('error')).toBeInTheDocument()
  })
})
