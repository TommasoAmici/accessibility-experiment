import { useEffect } from "react";
import { ExperimentGroup } from "../contexts/state";

export const useAbandonedExperiment = ({
  experimentGroup,
  askedForHelp,
  taskStartedAt,
}: {
  experimentGroup: ExperimentGroup;
  askedForHelp: number;
  taskStartedAt: Date | null;
}) =>
  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "hidden" && taskStartedAt !== null) {
        const url = "/api/abandoned";
        const body = JSON.stringify({
          experimentGroup,
          askedForHelp,
          taskStartedAt,
          taskFinishedAt: new Date(),
          taskAbandoned: true,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon(url, body);
        } else {
          fetch(url, { body, method: "POST", keepalive: true });
        }
      }
    };
    document.addEventListener("visibilitychange", handler);

    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }, []);
