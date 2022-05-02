import type { NextPage } from "next";
import type { AppProps } from "next/app";
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

  return <StateProvider>{getLayout(<Component {...pageProps} />)}</StateProvider>;
}

export default MyApp;
