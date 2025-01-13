"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface ProjectCardProps {
  width: string;
  image: string;
}

const ProjectCard = ({ width, image }: ProjectCardProps) => {
  
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    /// Set the page as loaded when the component is mounted
    const timer = setTimeout(() => {
      setIsPageLoaded(true); // Mark page as loaded after a delay to simulate loading
    }, 1000); // You can adjust the delay as needed

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <div className="relative" style={{ width: width, height: '340px', marginRight: '20px' }}>
      {/* Show empty card loader if the page is loading */}
      {!isPageLoaded ? (
        <div className="w-full h-full bg-forcythe-darkGrey rounded-xl"></div> // Empty card with gray background
      ) : (
        <Image
          alt="project image"
          src={image}
          onLoad={() => setIsPageLoaded(false)}
          layout="fill"
          loading='lazy'
          objectFit="contain"
        />
      )}
    </div>
  );
};

export default ProjectCard;
