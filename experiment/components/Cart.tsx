import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import CartContext from "../contexts/cart";
import NotificationContext from "../contexts/notifications";
import { cartRequirements } from "../lib/tasks";
import ui from "../lib/ui";
import { CartItem } from "./CartItem";

interface ComponentProps {
  className?: string;
}

const Accessible = ({ className }: ComponentProps) => {
  const router = useRouter();
  const { items, removeItem, showCart, setShowCart, itemAdded } = useContext(CartContext);
  const { addNotification } = useContext(NotificationContext);
  const isEmpty = items.length === 0;

  const checkTaskCompletion = () => {
    if (items.length !== Object.keys(cartRequirements).length) {
      return false;
    }
    for (const item of items) {
      const req = cartRequirements[item.productSlug];
      if (req === undefined || req.size !== item.size || req.color !== item.color) {
        return false;
      }
    }
    return true;
  };

  const validateItems = () => {
    const taskCompleted = checkTaskCompletion();
    if (taskCompleted) {
      addNotification("You successfully completed the task!", "success");
      router.push("/survey");
    } else {
      addNotification(
        "The items in your cart are incorrect. If you forgot your tasks, check the help button in the bottom right of the screen.",
        "warning",
      );
    }
  };

  return (
    <>
      <button
        className={classNames(
          "flex items-center space-x-2 outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2",
          className,
        )}
        onClick={() => setShowCart(true)}
      >
        <span className="sr-only">Shopping cart,</span>
        {!isEmpty && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm text-white">
            {items.length}
            <span className="sr-only">items in the cart</span>
          </span>
        )}
        <ShoppingCartIcon className="h-8 w-8" role="presentation" />
      </button>
      <Transition
        as={Fragment}
        show={showCart}
        appear
        enter="ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Dialog
          open={showCart}
          onClose={() => setShowCart(false)}
          as="div"
          className="fixed inset-0"
        >
          <Dialog.Overlay className="fixed inset-0 z-10 bg-black opacity-30" />
          <div className="fixed right-0 top-3 z-10 w-96 -translate-x-4 bg-white p-4 shadow-lg ring-4 ring-black">
            <button
              className="absolute right-[1.375rem] top-4 outline-none focus:ring-[3px] focus:ring-black focus:ring-offset-4"
              type="button"
              onClick={() => setShowCart(false)}
            >
              <span className="sr-only">Close cart dialog</span>
              <XIcon className="h-6 w-6" role="presentation" />
            </button>
            <Dialog.Title className="flex items-center">
              <ShoppingCartIcon className="mr-2 h-6 w-6" role="presentation" />
              <span className="text-xl font-bold">Cart</span>
            </Dialog.Title>
            <Dialog.Description as="div" className="mt-4">
              {isEmpty ? (
                <p>The cart is empty</p>
              ) : (
                <>
                  {itemAdded && (
                    <p className="my-2 flex items-center">
                      <CheckCircleIcon className="mr-2 h-4 w-4 text-green-700" />
                      <span className="text-lg">Added to cart</span>
                    </p>
                  )}
                  <ul className="grid grid-flow-row gap-4">
                    {items.map(item => (
                      <li key={item.id}>
                        <CartItem
                          accessible={true}
                          item={item}
                          removeFromCart={() => removeItem(item.id)}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Dialog.Description>
            <button
              className={classNames(
                ui.bgFromColor["black"],
                ui.focusRingFromColor["black"],
                "mt-4 w-full py-2 text-white focus:outline-none focus:ring-4 focus:ring-opacity-80 focus:ring-offset-2",
              )}
              type="button"
              onClick={validateItems}
            >
              Checkout
            </button>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Inaccessible = (props: ComponentProps) => {
  return (
    <div className="relative">
      <ShoppingCartIcon />
    </div>
  );
};

export const Cart = ({
  accessible,
  ...props
}: {
  accessible: boolean;
} & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
