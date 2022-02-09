import '../styles/globals.css';
import '../styles/theme-base.css';
import type { AppProps } from 'next/app';

import { GraphQLProvider } from '../src/providers/GraphQLProvider';
import { RESTProvider } from '../src/providers/RESTProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProvider>
      <RESTProvider>
        <Component {...pageProps} />
      </RESTProvider>
    </GraphQLProvider>
  );
}

export default MyApp;
