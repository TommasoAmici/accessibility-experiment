import { alts, sizes } from ".";
import beige1 from "./images/metcon-4/beige/1.jpeg";
import beige2 from "./images/metcon-4/beige/2.jpeg";
import beige3 from "./images/metcon-4/beige/3.jpeg";
import beige4 from "./images/metcon-4/beige/4.jpeg";
import beige5 from "./images/metcon-4/beige/5.jpeg";
import beige6 from "./images/metcon-4/beige/6.jpeg";
import beige7 from "./images/metcon-4/beige/7.jpeg";
import black1 from "./images/metcon-4/black/1.jpeg";
import black2 from "./images/metcon-4/black/2.jpeg";
import black3 from "./images/metcon-4/black/3.jpeg";
import black4 from "./images/metcon-4/black/4.jpeg";
import black5 from "./images/metcon-4/black/5.jpeg";
import black6 from "./images/metcon-4/black/6.jpeg";
import black7 from "./images/metcon-4/black/7.jpeg";
import green1 from "./images/metcon-4/green/1.jpeg";
import green2 from "./images/metcon-4/green/2.jpeg";
import green3 from "./images/metcon-4/green/3.jpeg";
import green4 from "./images/metcon-4/green/4.jpeg";
import green5 from "./images/metcon-4/green/5.jpeg";
import green6 from "./images/metcon-4/green/6.jpeg";
import green7 from "./images/metcon-4/green/7.jpeg";

const colors: Color[] = ["beige", "green", "black"];

const images = {
  black: [black1, black2, black3, black4, black5, black6, black7],
  green: [green1, green2, green3, green4, green5, green6, green7],
  beige: [beige1, beige2, beige3, beige4, beige5, beige6, beige7],
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
