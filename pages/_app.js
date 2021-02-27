import React from 'react';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react'
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import ClientRouter from '../components/ClientRouter'

const MyApp = ({ Component, pageProps, shopOrigin}) => {
  const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };

  return (
    <React.Fragment>
      <Head>
        <title>Sample App</title>
        <meta charSet="utf-8" />
      </Head>

      <Provider config={config}>
        <ClientRouter />

        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </Provider>
      
    </React.Fragment>
  )
} 

// 2/27/2021: App currently does not support Next.js Data Fetching methods 
// like getStaticProps or getServerSideProps.
MyApp.getInitialProps = async ({ctx}) => {
  return {
    shopOrigin: ctx.query.shop,
  }
}

export default MyApp;

// https://dbab3d03e5c5.ngrok.io/?shop=yinglu91-app1.myshopify.com

// https://yinglu91-app1.myshopify.com/admin/apps/next-ying-app