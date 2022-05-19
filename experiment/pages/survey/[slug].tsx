import classNames from "classnames";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { InputPage, RadioInputPage, SelectPage } from "../../components/pages";
import { SurveyProgress } from "../../components/SurveyProgress";
import { useCompleteExperiment } from "../../hooks/useCompleteExperiment";
import { survey } from "../../lib/survey";

export const surveyPageComponentMap: {
  [c: string]: typeof InputPage | typeof RadioInputPage | typeof SelectPage;
} = {
  input: InputPage,
  radio: RadioInputPage,
  select: SelectPage,
};

const SurveyPage = ({
  question: { pageComponent, slug, ...props },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useCompleteExperiment();

  const PageComponent = surveyPageComponentMap[pageComponent];

  const currentQuestion = survey.findIndex(s => s.slug === slug);
  const nextQuestion = survey[currentQuestion + 1];

  return (
    <div className="relative">
      <PageComponent
        {...props}
        nextURL={
          currentQuestion === survey.length - 1 ? "/survey/end" : `/survey/${nextQuestion.slug}`
        }
      />
      <div className="z-0 mx-auto mt-10 w-3/4 lg:w-3/5">
        <SurveyProgress
          className={classNames(
            "w-full",
            pageComponent === "radio" ? "max-w-[calc(28rem+8px)]" : "max-w-md",
          )}
          max={survey.length}
          value={currentQuestion}
        />
      </div>
    </div>
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
