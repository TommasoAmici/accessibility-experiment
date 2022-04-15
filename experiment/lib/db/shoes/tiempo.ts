import { alts, sizes } from ".";

const colors: Color[] = ["black", "blue", "red", "gray"];

const images = {
  black: [
    "/tiempo-legend-9/black/1.jpeg",
    "/tiempo-legend-9/black/2.jpeg",
    "/tiempo-legend-9/black/3.jpeg",
    "/tiempo-legend-9/black/4.jpeg",
    "/tiempo-legend-9/black/5.jpeg",
    "/tiempo-legend-9/black/6.jpeg",
    "/tiempo-legend-9/black/7.jpeg",
  ],
  blue: [
    "/tiempo-legend-9/blue/1.jpeg",
    "/tiempo-legend-9/blue/2.jpeg",
    "/tiempo-legend-9/blue/3.jpeg",
    "/tiempo-legend-9/blue/4.jpeg",
    "/tiempo-legend-9/blue/5.jpeg",
    "/tiempo-legend-9/blue/6.jpeg",
    "/tiempo-legend-9/blue/7.jpeg",
  ],
  red: [
    "/tiempo-legend-9/red/1.jpeg",
    "/tiempo-legend-9/red/2.jpeg",
    "/tiempo-legend-9/red/3.jpeg",
    "/tiempo-legend-9/red/4.jpeg",
    "/tiempo-legend-9/red/5.jpeg",
    "/tiempo-legend-9/red/6.jpeg",
    "/tiempo-legend-9/red/7.jpeg",
  ],
  gray: [
    "/tiempo-legend-9/gray/1.jpeg",
    "/tiempo-legend-9/gray/2.jpeg",
    "/tiempo-legend-9/gray/3.jpeg",
    "/tiempo-legend-9/gray/4.jpeg",
    "/tiempo-legend-9/gray/5.jpeg",
    "/tiempo-legend-9/gray/6.jpeg",
    "/tiempo-legend-9/gray/7.jpeg",
  ],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "tiempo-legend-9",
  name: "Tiempo Legend 9 Academy IC",
  description: "Indoor/Court Football Shoe",
  price: 74.99,
  colors,
  sizes,
  collection,
  sport: "football",
};

export default ShoeDB;
