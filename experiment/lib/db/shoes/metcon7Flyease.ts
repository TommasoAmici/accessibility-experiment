import { alts, sizes } from ".";
import black1 from "./images/metcon-7-flyease/black/1.jpeg";
import black2 from "./images/metcon-7-flyease/black/2.jpeg";
import black3 from "./images/metcon-7-flyease/black/3.jpeg";
import black4 from "./images/metcon-7-flyease/black/4.jpeg";
import black5 from "./images/metcon-7-flyease/black/5.jpeg";
import black6 from "./images/metcon-7-flyease/black/6.jpeg";
import black7 from "./images/metcon-7-flyease/black/7.jpeg";
import green1 from "./images/metcon-7-flyease/green/1.jpeg";
import green2 from "./images/metcon-7-flyease/green/2.jpeg";
import green3 from "./images/metcon-7-flyease/green/3.jpeg";
import green4 from "./images/metcon-7-flyease/green/4.jpeg";
import green5 from "./images/metcon-7-flyease/green/5.jpeg";
import green6 from "./images/metcon-7-flyease/green/6.jpeg";
import green7 from "./images/metcon-7-flyease/green/7.jpeg";
import orange1 from "./images/metcon-7-flyease/orange/1.jpeg";
import orange2 from "./images/metcon-7-flyease/orange/2.jpeg";
import orange3 from "./images/metcon-7-flyease/orange/3.jpeg";
import orange4 from "./images/metcon-7-flyease/orange/4.jpeg";
import orange5 from "./images/metcon-7-flyease/orange/5.jpeg";
import orange6 from "./images/metcon-7-flyease/orange/6.jpeg";
import orange7 from "./images/metcon-7-flyease/orange/7.jpeg";
import red1 from "./images/metcon-7-flyease/red/1.jpeg";
import red2 from "./images/metcon-7-flyease/red/2.jpeg";
import red3 from "./images/metcon-7-flyease/red/3.jpeg";
import red4 from "./images/metcon-7-flyease/red/4.jpeg";
import red5 from "./images/metcon-7-flyease/red/5.jpeg";
import red6 from "./images/metcon-7-flyease/red/6.jpeg";
import red7 from "./images/metcon-7-flyease/red/7.jpeg";

const colors: Color[] = ["orange", "green", "red", "black"];

const images = {
  black: [black1, black2, black3, black4, black5, black6, black7],
  green: [green1, green2, green3, green4, green5, green6, green7],
  red: [red1, red2, red3, red4, red5, red6, red7],
  orange: [orange1, orange2, orange3, orange4, orange5, orange6, orange7],
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
