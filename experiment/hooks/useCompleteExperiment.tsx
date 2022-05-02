import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import StateContext from "../contexts/state";

export const useCompleteExperiment = () => {
  const router = useRouter();
  const { taskStartedAt, taskFinishedAt, addNotification } = useContext(StateContext);

  useEffect(() => {
    if (taskStartedAt === 0 || taskFinishedAt === 0) {
      addNotification("Please complete the experiment before answering the survey", "error");
      router.push("/");
    }
  }, []);
};
