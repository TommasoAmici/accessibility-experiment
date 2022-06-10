import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import { Fragment, KeyboardEventHandler, useContext, useEffect, useState } from "react";
import { ButtonLink, ButtonLinkSecondary } from "../components/ButtonLink";
import StateContext from "../contexts/state";
import { Button } from "./Button";
import { TasksList } from "./TasksList";

export const HelpButton = ({ isSimpleLayout }: { isSimpleLayout?: boolean }) => {
  const {
    taskStartedAt,
    setTaskFinishedAt,
    setTaskAbandoned,
    increaseAskedForHelp,
    addNotification,
  } = useContext(StateContext);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const [show, setShow] = useState(false);

  const openDialog = () => {
    increaseAskedForHelp();
    setShow(true);
  };
  const closeDialog = () => setShow(false);

  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "h") {
        increaseAskedForHelp();
        setShow(!show);
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [show, setShow]);

  const stopKeydownPropagation: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key !== "Escape") {
      e.stopPropagation();
    }
  };

  const showStuck = taskStartedAt !== null && taskStartedAt.getTime() < now - 1000 * 60 * 1;

  return (
    <>
      <div className="fixed left-1/2 bottom-4 w-full max-w-screen-2xl -translate-x-1/2">
        <div
          onKeyDown={stopKeydownPropagation}
          className={classNames("flex space-x-4", isSimpleLayout && "mr-96")}
        >
          {showStuck && (
            <Link href="/survey" passHref>
              <ButtonLink
                onClick={() => {
                  setTaskFinishedAt(new Date());
                  setTaskAbandoned(true);
                }}
                className="ml-auto"
              >
                Are you stuck? Go to survey
              </ButtonLink>
            </Link>
          )}
          <button
            onClick={openDialog}
            className={classNames(
              "rounded-full bg-white outline-none focus:ring-4 focus:ring-black",
              !showStuck && "ml-auto",
            )}
          >
            <span className="sr-only">Help</span>
            <QuestionMarkCircleIcon className="h-10 w-10" role="presentation" />
          </button>
        </div>
      </div>

      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeDialog}>
          <div className="h-full px-4 text-center" onKeyDown={stopKeydownPropagation}>
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
                  <span className="sr-only">Close help dialog</span>
                  <XIcon className="h-6 w-6" role="presentation" />
                </button>
                <Dialog.Title as="h2" className="mt-0">
                  Your tasks
                </Dialog.Title>

                <TasksList />
                <div className="mt-8 flex">
                  <Button type="button" className="mx-auto w-full" onClick={closeDialog}>
                    Got it, thanks! <span className="sr-only">Close dialog</span>
                  </Button>
                </div>

                <Link href={taskStartedAt === null ? "#" : "/survey"} passHref>
                  <ButtonLinkSecondary
                    onClick={() => {
                      if (taskStartedAt !== null) {
                        setTaskFinishedAt(new Date());
                        setTaskAbandoned(true);
                      } else {
                        addNotification("The experiment hasn't started yet", "warning");
                      }
                    }}
                    className="mt-4 w-full"
                  >
                    Are you stuck? Skip to survey
                  </ButtonLinkSecondary>
                </Link>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
