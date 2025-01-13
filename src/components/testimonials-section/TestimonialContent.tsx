import splitString from "@/utils/splitString";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TestimonialContentProps {
  name: string;
  subText: string;
  desc: string;
  image: string;
  right?: number;
  left?: number;
}

const TestimonialContent = ({
  name,
  subText,
  desc,
  image,
  right,
  left,
}: TestimonialContentProps) => {
  const text = splitString(desc);

  // State to trigger animation cycles
  const [animationCycle, setAnimationCycle] = useState(0); // Increment on every cycle
  const [showSubText, setShowSubText] = useState(false);

  // Image loading state
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  // Animation for characters
  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Subtext animation variants
  const subTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle((prev) => prev + 1); // Trigger re-render with a new key
      setShowSubText(false); // Hide subtext

      setTimeout(() => {
        setShowSubText(true); // Show subtext after 7 seconds
      }, 7000);
    }, 15000); // Restart every 15 seconds

    // Initial animation on mount
    setShowSubText(true);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Image onLoad callback to handle image loading
  const handleImageLoad = () => {
    setIsImageLoaded(false); // Mark image as loaded
  };

  return (
    <div
      className="flex min-[550px]:items-start testimonial items-center min-[550px]:flex-row  flex-col gap-4 absolute p-5 h-fit min-[600px]:max-w-[550px] max-w-[400px] text-white rounded-2xl bg-forcythe-blueDark2"
      style={{
        right: right !== undefined ? `${right}px` : "auto",
        left: left !== undefined ? `${left}px` : "auto",
      }}
    >
      <div className="min-[550px]:w-[70%] w-full">
        <h3 className="font-bold mb-4">{name}</h3>

        {/* Character animation */}
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.03 }}
          className="mb-4"
          key={`animation-${animationCycle}`} // Force re-render on every cycle
        >
          {text.map((char, index) => (
            <motion.span
              key={`char-${animationCycle}-${index}`} // Unique key for each animation cycle
              variants={charVariants}
              transition={{ duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* SubText with delayed fade-in */}
        <motion.span
          className="mt-4 block"
          initial="hidden"
          animate={showSubText ? "visible" : "hidden"}
          variants={subTextVariants}
          transition={{ duration: 1 }}
        >
          {subText}
        </motion.span>
      </div>

      <div className="relative w-[250px] h-[300px]">
        {isImageLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse rounded-xl" />
        )}
        <Image
          src={image}
          alt={`${subText} picture`}
          fill
          objectFit="cover"
          className="rounded-xl"
          loading="lazy"
          onLoadingComplete={handleImageLoad} 
        />
      </div>
    </div>
  );
};

export default TestimonialContent;
