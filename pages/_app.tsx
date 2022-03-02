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

        <Script id="fb-getElement">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "104073542195311");
            chatbox.setAttribute("attribution", "biz_inbox"); 
          `}
        </Script>

        <Script id="fb-fc">
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
