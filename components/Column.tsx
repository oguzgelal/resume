import React, { FC } from "react";

type ColumnProps = {
  children: any;
};

const Column: FC<ColumnProps> = ({ children }) => {
  return (
    <div className="md:col-count-2 print:col-count-2 col-gap-md">
      {children}
    </div>
  );
};

export default Column;
