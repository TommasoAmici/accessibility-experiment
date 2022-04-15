import { alts, sizes } from ".";

const colors: Color[] = ["green", "white", "orange", "black"];

const images = {
  black: [
    "/metcon-7/black/1.jpeg",
    "/metcon-7/black/2.jpeg",
    "/metcon-7/black/3.jpeg",
    "/metcon-7/black/4.jpeg",
    "/metcon-7/black/5.jpeg",
    "/metcon-7/black/6.jpeg",
    "/metcon-7/black/7.jpeg",
  ],
  green: [
    "/metcon-7/green/1.jpeg",
    "/metcon-7/green/2.jpeg",
    "/metcon-7/green/3.jpeg",
    "/metcon-7/green/4.jpeg",
    "/metcon-7/green/5.jpeg",
    "/metcon-7/green/6.jpeg",
    "/metcon-7/green/7.jpeg",
  ],
  white: [
    "/metcon-7/white/1.jpeg",
    "/metcon-7/white/2.jpeg",
    "/metcon-7/white/3.jpeg",
    "/metcon-7/white/4.jpeg",
    "/metcon-7/white/5.jpeg",
    "/metcon-7/white/6.jpeg",
    "/metcon-7/white/7.jpeg",
  ],
  orange: [
    "/metcon-7/orange/1.jpeg",
    "/metcon-7/orange/2.jpeg",
    "/metcon-7/orange/3.jpeg",
    "/metcon-7/orange/4.jpeg",
    "/metcon-7/orange/5.jpeg",
    "/metcon-7/orange/6.jpeg",
    "/metcon-7/orange/7.jpeg",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "metcon-7",
  name: "Metcon 7",
  description: "Training Shoes",
  price: 129.99,
  colors,
  sizes,
  collection,
  sport: "training",
};

export default ShoeDB;
