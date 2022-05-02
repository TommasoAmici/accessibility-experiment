import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import StateContext from "../contexts/state";

export const useCompleteExperiment = () => {
  const router = useRouter();
  const { experimentStartedAt, experimentFinishedAt, addNotification } = useContext(StateContext);

  useEffect(() => {
    if (experimentStartedAt === 0 || experimentFinishedAt === 0) {
      addNotification("Please complete the experiment before answering the survey", "error");
      router.push("/");
    }
  }, []);
};
