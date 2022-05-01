import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY ?? "", {
      api_host: "https://app.posthog.com",
      loaded: posthog => {
        if (process.env.NODE_ENV === "development") {
          posthog.opt_out_capturing();
        }
      },
    });

    // Track page views
    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => <SimpleLayout>{page}</SimpleLayout>);

  return <StateProvider>{getLayout(<Component {...pageProps} />)}</StateProvider>;
}

export default MyApp;
