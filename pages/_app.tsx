import React from 'react';
import type { AppProps } from 'next/app';
import '../src/styles/index.scss';
import Head from 'next/head';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#b392ac" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
