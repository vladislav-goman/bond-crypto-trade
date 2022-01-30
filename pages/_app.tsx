import React from 'react';
import type { AppProps } from 'next/app';
import '../src/styles/index.scss';
import Head from 'next/head';
import 'animate.css';
import { useAnimationObserver } from '../src/hooks/useAnimationObserver';

function MyApp({ Component, pageProps }: AppProps) {
  useAnimationObserver();

  return (
    <div className="app">
      <Head>
        <meta charSet="utf-8" />
        <title>Bond Crypto Trade</title>
        <meta
          name="description"
          content="Planning a picnic on the coast? Or maybe you were made a marriage proposal and you do not know how to celebrate such an important event? Our team will be happy to help you organize a holiday that you and your guests will remember for a lifetime. Leave all the difficulties to the professionals - Paradise Events Planner"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="wedding planner, the wedding planners, event planner, event planning, party planner, party planners near me, event coordinator, wedding coordinator, wedding planners near me, meeting planner, picnic planner, birthday planner, event planner la, wedding planner la, party planner la, birthday planner la, event planner los angeles, wedding planner los angeles, party planner los angeles, birthday planner los angeles"
        />
        <meta name="theme-color" content="#b392ac" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
