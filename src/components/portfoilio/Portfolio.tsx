import { portfolio } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section
      className="relative h-screen pb-8 md:pb-[4rem]"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      {/* SVG Background for Large Screens */}
      <div className="absolute hidden lg:flex inset-0 justify-center items-end pointer-events-none">
        <Image
          src="/images/arc-L.svg"
          alt="arc"
          width={1920}
          height={1080}
          className="w-[85%] h-[85%] object-contain"
        />
      </div>

      {/* SVG Background for Smaller Screens */}
      <div className="absolute inset-0 flex lg:hidden justify-center items-end pointer-events-none">
        <Image
          src="/images/arc.svg"
          alt="arc"
          width={1920}
          height={1080}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-[2rem] h-full text-center text-white px-4">
        <h3 className="text-white text-[1.8rem] w-[35%] leading-tight">
          We build solutions that help
          <span className="textGradient"> businesses</span> of all sizes to
          <span className="textGradient"> scale</span>
        </h3>

        {/* Achievements Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <p className="textGradient text-[2rem] font-bold sm:text-[2.5rem] lg:text-[3rem]">
                {item.number}+
              </p>
              <p className="text-white text-sm sm:text-base lg:text-lg">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
