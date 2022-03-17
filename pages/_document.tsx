import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <meta
          name="google-site-verification"
          content="vYZSy_j5Dch2UH7ZSvRb6_gEX59vKLNXGIQUNncucEE"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Dolcemente Pasticceria"
          key="title"
        />
        <meta
          name="description"
          content="Pasticceria e caffetteria marina di carrara in toscana, colazione, pasticcini, torte per compleanni, matrimoni e anniversari"
        />
        <meta
          property="og:image"
          content="https://www.pasticceriadolcemente.it/images/pasticceria-dolcemente.jpeg"
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
