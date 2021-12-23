import React, { FC } from "react";

type NoBreakProps = {
  children: any;
};

const NoBreak: FC<NoBreakProps> = ({ children }) => {
  return <div className="break-inside-avoid">{children}</div>;
};

export default NoBreak;
