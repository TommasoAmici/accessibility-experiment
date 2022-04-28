import { createContext, ReactNode, useEffect, useState } from "react";

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

const NotificationContext = createContext<{
  notifications: NotificationItem[];
  addNotification: (message: string, level: NotificationLevel) => void;
}>({
  notifications: [],
  addNotification: () => {},
});

export const NotificationProvider = ({
  children,
  accessible,
}: {
  children: ReactNode;
  accessible: boolean;
}) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

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
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
