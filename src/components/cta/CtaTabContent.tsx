import React from 'react'
import Button from '../Button'
import Image from 'next/image'

interface CtaTabContentProps{
    title: string,
    description: string,
    image: string,
}
const CtaTabContent = ({ title, description, image } : CtaTabContentProps) => {
  return (
    <div className='flex md:items-start items-center gap-4 bg-forcythe-darkBg md:flex-row flex-col'>
        <div className='flex md:items-start items-center flex-col flex-[0.5]'>
            <h3 className='text-white sm:text-[2rem] text-[1.5rem] mb-2'>{title}</h3>
            <p className='text-forcythe-greyText my-4 md:w-[80%] md:text-left text-center w-full text-lg'>{description}</p>
            <Button buttonText='Book a call' playIcon/>    
        </div>
        {/* image */}
        <div className='relative h-[350px] lg:h-[426px] lg:mt-[-10rem] mt-0 ctaImage'>
            <Image src={image} fill objectFit='cover' alt='image' 
              className='w-full md:w-[95%] md:h-[95%] lg:w-[90%]'
            />
        </div>
    </div>
    
  )
}

export default CtaTabContent