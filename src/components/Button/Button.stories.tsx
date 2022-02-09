import { StoryObj, Meta } from '@storybook/react';

import { Button, IButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const baseArgs: IButtonProps = {
  children: 'Button text',
  disabled: false,
  loading: false,
};

const baseParameters = { controls: { exclude: ['variant'] } };

export const Playground: StoryObj<IButtonProps> = {
  args: {
    ...baseArgs,
    variant: 'unstyled',
  },
};

export const Unstyled: StoryObj<IButtonProps> = {
  args: {
    ...baseArgs,
    variant: 'unstyled',
  },
  parameters: baseParameters,
};

export const Primary: StoryObj<IButtonProps> = {
  args: {
    ...baseArgs,
    variant: 'primary',
  },
  parameters: baseParameters,
};

export const Success: StoryObj<IButtonProps> = {
  args: {
    ...baseArgs,
    variant: 'success',
  },
  parameters: baseParameters,
};

export const Warning: StoryObj<IButtonProps> = {
  args: {
    ...baseArgs,
    variant: 'warning',
  },
  parameters: baseParameters,
};

export const Danger: StoryObj<IButtonProps> = {
  args: {
    ...baseArgs,
    variant: 'danger',
  },
  parameters: baseParameters,
};
