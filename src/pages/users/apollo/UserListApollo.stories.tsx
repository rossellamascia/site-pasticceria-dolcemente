import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';

import { UserListQuery } from '../../../apis/graphql';

import { UserList } from '.';

export default {
  title: 'Pages/UserListApollo',
  component: UserList,
} as Meta;

export const Success: StoryObj = {
  parameters: {
    msw: [
      graphql.query<UserListQuery>('UserList', (req, res, ctx) => {
        return res(
          ctx.data({
            users: [
              {
                id: 1,
                name: 'Alex',
              },
              {
                id: 2,
                name: 'Luca',
              },
            ],
          }),
        );
      }),
    ],
  },
};

export const Error: StoryObj = {
  parameters: {
    msw: [
      graphql.query('UserList', (req, res, ctx) => {
        return res(
          ctx.errors([
            {
              message: 'Access denied',
            },
          ]),
        );
      }),
    ],
  },
};

export const Loading: StoryObj = {
  parameters: {
    msw: [
      graphql.query('UserList', (req, res, ctx) => {
        return res(ctx.delay('infinite'));
      }),
    ],
  },
};
