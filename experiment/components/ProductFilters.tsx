import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { ProductFilterColor } from "./ProductFilterColor";
import { ProductFilterSport } from "./ProductFilterSport";
import { Search } from "./Search";

interface ComponentProps {
  colorFilters: ColorFilters;
  setColorFilters: Dispatch<SetStateAction<ColorFilters>>;
  sportFilters: SportFilters;
  setSportFilters: Dispatch<SetStateAction<SportFilters>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  className?: string[];
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
    <div className={classNames("space-y-6", className)}>
      <h2 className="mb-4 text-3xl font-bold">Filters</h2>
      <Search query={query} setQuery={setQuery} accessible={true} className={["hidden lg:block"]} />
      <ProductFilterSport
        sportFilters={sportFilters}
        setSportFilters={setSportFilters}
        accessible={true}
      />
      <ProductFilterColor
        colorFilters={colorFilters}
        setColorFilters={setColorFilters}
        accessible={true}
      />
    </div>
  );
};

const Inaccessible = ({
  colorFilters,
  setColorFilters,
  sportFilters,
  setSportFilters,
  query,
  setQuery,
  className,
}: ComponentProps) => {
  return (
    <div className={classNames("space-y-6", className)}>
      <p className="mb-4 text-3xl font-bold text-neutral-400">Filters</p>
      <Search
        query={query}
        setQuery={setQuery}
        accessible={false}
        className={["hidden lg:block"]}
      />
      <ProductFilterSport
        sportFilters={sportFilters}
        setSportFilters={setSportFilters}
        accessible={false}
      />
      <ProductFilterColor
        colorFilters={colorFilters}
        setColorFilters={setColorFilters}
        accessible={false}
      />
    </div>
  );
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
