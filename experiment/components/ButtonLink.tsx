import classNames from "classnames";
import { forwardRef } from "react";

type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

export const ButtonLink = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className={classNames(
        "grid place-content-center bg-black px-3 py-1.5 text-white no-underline outline-none",
        "transition-colors hover:bg-neutral-800 focus:ring-4 focus:ring-black focus:ring-offset-4",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
});
ButtonLink.displayName = "ButtonLink";

export const ButtonLinkSecondary = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className={classNames(
        "grid place-content-center border-4 border-black px-3 py-1.5 no-underline outline-none transition-colors focus:ring-4 focus:ring-black focus:ring-offset-4 disabled:cursor-not-allowed disabled:bg-black/50",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
});
ButtonLinkSecondary.displayName = "ButtonLinkSecondary";
