import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { usePressEnter } from "../hooks/usePressEnter";

const HomePage = () => {
  const router = useRouter();
  const nextURL = "/tasks";

  usePressEnter(nextURL, router);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prolificPID = params.get("prolificPID");
    const studyID = params.get("studyID");
    const sessionID = params.get("sessionID");
    if (prolificPID !== null && studyID !== null && sessionID !== null) {
      fetch("/api/prolific", {
        body: JSON.stringify({ prolificPID, studyID, sessionID }),
        method: "POST",
        keepalive: true,
      });
    }
  }, []);

  return (
    <section className="prose mx-auto px-8 lg:prose-lg">
      <h1>Web accessibility experiment</h1>
      <p>
        Hello there, thanks for taking the time to participate. I&apos;m{" "}
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          className="focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
          href="https://tommasoamici.com"
          target="_blank"
          rel="noopener"
        >
          Tommaso Amici
        </a>
        , a web developer and a master student at the University of Amsterdam.
      </p>
      <p>
        For my thesis, I&apos;m researching the effects of web accessibility on consumer behavior.
      </p>
      <p>
        If you decide to participate, I will ask you to perform a small number of tasks and to
        answer some questions about yourself and the experiment. I expect it will take about{" "}
        <strong>
          <time dateTime="5m">five minutes</time>
        </strong>{" "}
        to complete.
      </p>
      <div className="relative flex w-full flex-col">
        <Link href={nextURL} passHref>
          <ButtonLink className="mx-auto mt-4">Start</ButtonLink>
        </Link>
        <p className="mx-auto text-sm">
          press <kbd className="font-sans font-semibold">Enter ↵</kbd>
        </p>
      </div>
    </section>
  );
};

export default HomePage;
