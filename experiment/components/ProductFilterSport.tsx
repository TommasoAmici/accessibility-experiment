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

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
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
