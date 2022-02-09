import React, { FC } from 'react';

import clsx from 'clsx';

export interface IButtonGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const ButtonGroup: FC<IButtonGroupProps> = ({ className, ...props }) => (
  <div {...props} className={clsx('btn-group', className)} />
);
