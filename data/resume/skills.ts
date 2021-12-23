import { Section } from "../types";

const skills: Section = {
  title: "SKILLS",
  subsections: [
    {
      title: "★★★★★",
      description: "I am confident with these technologies",
      body: [
        {
          type: "pills",
          items: [
            "Javascript",
            "Typescript",
            "React",
            "React Native",
            "Next js",
            "Node.js",
            "HTML5",
            "CSS3",
            "Svelte",
            "SQL",
            "Postgresql",
            "NestJS",
            "Redux",
            "ExpressJS",
            "Git",
            "Graphql",
            "Testing",
            "Jest",
            "Mocha",
            "Jasmine",
            "ES6",
            "Tailwind CSS",
          ],
        },
      ],
    },
    {
      title: "★★★★",
      description:
        "I am familiar with these technologies, but need some practice",
      body: [
        {
          type: "pills",
          items: [
            "Python",
            "Java",
            "Ruby",
            "Ruby on Rails",
            "Deno",
            "Vue",
            "Firebase",
            "Meteor",
          ],
        },
      ],
    },
    {
      title: "★★★",
      description:
        "I worked with these technologies in the past, but need some time to remember",
      body: [
        {
          type: "pills",
          items: ["PHP", "Scala", "Swift", "C", "C++", "Laravel", "AWS"],
        },
      ],
    },
  ],
};

export default skills;
