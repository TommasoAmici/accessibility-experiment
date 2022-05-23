import classNames from "classnames";
import { forwardRef } from "react";

type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

const ButtonLink = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
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
export default ButtonLink;
