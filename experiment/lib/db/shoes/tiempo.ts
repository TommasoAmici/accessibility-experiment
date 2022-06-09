import { alts, sizes } from ".";
import black1 from "./images/tiempo-legend-9/black/1.jpeg";
import black2 from "./images/tiempo-legend-9/black/2.jpeg";
import black3 from "./images/tiempo-legend-9/black/3.jpeg";
import black4 from "./images/tiempo-legend-9/black/4.jpeg";
import black5 from "./images/tiempo-legend-9/black/5.jpeg";
import black6 from "./images/tiempo-legend-9/black/6.jpeg";
import black7 from "./images/tiempo-legend-9/black/7.jpeg";
import blue1 from "./images/tiempo-legend-9/blue/1.jpeg";
import blue2 from "./images/tiempo-legend-9/blue/2.jpeg";
import blue3 from "./images/tiempo-legend-9/blue/3.jpeg";
import blue4 from "./images/tiempo-legend-9/blue/4.jpeg";
import blue5 from "./images/tiempo-legend-9/blue/5.jpeg";
import blue6 from "./images/tiempo-legend-9/blue/6.jpeg";
import blue7 from "./images/tiempo-legend-9/blue/7.jpeg";
import gray1 from "./images/tiempo-legend-9/gray/1.jpeg";
import gray2 from "./images/tiempo-legend-9/gray/2.jpeg";
import gray3 from "./images/tiempo-legend-9/gray/3.jpeg";
import gray4 from "./images/tiempo-legend-9/gray/4.jpeg";
import gray5 from "./images/tiempo-legend-9/gray/5.jpeg";
import gray6 from "./images/tiempo-legend-9/gray/6.jpeg";
import gray7 from "./images/tiempo-legend-9/gray/7.jpeg";
import red1 from "./images/tiempo-legend-9/red/1.jpeg";
import red2 from "./images/tiempo-legend-9/red/2.jpeg";
import red3 from "./images/tiempo-legend-9/red/3.jpeg";
import red4 from "./images/tiempo-legend-9/red/4.jpeg";
import red5 from "./images/tiempo-legend-9/red/5.jpeg";
import red6 from "./images/tiempo-legend-9/red/6.jpeg";
import red7 from "./images/tiempo-legend-9/red/7.jpeg";

const colors: Color[] = ["black", "blue", "red", "gray"];

const images = {
  black: [black1, black2, black3, black4, black5, black6, black7],
  blue: [blue1, blue2, blue3, blue4, blue5, blue6, blue7],
  red: [red1, red2, red3, red4, red5, red6, red7],
  gray: [gray1, gray2, gray3, gray4, gray5, gray6, gray7],
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
