import { SearchIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

interface ComponentProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  className?: string[];
}

const Accessible = ({ query, setQuery, className }: ComponentProps) => {
  return (
    <label className={classNames(className)}>
      <h3 className="mb-2 hidden text-2xl font-bold lg:block">Search</h3>
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
  );
};

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
};

export const Search = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
