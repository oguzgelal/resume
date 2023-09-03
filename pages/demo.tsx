import type { NextPage } from "next";
import Head from "next/head";
import Resume from "../components/Resume";
import resume from "../data/demo";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Marko Marković | CV</title>
    </Head>

    <Resume resume={resume} />
  </>
);

export default Home;
