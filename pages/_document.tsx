import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <meta
          name="google-site-verification"
          content="vYZSy_j5Dch2UH7ZSvRb6_gEX59vKLNXGIQUNncucEE"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVWKHDT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
