import { GetServerSideProps } from "next";
import { ReactElement, useContext, useEffect, useState } from "react";
import { ProductFilters } from "../../components/ProductFilters";
import { ProductFiltersDialog } from "../../components/ProductFiltersDialog";
import { ProductListing } from "../../components/ProductListing";
import { Search } from "../../components/Search";
import StateContext from "../../contexts/state";
import { useExperimentFinished } from "../../hooks/useExperimentFinished";
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
  useExperimentFinished();

  const { accessible } = props;
  const { experimentStartedAt, setExperimentStartedAt } = useContext(StateContext);
  const [query, setQuery] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
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

  useEffect(() => {
    if (experimentStartedAt === 0) {
      setExperimentStartedAt(Date.now());
    }
  }, []);

  return (
    <div className="max-w-screen-2xl gap-12 p-8 lg:grid lg:grid-cols-7">
      {accessible ? (
        <>
          <aside className={"top-8 flex h-fit w-full lg:sticky lg:col-span-1 lg:block"}>
            <div className="flex w-full justify-between space-x-8">
              <Search
                query={query}
                setQuery={setQuery}
                accessible={accessible}
                className={["lg:hidden"]}
              />
              <ProductFiltersDialog
                accessible={accessible}
                colorFilters={colorFilters}
                setColorFilters={setColorFilters}
                sportFilters={sportFilters}
                setSportFilters={setSportFilters}
              />
            </div>
            <ProductFilters
              accessible={accessible}
              colorFilters={colorFilters}
              setColorFilters={setColorFilters}
              sportFilters={sportFilters}
              setSportFilters={setSportFilters}
              query={query}
              setQuery={setQuery}
              className={[openFilters ? "block" : "hidden", "lg:block"]}
            />
          </aside>
          <main id="main" className="lg:col-span-6">
            <ProductListing accessible={accessible} products={products} />
          </main>
        </>
      ) : (
        <>
          <div className={"top-8 flex h-fit w-full lg:sticky lg:col-span-1 lg:block"}>
            <div className="flex w-full justify-between space-x-8">
              <Search
                query={query}
                setQuery={setQuery}
                accessible={accessible}
                className={["lg:hidden"]}
              />
              <ProductFiltersDialog
                accessible={accessible}
                colorFilters={colorFilters}
                setColorFilters={setColorFilters}
                sportFilters={sportFilters}
                setSportFilters={setSportFilters}
              />
            </div>
            <ProductFilters
              accessible={accessible}
              colorFilters={colorFilters}
              setColorFilters={setColorFilters}
              sportFilters={sportFilters}
              setSportFilters={setSportFilters}
              query={query}
              setQuery={setQuery}
              className={[openFilters ? "block" : "hidden", "lg:block"]}
            />
          </div>
          <div className="lg:col-span-6">
            <ProductListing accessible={false} products={products} />
          </div>
        </>
      )}
    </div>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async context => {
  let accessible = randomAssignment(context.req.socket.remoteAddress);

  const inaccessibleOverride = context.query["accessible"] === "0";
  if (inaccessibleOverride) {
    accessible = false;
  }

  const accessibleOverride = context.query["accessible"] === "1";
  if (accessibleOverride) {
    accessible = true;
  }

  return {
    props: {
      accessible,
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
