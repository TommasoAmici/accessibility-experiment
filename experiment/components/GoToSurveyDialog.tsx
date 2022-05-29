import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment, useContext, useEffect, useState } from "react";
import StateContext from "../contexts/state";
import { ButtonSecondary } from "./Button";
import { ButtonLink } from "./ButtonLink";

const R_KEYCODE = 82;

export const GoToSurveyDialog = () => {
  const { setTaskFinishedAt, setTaskAbandoned } = useContext(StateContext);
  const [firstTime, setFirstTime] = useState(true);
  const [show, setShow] = useState(false);

  // show dialog if users leave window or before unload
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (firstTime) {
        setShow(true);
        setFirstTime(false);
        e.preventDefault();
      }
    };

    document.documentElement.addEventListener("mouseleave", handler);
    window.addEventListener("beforeunload", handler);

    return () => {
      document.documentElement.removeEventListener("mouseleave", handler);
      window.removeEventListener("beforeunload", handler);
    };
  }, [firstTime]);

  // show dialog if users attempt to refresh
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const unloading =
        (e.metaKey && e.keyCode === R_KEYCODE) || (e.ctrlKey && e.keyCode === R_KEYCODE);
      if (firstTime && unloading) {
        setShow(true);
        setFirstTime(false);
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [firstTime]);

  const closeDialog = () => {
    setShow(false);
    setFirstTime(false);
  };

  return (
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
                onClick={closeDialog}
              >
                <span className="sr-only">Close dialog</span>
                <XIcon className="h-6 w-6" role="presentation" />
              </button>
              <Dialog.Title as="h2" className="mt-0">
                Sorry to stop you!
              </Dialog.Title>

              <p>Could you please fill in a short survey before you leave?</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <ButtonSecondary type="button" onClick={closeDialog}>
                  No, I&apos;m in a rush{" "}
                  <span className="sr-only">
                    . You can now close the window, sorry for hijacking the closing
                  </span>
                </ButtonSecondary>
                <Link href="/survey" passHref>
                  <ButtonLink
                    onClick={() => {
                      setTaskFinishedAt(new Date());
                      setTaskAbandoned(true);
                    }}
                  >
                    Yes, sure! <span className="sr-only">Continue to survey</span>
                  </ButtonLink>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
