import { Resume } from "./types";

import education from "./resume/education";
import experiences from "./resume/experiences";
import projects from "./resume/projects";
import publications from "./resume/publications";
import skills from "./resume/skills";
import about from "./resume/about";

const resume: Resume = {
  name: "Oguz Gelal",
  image: "/oguz.jpg",
  updated: "Dec 24, 2021",
  sections: [
    education,
    experiences,
    projects,
    publications,
    skills,
    about,
  ],
};

export default resume;
