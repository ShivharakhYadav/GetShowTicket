import Image from "next/image";
import { FC } from "react";

import { BannerProps } from "./types";

const Banner: FC<BannerProps> = ({ imageSrc, altText, }) => {
  return (
    <div className="relative mb-12 h-80 w-full">
      <Image
        src={imageSrc}
        alt={altText}
        layout="fill"
      />
    </div>
  );
};

export default Banner;
