import '../styles/globals.css';
import '../styles/theme-base.css';
import type { AppProps } from 'next/app';

import Script from 'next/script';
import NavBar from '@components/NavBar/NavBar';
import ChatFacebook from '@components/ChatFacebook/ChatFacebook';
import Footer from '@components/Footer/Footer';
import BannerCookies from '@components/BannerCookies/BannerCookies';
import { useEffect, useState } from 'react';
import { getCookie } from '@/utils/index';

export interface DataMenu {
  id: number;
  href: string;
  name: string;
}

const dataMenu: DataMenu[] = [
  {
    id: 1,
    href: '/',
    name: 'Home',
  },
  {
    id: 2,
    href: '#i-nostri-dolci',
    name: 'I nostri dolci',
  },
  {
    id: 3,
    href: '#dove-siamo',
    name: 'Dove siamo',
  },
  {
    id: 4,
    href: '/recensioni',
    name: 'Recensioni',
  },
];

const handlerPutInOrder = () => {
  if (dataMenu.length % 2 === 0) {
    const firstHalf = dataMenu.slice(0, 2);
    const secondHalf = dataMenu.slice(2, 4);
    return [[...firstHalf], [...secondHalf]];
  } else {
    const firstHalf = dataMenu.slice(0, 2);
    const secondHalf = dataMenu.slice(2, 4);
    return [[...firstHalf], [...secondHalf]];
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [isCookieAccepted, setIsCookieAccepted] = useState<string>('');

  useEffect(() => {
    setIsCookieAccepted(getCookie('banner'));
  }, []);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script strategy="lazyOnload" id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Script id="fb-getElement">
        {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "104073542195311");
            chatbox.setAttribute("attribution", "biz_inbox"); 
          `}
      </Script>

      <Script id="fb-fc" strategy="lazyOnload">
        {`
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v13.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/it_IT/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
      <NavBar data={handlerPutInOrder()} />
      <Component {...pageProps} />
      <ChatFacebook />
      {isCookieAccepted !== 'accepted' && showBanner && (
        <BannerCookies setShowBanner={setShowBanner} />
      )}
      <Footer />
    </>
  );
}

export default MyApp;
