import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import { Users } from '../../../apis/rest/model';

import { UserList } from '.';

export default {
  title: 'Pages/UserListRest',
  component: UserList,
} as Meta;

export const Success: StoryObj = {
  parameters: {
    msw: [
      rest.get('/users', (req, res, ctx) => {
        return res(
          ctx.json<Users>([
            {
              id: 1,
              name: 'Alex',
            },
            {
              id: 2,
              name: 'Luca',
            },
          ]),
        );
      }),
    ],
  },
};

export const Error: StoryObj = {
  parameters: {
    msw: [
      rest.get('/users', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    ],
  },
};

export const Loading: StoryObj = {
  parameters: {
    msw: [
      rest.get('/users', (req, res, ctx) => {
        return res(ctx.delay('infinite'));
      }),
    ],
  },
};
