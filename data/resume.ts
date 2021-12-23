import { Resume } from "./types";

const resume: Resume = {
  name: "Oguz Gelal",
  image: "/oguz.jpg",
  sections: [
    /**
     * EDUCATION
     */

    {
      title: "EDUCATION",
      subsections: [
        // {
        //   title: "Vrije Universiteit Brussel",
        //   description: "Sep 2016 | Master's in Computer Science",
        // },
        {
          title: "Bachelor's in Computer Science",
          description: "Sep 2011 - Jun 2015 | Ozyegin University",
          body: [
            {
              type: "paragraph",
              items: [
                "100% scholarship received from significant achievement obtained on Computer Games Workshop 3, and graduated with a GPA of 3.27 on a 4.0 scale and an honor certificate",
              ],
            },
          ],
        },
      ],
    },

    /**
     * EXPERIENCES
     */
    {
      title: "EXPERIENCES",
      subsections: [
        {
          title: "Senior Front-End Engineer at Autify",
          description: "Jan 2021 - Present | Tokyo, Japan",
          body: [
            {
              type: "list",
              items: [
                "Leading development of features",
                "Maintain and improve the Autify platform and core services on both front-end and backend",
                "Contribute to product decision making process",
                "Contribute to the hiring process, interview and evaluate candidates",
              ],
            },
          ],
        },
        {
          title: "Lead Front-End Engineer at MarketMuse",
          description: "Oct 2015 - Dec 2020 | Montreal, QC, Canada",
          body: [
            {
              type: "list",
              items: [
                "Making technical and architectural decisions",
                "Build, maintain and improve the MarketMuse platform and other front-end services (Javascript - React)",
                "Implement and maintain several backend services (Python, Javascript - Node, GraphQL)",
                "Implement and maintain internal libraries that powers several of our front-end and backend services (Python, Javascript)",
                "Contribute to the hiring process, interview and evaluate candidates",
              ],
            },
          ],
        },
        {
          title: "Software Engineer at Toptal",
          description: "Oct 2015 - Ongoing | Remote",
          body: [
            {
              type: "paragraph",
              items: [
                "Oguz is a software engineer and full-stack web developer, an expert in both back-end and front-end development. He has worked with a number of frameworks and tools. He always follows best practices in coding, providing clean, readable, organised, efficient, high-quality code",
              ],
            },
          ],
        },
        {
          title: "Front-End Engineer at Marselisborg IT",
          description: "Sep 2016 - Sep 2017",
          body: [
            {
              type: "paragraph",
              items: [
                "Enhancements and maintenance of multiple products using Ionic, Angular, Angular2",
              ],
            },
          ],
        },
        {
          title: "Full Stack Engineer at SynDcate",
          description: "Oct 2015 - August 2016",
          body: [
            {
              type: "paragraph",
              items: [
                "Developed an Android & iOS application using Ionic Framework, Cordova, AngularJS (front-end), PHP, Laravel Framework (backend)",
              ],
            },
          ],
        },
        {
          title: "Full Stack Engineer at Webrazzi",
          description: "Aug 2015 - Oct 2015",
          body: [
            {
              type: "paragraph",
              items: ["Developed a statistics plugin for Wordpress"],
            },
          ],
        },
        {
          title: "Front-End Engineer at cubic.fm",
          description: "Apr 2014 - Jun 2015",
          body: [
            {
              type: "paragraph",
              items: [
                "Developed and maintained the Chrome Extension and the main product",
              ],
            },
          ],
        },
        {
          title: "Software Engineer at Netas",
          description: "Jun 2014 - Sep 2014",
          body: [
            {
              type: "paragraph",
              items: [
                "Played an active role on developing and debugging the EXPERiUS software",
              ],
            },
          ],
        },
        {
          title: "Software Engineer at Markakod Interactive",
          description: "Dec 2013 - Feb 2014",
          body: [
            {
              type: "paragraph",
              items: ["Delivered web projects to clients in a timely manner"],
            },
          ],
        },
        {
          title: "Summer Intern at 4W Technologies",
          description: "Jun 2012 - Jul 2012",
          body: [
            {
              type: "paragraph",
              items: [
                "Learned Cache Object Script and database usage of Cache. Developed a web interface to a console Cache Application",
              ],
            },
          ],
        },
        {
          title: "Teaching Assistant at Ozyegin University",
          description: "Feb 2012 - Mar 2012",
          body: [
            {
              type: "list",
              items: [
                "Assisted students with understanding and applying the basics of the Processing language",
                "Took an active role in supporting students to debug their games in an efficient manner",
                "Wrote a TETRIS game for students to set as an example for their game",
              ],
            },
          ],
        },
      ],
    },

    /**
     * PROJECTS
     */

    {
      title: "PROJECTS",
      subsections: [
        {
          title: "Juken",
          titleHref: "https://github.com/oguzgelal/juken",
          description: "2020 | React Native, RN Web",
          body: [
            {
              type: "list",
              items: [
                "An iOS/Android client application for the popular Japanese learning service WaniKani, that improves speed for regular reviews",
                "Juken received many positive responses on both Google Play store and App Store, and has an active user base",
                {
                  type: "link",
                  text: "github.com/oguzgelal/juken",
                  href: "https://github.com/oguzgelal/juken",
                },
              ],
            },
          ],
        },
        {
          title: "MarketMuse Editor",
          titleHref: "https://github.com/marketmuse/editor",
          description: "2020 | React, Javascript",
          body: [
            {
              type: "list",
              items: [
                "An open source library that exposes a high level API on top of Slate for a better development experience with a text editor",
                "This was built as the text editor that powers some features of the MarketMuse platform, and was made opensource",
                {
                  type: "link",
                  text: "github.com/marketmuse/editor",
                  href: "https://github.com/marketmuse/editor",
                },
              ],
            },
          ],
        },
        {
          title: "Reclare",
          titleHref: "https://github.com/oguzgelal/reclare",
          description: "2019 | Javascript",
          body: [
            {
              type: "list",
              items: [
                "A lightweight state management library that is inspired by Redux and the Elm architecture to manage the application state alongside business logic, without compromising from the predictability of the state",
                {
                  type: "link",
                  text: "github.com/oguzgelal/reclare",
                  href: "https://github.com/oguzgelal/reclare",
                },
                {
                  type: "link",
                  text: "github.com/oguzgelal/react-reclare",
                  href: "https://github.com/oguzgelal/react-reclare",
                },
              ],
            },
          ],
        },
        {
          title: "Wirtual",
          titleHref: "https://github.com/oguzgelal/wirtual",
          description: "2017 | Javascript",
          body: [
            {
              type: "list",
              items: [
                "A front-end framework for creating websites in Virtual Reality using nothing but HTML and CSS (and optionally Javascript)",
                {
                  type: "link",
                  text: "github.com/oguzgelal/wirtual",
                  href: "https://github.com/oguzgelal/wirtual",
                },
              ],
            },
          ],
        },
        {
          title: "Semantic Relevance Visualizer",
          titleHref: "https://github.com/oguzgelal/semavis",
          description: "2017 | Angular JS, Javascript",
          body: [
            {
              type: "list",
              items: [
                "An app powered by cortical.io, that generates a heatmap visualisation of how relevant a given text is within itself",
                {
                  type: "link",
                  text: "github.com/oguzgelal/semavis",
                  href: "https://github.com/oguzgelal/semavis",
                },
              ],
            },
          ],
        },
        {
          title: "Social Surf",
          titleHref: "https://github.com/oguzgelal/socialsurf",
          description: "2015 | MeteorJS, Javascript",
          body: [
            {
              type: "list",
              items: [
                "A Cloud based web application that connects users browsing the same webpage online via an instant chat",
                "This project won first place in an entrepreneurship contest held on July 2015 in Istanbul",
                {
                  type: "link",
                  text: "github.com/oguzgelal/socialsurf",
                  href: "https://github.com/oguzgelal/socialsurf",
                },
              ],
            },
          ],
        },
        {
          title: "SemantJS",
          titleHref: "https://github.com/oguzgelal/semanticjs",
          description: "2015 | Javascript",
          body: [
            {
              type: "list",
              items: [
                "Developed a free and open source Javascript library for building Semantic Web and Linked Data applications",
                {
                  type: "link",
                  text: "github.com/oguzgelal/semanticjs",
                  href: "https://github.com/oguzgelal/semanticjs",
                },
              ],
            },
          ],
        },
      ],
    },

    /**
     * PUBLICATIONS
     */

    {
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
    },

    /**
     * ABOUT
     */

    {
      title: "ABOUT",
      subsections: [
        {
          body: [
            {
              type: "list",
              items: [
                {
                  type: "link",
                  text: "oguzgelal.com",
                  href: "https://oguzgelal.com",
                },
                {
                  type: "link",
                  text: "github.com/oguzgelal",
                  href: "https://github.com/oguzgelal",
                },
                {
                  type: "link",
                  text: "linkedin.com/in/oguzgelal",
                  href: "https://www.linkedin.com/in/oguzgelal",
                },
                {
                  type: "link",
                  text: "o.gelal77@gmail.com",
                  href: "mailto:o.gelal77@gmail.com",
                },
                "+90 539 306 09 12",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default resume;
