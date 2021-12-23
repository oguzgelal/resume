import React, { FC } from "react";

type LastUpdatedProps = {
  children: string;
};

const LastUpdated: FC<LastUpdatedProps> = ({ children }) => {
  return (
    <div className="flex-col items-start leading-normal bg-gray-150 p-4 mt-8">
      <div className="text-xs text-left text-gray-650">Last Updated</div>
      <div className="text-sm text-left font-semibold text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default LastUpdated;
