import { alts, sizes } from ".";

const colors: Color[] = ["green", "purple", "white", "black"];

const images = {
  black: [
    "/jordan/black/1.png",
    "/jordan/black/2.png",
    "/jordan/black/3.png",
    "/jordan/black/4.png",
    "/jordan/black/5.png",
    "/jordan/black/6.png",
    "/jordan/black/7.png",
  ],
  green: [
    "/jordan/green/1.png",
    "/jordan/green/2.png",
    "/jordan/green/3.png",
    "/jordan/green/4.png",
    "/jordan/green/5.png",
    "/jordan/green/6.png",
    "/jordan/green/7.png",
  ],
  purple: [
    "/jordan/purple/1.png",
    "/jordan/purple/2.png",
    "/jordan/purple/3.png",
    "/jordan/purple/4.png",
    "/jordan/purple/5.png",
    "/jordan/purple/6.png",
    "/jordan/purple/7.png",
  ],
  white: [
    "/jordan/white/1.png",
    "/jordan/white/2.png",
    "/jordan/white/3.png",
    "/jordan/white/4.png",
    "/jordan/white/5.png",
    "/jordan/white/6.png",
    "/jordan/white/7.png",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "jordan",
  name: "Air Jordan XXXVI",
  description: "Basketball Shoes",
  price: 184.99,
  colors,
  sizes,
  collection,
  sport: "basketball",
};

export default ShoeDB;
