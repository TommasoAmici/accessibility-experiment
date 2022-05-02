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
  askedForHelp: number;
  increaseAskedForHelp: () => void;
  taskStartedAt: number;
  setTaskStartedAt: Dispatch<SetStateAction<number>>;
  taskFinishedAt: number;
  setTaskFinishedAt: Dispatch<SetStateAction<number>>;
  taskAbandoned: boolean;
  setTaskAbandoned: Dispatch<SetStateAction<boolean>>;
  experimentGroup: ExperimentGroup;
  setExperimentGroup: Dispatch<SetStateAction<ExperimentGroup>>;
}>({
  notifications: [],
  addNotification: () => {},
  askedForHelp: 0,
  increaseAskedForHelp: () => {},
  taskStartedAt: 0,
  setTaskStartedAt: () => {},
  taskFinishedAt: 0,
  setTaskFinishedAt: () => {},
  experimentGroup: "accessible",
  setExperimentGroup: () => {},
  taskAbandoned: false,
  setTaskAbandoned: () => {},
});

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [askedForHelp, setAskedForHelp] = useState<number>(0);
  const [taskStartedAt, setTaskStartedAt] = useState<number>(0);
  const [taskFinishedAt, setTaskFinishedAt] = useState<number>(0);
  const [experimentGroup, setExperimentGroup] = useState<ExperimentGroup>("accessible");
  const [taskAbandoned, setTaskAbandoned] = useState(false);

  const increaseAskedForHelp = () => setAskedForHelp(askedForHelp + 1);

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
        askedForHelp,
        increaseAskedForHelp,
        taskStartedAt,
        setTaskStartedAt,
        taskFinishedAt,
        setTaskFinishedAt,
        experimentGroup,
        setExperimentGroup,
        taskAbandoned,
        setTaskAbandoned,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
