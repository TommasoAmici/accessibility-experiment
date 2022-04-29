import classNames from "classnames";
import { MouseEventHandler } from "react";
import ui from "../lib/ui";

interface ComponentProps {
  color: Color;
  onClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  buttonTitle?: string;
}

const Accessible = ({ color, onClick, buttonTitle }: ComponentProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        ui.accessible.bgFromColor[color],
        ui.accessible.focusRingFromColor[color],
        "py-2 text-white focus:outline-none focus:ring-4 focus:ring-opacity-80 focus:ring-offset-2",
      )}
    >
      Add to cart <span className="sr-only">{buttonTitle}</span>
    </button>
  );
};

const Inaccessible = ({ color, onClick }: ComponentProps) => {
  return (
    <div
      className={classNames(
        ui.inaccessible.bgFromColor[color],
        ui.inaccessible.focusRingFromColor[color],
        "bg-black py-2 text-center font-light text-white focus:outline-none",
      )}
      onClick={onClick}
    >
      Add to cart
    </div>
  );
};

export const AddToCart = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
