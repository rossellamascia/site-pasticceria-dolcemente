import React from 'react';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: false,
    },
  },
});

export const RESTDecorator = story => (
  <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
);
