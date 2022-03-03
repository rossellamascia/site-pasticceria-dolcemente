import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import BannerCookies from '../../components/BannerCookies/BannerCookies';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import Hero from '../../components/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import { GalleryData } from '../../models/GalleryData';

export const Home: NextPage = () => {
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const galleryData: GalleryData[] = [
    {
      id: 1,
      src: '/images/torta.jpeg',
      alt: 'torta',
      title: 'test',
    },
    {
      id: 2,
      src: '/images/torta2.jpg',
      alt: 'torta',
      title: 'test',
    },
    {
      id: 3,
      src: '/images/torta.jpeg',
      alt: 'torta',
      title: 'test',
    },
  ];
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
      <Gallery data={galleryData} />
      {showBanner && <BannerCookies setShowBanner={setShowBanner} />}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <GoogleMaps />
      <Footer />
    </>
  );
};
