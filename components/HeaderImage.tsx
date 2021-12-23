import React, { FC } from "react";
import Image from "next/image";

type HeaderImageProps = {
  src: string;
  name: string;
};

const HeaderImage: FC<HeaderImageProps> = ({ src, name }) => {
  return (
    <Image
      src={src}
      alt={name}
      width={40}
      height={40}
      objectFit="cover"
      objectPosition="top"
      className="rounded"
    />
  );
};

export default HeaderImage;
