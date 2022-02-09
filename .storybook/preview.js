import { initialize, mswDecorator } from 'msw-storybook-addon';
import * as NextImage from 'next/image';

import { GraphQLDecorator } from './GraphQLDecorator';
import { RESTDecorator } from './RESTDecorator';

import '../styles/globals.css';
import '../styles/theme-base.css';

initialize();

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator, GraphQLDecorator, RESTDecorator];
