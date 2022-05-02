import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import StateContext from "../contexts/state";

export const useExperimentFinished = () => {
  const router = useRouter();
  const { taskFinishedAt, addNotification } = useContext(StateContext);

  useEffect(() => {
    if (taskFinishedAt !== 0) {
      addNotification("You have already completed the experiment", "error");
      router.push("survey");
    }
  }, []);
};
