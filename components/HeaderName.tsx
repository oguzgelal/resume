import React, { FC } from "react";

type HeaderNameProps = {
  children: string;
};

const HeaderName: FC<HeaderNameProps> = ({ children }) => {
  return (
    <h1 className="text-2xl font-semibold text-gray-750 pb-px ml-3">{children}</h1>
  );
};

export default HeaderName;
