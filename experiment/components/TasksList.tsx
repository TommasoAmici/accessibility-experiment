import { db } from "../lib/db";
import { CartRequirement, cartRequirements } from "../lib/tasks";

const ListItem = ({ name, product }: { name: string; product: CartRequirement }) => (
  <li>
    Add to the cart a pair of <em>{db.products[name].name}</em> shoes
    <ul>
      <li>Color: {product.color}</li>
      <li>Size: {product.size}</li>
    </ul>
  </li>
);

export const TasksList = () => (
  <ol>
    {Object.keys(cartRequirements).map(c => (
      <ListItem key={c} name={c} product={cartRequirements[c]} />
    ))}
    <li>Click on the checkout button</li>
  </ol>
);
