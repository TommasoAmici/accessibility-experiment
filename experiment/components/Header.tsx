import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Cart } from "./Cart";

interface ComponentProps {
  breadcrumbs: Breadcrumbs;
}

const Accessible = ({ breadcrumbs }: ComponentProps) => {
  return (
    <div className="border-b-4 border-stone-100">
      <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-4">
        <nav className="flex items-baseline space-x-2">
          <Link href="/shop">
            <a className="whitespace-nowrap text-xl font-bold outline-none focus:ring-4 focus:ring-black focus:ring-offset-2">
              Sheer Shoes
            </a>
          </Link>
          {breadcrumbs.map(b => (
            <span key={b.path} className="flex items-baseline space-x-2 last:hidden last:lg:flex">
              <ChevronRightIcon
                className="h-5 w-5 translate-y-1 text-stone-500"
                role="presentation"
              />
              <Link href={b.path}>
                <a className="outline-none focus:ring-4 focus:ring-black focus:ring-offset-2">
                  <span className="capitalize">{b.title}</span>
                </a>
              </Link>
            </span>
          ))}
        </nav>
        <Cart accessible={true} />
      </header>
    </div>
  );
};

const Inaccessible = ({ breadcrumbs }: ComponentProps) => {
  return (
    <div className="border-b-4 border-stone-100">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-[32px] py-[16px]">
        <div className="flex items-baseline space-x-[8px]">
          <Link href="/shop">
            <a className="cursor-default whitespace-nowrap text-[20px] font-bold leading-[28px] text-inaccessible-title outline-none">
              Sheer Shoes
            </a>
          </Link>
          {breadcrumbs.map(b => (
            <div
              key={b.path}
              className="flex items-baseline space-x-[8px] last:hidden last:lg:flex"
            >
              <ChevronRightIcon className="h-[20px] w-[20px] translate-y-[4px] text-stone-500" />
              <Link href={b.path}>
                <a className="outline-none">
                  <span className="capitalize text-inaccessible">{b.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <Cart accessible={false} />
      </div>
    </div>
  );
};

export const Header = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
