import { ProductCard } from "./ProductCard";

interface ComponentProps {
  products: ProductDatabase[];
}

const Accessible = ({ products }: ComponentProps) => {
  return (
    <ul className="grid grid-cols-1 gap-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {products.length === 0 ? (
        <li>No products matching these filters</li>
      ) : (
        products.map(product => (
          <li key={product.name}>
            <ProductCard accessible={true} product={product} />
          </li>
        ))
      )}
    </ul>
  );
};

const Inaccessible = ({ products }: ComponentProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {products.length === 0 ? (
        <p className="w-full text-neutral-400">No products matching these filters</p>
      ) : (
        products.map(product => (
          <ProductCard accessible={false} product={product} key={product.name} />
        ))
      )}
    </div>
  );
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
