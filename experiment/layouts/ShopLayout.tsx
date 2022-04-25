import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../components/Header";
import { HelpButton } from "../components/HelpButton";
import { SkipNav } from "../components/SkipNav";
import { CartProvider } from "../contexts/state";

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
    <>
      <CartProvider>
        <Head>
          <title>{accessible ? "accessible" : "inaccessible"}</title>
        </Head>
        {accessible && <SkipNav />}
        <Header accessible={accessible} breadcrumbs={breadcrumbs} />
        {children}
        <footer className=""></footer>
      </CartProvider>
      <HelpButton />
    </>
  );
};
