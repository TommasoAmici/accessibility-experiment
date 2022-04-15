import type { AppProps } from "next/app";
import { CartProvider } from "../contexts/state";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
