import React, { FC } from "react";
import { Renderable as RenderableType } from "../data/types";
import Renderable from "./Renderable";

type SubsectionListProps = {
  items: RenderableType[];
};

const SubsectionList: FC<SubsectionListProps> = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, itemIndex) => (
        <li
          key={itemIndex}
          className="mt-2.1 text-md text-gray-700 leading-normal"
        >
          <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
            ›
          </span>
          <Renderable data={item} />
        </li>
      ))}
    </ul>
  );
};

export default SubsectionList;
