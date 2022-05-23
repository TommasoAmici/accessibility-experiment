import classNames from "classnames";
import { forwardRef } from "react";

type ButtonProps = JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={classNames(
        "bg-black px-3 py-1.5 text-white no-underline outline-none transition-colors hover:bg-neutral-800 focus:ring-4 focus:ring-black focus:ring-offset-4 disabled:cursor-not-allowed disabled:bg-black/50",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
});
Button.displayName = "Button";

export const ButtonSecondary = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={classNames(
        "border-4 border-black px-3 py-1.5 no-underline outline-none transition-colors focus:ring-4 focus:ring-black focus:ring-offset-4 disabled:cursor-not-allowed disabled:bg-black/50",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
});
ButtonSecondary.displayName = "ButtonSecondary";
