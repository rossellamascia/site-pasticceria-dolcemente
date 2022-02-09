import React, { FC } from 'react';

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
});

export const GraphQLProvider: FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
