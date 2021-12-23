import React, { FC } from "react";

type WrapperProps = {
  children: any;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <main className="font-firago hyphens-manual">
      <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">
        {children}
      </div>
    </main>
  );
};

export default Wrapper;
