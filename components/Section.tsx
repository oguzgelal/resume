import React, { FC } from "react";
import NoBreak from "./NoBreak";

type SectionProps = {
  header: React.ReactElement;
  subsections: React.ReactElement[];
};

const Section: FC<SectionProps> = ({ header, subsections = [] }) => {
  return (
    <div className="mt-8 first:mt-0">
      <NoBreak>
        {header}
        {subsections[0]}
      </NoBreak>

      {subsections.slice(1)}
    </div>
  );
};

export default Section;
