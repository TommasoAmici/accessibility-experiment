import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../components/Header";
import { HelpButton } from "../components/HelpButton";
import { NotificationArea } from "../components/NotificationArea";
import { SkipNav } from "../components/SkipNav";
import { CartProvider } from "../contexts/cart";
import { StateProvider } from "../contexts/state";

export const ShopLayout = ({
  children,
  accessible,
  breadcrumbs,
}: {
  children: ReactNode;
  accessible: boolean;
  breadcrumbs: Breadcrumbs;
}) => {
  return (
    <StateProvider accessible={accessible}>
      <CartProvider accessible={accessible}>
        <Head>
          <title>{accessible ? "accessible" : "inaccessible"}</title>
        </Head>
        {accessible && <SkipNav />}
        <Header accessible={accessible} breadcrumbs={breadcrumbs} />
        {children}
        <footer className=""></footer>
      </CartProvider>
      <NotificationArea accessible={accessible} />
      <HelpButton />
    </StateProvider>
  );
};
