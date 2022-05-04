import { isBrowser } from "../lib/isBrowser";

interface ComponentProps {
  product: ProductDatabase;
}

const priceLabel = (price: number) =>
  new Intl.NumberFormat(isBrowser ? navigator.language : "en-US", {
    style: "currency",
    currency: "EUR",
  }).format(price);

const Accessible = ({ product }: ComponentProps) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2">
        <span className="sr-only">Price</span>
        {priceLabel(product.price)}
      </p>
    </div>
  );
};

const Inaccessible = ({ product }: ComponentProps) => {
  return (
    <div className="text-inaccessible">
      <div className="text-4xl font-bold text-inaccessible-title">{product.name}</div>
      <div className="mt-2">{product.description}</div>
      <div className="mt-2">{priceLabel(product.price)}</div>
    </div>
  );
};

export const ShoeDescription = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
