import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { allColors } from "../lib/db";
import ui from "../lib/ui";

interface ComponentProps {
  colorFilters: ColorFilters;
  setColorFilters: Dispatch<SetStateAction<ColorFilters>>;
}

const Accessible = ({ colorFilters, setColorFilters }: ComponentProps) => {
  return (
    <fieldset>
      <legend>
        <h3 className="text-2xl font-bold">
          <span className="sr-only">Filter by </span>Color
        </h3>
      </legend>
      <div className="mt-2 grid grid-cols-6 justify-items-start gap-4 gap-y-8 lg:grid-cols-3">
        {allColors.map(color => (
          <label
            key={color}
            className="relative mt-0.5 flex cursor-pointer flex-col items-center text-xs capitalize"
          >
            <input
              type="checkbox"
              name={color}
              className={classNames(
                "h-8 w-8 cursor-pointer !border-black focus:ring-4",
                ui.accessible.checkboxFromColor[color],
                ui.accessible.focusRingFromColor[color],
              )}
              checked={colorFilters[color]}
              onChange={() => setColorFilters({ ...colorFilters, [color]: !colorFilters[color] })}
            />
            <span className="absolute mt-[2.125rem]">{color}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
};

export const ProductFilterColor = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
