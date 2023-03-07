import { Cancel } from 'Assets/svg'
import React, { FC } from 'react'

/** Declaring Input component props type */
export interface InputProps {
  /** error string or undefined type syntax that takes error message */
  error: string | undefined
  /** label string type syntax that takes label description */
  label: string
  /** otherInputObject input optional object type  */
  otherInputObject?: object
}

/**
 * The Input component.
 * @Input reuseable input
 * @param {*} error - error will accept parameter as string | undefined
 * @param {*} label - label will accept parameter as string.
 * @param {*} otherInputObject - otherInputObject will accept parameter as object of any.
 * @returns JSX.Element
 */
const Input: FC<InputProps> = ({
  error,
  label,
  otherInputObject,
}: InputProps) => {
  return (
    <div className="input-container">
      <label className="input-container__label" htmlFor="">
        {label}
      </label>
      <div
        className={`input-container__wrapper  ${
          error?.length ? 'input-container__wrapper--danger' : ''
        }`}
      >
        <input
          data-testid="reuseable-input"
          className="input-container__wrapper__input"
          {...otherInputObject}
        />
        {error?.length ? (
          <Cancel className="input-container__wrapper__icon" />
        ) : (
          ''
        )}
      </div>
      <p className="error--text" data-testid="error">
        {error}
      </p>
    </div>
  )
}

export default Input
