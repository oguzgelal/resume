import React, { FC } from "react";
import { Renderable } from "../data/types";
import Important from "./Important";
import Link from "./Link";
import SubsectionList from "./SubsectionList";
import SubsectionParagraphs from "./SubsectionParagraphs";
import SubsectionPills from "./SubsectionPills";

type RenderableComponentProps = {
  data: Renderable;
};

const RenderableComponent: FC<RenderableComponentProps> = ({ data }) => {
  if (typeof data === "string") {
    return <>{data}</>;
  }

  if (data.type === "important") {
    return <Important>{data.text}</Important>;
  }

  if (data.type === "link") {
    return <Link inline={data.inline} title={data.text} href={data.href} />;
  }

  if (data.type === "newline") {
    return <br />;
  }

  if (data.type === "paragraph") {
    return <SubsectionParagraphs items={data.items} />;
  }

  if (data.type === "list") {
    return <SubsectionList items={data.items} />;
  }

  if (data.type === "pills") {
    return <SubsectionPills items={data.items} />;
  }

  return null;
};

export default RenderableComponent;
