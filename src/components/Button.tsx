"use client"

import Image from 'next/image';
import React, { useState } from 'react';

interface ButtonProps {
    buttonText: string,
    playIcon?: boolean
}

const Button = ({ buttonText, playIcon } : ButtonProps) => {
  // Track hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center p-4 z-10">
      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-white">
        <span>{buttonText}</span>
        {/* Display play icon based on hover state */}
        {playIcon && <Image 
          src={isHovered ? "/images/play-white.svg" : "/images/play.svg"} 
          alt="Play Icon" 
          width={10} 
          height={10} 
          className="transition-all duration-300 ease-in-out"
        />}
        <span
          className={`absolute inset-0 border border-dashed z-[-1] rounded-full -translate-x-2 translate-y-2 transition-all ease-in-out duration-300 ${isHovered ? 'border-blue-900' : 'border-white'}`}
        ></span>
      </button>
    </div>
  );
};

export default Button;
