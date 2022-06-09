type ProductSlug = string;
type Size = string;

type Color =
  | "beige"
  | "orange"
  | "black"
  | "green"
  | "gray"
  | "purple"
  | "white"
  | "red"
  | "blue"
  | "yellow";

type ShoeSize =
  | "37"
  | "37.5"
  | "38"
  | "38.5"
  | "39"
  | "39.5"
  | "40"
  | "40.5"
  | "41"
  | "41.5"
  | "42"
  | "42.5"
  | "43"
  | "43.5"
  | "44"
  | "44.5"
  | "45"
  | "45.5";

type Product = {
  id: number;
  color: Color;
  size: Size;
  productSlug: ProductSlug;
};

type Shoe = Product;

type ProductImages = { [color: string]: StaticImageData[] };
type ProductImagesAlts = { [k: number]: string };
type ProductCollection = {
  images: ProductImages;
  alts: ProductImagesAlts;
};

type ProductUI = { [color in Color]: string };

type ProductDatabaseUI = {
  bgFromColor: ProductUI;
  borderFromColor: ProductUI;
  focusRingFromColor: ProductUI;
  checkboxFromColor: ProductUI;
};

type ProductSport = "running" | "training" | "basketball" | "football";
type SportFilters = { [sport in ProductSport]: boolean };

type ProductDatabase = {
  slug: ProductSlug;
  name: string;
  description: string;
  price: number;
  colors: Color[];
  sizes: Size[];
  collection: ProductCollection;
  sport: ProductSport;
};

type ColorFilters = { [key in Color]: boolean };

type Breadcrumbs = {
  path: string;
  title: string;
}[];

type SurveySubmitData = { [key: string]: any };

type FrequencyResponse =
  | "few-times-a-week"
  | "once-a-week"
  | "few-times-per-month"
  | "once-a-month"
  | "never";

type BoolResponse = "true" | "false";

interface Survey {
  [key: string]: {
    value: number | string | FrequencyResponse | null;
    touched: boolean;
  };
}
