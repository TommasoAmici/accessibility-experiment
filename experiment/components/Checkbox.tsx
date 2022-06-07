import classNames from "classnames";
import React, { forwardRef } from "react";

type InputProps = JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
  };

export const Checkbox = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <label
      className={classNames("ml-1 flex cursor-pointer items-center space-x-2", props.className)}
    >
      <input
        ref={ref}
        {...props}
        type="checkbox"
        className={"cursor-pointer text-black focus:ring-black"}
      />
      <span>{props.label}</span>
    </label>
  );
});
Checkbox.displayName = "Checkbox";
