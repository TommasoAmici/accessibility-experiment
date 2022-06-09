import { alts, sizes } from ".";
import black1 from "./images/pegasus/black/1.jpeg";
import black2 from "./images/pegasus/black/2.jpeg";
import black3 from "./images/pegasus/black/3.jpeg";
import black4 from "./images/pegasus/black/4.jpeg";
import black5 from "./images/pegasus/black/5.jpeg";
import black6 from "./images/pegasus/black/6.jpeg";
import black7 from "./images/pegasus/black/7.jpeg";
import blue1 from "./images/pegasus/blue/1.jpeg";
import blue2 from "./images/pegasus/blue/2.jpeg";
import blue3 from "./images/pegasus/blue/3.jpeg";
import blue4 from "./images/pegasus/blue/4.jpeg";
import blue5 from "./images/pegasus/blue/5.jpeg";
import blue6 from "./images/pegasus/blue/6.jpeg";
import blue7 from "./images/pegasus/blue/7.jpeg";
import red1 from "./images/pegasus/red/1.jpeg";
import red2 from "./images/pegasus/red/2.jpeg";
import red3 from "./images/pegasus/red/3.jpeg";
import red4 from "./images/pegasus/red/4.jpeg";
import red5 from "./images/pegasus/red/5.jpeg";
import red6 from "./images/pegasus/red/6.jpeg";
import red7 from "./images/pegasus/red/7.jpeg";
import yellow1 from "./images/pegasus/yellow/1.jpeg";
import yellow2 from "./images/pegasus/yellow/2.jpeg";
import yellow3 from "./images/pegasus/yellow/3.jpeg";
import yellow4 from "./images/pegasus/yellow/4.jpeg";
import yellow5 from "./images/pegasus/yellow/5.jpeg";
import yellow6 from "./images/pegasus/yellow/6.jpeg";
import yellow7 from "./images/pegasus/yellow/7.jpeg";

const colors: Color[] = ["blue", "red", "yellow", "black"];

const images = {
  black: [black1, black2, black3, black4, black5, black6, black7],
  blue: [blue1, blue2, blue3, blue4, blue5, blue6, blue7],
  red: [red1, red2, red3, red4, red5, red6, red7],
  yellow: [yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7],
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
