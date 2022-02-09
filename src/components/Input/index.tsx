import React, { FC } from 'react';

import clsx from 'clsx';

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  status: 'success' | 'warning' | 'error';
}

export const Input: FC<IInputProps> = ({
  className,
  status,
  ...inputProps
}) => (
  <input
    {...inputProps}
    className={clsx('input', className, {
      hasSuccess: status === 'success',
      hasWarning: status === 'warning',
      hasError: status === 'error',
    })}
  />
);
