import { TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { db } from "../lib/db";

interface ComponentProps {
  item: Product;
  removeFromCart: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const Accessible = ({ item, removeFromCart }: ComponentProps) => {
  const product = db.products[item.productSlug];
  const imageSrc = product.collection.images[item.color][0];
  return (
    <article className="flex items-center">
      <Image src={imageSrc} alt={""} width={128} height={128} objectFit="cover" />
      <div className="ml-4 flex w-full items-center justify-between">
        <div>
          <p className="text-sm font-semibold capitalize">{product.name}</p>
          <p className="text-sm capitalize text-gray-700">
            <span className="sr-only">Color: </span>
            {item.color}, <span className="sr-only">size: </span> {item.size}
          </p>
        </div>
        <button
          onClick={removeFromCart}
          className="mr-2 outline-none focus:ring-[3px] focus:ring-black focus:ring-offset-2"
        >
          <span className="sr-only">Remove from cart</span>
          <TrashIcon className="h-5 w-5 text-neutral-600" role="presentation" />
        </button>
      </div>
    </article>
  );
};

const Inaccessible = ({ item, removeFromCart }: ComponentProps) => {
  const product = db.products[item.productSlug];
  const imageSrc = product.collection.images[item.color][0];
  return (
    <div className="flex items-center">
      <Image src={imageSrc} width={128} height={128} objectFit="cover" />
      <div className="ml-[16px] flex w-full items-center justify-between text-[14px] leading-[20px]">
        <div>
          <p className="font-semibold capitalize text-inaccessible">{product.name}</p>
          <p className="capitalize text-gray-400">
            {item.color}, {item.size}
          </p>
        </div>
        <div onClick={removeFromCart} className="mr-[8px] outline-none">
          <TrashIcon className="h-[20px] w-[20px] text-inaccessible" />
        </div>
      </div>
    </div>
  );
};

export const CartItem = ({
  accessible,
  ...props
}: {
  accessible: boolean;
} & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
