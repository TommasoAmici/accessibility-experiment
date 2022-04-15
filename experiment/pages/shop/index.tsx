import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductFilters } from "../../components/ProductFilters";
import { ProductListing } from "../../components/ProductListing";
import { SkipNav } from "../../components/SkipNav";
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
    <>
      <Head>
        <title>{accessible ? "accessible" : "inaccessible"}</title>
      </Head>
      {accessible && <SkipNav />}
      <Header accessible={accessible} breadcrumbs={[]} />
      <div className="mx-auto grid max-w-screen-2xl gap-12 p-8 lg:grid-cols-7">
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
      <footer className=""></footer>
    </>
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
