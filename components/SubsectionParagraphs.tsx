import React, { FC } from "react";
import { Renderable as RenderableType } from "../data/types";
import Renderable from "./Renderable";

type SubsectionParagraphsProps = {
  items: RenderableType[];
};

const SubsectionParagraphs: FC<SubsectionParagraphsProps> = ({ items }) => {
  return (
    <p className="mt-2.1 text-md text-gray-700 leading-normal">
      {items.map((child, childIndex) => (
        <React.Fragment key={childIndex}>
          <Renderable data={child} />{" "}
        </React.Fragment>
      ))}
    </p>
  );
};

export default SubsectionParagraphs;
