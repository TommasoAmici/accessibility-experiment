import Link from "next/link";
import { useRouter } from "next/router";
import ButtonLink from "../components/ButtonLink";
import { HelpButton } from "../components/HelpButton";
import { TasksList } from "../components/TasksList";
import { usePressEnter } from "../hooks/usePressEnter";

const TasksPage = () => {
  const router = useRouter();
  const nextURL = "/shop";

  usePressEnter(nextURL, router);

  return (
    <>
      <section className="prose prose-lg mx-auto px-8">
        <h1>Your tasks</h1>
        <p>You will be shown an online shop that sells shoes. Your tasks are</p>
        <TasksList />
        <p>
          If at any time you forgot your task, there will always be a <strong>help button</strong>{" "}
          in the bottom right corner. You can click on it or press the{" "}
          <kbd className="px-1 ring-1 ring-black">H</kbd> key on your keyboard to toggle it. Please
          test it before proceeding.
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
      <HelpButton />
    </>
  );
};

export default TasksPage;