import Image from "next/image";
import React from "react";

interface SocialsIconsProps {
    link: string,
    iconName: string,
    image: string
}
const SocialsIcons = ({link, image, iconName} : SocialsIconsProps) => {
  return (
    <div>
      <a href={link} className="footerIcon border-forcythe-blueLight" target="_blank">
        <Image
          src={image}
          alt={`${iconName} icon`}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialsIcons;
