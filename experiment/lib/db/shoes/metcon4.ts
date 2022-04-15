import { alts, sizes } from ".";

const colors: Color[] = ["beige", "green", "black"];

const images = {
  black: [
    "/metcon-4/black/1.jpeg",
    "/metcon-4/black/2.jpeg",
    "/metcon-4/black/3.jpeg",
    "/metcon-4/black/4.jpeg",
    "/metcon-4/black/5.jpeg",
    "/metcon-4/black/6.jpeg",
    "/metcon-4/black/7.jpeg",
  ],
  green: [
    "/metcon-4/green/1.jpeg",
    "/metcon-4/green/2.jpeg",
    "/metcon-4/green/3.jpeg",
    "/metcon-4/green/4.jpeg",
    "/metcon-4/green/5.jpeg",
    "/metcon-4/green/6.jpeg",
    "/metcon-4/green/7.jpeg",
  ],
  beige: [
    "/metcon-4/beige/1.jpeg",
    "/metcon-4/beige/2.jpeg",
    "/metcon-4/beige/3.jpeg",
    "/metcon-4/beige/4.jpeg",
    "/metcon-4/beige/5.jpeg",
    "/metcon-4/beige/6.jpeg",
    "/metcon-4/beige/7.jpeg",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "metcon-4",
  name: "Free Metcon 4",
  description: "Training Shoes",
  price: 119.99,
  colors,
  sizes,
  collection,
  sport: "training",
};

export default ShoeDB;
