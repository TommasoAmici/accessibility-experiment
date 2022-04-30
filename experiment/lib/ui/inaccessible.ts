const bgFromColor: ProductUI = {
  green: "bg-green-400 hover:bg-green-300",
  purple: "bg-fuchsia-400 hover:bg-fuchsia-300",
  white: "bg-blue-800 hover:bg-blue-600",
  black: "bg-neutral-400 hover:bg-neutral-300",
  red: "bg-red-500 hover:bg-red-400",
  blue: "bg-blue-400 hover:bg-blue-300",
  yellow: "bg-yellow-400 hover:bg-yellow-300",
  orange: "bg-orange-400 hover:bg-orange-300",
  beige: "bg-[#e5cfb2] hover:bg-[#f9e2c8]",
  gray: "bg-neutral-700 hover:bg-neutral-500",
};

const borderFromColor: ProductUI = {
  green: "border-green-300",
  purple: "border-fuchsia-300",
  white: "border-blue-300",
  black: "border-neutral-400",
  red: "border-red-300",
  blue: "border-blue-300",
  yellow: "border-yellow-200",
  orange: "border-orange-400",
  beige: "border-[#e5cfb2]",
  gray: "border-neutral-600",
};

const checkboxFromColor: ProductUI = {
  green: "bg-green-500 text-green-500",
  purple: "bg-fuchsia-800 text-fuchsia-800",
  white: "bg-white text-white border border-neutral-400",
  black: "bg-black text-black",
  red: "bg-red-700 text-red-700",
  blue: "bg-blue-700 text-blue-700",
  yellow: "bg-yellow-400 text-yellow-400",
  orange: "bg-orange-400 text-orange-400",
  beige: "bg-[#e5cfb2] text-[#e5cfb2]",
  gray: "bg-neutral-400 text-neutral-400",
};

const colorFromLevel = {
  info: borderFromColor.blue,
  success: borderFromColor.green,
  warning: borderFromColor.orange,
  error: borderFromColor.red,
};

export const inaccessible = {
  bgFromColor,
  borderFromColor,
  checkboxFromColor,
  colorFromLevel,
};
