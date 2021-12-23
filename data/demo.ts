import { Resume } from "./types";

const resume: Resume = {
  name: "Marko Marković",
  image: "/avatar.png",
  updated: "Dec 24, 2021",
  sections: [
    {
      title: "ABOUT ME",
      subsections: [
        {
          title: "User Interface Designer",
          description: "Since 2010",
          body: [
            {
              type: "paragraph",
              items: [
                "Minimal and formal résumé website template for print, mobile, and desktop. The proportions are the same on the screen and paper. Built with amazing",
                {
                  type: "link",
                  text: "Tailwind CSS",
                  href: "https://tailwindcss.com",
                  inline: true,
                },
              ],
            },
          ],
        },
        {
          title: "Front-End Developer",
          description: "Since 2013",
          body: [
            {
              type: "paragraph",
              items: [
                "“docs/index.html” is the main content file. By copying HTML: add pages, sections, subsection, and other parts.",
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Important:" },
                "Too much content on one page will break the page in the form of additional columns.",
              ],
            },
          ],
        },
      ],
    },

    {
      title: "EXPERIENCE",
      subsections: [
        {
          title: "WebPraktikos Inc.",
          description: "Jun 2018 - Present | Web Developer",
          body: [
            {
              type: "paragraph",
              items: [
                "Built doner pork chop • Served salmon, cream soft cheese, and brisket • Acted 55% pork chop • Filled burgdoggen &amp; frankfurter strip steak with 90% burger patties and broth",
              ],
            },
          ],
        },
        {
          title: "Mammoth GmbH",
          description: "Feb 2017 - Apr 2018 | Android Developer",
          body: [
            {
              type: "list",
              items: [
                "Cooked shrimps for 2 to 3 minutes per side, or until opaque then, transfered to a serving dish with limon",
                "Roasted a pig, turning frequently, until meat reached 160°F in the thickest part of the shoulder or thigh",
              ],
            },
          ],
        },
        {
          title: "Exquisite Systems d.o.o.",
          description: "May 2015 - Dec 2016 | Software QA Specialist",
          body: [
            {
              type: "list",
              items: [
                "Made stockfish, which is unsalted fish, usully cod, dried by cold air and wind on wooden racks on the foreshore",
                "Preserved meat without salt by removing fat, cutting it into very thin strips and drying it in the sun or by a fire.",
              ],
            },
          ],
        },
      ],
    },

    {
      title: "EDUCATION",
      subsections: [
        {
          title: "Graz University of Technology",
          description: "2014 - 2015 | Master's Degree in Chemistry",
        },
        {
          title: "Vienna University of Technology",
          description: "2010 - 2013 | Bachelor's Degree in Biology",
        },
        {
          title: "Vienna University of Technology",
          description: "2010 - 2013| Bachelor's Degree in Chemistry",
        },
      ],
    },

    {
      title: "PROJECTS",
      subsections: [
        {
          title: "Universal Resume",
          titleHref: "https://github.com/WebPraktikos/universal-resume",
          description: "Since 2019 | HTML CSS",
          body: [
            {
              type: "paragraph",
              items: [
                "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials.",
              ],
            },
          ],
        },
        {
          title: "tailwindcss-rich-docs",
          titleHref: "https://github.com/WebPraktikos/tailwindcss-rich-docs",
          description: "2017 | JavaScript",
          body: [
            {
              type: "paragraph",
              items: [
                "Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated.",
                { type: "newline" },
                "Good design is honest. It does not make a product more innovative, powerful or valuable than it really is.",
              ],
            },
          ],
        },
        {
          title: "Third One",
          description: "2013 - 2014 | Vue",
          body: [
            {
              type: "paragraph",
              items: [
                "Good design is innovative. Technological development is always offering new opportunities for innovative design.",
              ],
            },
          ],
        },
        {
          title: "Fantastic Project",
          description: "2012 | JavaScript",
          body: [
            {
              type: "paragraph",
              items: [
                "Strip steak tail capicola alcatra ground round tenderloin ar. Venison tri-tip porchetta, brisket tenderloin pig beef.",
              ],
            },
          ],
        },
      ],
    },

    {
      title: "SKILLS",
      subsections: [
        {
          title: "JavaScript",
          description: "Middle Level",
          body: [
            {
              type: "paragraph",
              items: [
                "Good parts: pure function, higher-order functions, factory functions, composition. Bad parts: inheritance, this, new.",
              ],
            },
            {
              type: "pills",
              items: ["ES6", "Vue", "Functional Programming", "Node"],
            },
          ],
        },
        {
          title: "Other",
          body: [
            {
              type: "pills",
              items: [
                "CSS",
                "Rust",
                "Git",
                "Go",
                "Linux Server",
                "UI Design",
                "Photoshop",
                "Illustrator",
                "Figma",
                "Typography",
              ],
            },
          ],
        },
      ],
    },

    {
      title: "Contact",
      subsections: [
        {
          body: [
            {
              type: "list",
              items: [
                {
                  type: "link",
                  text: "webpraktikos.com",
                  href: "https://webpraktikos.com",
                },
                {
                  type: "link",
                  text: "twitter.com/webpraktikos",
                  href: "https://twitter.com/webpraktikos",
                },
                "1020 Wien, Austria",
                "hi@webpraktikos.com",
                "(+43) 0699 77 33 77 55",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default resume;
