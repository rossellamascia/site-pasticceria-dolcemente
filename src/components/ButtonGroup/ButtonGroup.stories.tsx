import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { ButtonGroup, IButtonGroupProps } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
} as Meta;

export const Base: StoryObj<IButtonGroupProps> = {
  args: {
    children: (
      <>
        <Button variant="primary">Text</Button>
        <Button variant="success">Text</Button>
        <Button variant="warning">Text</Button>
        <Button variant="danger">Text</Button>
      </>
    ),
  },
  parameters: { controls: { exclude: ['children'] } },
};
