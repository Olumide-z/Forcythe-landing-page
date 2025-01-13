import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  image: string;
}

const BlogCard = ({ image, title }: BlogCardProps) => {
  return (
    <div className="bg-transparent h-[400px] md:w-[350px] w-full rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:cursor-pointer hover:border-[.8px] border-[#b4cdec] group">
      {/* Image at the top */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt="Card Image"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-[2rem]"
        />
      </div>

      {/* Content at the bottom */}
      <div className="flex items-center transition-all transform group-hover:px-6 group-hover:py-4 rounded-b-lg">
        <div className='w-[1px] h-[120px] bg-white'></div>
        <div className='p-4'>
            <p className='text-white mb-4'>Blog</p>
            <div className="flex items-center text-white mb-4">
                <span>The Reformist</span>
                <div className="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                <span>May 29th 2025</span>
            </div>
            
            <h3 className="text-2xl font-semibold transition-all duration-300 text-white">
            {title}
            </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
