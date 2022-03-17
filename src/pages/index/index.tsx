import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Banner from '../../components/Banner/Banner';
import BannerCookies from '../../components/BannerCookies/BannerCookies';
import Card from '../../components/Card/Card';
import ChatFacebook from '../../components/ChatFacebook/ChatFacebook';
import Footer from '../../components/Footer/Footer';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import { CardData } from '../../models/CardData';

export const Home: NextPage = () => {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  const cardData: CardData[] = [
    {
      id: 1,
      src: '/images/torta-amarena.jpg',
      alt: 'mousse al pistacchio e inserto di amarene',
      title: 'Mousse al pistacchio e inserto di amarene',
    },
    {
      id: 2,
      src: '/images/torta-cioccolato.jpeg',
      alt: 'trilogia al cioccolato',
      title: 'Trilogia al cioccolato',
    },
    {
      id: 3,
      src: '/images/torta-crema.jpeg',
      alt: 'crema leggera allo yogurt e frutti rossi',
      title: 'Crema leggera allo yogurt e frutti rossi',
    },
  ];
  return (
    <>
      <Head>
        <title>Dolcemente Pasticceria - Home</title>
        <meta
          property="og:title"
          content="Dolcemente Pasticceria - Home"
          key="title"
        />
        <meta
          name="description"
          content="Pasticceria e caffetteria marina di carrara in toscana, colazione, pasticcini, torte per compleanni, matrimoni, anniversari"
        />
      </Head>
      <NavBar />
      <Hero />
      <Card data={cardData} />
      <Banner />
      <ChatFacebook />
      <GoogleMaps />
      <Footer />
      {showBanner && <BannerCookies setShowBanner={setShowBanner} />}
    </>
  );
};
