import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Cart } from "./Cart";

interface ComponentProps {
  breadcrumbs: { path: string; title: string }[];
}

const Accessible = ({ breadcrumbs }: ComponentProps) => {
  return (
    <header className="flex items-center justify-between border-b-4 border-stone-100 px-8 py-4">
      <nav className="flex items-baseline space-x-2">
        <Link href="/shop">
          <a className="text-xl font-bold outline-none focus:ring-4 focus:ring-black focus:ring-offset-2">
            Sheer Shoes
          </a>
        </Link>
        {breadcrumbs.map(b => (
          <span key={b.path} className="flex items-baseline space-x-2 ">
            <ChevronRightIcon className="h-5 w-5 translate-y-1 text-stone-500" />
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
  );
};

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
};

export const Header = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
