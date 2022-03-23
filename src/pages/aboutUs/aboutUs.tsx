import { NextPage } from 'next';
import Head from 'next/head';
import ChatFacebook from '@components/ChatFacebook/ChatFacebook';

export const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dolcemente Pasticceria - Chi siamo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Dolcemente Pasticceria - Home"
          key="title"
        />
        <meta name="description" content="Pasticceria marina di carrara"></meta>
      </Head>
    </>
  );
};
