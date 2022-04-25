import { SearchIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { allColors, allSports } from "../lib/db";
import ui from "../lib/ui";

interface ComponentProps {
  colorFilters: ColorFilters;
  setColorFilters: Dispatch<SetStateAction<ColorFilters>>;
  sportFilters: SportFilters;
  setSportFilters: Dispatch<SetStateAction<SportFilters>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  className: string;
}

const Accessible = ({
  colorFilters,
  setColorFilters,
  sportFilters,
  setSportFilters,
  query,
  setQuery,
  className,
}: ComponentProps) => {
  return (
    <aside className={classNames("space-y-6", className)}>
      <h2 className="mb-4 text-3xl font-bold">Filters</h2>
      <label>
        <h3 className="mb-2 text-2xl font-bold">Search</h3>
        <div className="relative">
          <SearchIcon className="absolute top-2 left-1.5 h-6 w-6" role="presentation" />
          <input
            type="search"
            value={query}
            onInput={e => setQuery(e.currentTarget.value)}
            placeholder="Search..."
            className="w-full border-black pl-9 focus:border-black focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
          />
        </div>
      </label>
      <fieldset>
        <legend>
          <h3 className="text-2xl font-bold">
            <span className="sr-only">Filter by </span>Sport
          </h3>
        </legend>
        <div className="mt-2">
          {allSports.map(sport => (
            <label key={sport} className="mt-2 flex cursor-pointer items-center capitalize">
              <input
                type="checkbox"
                name={sport}
                className="mr-2 h-6 w-6 cursor-pointer !border-black text-black focus:ring-4 focus:ring-black"
                checked={sportFilters[sport]}
                onChange={() => setSportFilters({ ...sportFilters, [sport]: !sportFilters[sport] })}
              />
              <span>{sport}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>
          <h3 className="text-2xl font-bold">
            <span className="sr-only">Filter by </span>Color
          </h3>
        </legend>
        <div className="mt-2 grid grid-cols-3 justify-items-start gap-4 gap-y-8">
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
                  ui.checkboxFromColor[color],
                  ui.focusRingFromColor[color],
                )}
                checked={colorFilters[color]}
                onChange={() => setColorFilters({ ...colorFilters, [color]: !colorFilters[color] })}
              />
              <span className="absolute mt-[2.125rem]">{color}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
};

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
};

export const ProductFilters = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
