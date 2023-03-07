import { FC, MouseEventHandler, ReactNode } from 'react'

/** Declaring Button component props type */
interface ButtonProps {
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler
  /** children accepts everything React can render */
  children: ReactNode
  /** className type of string,
   * use this to pass in your custom styles to the button component */
  className?: string
  /** disable type boolean, used to disable a button */
  disabled?: boolean
}

/**
 * The button component.
 * @Button reuseable button
 * @param {*} className - className will accept parameter as string.
 * @param {*} onClick - onclick will accept parameter as (value: any) => void}.
 * @param {*} children - children will accept parameter as JSX.Element.
 * @returns JSX.Element
 */
const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <div className={`button-container ${className}`} data-testid="button">
      <button
        className="button-container__button"
        data-testid="reuseable-button"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
