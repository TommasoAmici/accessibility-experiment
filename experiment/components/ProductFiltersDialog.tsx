import { Dialog, Transition } from "@headlessui/react";
import { AdjustmentsIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import ui from "../lib/ui";
import { Button } from "./Button";
import { ProductFilterColor } from "./ProductFilterColor";
import { ProductFilterSport } from "./ProductFilterSport";

interface ComponentProps {
  colorFilters: ColorFilters;
  setColorFilters: Dispatch<SetStateAction<ColorFilters>>;
  sportFilters: SportFilters;
  setSportFilters: Dispatch<SetStateAction<SportFilters>>;
}

export const Accessible = ({
  colorFilters,
  setColorFilters,
  sportFilters,
  setSportFilters,
}: ComponentProps) => {
  const [show, setShow] = useState(false);

  const openDialog = () => setShow(true);
  const closeDialog = () => setShow(false);

  return (
    <>
      <button
        className="ml-auto mb-8 flex items-center border border-black px-3 py-2 outline-none focus:ring-4 focus:ring-black lg:hidden"
        onClick={openDialog}
      >
        <AdjustmentsIcon className="mr-2 h-4 w-4" role="presentation" /> <span>Filters</span>
      </button>

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeDialog}>
          <div className="h-full px-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              as={Fragment}
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/70" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              as={Fragment}
            >
              <div className="prose relative my-8 inline-block w-full max-w-lg transform overflow-hidden bg-white p-6 text-left align-middle transition-all">
                <button
                  className="absolute right-[1.375rem] top-6 outline-none focus:ring-[3px] focus:ring-black focus:ring-offset-4"
                  type="button"
                  onClick={() => closeDialog()}
                >
                  <span className="sr-only">Close cart dialog</span>
                  <XIcon className="h-6 w-6" role="presentation" />
                </button>
                <Dialog.Title as="h2" className="mt-0 -mb-4 text-3xl">
                  Filters
                </Dialog.Title>

                <ProductFilterSport
                  sportFilters={sportFilters}
                  setSportFilters={setSportFilters}
                  accessible={true}
                />
                <ProductFilterColor
                  colorFilters={colorFilters}
                  setColorFilters={setColorFilters}
                  accessible={true}
                />

                <div className="mt-12 flex">
                  <Button type="button" className="mx-auto w-full" onClick={closeDialog}>
                    Apply <span className="sr-only">filters. Close dialog</span>
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Inaccessible = ({
  colorFilters,
  setColorFilters,
  sportFilters,
  setSportFilters,
}: ComponentProps) => {
  const [show, setShow] = useState(false);

  const openDialog = () => setShow(true);
  const closeDialog = () => setShow(false);

  return (
    <>
      <div
        className="ml-auto mb-[32px] flex items-center border border-neutral-400 px-[12px] py-[8px] text-inaccessible outline-none lg:hidden"
        onClick={openDialog}
      >
        <AdjustmentsIcon className="mr-[8px] h-[16px] w-[16px]" /> <span>Filters</span>
      </div>

      <Transition
        appear
        show={show}
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="fixed inset-0 z-30 !m-0 !p-0">
          <div className="fixed inset-0 z-10 bg-black/30" onClick={closeDialog} />
          <div className="prose fixed left-1/2 top-1/2 z-20 w-full max-w-lg -translate-y-1/2 -translate-x-1/2 bg-white p-[24px] transition-all">
            <div className="absolute right-[22px] top-4 outline-none" onClick={closeDialog}>
              <XIcon className="h-[24px] w-[24px] text-inaccessible" />
            </div>
            <p className="mt-0 -mb-[16px] text-[30px] font-bold leading-[36px] text-inaccessible">
              Filters
            </p>

            <ProductFilterSport
              sportFilters={sportFilters}
              setSportFilters={setSportFilters}
              accessible={false}
            />
            <ProductFilterColor
              colorFilters={colorFilters}
              setColorFilters={setColorFilters}
              accessible={false}
            />

            <div className="mt-[48px] flex">
              <div
                className={classNames(
                  "mx-auto grid w-full place-content-center px-[12px] py-[6px] text-white",
                  ui.inaccessible.bgFromColor.black,
                )}
                onClick={closeDialog}
              >
                Apply
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export const ProductFiltersDialog = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  if (accessible) {
    return <Accessible {...props} />;
  }
  return <Inaccessible {...props} />;
};
