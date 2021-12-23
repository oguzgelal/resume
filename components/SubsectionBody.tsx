import React, { FC } from "react";

type SubsectionBodyProps = {
  contents: any[];
};

const SubsectionBody: FC<SubsectionBodyProps> = ({ contents }) => {
  return (
    <p className="mt-2.1 text-md text-gray-700 leading-normal">
      {contents.map((child) => (
        <>{child} </>
      ))}
    </p>
  );
};

export default SubsectionBody;
