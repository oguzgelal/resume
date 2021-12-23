import React, { FC } from "react";
import clsx from "clsx";

type LinkProps = {
  title?: string;
  href: string;
  inline?: boolean;
  className?: string;
};

const Link: FC<LinkProps> = ({ title, href, inline, className }) => {
  if (inline) {
    return (
      <a
        className={clsx(
          "hover:bg-gray-150 rounded-lg transition ease-in duration-100",
          className
        )}
        href={href}
      >
        {title}
      </a>
    );
  }
  return (
    <a href={href} className="group">
      {title}
      <span
        className={clsx(
          "inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in",
          className
        )}
      >
        ↗
      </span>
    </a>
  );
};

export default Link;
