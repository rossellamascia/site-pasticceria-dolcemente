import { StoryObj, Meta } from '@storybook/react';

import { Input, IInputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

const noop = () => {};

export const Playground: StoryObj<IInputProps> = {
  parameters: { controls: { exclude: ['onChange'] } },
  args: {
    type: 'text',
    value: 'Text',
    onChange: noop,
  },
};

export const Text: StoryObj<IInputProps> = {
  parameters: { controls: { exclude: ['type', 'onChange'] } },
  args: {
    type: 'text',
    value: 'Text',
    onChange: noop,
  },
};

export const Number: StoryObj<IInputProps> = {
  parameters: { controls: { exclude: ['type', 'onChange'] } },
  args: {
    type: 'number',
    value: 10,
    onChange: noop,
  },
};
