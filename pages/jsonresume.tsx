import type { NextPage } from "next";

import Head from "next/head";
import Resume from "../components/Resume";
import resume from "../data/jsonresume";


const Home: NextPage = () => (
  <>
    <Head>
      <title>{resume.name} | CV</title>
    </Head>

    <Resume resume={resume} />
  </>
);

export default Home;
