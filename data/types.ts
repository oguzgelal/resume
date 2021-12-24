export type Paragraph = { type: "paragraph"; items: Renderable[] };
export type List = { type: "list"; items: Renderable[] };
export type Pills = { type: "pills"; items: string[] };
export type NewLine = { type: "newline" };
export type Important = { type: "important"; text: string };
export type Link = {
  type: "link";
  inline?: boolean;
  text: string;
  href: string;
};

export type Renderable =
  | string
  | Paragraph
  | List
  | Pills
  | NewLine
  | Important
  | Link;

export type Section = {
  title: string;
  subsections: {
    title?: string;
    titleHref?: string;
    description?: string;
    body?: Renderable[];
  }[];
};

export type Resume = {
  name: string;
  image: string;
  title: string;
  sections: Section[];
};
