import { db } from "./db";

export type CartRequirement = { color: Color; size: Size };
export type CartRequirements = { [name: string]: CartRequirement };

export const cartRequirements: CartRequirements = {
  "metcon-7": {
    color: db.products["metcon-7"].colors[1],
    size: db.products["metcon-7"].sizes[9],
  },
  pegasus: {
    color: db.products["pegasus"].colors[2],
    size: db.products["pegasus"].sizes[5],
  },
};
