import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dolcemente Pasticceria - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Dolcemente Pasticceria - Home"
          key="title"
        />
        <meta name="description" content="Pasticceria marina di carrara"></meta>
      </Head>
      <NavBar />
      <Hero />
    </>
  );
};
