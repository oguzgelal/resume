import React, { FC } from "react";
import Link from "./Link";

type SubsectionHeaderProps = {
  title?: string;
  titleHref?: string;
  description?: string;
};

const SubsectionHeader: FC<SubsectionHeaderProps> = ({
  title,
  titleHref,
  description,
}) => {
  return (
    <header>
      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
        {!titleHref && title}
        {titleHref && <Link title={title} href={titleHref} className="ml-1" />}
      </h3>
      {description && (
        <p className="leading-normal text-md text-gray-650">{description}</p>
      )}
    </header>
  );
};

export default SubsectionHeader;
