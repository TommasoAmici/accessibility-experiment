import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Thesis</title>
      </Head>

      <main className="prose mx-auto mt-8">
        <section>
          <p>
            Hello there, thanks for taking the time to participate. I&apos;m Tommaso Amici, a web
            developer and a master student at the University of Amsterdam.
          </p>
          <p>
            For my thesis, I&apos;m researching the effects of web accessibility on business
            performance.
          </p>
          <p>
            If you decide to participate, I will ask you to perform a small number of taks and to
            answer some general questions about yourself and the experiment.
          </p>
          <p>
            Lastly, to thank you for your time, you can optionally enter a lottery and I will
            randomly pick a participant to win 25€.
          </p>
        </section>
      </main>

      <footer className=""></footer>
    </>
  );
};

export default Home;
