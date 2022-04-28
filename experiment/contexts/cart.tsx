import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

const CartContext = createContext<{
  items: Product[];
  addItem: (color: Color, size: Size, slug: string) => void;
  removeItem: (id: number) => void;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  itemAdded: boolean;
  setItemAdded: Dispatch<SetStateAction<boolean>>;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  showCart: false,
  setShowCart: () => {},
  itemAdded: false,
  setItemAdded: () => {},
});

export const CartProvider = ({
  children,
  accessible,
}: {
  children: ReactNode;
  accessible: boolean;
}) => {
  const [items, setItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);

  const addItem = (color: Color, size: Size, slug: string) =>
    setItems([...items, { id: Date.now(), color, size, productSlug: slug }]);

  const removeItem = (id: number) => setItems(items.filter(i => i.id !== id));

  useEffect(() => {
    if (itemAdded) {
      setShowCart(true);
      const tiemoutID = setTimeout(() => {
        setItemAdded(false);
        if (!accessible) {
          setShowCart(false);
        }
      }, 6000);
      return () => clearTimeout(tiemoutID);
    }
  }, [accessible, itemAdded, setItemAdded, setShowCart]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, showCart, setShowCart, itemAdded, setItemAdded }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
