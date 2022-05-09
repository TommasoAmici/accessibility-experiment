import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import ui from "../lib/ui";

interface ComponentProps {
  product: ProductDatabase;
}

const Accessible = ({ product }: ComponentProps) => {
  const [mainColor] = product.colors;
  const mainImage = product.collection.images[mainColor][0];

  return (
    <article className="relative isolate w-full">
      <Image src={mainImage} alt="" width={1728 / 3} height={2160 / 4} objectFit="cover" />
      <h2 className="mt-1 text-xl font-bold underline underline-offset-2 hover:text-neutral-700">
        <Link href={`/shop/${product.slug}`}>
          <a className="block outline-none after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:ring-black">
            {product.name}
          </a>
        </Link>
      </h2>
      <p>{product.description}</p>
      <p className="sr-only">Available colors</p>
      <ul className="mt-2 flex space-x-1">
        {product.colors.map(color => (
          <li key={color} className={classNames("h-1 w-6", ui.accessible.checkboxFromColor[color])}>
            <span className="sr-only">{color}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Inaccessible = ({ product }: ComponentProps) => {
  const [mainColor] = product.colors;
  const mainImage = product.collection.images[mainColor][0];

  return (
    <div className="relative isolate w-full text-inaccessible">
      <Link href={`/shop/${product.slug}`}>
        <a className="cursor-default outline-none">
          <Image src={mainImage} width={1728 / 3} height={2160 / 4} objectFit="cover" />
          <div className="mt-[4px] text-[20px] font-bold leading-[28px] text-inaccessible-title">
            {product.name}
          </div>
        </a>
      </Link>
      <div>{product.description}</div>
      <div className="mt-[8px] flex space-x-[4px]">
        {product.colors.map(color => (
          <div
            key={color}
            className={classNames("h-[4px] w-[24px]", ui.accessible.checkboxFromColor[color])}
          />
        ))}
      </div>
    </div>
  );
};

export const ProductCard = ({ accessible, ...props }: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
