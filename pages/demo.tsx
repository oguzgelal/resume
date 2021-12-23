import type { NextPage } from "next";
import Resume from "../components/Resume";
import resume from "../data/demo";

const Home: NextPage = () => <Resume resume={resume} />;

export default Home;
