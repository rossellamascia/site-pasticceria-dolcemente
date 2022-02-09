import React, { FC } from 'react';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export const RESTProvider: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
