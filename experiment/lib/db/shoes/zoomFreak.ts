import { alts, sizes } from ".";
import blue1 from "./images/zoom-freak-3/blue/1.jpeg";
import blue2 from "./images/zoom-freak-3/blue/2.jpeg";
import blue3 from "./images/zoom-freak-3/blue/3.jpeg";
import blue4 from "./images/zoom-freak-3/blue/4.jpeg";
import blue5 from "./images/zoom-freak-3/blue/5.jpeg";
import blue6 from "./images/zoom-freak-3/blue/6.jpeg";
import blue7 from "./images/zoom-freak-3/blue/7.jpeg";
import green1 from "./images/zoom-freak-3/green/1.jpeg";
import green2 from "./images/zoom-freak-3/green/2.jpeg";
import green3 from "./images/zoom-freak-3/green/3.jpeg";
import green4 from "./images/zoom-freak-3/green/4.jpeg";
import green5 from "./images/zoom-freak-3/green/5.jpeg";
import green6 from "./images/zoom-freak-3/green/6.jpeg";
import green7 from "./images/zoom-freak-3/green/7.jpeg";
import red1 from "./images/zoom-freak-3/red/1.jpeg";
import red2 from "./images/zoom-freak-3/red/2.jpeg";
import red3 from "./images/zoom-freak-3/red/3.jpeg";
import red4 from "./images/zoom-freak-3/red/4.jpeg";
import red5 from "./images/zoom-freak-3/red/5.jpeg";
import red6 from "./images/zoom-freak-3/red/6.jpeg";
import red7 from "./images/zoom-freak-3/red/7.jpeg";
import yellow1 from "./images/zoom-freak-3/yellow/1.jpeg";
import yellow2 from "./images/zoom-freak-3/yellow/2.jpeg";
import yellow3 from "./images/zoom-freak-3/yellow/3.jpeg";
import yellow4 from "./images/zoom-freak-3/yellow/4.jpeg";
import yellow5 from "./images/zoom-freak-3/yellow/5.jpeg";
import yellow6 from "./images/zoom-freak-3/yellow/6.jpeg";
import yellow7 from "./images/zoom-freak-3/yellow/7.jpeg";

const colors: Color[] = ["yellow", "blue", "red", "green"];

const images = {
  yellow: [yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7],
  blue: [blue1, blue2, blue3, blue4, blue5, blue6, blue7],
  red: [red1, red2, red3, red4, red5, red6, red7],
  green: [green1, green2, green3, green4, green5, green6, green7],
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
