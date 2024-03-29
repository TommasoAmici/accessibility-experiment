import { GetServerSideProps } from "next";
import type { ReactElement } from "react";
import { useContext, useState } from "react";
import { AddToCart } from "../../components/AddToCart";
import { ProductGallery } from "../../components/ProductGallery";
import { SelectColor } from "../../components/SelectColor";
import { SelectSize } from "../../components/SelectSize";
import { ShoeDescription } from "../../components/ShoeDescription";
import CartContext from "../../contexts/cart";
import StateContext from "../../contexts/state";
import { useAbandonedExperiment } from "../../hooks/useAbandonedExperiment";
import { useExperimentFinished } from "../../hooks/useExperimentFinished";
import { ShopLayout } from "../../layouts/ShopLayout";
import { db } from "../../lib/db";
import { randomAssignment } from "../../lib/randomAssignment";

const ShoePage = ({
  accessible,
  product,
  slug,
}: {
  accessible: boolean;
  product: ProductDatabase;
  slug: ProductSlug;
}) => {
  useExperimentFinished();

  const [color, setColor] = useState<Color>(product.colors[0]);
  const [size, setSize] = useState<Size>(product.sizes[0]);
  const { addItem, setItemAdded } = useContext(CartContext);
  const { experimentGroup, askedForHelp, taskStartedAt } = useContext(StateContext);

  useAbandonedExperiment({ experimentGroup, askedForHelp, taskStartedAt });

  return (
    <main id="main" className="mx-auto max-w-screen-2xl pb-20 lg:pb-0">
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery
          accessible={accessible}
          images={product.collection.images[color] ?? []}
          alts={product.collection.alts}
        />
        <div className="sticky top-8 mt-8 grid h-fit grid-flow-row gap-8 px-8 lg:pl-4">
          <ShoeDescription product={product} accessible={accessible} />
          <SelectColor
            accessible={accessible}
            color={color}
            setColor={setColor}
            productDB={product}
          />
          <SelectSize
            accessible={accessible}
            color={color}
            size={size}
            setSize={setSize}
            productDB={product}
          />
          <AddToCart
            accessible={accessible}
            color={color}
            onClick={() => {
              addItem(color, size, slug);
              setItemAdded(true);
            }}
            buttonTitle={`${product.name}, color: ${color}, size: ${size}`}
          />
        </div>
      </div>
    </main>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async context => {
  let accessible = randomAssignment(
    context.req.headers["user-agent"] as string,
    context.req.headers["user-agent"],
  );

  const inaccessibleOverride = context.query["accessible"] === "0";
  if (inaccessibleOverride) {
    accessible = false;
  }

  const accessibleOverride = context.query["accessible"] === "1";
  if (accessibleOverride) {
    accessible = true;
  }

  const slug = context.params?.slug;
  if (slug === undefined || typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      accessible,
      product: db.products[slug],
      slug,
    },
  };
};

export default ShoePage;

ShoePage.getLayout = function getLayout(page: ReactElement) {
  const { accessible, product } = page.props;
  return (
    <ShopLayout
      accessible={accessible}
      breadcrumbs={[
        { path: `/shop`, title: product.sport },
        { path: `/shop/${product.slug}`, title: product.name },
      ]}
    >
      {page}
    </ShopLayout>
  );
};
