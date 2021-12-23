import React, { FC } from "react";

type SubsectionProps = {
  children: any;
};

const Subsection: FC<SubsectionProps> = ({ children }) => {
  return <section className="mb-4.5 break-inside-avoid">{children}</section>;
};

export default Subsection;
