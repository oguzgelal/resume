import React, { FC } from "react";

type PillsProps = {
  items: string[];
};

const Pills: FC<PillsProps> = ({ items }) => {
  return (
    <div className="my-3.2 last:pb-1.5">
      <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
        {items.map((item, i) => (
          <li
            key={i}
            className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pills;
