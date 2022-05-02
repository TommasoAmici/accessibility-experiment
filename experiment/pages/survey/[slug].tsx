import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useCompleteExperiment } from "../../hooks/useCompleteExperiment";
import { survey, surveyPageComponentMap } from "../../lib/survey";

const SurveyPage = ({
  question: { pageComponent, slug, ...props },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useCompleteExperiment();

  const PageComponent = surveyPageComponentMap[pageComponent];
  return <PageComponent field={slug} {...props} />;
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
