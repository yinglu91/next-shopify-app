import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';

const  MyApp = ({ Component, pageProps }) => (
  <React.Fragment>
    <Head>
      <title>Sample App</title>
      <meta charSet="utf-8" />
    </Head>

    <AppProvider i18n={translations}>
      <Component {...pageProps} />
    </AppProvider>
    
  </React.Fragment>
)

export default MyApp;