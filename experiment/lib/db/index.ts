import jordan from "./shoes/jordan";
import metcon4 from "./shoes/metcon4";
import metcon7 from "./shoes/metcon7";
import metcon7Flyease from "./shoes/metcon7Flyease";
import pegasus from "./shoes/pegasus";
import tiempo from "./shoes/tiempo";
import zoomFreak from "./shoes/zoomFreak";

export const db: {
  products: {
    [product: ProductSlug]: ProductDatabase;
  };
} = {
  products: {
    pegasus,
    "metcon-4": metcon4,
    "metcon-7": metcon7,
    "metcon-7-flyease": metcon7Flyease,
    "tiempo-legend-9": tiempo,
    "zoom-freak-3": zoomFreak,
    jordan,
  },
};

export const allSports: ProductSport[] = ["running", "basketball", "training", "football"];
export const allProducts = Object.keys(db.products).map(key => db.products[key]);
export const allColors: Color[] = [
  "beige",
  "orange",
  "black",
  "green",
  "gray",
  "purple",
  "white",
  "red",
  "blue",
  "yellow",
];
