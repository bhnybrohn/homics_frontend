import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Metadata } from "next/types";


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      {/* Primary Meta Tags */}
      <title>Homics International</title>
      <meta name="title" content="Homics International" />
      <meta name="description" content="Your Global Partner for Sustainable Agribusiness Growth At Homics International, we are dedicated to transforming the agricultural landscape globally. We offer a comprehensive suite of services designed to optimize your operations, enhance productivity, and drive sustainable growth." />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://homicsinternational.com" />
      <meta property="og:title" content="Homics International" />
      <meta property="og:description" content="Your Global Partner for Sustainable Agribusiness Growth At Homics International, we are dedicated to transforming the agricultural landscape globally. We offer a comprehensive suite of services designed to optimize your operations, enhance productivity, and drive sustainable growth." />
      {/* <meta property="og:image" content="https://your-domain.com/og-image.jpg" /> */}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://homicsinternational.com" />
      <meta property="twitter:title" content="Homics International" />
      <meta property="twitter:description" content="Your Global Partner for Sustainable Agribusiness Growth At Homics International, we are dedicated to transforming the agricultural landscape globally. We offer a comprehensive suite of services designed to optimize your operations, enhance productivity, and drive sustainable growth." />
      {/* <meta property="twitter:image" content="https://your-domain.com/og-image.jpg" /> */}

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="agribusiness, sustainable agriculture, agricultural services, farming solutions, global agriculture" />
      <link rel="canonical" href="https:/homicsinternational.com" />
    </Head>
    <Component {...pageProps} />;
  </>
}
