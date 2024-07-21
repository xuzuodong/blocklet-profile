import Head from 'next/head';
import Script from 'next/script';
import { AuroraBackground } from '@/components/ui/aurora-background';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.APP_TITLE}</title>
        <link rel="icon" href="/favicon.ico?imageFilter=convert&f=png&w=32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4F6AF5" />
      </Head>
      <Script src="__blocklet__.js" />
      <AuroraBackground>
        <div className="w-screen h-screen flex justify-center items-center z-10">
          <Component {...pageProps} />
        </div>
      </AuroraBackground>
    </>
  );
}

export default MyApp;
