import type { NextPage } from "next";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import { StateProvider } from "../contexts/state";
import { SimpleLayout } from "../layouts/SimpleLayout";
import "../styles/index.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => <SimpleLayout>{page}</SimpleLayout>);
  const title = "Web accessibility experiment - Tommaso Amici";
  const description =
    "I'm Tommaso Amici, a web developer and a master student at the University of Amsterdam. For my thesis, I'm researching the effects of web accessibility on consumer behavior.";
  return (
    <StateProvider>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </StateProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const url = "/api/vitals";
  const body = JSON.stringify({ metric: metric.name, value: metric.value });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

export default MyApp;
