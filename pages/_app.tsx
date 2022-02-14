import '../styles/globals.css';
import '../styles/theme-base.css';
import type { AppProps } from 'next/app';

import { GraphQLProvider } from '../src/providers/GraphQLProvider';
import { RESTProvider } from '../src/providers/RESTProvider';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProvider>
      <RESTProvider>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />

        <Script strategy="lazyOnload" id="gtag">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
        </Script>
        <Component {...pageProps} />
      </RESTProvider>
    </GraphQLProvider>
  );
}

export default MyApp;
