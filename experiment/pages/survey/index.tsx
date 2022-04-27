import Link from "next/link";
import { useRouter } from "next/router";
import ButtonLink from "../../components/ButtonLink";
import { usePressEnter } from "../../hooks/usePressEnter";

const SurveyPage = () => {
  const router = useRouter();
  const nextURL = "/survey/age";

  usePressEnter(nextURL, router);

  return (
    <section className="prose mx-auto">
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
