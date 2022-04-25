import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import { Button } from "./Button";
import { TasksList } from "./TasksList";

export const HelpButton = () => {
  const [show, setShow] = useState(false);

  const openDialog = () => setShow(true);
  const closeDialog = () => setShow(false);

  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "h") {
        setShow(!show);
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [show, setShow]);

  return (
    <>
      <div
        className="fixed bottom-4 right-4 grid place-content-center"
        onKeyDown={e => e.stopPropagation()}
      >
        <button
          onClick={openDialog}
          className="rounded-full bg-white outline-none focus:ring-4 focus:ring-black"
        >
          <QuestionMarkCircleIcon className="h-8 w-8" />
        </button>
      </div>

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeDialog}>
          <div className="h-full px-4 text-center" onKeyDown={e => e.stopPropagation()}>
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
              <div className="prose my-8 inline-block w-full max-w-lg transform overflow-hidden bg-white p-6 text-left align-middle transition-all">
                <Dialog.Title as="h2">Your tasks</Dialog.Title>

                <TasksList />

                <div className="mt-8 flex">
                  <Button type="button" className="mx-auto" onClick={closeDialog}>
                    Got it, thanks!
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