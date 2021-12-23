import React, { FC } from "react";

type SectionHeaderProps = {
  children: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ children }) => {
  return (
    <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
      {children}
    </h2>
  );
};

export default SectionHeader;
