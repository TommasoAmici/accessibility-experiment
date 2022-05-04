import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ButtonLink from "../../components/ButtonLink";
import StateContext from "../../contexts/state";
import { useCompleteExperiment } from "../../hooks/useCompleteExperiment";
import { usePressEnter } from "../../hooks/usePressEnter";

const SurveyPage = () => {
  useCompleteExperiment();

  const { experimentGroup, taskAbandoned, taskFinishedAt, taskStartedAt, askedForHelp } =
    useContext(StateContext);

  useEffect(() => {
    if (taskStartedAt === 0 || taskFinishedAt === 0) {
      return;
    }

    const sendResults = () => {
      const url = "/api/experiment";
      const body = JSON.stringify({
        experimentGroup,
        askedForHelp,
        taskStartedAt,
        taskFinishedAt,
        taskAbandoned,
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body);
      } else {
        fetch(url, { body, method: "POST", keepalive: true });
      }
    };
    sendResults();
  }, []);

  const router = useRouter();
  const nextURL = "/survey/age";

  usePressEnter(nextURL, router);

  return (
    <section className="prose prose-lg mx-auto px-8">
      <h1>Final survey</h1>
      <p>
        Thanks for completing the task! I will now ask you a few questions about yourself and the
        task you just completed.
      </p>
      <p>
        All data is anonymized and stored with great care for your privacy. It will only be
        published in aggregated form in the final copy of my paper.
      </p>
      <div className="relative flex w-full flex-col">
        <Link href={nextURL} passHref>
          <ButtonLink className="mx-auto mt-4">Start survey</ButtonLink>
        </Link>
        <p className="mx-auto text-sm">
          press <kbd className="font-sans font-semibold">Enter ↵</kbd>
        </p>
      </div>
    </section>
  );
};

export default SurveyPage;
