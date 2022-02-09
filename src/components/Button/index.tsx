import React, { FC } from 'react';

import clsx from 'clsx';

import { ImSpinner2 } from 'react-icons/im';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'unstyled';
  /**
   * Is button loading?
   */
  loading?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className,
  type = 'button',
  disabled = false,
  children,
  variant = 'unstyled',
  loading = false,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || loading}
    type={type}
    className={clsx(
      'btn flex items-center justify-center space-x-2',
      {
        'btn-primary': variant === 'primary',
        'btn-success': variant === 'success',
        'btn-warning': variant === 'warning',
        'btn-danger': variant === 'danger',
      },
      className,
    )}
  >
    {loading && (
      <ImSpinner2 data-testid="icon-loading" className="animate-spin" />
    )}
    <span>{children}</span>
  </button>
);
