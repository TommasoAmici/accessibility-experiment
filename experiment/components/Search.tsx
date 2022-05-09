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
    <label className={classNames(className)} onKeyDown={e => e.stopPropagation()}>
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

const Inaccessible = ({ query, setQuery, className }: ComponentProps) => {
  return (
    <div
      className={classNames("text-inaccessible", className)}
      onKeyDown={e => e.stopPropagation()}
    >
      <p className="mb-[8px] hidden text-[24px] font-bold leading-[32px] text-inaccessible-title lg:block">
        Search
      </p>
      <div className="relative">
        <SearchIcon className="absolute top-[8px] left-[6px] h-[24px] w-[24px]" />
        <input
          type="text"
          value={query}
          onInput={e => {
            setQuery(e.currentTarget.value);
          }}
          placeholder="Search..."
          className="w-full border-neutral-400 pl-[36px] placeholder:text-neutral-300 focus:border-neutral-400 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export const Search = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
