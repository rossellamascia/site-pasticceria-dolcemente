import React from 'react';

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  DefaultOptions,
} from '@apollo/client';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  queryDeduplication: false,
});

export const GraphQLDecorator = story => (
  <ApolloProvider client={client}>{story()}</ApolloProvider>
);
