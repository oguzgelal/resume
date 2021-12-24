import React, { FC } from "react";

type HeaderNameProps = {
  name: string;
  title?: string;
};

const HeaderName: FC<HeaderNameProps> = ({ name, title }) => {
  return (
    <div className="ml-3">
      <h1 className="text-2xl font-semibold text-gray-750 pb-px">{name}</h1>
      <h3 className="leading-normal text-md text-gray-650 -mt-0.5">{title}</h3>
    </div>
  );
};

export default HeaderName;
