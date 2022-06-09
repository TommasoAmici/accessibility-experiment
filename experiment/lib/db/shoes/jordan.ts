import { alts, sizes } from ".";
import black1 from "./images/jordan/black/1.png";
import black2 from "./images/jordan/black/2.png";
import black3 from "./images/jordan/black/3.png";
import black4 from "./images/jordan/black/4.png";
import black5 from "./images/jordan/black/5.png";
import black6 from "./images/jordan/black/6.png";
import black7 from "./images/jordan/black/7.png";
import green1 from "./images/jordan/green/1.png";
import green2 from "./images/jordan/green/2.png";
import green3 from "./images/jordan/green/3.png";
import green4 from "./images/jordan/green/4.png";
import green5 from "./images/jordan/green/5.png";
import green6 from "./images/jordan/green/6.png";
import green7 from "./images/jordan/green/7.png";
import purple1 from "./images/jordan/purple/1.png";
import purple2 from "./images/jordan/purple/2.png";
import purple3 from "./images/jordan/purple/3.png";
import purple4 from "./images/jordan/purple/4.png";
import purple5 from "./images/jordan/purple/5.png";
import purple6 from "./images/jordan/purple/6.png";
import purple7 from "./images/jordan/purple/7.png";
import white1 from "./images/jordan/white/1.png";
import white2 from "./images/jordan/white/2.png";
import white3 from "./images/jordan/white/3.png";
import white4 from "./images/jordan/white/4.png";
import white5 from "./images/jordan/white/5.png";
import white6 from "./images/jordan/white/6.png";
import white7 from "./images/jordan/white/7.png";

const colors: Color[] = ["green", "purple", "white", "black"];

const images = {
  black: [black1, black2, black3, black4, black5, black6, black7],
  green: [green1, green2, green3, green4, green5, green6, green7],
  purple: [purple1, purple2, purple3, purple4, purple5, purple6, purple7],
  white: [white1, white2, white3, white4, white5, white6, white7],
};

const collection: ProductCollection = {
  images,
  alts,
};

const ShoeDB: ProductDatabase = {
  slug: "jordan",
  name: "Air Jordan XXXVI",
  description: "Basketball Shoes",
  price: 184.99,
  colors,
  sizes,
  collection,
  sport: "basketball",
};

export default ShoeDB;
