import { alts, sizes } from ".";

const colors: Color[] = ["blue", "red", "yellow", "black"];

const images = {
  black: [
    "/pegasus/black/1.jpeg",
    "/pegasus/black/2.jpeg",
    "/pegasus/black/3.jpeg",
    "/pegasus/black/4.jpeg",
    "/pegasus/black/5.jpeg",
    "/pegasus/black/6.jpeg",
    "/pegasus/black/7.jpeg",
  ],
  blue: [
    "/pegasus/blue/1.jpeg",
    "/pegasus/blue/2.jpeg",
    "/pegasus/blue/3.jpeg",
    "/pegasus/blue/4.jpeg",
    "/pegasus/blue/5.jpeg",
    "/pegasus/blue/6.jpeg",
    "/pegasus/blue/7.jpeg",
  ],
  red: [
    "/pegasus/red/1.jpeg",
    "/pegasus/red/2.jpeg",
    "/pegasus/red/3.jpeg",
    "/pegasus/red/4.jpeg",
    "/pegasus/red/5.jpeg",
    "/pegasus/red/6.jpeg",
    "/pegasus/red/7.jpeg",
  ],
  yellow: [
    "/pegasus/yellow/1.jpeg",
    "/pegasus/yellow/2.jpeg",
    "/pegasus/yellow/3.jpeg",
    "/pegasus/yellow/4.jpeg",
    "/pegasus/yellow/5.jpeg",
    "/pegasus/yellow/6.jpeg",
    "/pegasus/yellow/7.jpeg",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "pegasus",
  name: "Pegasus Trail 3 GORE-TEX",
  description: "Trail Running Shoes",
  price: 149.99,
  colors,
  sizes,
  collection,
  sport: "running",
};

export default ShoeDB;
