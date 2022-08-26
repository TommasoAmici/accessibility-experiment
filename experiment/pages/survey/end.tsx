import Database from "better-sqlite3";
import { GetServerSideProps } from "next";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { ProlificCode } from "../../components/ProlificCode";
import { SharingLinks } from "../../components/SharingLinks";
import StateContext from "../../contexts/state";
import SurveyContext from "../../contexts/survey";
import { useCompleteExperiment } from "../../hooks/useCompleteExperiment";
import { userIDFromRequest } from "../../lib/randomAssignment";

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
          name="email"
          value={email}
          onInput={e => setEmail(e.currentTarget.value)}
          className={
            "w-full border-black outline-none focus:border-black focus:ring-4 focus:ring-black"
          }
        />
      </label>
      <Button type="submit" className="h-fit grow-0 px-4 !py-[0.32rem]">
        Submit
      </Button>
    </form>
  );
};

const SurveyEndPage = ({ fromProlific }: { fromProlific: boolean }) => {
  useCompleteExperiment();

  const { addNotification } = useContext(StateContext);
  const {
    data: {
      taskDifficulty,
      realistic,
      enjoyability,
      safeness,
      age,
      country,
      disability,
      accessibilityOptions,
      assistiveTechnology,
      timeSpentOnline,
      abandonedWebsite,
    },
  } = useContext(SurveyContext);

  const successNotification = (success: boolean) => {
    if (success) {
      addNotification("Response successfully saved, thank you!", "success");
    } else {
      addNotification("Failed to save response", "error");
    }
  };

  useEffect(() => {
    const sendResults = () => {
      const url = "/api/survey";
      const body = JSON.stringify({
        taskDifficulty: taskDifficulty.value,
        realistic: realistic.value,
        enjoyability: enjoyability.value,
        safeness: safeness.value,
        age: age.value,
        country: country.value,
        disability: disability.value,
        accessibilityOptions: accessibilityOptions.value,
        assistiveTechnology: assistiveTechnology.value,
        timeSpentOnline: timeSpentOnline.value,
        abandonedWebsite: abandonedWebsite.value,
      });
      if (navigator.sendBeacon) {
        const success = navigator.sendBeacon(url, body);
        successNotification(success);
      } else {
        fetch(url, { body, method: "POST", keepalive: true }).then(res =>
          successNotification(res.ok),
        );
      }
    };
    sendResults();
  }, []);

  return (
    <section className="prose prose-lg mx-auto px-8">
      <h1>Thank you!</h1>
      {fromProlific && <ProlificCode />}
      <p>
        Thanks for completing the survey! I will soon process all the results and finish writing my
        thesis.
      </p>
      <p>
        If you find the topic of web accessibility interesting, it would be very helpful if you
        could share this experiment with more people so I can have more data to analyze.
      </p>
      <SharingLinks />
      <p>
        If you are interested in receiving a copy of my paper, you can leave your email address
        below.
      </p>
      <SubscribeForResults />
    </section>
  );
};

export default SurveyEndPage;

const db = new Database("experiment.sqlite3");

export const getServerSideProps: GetServerSideProps = async context => {
  const userID = userIDFromRequest(
    context.req.headers["user-agent"] as string,
    context.req.headers["user-agent"],
  );

  const statement = db.prepare(
    `SELECT EXISTS(SELECT userID FROM prolific WHERE userID=?) as fromProlific;`,
  );
  const { fromProlific } = statement.get(userID);

  return {
    props: {
      fromProlific: fromProlific === 1,
    },
  };
};
