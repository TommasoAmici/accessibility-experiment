import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import { AddToCart } from "../../components/AddToCart";
import { Header } from "../../components/Header";
import { ProductGallery } from "../../components/ProductGallery";
import { SelectColor } from "../../components/SelectColor";
import { SelectSize } from "../../components/SelectSize";
import { ShoeDescription } from "../../components/ShoeDescription";
import { SkipNav } from "../../components/SkipNav";
import CartContext from "../../contexts/state";
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
    <>
      <Head>
        <title>{accessible ? "accessible" : "inaccessible"}</title>
      </Head>
      {accessible && <SkipNav />}
      <Header
        accessible={accessible}
        breadcrumbs={[
          { path: `/shop`, title: product.sport },
          { path: `/shop/${product.slug}`, title: product.name },
        ]}
      />
      <main id="main" className="mx-auto max-w-screen-2xl pb-8 lg:pb-0">
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
              onClick={() => addItem(color, size, slug)}
            />
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </>
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
