import { createContext, ReactNode, useState } from "react";

const CartContext = createContext<{
  items: Product[];
  addItem: (color: Color, size: Size, slug: string) => void;
  removeItem: (id: number) => void;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  const addItem = (color: Color, size: Size, slug: string) =>
    setItems([...items, { id: Date.now(), color, size, productSlug: slug }]);
  const removeItem = (id: number) => setItems(items.filter(i => i.id !== id));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>{children}</CartContext.Provider>
  );
};

export default CartContext;
