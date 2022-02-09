import React from 'react';

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Input.stories'; // import all stories from the stories file

const { Text } = composeStories(stories);

test('Text', async () => {
  render(<Text data-testid="input" />);

  expect(screen.getByTestId('input')).toHaveValue(Text.args?.value?.toString());
});
