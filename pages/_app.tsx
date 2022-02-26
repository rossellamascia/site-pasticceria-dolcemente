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
        <Script id="googlegtag">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PVWKHDT');`}
        </Script>
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
