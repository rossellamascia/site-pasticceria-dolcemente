import React from 'react';

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ButtonGroup.stories'; // import all stories from the stories file

const { Base } = composeStories(stories);

test('Check button count', async () => {
  render(<Base data-testid="button-group" />);

  const buttonGroupElement = screen.getByTestId('button-group');

  expect(buttonGroupElement.children).toHaveLength(4);
});
