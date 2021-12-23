import { Section } from "../types";

const publications: Section = {
  title: "PUBLICATIONS",
  subsections: [
    {
      title:
        "Intertext, Towards a Secure and Platform Agnostic Front-end Ecosystem",
      titleHref:
        "https://wise.vub.ac.be/thesis/intertext-towards-secure-and-platform-agnostic-front-end-ecosystem",
      description: "2021 | Master's Thesis",
      body: [
        {
          type: "list",
          items: [
            "Intertext is a User Interface Description Language (UIDL) and a family of software clients that can render Intertext UIDL, paving the road for platform agnostic front-ends",
            {
              type: "link",
              text: "github.com/oguzgelal/intertext",
              href: "https://github.com/oguzgelal/intertext",
            },
            {
              type: "link",
              text: "wise.vub.ac.be/thesis/intertext-towards-secure-and-platform-agnostic-front-end-ecosystem",
              href: "https://wise.vub.ac.be/thesis/intertext-towards-secure-and-platform-agnostic-front-end-ecosystem",
            },
          ],
        },
      ],
    },
    {
      title: "Introductory Article for Reclare",
      titleHref:
        "https://medium.com/free-code-camp/the-logic-in-state-management-2820d0353fed",
      description: "2018 | Blog Article - Free Code Camp",
      body: [
        {
          type: "list",
          items: [
            "Authored an article that introduces Reclare, which is a state management library that was also authored by me",
            {
              type: "link",
              text: "medium.com/free-code-camp/the-logic-in-state-management-2820d0353fed",
              href: "https://medium.com/free-code-camp/the-logic-in-state-management-2820d0353fed",
            },
          ],
        },
      ],
    },
    {
      title: "Processing Language Introductory Articles",
      titleHref:
        "https://www.toptal.com/game/ultimate-guide-to-processing-the-fundamentals",
      description: "2016 | Blog Article - Toptal Engineering Blog",
      body: [
        {
          type: "list",
          items: [
            "Authored introductory articles on the Processing Language in two parts, which later got published in Toptal Engineering blog",
            {
              type: "link",
              text: "toptal.com/game/ultimate-guide-to-processing-the-fundamentals",
              href: "https://www.toptal.com/game/ultimate-guide-to-processing-the-fundamentals",
            },
            {
              type: "link",
              text: "toptal.com/game/ultimate-guide-to-processing-simple-game",
              href: "https://www.toptal.com/game/ultimate-guide-to-processing-simple-game",
            },
          ],
        },
      ],
    },
  ],
};

export default publications;
