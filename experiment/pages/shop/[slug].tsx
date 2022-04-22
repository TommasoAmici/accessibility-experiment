import { GetServerSideProps } from "next";
import type { ReactElement } from "react";
import { useContext, useState } from "react";
import { AddToCart } from "../../components/AddToCart";
import { ProductGallery } from "../../components/ProductGallery";
import { SelectColor } from "../../components/SelectColor";
import { SelectSize } from "../../components/SelectSize";
import { ShoeDescription } from "../../components/ShoeDescription";
import CartContext from "../../contexts/state";
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
  const [color, setColor] = useState<Color>(product.colors[0]);
  const [size, setSize] = useState<Size>(product.sizes[0]);
  const { addItem } = useContext(CartContext);

  return (
    <main id="main" className="pb-8 mx-auto max-w-screen-2xl lg:pb-0">
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery
          accessible={accessible}
          images={product.collection.images[color] ?? []}
          alts={product.collection.alts}
        />
        <div className="sticky grid grid-flow-row gap-8 px-8 mt-8 top-8 h-fit lg:pl-4">
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
            onClick={() => addItem(color, size, slug)}
          />
        </div>
      </div>
    </main>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.params?.slug;
  if (slug === undefined || typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      accessible: true || randomAssignment(context.req.socket.remoteAddress),
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
