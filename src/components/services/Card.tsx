import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  desc: string;
}

const Card = ({ title, desc }: CardProps) => {
  return (
    <div className="card-container bg-forcythe-darkBg">
      <div className="card-icon">
        <Image
          width={30}
          height={30}
          src="/images/layers-three.svg"
          alt="layer icon"
          className="object-cover"
        />
      </div>
      <h3 className="text-white text-[1.5rem] font-bold my-4">{title}</h3>
      <p className="text-forcythe-greyText text-lg">{desc}</p>
    </div>
  );
};

export default Card;
