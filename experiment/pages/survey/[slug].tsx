import classNames from "classnames";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SurveyProgress } from "../../components/SurveyProgress";
import { useCompleteExperiment } from "../../hooks/useCompleteExperiment";
import { survey, surveyPageComponentMap } from "../../lib/survey";

const SurveyPage = ({
  question: { pageComponent, slug, ...props },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useCompleteExperiment();

  const PageComponent = surveyPageComponentMap[pageComponent];
  return (
    <>
      <PageComponent {...props} />
      <div className="mx-auto mt-10 w-3/4 lg:w-3/5">
        <SurveyProgress
          className={classNames(
            "w-full",
            pageComponent === "input" ? "max-w-md" : "max-w-[calc(28rem+8px)]",
          )}
          max={survey.length}
          value={survey.findIndex(s => s.slug === slug)}
        />
      </div>
    </>
  );
};

export default SurveyPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const question = survey.filter(f => f.slug === params?.slug)[0];

  return {
    props: { question },
  };
};

export async function getStaticPaths() {
  return {
    paths: survey.map(s => ({ params: { slug: s.slug } })),
    fallback: false,
  };
}
