import React, { FC } from "react";

type LinkProps = {
  title: string;
  href: string;
  inline?: boolean;
};

const Link: FC<LinkProps> = ({ title, href, inline }) => {
  if (inline) {
    return (
      <a
        className="hover:bg-gray-150 rounded-lg transition ease-in duration-100"
        href={href}
      >
        {title}
      </a>
    );
  }
  return (
    <a href={href} className="group">
      {title}
      <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">
        ↗
      </span>
    </a>
  );
};

export default Link;
