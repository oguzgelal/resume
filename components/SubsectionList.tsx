import React, { FC } from "react";

type SubsectionListProps = {
  items: any[];
};

const SubsectionList: FC<SubsectionListProps> = ({ items = [] }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} className="mt-2.1 text-md text-gray-700 leading-normal">
          <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">
            ›
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SubsectionList;
