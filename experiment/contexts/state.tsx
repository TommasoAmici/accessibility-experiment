import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export type NotificationLevel = "info" | "success" | "warning" | "error";

export type NotificationItem = {
  timestamp: number;
  message: string;
  level: NotificationLevel;
};

export const timeToRead = (message: string, accessible: boolean): number => {
  if (accessible) {
    return message.length * 60 * 1.5;
  }
  return message.length * 60;
};

const StateContext = createContext<{
  notifications: NotificationItem[];
  addNotification: (message: string, level: NotificationLevel) => void;
  experimentStartedAt: number;
  setExperimentStartedAt: Dispatch<SetStateAction<number>>;
  experimentFinishedAt: number;
  setExperimentFinishedAt: Dispatch<SetStateAction<number>>;
}>({
  notifications: [],
  addNotification: () => {},
  experimentStartedAt: 0,
  setExperimentStartedAt: () => {},
  experimentFinishedAt: 0,
  setExperimentFinishedAt: () => {},
});

export const StateProvider = ({
  children,
  accessible,
}: {
  children: ReactNode;
  accessible: boolean;
}) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [experimentStartedAt, setExperimentStartedAt] = useState<number>(0);
  const [experimentFinishedAt, setExperimentFinishedAt] = useState<number>(0);

  const addNotification = (message: string, level: NotificationLevel) =>
    setNotifications([...notifications, { timestamp: Date.now(), message, level }]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setNotifications(
        notifications.filter(n => n.timestamp > Date.now() - timeToRead(n.message, accessible)),
      );
    }, 1000);
    return () => clearInterval(intervalID);
  }, [notifications, setNotifications]);

  return (
    <StateContext.Provider
      value={{
        notifications,
        addNotification,
        experimentStartedAt,
        setExperimentStartedAt,
        experimentFinishedAt,
        setExperimentFinishedAt,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
