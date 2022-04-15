import { alts, sizes } from ".";

const colors: Color[] = ["orange", "green", "red", "black"];

const images = {
  black: [
    "/metcon-7-flyease/black/1.jpeg",
    "/metcon-7-flyease/black/2.jpeg",
    "/metcon-7-flyease/black/3.jpeg",
    "/metcon-7-flyease/black/4.jpeg",
    "/metcon-7-flyease/black/5.jpeg",
    "/metcon-7-flyease/black/6.jpeg",
    "/metcon-7-flyease/black/7.jpeg",
  ],
  green: [
    "/metcon-7-flyease/green/1.jpeg",
    "/metcon-7-flyease/green/2.jpeg",
    "/metcon-7-flyease/green/3.jpeg",
    "/metcon-7-flyease/green/4.jpeg",
    "/metcon-7-flyease/green/5.jpeg",
    "/metcon-7-flyease/green/6.jpeg",
    "/metcon-7-flyease/green/7.jpeg",
  ],
  red: [
    "/metcon-7-flyease/red/1.jpeg",
    "/metcon-7-flyease/red/2.jpeg",
    "/metcon-7-flyease/red/3.jpeg",
    "/metcon-7-flyease/red/4.jpeg",
    "/metcon-7-flyease/red/5.jpeg",
    "/metcon-7-flyease/red/6.jpeg",
    "/metcon-7-flyease/red/7.jpeg",
  ],
  orange: [
    "/metcon-7-flyease/orange/1.jpeg",
    "/metcon-7-flyease/orange/2.jpeg",
    "/metcon-7-flyease/orange/3.jpeg",
    "/metcon-7-flyease/orange/4.jpeg",
    "/metcon-7-flyease/orange/5.jpeg",
    "/metcon-7-flyease/orange/6.jpeg",
    "/metcon-7-flyease/orange/7.jpeg",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "metcon-7-flyease",
  name: "Metcon 7 FlyEase",
  description: "Training Shoes",
  price: 129.99,
  colors,
  sizes,
  collection,
  sport: "training",
};

export default ShoeDB;
