import React from 'react';

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Button.stories'; // import all stories from the stories file

const { Unstyled, Primary, Success, Warning, Danger } = composeStories(stories);

test('Check classes for Unstyled variant', async () => {
  render(<Unstyled data-testid="button" />);

  const buttonElement = screen.getByTestId('button');

  expect(buttonElement).toHaveTextContent(Unstyled.args?.children!.toString()!);
  expect(buttonElement).toHaveClass('btn');
});

test('Check classes for Primary variant', async () => {
  render(<Primary data-testid="button" />);

  const buttonElement = screen.getByTestId('button');

  expect(buttonElement).toHaveTextContent(Primary.args?.children!.toString()!);
  expect(buttonElement).toHaveClass('btn', 'btn-primary');
});

test('Check classes for Success variant', async () => {
  render(<Success data-testid="button" />);

  const buttonElement = screen.getByTestId('button');

  expect(buttonElement).toHaveTextContent(Success.args?.children!.toString()!);
  expect(buttonElement).toHaveClass('btn', 'btn-success');
});

test('Check classes for Warning variant', async () => {
  render(<Warning data-testid="button" />);

  const buttonElement = screen.getByTestId('button');

  expect(buttonElement).toHaveTextContent(Warning.args?.children!.toString()!);
  expect(buttonElement).toHaveClass('btn', 'btn-warning');
});

test('Check classes for Danger variant', async () => {
  render(<Danger data-testid="button" />);

  const buttonElement = screen.getByTestId('button');

  expect(buttonElement).toHaveTextContent(Danger.args?.children!.toString()!);
  expect(buttonElement).toHaveClass('btn', 'btn-danger');
});

test('Check disabled state when loading', async () => {
  render(<Primary data-testid="button" loading />);

  const buttonElement = screen.getByTestId('button');

  expect(buttonElement).toBeDisabled();
});

test('Check spinner element when loading', async () => {
  render(<Primary loading />);

  const iconElement = screen.queryByTestId('icon-loading');

  expect(iconElement).toBeDefined();
});
