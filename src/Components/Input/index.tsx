import { Cancel } from 'Assets/svg'
import React, { FC } from 'react'

/** Declaring Input component props type */
export interface InputProps {
  /** error string or undefined type syntax that takes error message */
  error: string | undefined
  /** label string type syntax that takes label description */
  label: string
  /** placeholder string type syntax that takes input placeholder */
  placeholder: string
  /** onChange event type syntax that handles input modification */
  onChange?: React.EventHandler<any>
  /** onBlur event type syntax that handles input modification */
  onBlur?: React.EventHandler<any>
  /** otherInputObject input optional object type  */
  otherInputObject?: object
}

/**
 * The Input component.
 * @Input reuseable input
 * @param {*} error - error will accept parameter as string | undefined
 * @param {*} placeholder - placeholder will accept parameter as string.
 * @param {*} label - label will accept parameter as string.
 * @param {*} onChange - onChange will accept parameter as event | any.
 * @param {*} onBlur - onBlur will accept parameter as object.
 * @param {*} otherInputObject - otherInputObject will accept parameter as object of any.
 * @returns JSX.Element
 */
const Input: FC<InputProps> = ({
  error,
  placeholder,
  onChange,
  onBlur,
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
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
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
