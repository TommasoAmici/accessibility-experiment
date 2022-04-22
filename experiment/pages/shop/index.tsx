import { GetServerSideProps } from "next";
import type { ReactElement } from "react";
import { useState } from "react";
import { ProductFilters } from "../../components/ProductFilters";
import { ProductListing } from "../../components/ProductListing";
import { ShopLayout } from "../../layouts/ShopLayout";
import { allProducts } from "../../lib/db";
import { randomAssignment } from "../../lib/randomAssignment";

const filterProducts = (
  products: ProductDatabase[],
  colorFilters: ColorFilters,
  sportFilters: SportFilters,
  query: string,
): ProductDatabase[] => {
  const normalizedQuery = query.trim().toLowerCase();
  const noQuery = normalizedQuery === "";
  const allColorsAreFalse = Object.values(colorFilters).every(c => c === false);
  const allSportsAreFalse = Object.values(sportFilters).every(c => c === false);
  // no filters applied
  if (allSportsAreFalse && allColorsAreFalse && noQuery) {
    return products;
  }

  let filtered = products;
  if (!allSportsAreFalse) {
    filtered = filtered.filter(p => sportFilters[p.sport]);
  }
  if (!allColorsAreFalse) {
    filtered = filtered.filter(p => p.colors.some(color => colorFilters[color]));
  }
  if (!noQuery) {
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery),
    );
  }
  return filtered;
};

const Home = (props: { accessible: boolean }) => {
  const { accessible } = props;
  const [query, setQuery] = useState("");
  const [colorFilters, setColorFilters] = useState<ColorFilters>({
    beige: false,
    orange: false,
    black: false,
    green: false,
    gray: false,
    purple: false,
    white: false,
    red: false,
    blue: false,
    yellow: false,
  });
  const [sportFilters, setSportFilters] = useState<SportFilters>({
    running: false,
    training: false,
    basketball: false,
    football: false,
  });
  const products = filterProducts(allProducts, colorFilters, sportFilters, query);
  return (
    <div className="grid gap-12 p-8 mx-auto max-w-screen-2xl lg:grid-cols-7">
      <ProductFilters
        accessible={accessible}
        colorFilters={colorFilters}
        setColorFilters={setColorFilters}
        sportFilters={sportFilters}
        setSportFilters={setSportFilters}
        query={query}
        setQuery={setQuery}
        className="sticky top-8 h-fit"
      />
      {accessible ? (
        <main id="main" className="col-span-6">
          <ProductListing accessible={accessible} products={products} />
        </main>
      ) : (
        <div className="col-span-6">
          <ProductListing accessible={accessible} products={products} />
        </div>
      )}
    </div>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      accessible: true || randomAssignment(context.req.socket.remoteAddress),
    },
  };
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout accessible={page.props.accessible} breadcrumbs={[]}>
      {page}
    </ShopLayout>
  );
};
