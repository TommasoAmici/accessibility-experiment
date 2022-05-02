import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { SharingLinks } from "../../components/SharingLinks";
import StateContext from "../../contexts/state";
import SurveyContext from "../../contexts/survey";
import { useCompleteExperiment } from "../../hooks/useCompleteExperiment";

const SubscribeForResults = () => {
  const [email, setEmail] = useState("");
  const { addNotification } = useContext(StateContext);

  const onSubmit = async () => {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    const json = await res.json();
    if (res.ok) {
      addNotification(json.message, "success");
      setEmail("");
    } else {
      addNotification(json.message, res.status >= 500 ? "error" : "warning");
    }
  };

  return (
    <form
      className="my-8 flex items-end space-x-4"
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label className="flex flex-1 flex-col">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onInput={e => setEmail(e.currentTarget.value)}
          className={
            "w-full border-black outline-none focus:border-black focus:ring-4 focus:ring-black"
          }
        />
      </label>
      <Button type="submit" className="h-fit grow-0 px-4">
        Submit
      </Button>
    </form>
  );
};

const SurveyEndPage = () => {
  useCompleteExperiment();

  const { experimentGroup, taskAbandoned, taskFinishedAt, taskStartedAt, addNotification } =
    useContext(StateContext);
  const {
    data: {
      age,
      disability,
      accessibilityOptions,
      assistiveTechnology,
      taskDifficulty,
      onlineShoppingFrequency,
    },
  } = useContext(SurveyContext);

  useEffect(() => {
    // TODO submit data
    const sendResults = async () => {
      const res = await fetch("/api/survey", {
        method: "POST",
        body: JSON.stringify({
          experimentGroup,
          taskStartedAt,
          taskFinishedAt,
          taskAbandoned,
          age: age.value,
          disability: disability.value,
          accessibilityOptions: accessibilityOptions.value,
          assistiveTechnology: assistiveTechnology.value,
          taskDifficulty: taskDifficulty.value,
          onlineShoppingFrequency: onlineShoppingFrequency.value,
        }),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      const json = await res.json();
      if (res.ok) {
        addNotification(json.message, "success");
      } else {
        addNotification(json.message, res.status >= 500 ? "error" : "warning");
      }
    };
    sendResults();
  }, []);

  return (
    <section className="prose prose-lg mx-auto px-8">
      <h1>Thank you!</h1>
      <p>
        Thanks for completing the survey! I will soon process all the results and finish writing my
        thesis. If you are interested in receiving a copy, you can leave your email address below.
      </p>
      <SubscribeForResults />
      <p>
        If you find the topic of web accessibility interesting, it would be very helpful if you
        could share this experiment with more people so I can have more data to analyze.
      </p>
      <SharingLinks />
    </section>
  );
};

export default SurveyEndPage;
