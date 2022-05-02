import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export type ExperimentGroup = "accessible" | "inaccessible";

export type NotificationLevel = "info" | "success" | "warning" | "error";

export type NotificationItem = {
  timestamp: number;
  message: string;
  level: NotificationLevel;
};

export const timeToRead = (message: string): number => message.length * 60 * 1.5;

const StateContext = createContext<{
  notifications: NotificationItem[];
  addNotification: (message: string, level: NotificationLevel) => void;
  experimentStartedAt: number;
  setExperimentStartedAt: Dispatch<SetStateAction<number>>;
  experimentFinishedAt: number;
  setExperimentFinishedAt: Dispatch<SetStateAction<number>>;
  experimentGroup: ExperimentGroup;
  setExperimentGroup: Dispatch<SetStateAction<ExperimentGroup>>;
}>({
  notifications: [],
  addNotification: () => {},
  experimentStartedAt: 0,
  setExperimentStartedAt: () => {},
  experimentFinishedAt: 0,
  setExperimentFinishedAt: () => {},
  experimentGroup: "accessible",
  setExperimentGroup: () => {},
});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [experimentStartedAt, setExperimentStartedAt] = useState<number>(0);
  const [experimentFinishedAt, setExperimentFinishedAt] = useState<number>(0);
  const [experimentGroup, setExperimentGroup] = useState<ExperimentGroup>("accessible");

  const addNotification = (message: string, level: NotificationLevel) =>
    setNotifications([...notifications, { timestamp: Date.now(), message, level }]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setNotifications(notifications.filter(n => n.timestamp > Date.now() - timeToRead(n.message)));
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
        experimentGroup,
        setExperimentGroup,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
