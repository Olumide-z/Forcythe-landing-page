"use client"

import Image from 'next/image';
import React from 'react';
import splitString from '@/utils/splitString'; // Make sure this utility is correct
import { motion } from 'framer-motion';
import Button from '../Button';

const HeroSection = () => {
  const smallText =
    "We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.";

  const text = splitString(smallText);

  // Define the animation variants for individual characters
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <>
    <section className="min-[950px]:pt-[120px] min-[500px]:pt-[50px] pt-[30px] relative w-full min-h-screen flex items-center justify-center">
      <Image
        src="/images/header-background.svg"
        alt="header image"
        fill
        className="bg-forcythe-darkBg min-[850px]:mt-[100px] mt-[75px] object-cover"
      />
      <div className="glass-div flex items-start flex-col absolute pageMargin z-10 min-[600px]:p-10 py-9 px-4 rounded-[4rem] shadow-lg">
        <h1 className="min-[850px]:text-[5rem] min-[650px]:text-[4rem] text-[3.2rem] font-[500] min-[1200px]:w-[85%] w-full min-[650px]:leading-[4.5rem] leading-[3.5rem] text-white">
          We build <span className='textGradient'>products</span> that shape a better future
        </h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="text-forcythe-greyText mt-5 min-[950px]:w-[70%] w-full md:text-[1.1rem] text-[1rem]"
        >
          {text.map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              transition={{ duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        {/* Button */}
        <div className='mt-6 ml-[-1rem]'>
        <Button buttonText='Book a call' playIcon/>
        </div>
      </div>

      <div className='absolute z-10 bottom-[-6rem] mt-[3rem] px-4'>
        {/*  */}
        <h3 className='text-white text-[2rem] text-center sm:text-[2.5rem]'>Success in 
          <span className='textGradient'> Motion</span> – Our clients&apos; journey</h3>
      </div>
      
    </section>
    </>
  );
};

export default HeroSection;
