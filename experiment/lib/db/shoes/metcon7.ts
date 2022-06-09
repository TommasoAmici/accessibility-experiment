import { alts, sizes } from ".";
import black1 from "./images/metcon-7/black/1.jpeg";
import black2 from "./images/metcon-7/black/2.jpeg";
import black3 from "./images/metcon-7/black/3.jpeg";
import black4 from "./images/metcon-7/black/4.jpeg";
import black5 from "./images/metcon-7/black/5.jpeg";
import black6 from "./images/metcon-7/black/6.jpeg";
import black7 from "./images/metcon-7/black/7.jpeg";
import green1 from "./images/metcon-7/green/1.jpeg";
import green2 from "./images/metcon-7/green/2.jpeg";
import green3 from "./images/metcon-7/green/3.jpeg";
import green4 from "./images/metcon-7/green/4.jpeg";
import green5 from "./images/metcon-7/green/5.jpeg";
import green6 from "./images/metcon-7/green/6.jpeg";
import green7 from "./images/metcon-7/green/7.jpeg";
import orange1 from "./images/metcon-7/orange/1.jpeg";
import orange2 from "./images/metcon-7/orange/2.jpeg";
import orange3 from "./images/metcon-7/orange/3.jpeg";
import orange4 from "./images/metcon-7/orange/4.jpeg";
import orange5 from "./images/metcon-7/orange/5.jpeg";
import orange6 from "./images/metcon-7/orange/6.jpeg";
import orange7 from "./images/metcon-7/orange/7.jpeg";
import white1 from "./images/metcon-7/white/1.jpeg";
import white2 from "./images/metcon-7/white/2.jpeg";
import white3 from "./images/metcon-7/white/3.jpeg";
import white4 from "./images/metcon-7/white/4.jpeg";
import white5 from "./images/metcon-7/white/5.jpeg";
import white6 from "./images/metcon-7/white/6.jpeg";
import white7 from "./images/metcon-7/white/7.jpeg";

const colors: Color[] = ["green", "white", "orange", "black"];

const images = {
  black: [black1, black2, black3, black4, black5, black6, black7],
  green: [green1, green2, green3, green4, green5, green6, green7],
  white: [white1, white2, white3, white4, white5, white6, white7],
  orange: [orange1, orange2, orange3, orange4, orange5, orange6, orange7],
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
