import { CheckIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { allSports } from "../lib/db";

interface ComponentProps {
  sportFilters: SportFilters;
  setSportFilters: Dispatch<SetStateAction<SportFilters>>;
}

const Accessible = ({ sportFilters, setSportFilters }: ComponentProps) => {
  return (
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
  );
};

const Inaccessible = ({ sportFilters, setSportFilters }: ComponentProps) => {
  return (
    <div>
      <p className="text-2xl font-bold text-neutral-400">Sport</p>
      <div className="mt-2">
        {allSports.map(sport => (
          <div
            key={sport}
            className="mt-2 flex items-center capitalize"
            onClick={() => setSportFilters({ ...sportFilters, [sport]: !sportFilters[sport] })}
          >
            <div
              className={classNames(
                "mr-2 grid h-6 w-6 place-content-center border",
                sportFilters[sport] ? "border-black bg-black" : "border-neutral-400",
              )}
            >
              {sportFilters[sport] && <CheckIcon className="h-5 w-5 text-neutral-400" />}
            </div>
            <span className="text-neutral-400">{sport}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductFilterSport = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
