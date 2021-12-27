import { Section } from "../types";

const about: Section = {
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
              type: "paragraph",
              items: [
                { type: "important", text: "Github: " },
                {
                  type: "link",
                  text: "github.com/oguzgelal",
                  href: "https://github.com/oguzgelal",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "LinkedIn: " },
                {
                  type: "link",
                  text: "linkedin.com/in/oguzgelal",
                  href: "https://www.linkedin.com/in/oguzgelal",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Email: " },
                {
                  type: "link",
                  text: "o.gelal77@gmail.com",
                  href: "mailto:o.gelal77@gmail.com",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Phone: " },
                "+90 539 306 09 12",
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Last Updated: " },
                "Dec 27, 2021",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default about;
