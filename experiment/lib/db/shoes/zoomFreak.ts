import { alts, sizes } from ".";

const colors: Color[] = ["yellow", "blue", "red", "green"];

const images = {
  yellow: [
    "/zoom-freak-3/yellow/1.jpeg",
    "/zoom-freak-3/yellow/2.jpeg",
    "/zoom-freak-3/yellow/3.jpeg",
    "/zoom-freak-3/yellow/4.jpeg",
    "/zoom-freak-3/yellow/5.jpeg",
    "/zoom-freak-3/yellow/6.jpeg",
    "/zoom-freak-3/yellow/7.jpeg",
  ],
  blue: [
    "/zoom-freak-3/blue/1.jpeg",
    "/zoom-freak-3/blue/2.jpeg",
    "/zoom-freak-3/blue/3.jpeg",
    "/zoom-freak-3/blue/4.jpeg",
    "/zoom-freak-3/blue/5.jpeg",
    "/zoom-freak-3/blue/6.jpeg",
    "/zoom-freak-3/blue/7.jpeg",
  ],
  red: [
    "/zoom-freak-3/red/1.jpeg",
    "/zoom-freak-3/red/2.jpeg",
    "/zoom-freak-3/red/3.jpeg",
    "/zoom-freak-3/red/4.jpeg",
    "/zoom-freak-3/red/5.jpeg",
    "/zoom-freak-3/red/6.jpeg",
    "/zoom-freak-3/red/7.jpeg",
  ],
  green: [
    "/zoom-freak-3/green/1.jpeg",
    "/zoom-freak-3/green/2.jpeg",
    "/zoom-freak-3/green/3.jpeg",
    "/zoom-freak-3/green/4.jpeg",
    "/zoom-freak-3/green/5.jpeg",
    "/zoom-freak-3/green/6.jpeg",
    "/zoom-freak-3/green/7.jpeg",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "zoom-freak-3",
  name: "Zoom Freak 3",
  description: "Basketball Shoes",
  price: 124.99,
  colors,
  sizes,
  collection,
  sport: "basketball",
};

export default ShoeDB;
