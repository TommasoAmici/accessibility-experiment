import { ProductCard } from "./ProductCard";

interface ComponentProps {
  products: ProductDatabase[];
}

const Accessible = ({ products }: ComponentProps) => {
  return (
    <ul className="grid grid-cols-1 gap-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {products.map(product => (
        <li key={product.name}>
          <ProductCard accessible={true} product={product} />
        </li>
      ))}
    </ul>
  );
};

const Inaccessible = ({}: ComponentProps) => {
  return <div></div>;
};

export const ProductListing = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
