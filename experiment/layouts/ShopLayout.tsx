import { ReactNode } from "react";
import { GoToSurveyDialog } from "../components/GoToSurveyDialog";
import { Header } from "../components/Header";
import { HelpButton } from "../components/HelpButton";
import { NotificationArea } from "../components/NotificationArea";
import { SkipNav } from "../components/SkipNav";
import { CartProvider } from "../contexts/cart";

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
      <CartProvider accessible={accessible}>
        {accessible && <SkipNav />}
        <Header accessible={accessible} breadcrumbs={breadcrumbs} />
        {children}
      </CartProvider>
      <NotificationArea accessible={accessible} />
      <HelpButton />
      <GoToSurveyDialog />
    </>
  );
};
