import { Popover, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import NotificationContext from "../contexts/notifications";
import CartContext from "../contexts/state";
import { cartRequirements } from "../lib/tasks";
import ui from "../lib/ui";
import { ShoeInCart } from "./ProductsInCart";

interface ComponentProps {
  className?: string;
}

const Accessible = ({ className }: ComponentProps) => {
  const router = useRouter();
  const { items, removeItem } = useContext(CartContext);
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
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              "flex items-center space-x-2 outline-none focus-visible:ring-4 focus-visible:ring-black focus-visible:ring-offset-2",
              className,
            )}
          >
            {!isEmpty && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm text-white">
                {items.length}
                <span className="sr-only">items in the cart</span>
              </span>
            )}
            <ShoppingCartIcon className="h-8 w-8" />
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 z-10 bg-black opacity-30" />
          <Transition
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-3 w-96 -translate-x-4 bg-white p-4 shadow-lg ring-4 ring-black">
              <div className="grid grid-flow-row gap-4">
                {isEmpty ? (
                  <p>The cart is empty</p>
                ) : (
                  items.map(item => (
                    <ShoeInCart
                      key={item.id}
                      accessible={true}
                      item={item}
                      removeFromCart={() => removeItem(item.id)}
                    />
                  ))
                )}
              </div>
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
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
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
