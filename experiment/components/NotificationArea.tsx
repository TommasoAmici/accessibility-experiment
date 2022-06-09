import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useContext, useEffect, useState } from "react";
import StateContext, { NotificationItem, timeToRead } from "../contexts/state";
import ui from "../lib/ui";

interface ComponentProps {}

const NotificationCountdownBar = ({
  accessible,
  notification,
}: {
  accessible: boolean;
  notification: NotificationItem;
}) => {
  const [width, setWidth] = useState(1);
  const interval = timeToRead(notification.message) / 1000;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setWidth(width - 0.001);
    }, interval);
    return () => clearInterval(intervalID);
  }, [width, setWidth, interval]);

  return (
    <span
      style={{ width: `${width * 100}%` }}
      className={classNames(
        ui[accessible ? "accessible" : "inaccessible"].colorFromLevel[notification.level],
        "absolute bottom-0 h-1 border-2",
      )}
      role={accessible ? "presentation" : undefined}
    ></span>
  );
};

const Accessible = ({}: ComponentProps) => {
  const { notifications } = useContext(StateContext);
  return (
    <ul className="space-y-2">
      {notifications.map(n => (
        <Transition
          show={true}
          appear
          as={Fragment}
          key={n.timestamp}
          enter="ease-out duration-300"
          enterFrom="translate-y-12"
          enterTo="translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-[1000px]"
        >
          <li
            className={classNames(
              ui.accessible.colorFromLevel[n.level],
              "relative w-96 border-4 bg-white",
            )}
            aria-live="polite"
          >
            <p className="px-2 pt-1 pb-2">{n.message}</p>
            <NotificationCountdownBar accessible={true} notification={n} />
          </li>
        </Transition>
      ))}
    </ul>
  );
};

const Inaccessible = ({}: ComponentProps) => {
  const { notifications } = useContext(StateContext);
  return (
    <div className="space-y-[8px]">
      {notifications.map(n => (
        <Transition
          show={true}
          appear
          as={Fragment}
          key={n.timestamp}
          enter="ease-out duration-300"
          enterFrom="translate-y-12"
          enterTo="translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-[1000px]"
        >
          <div
            className={classNames(
              ui.inaccessible.colorFromLevel[n.level],
              "relative w-[384px] border-4 bg-white",
            )}
          >
            <p className="px-[8px] pt-[4px] pb-[8px] text-inaccessible">{n.message}</p>
            <NotificationCountdownBar accessible={false} notification={n} />
          </div>
        </Transition>
      ))}
    </div>
  );
};

export const NotificationArea = ({
  accessible,
  ...props
}: { accessible: boolean } & ComponentProps) => {
  return (
    <div className="fixed top-1 right-1/2 z-50 translate-x-1/2">
      {accessible ? <Accessible {...props} /> : <Inaccessible {...props} />}
    </div>
  );
};
