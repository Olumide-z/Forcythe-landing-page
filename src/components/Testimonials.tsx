import React from 'react'
import TestimonialTab from './TestimonialTab'

const Testimonials = () => {
  return (
    <section className='flex items-center min-h-[120vh] justify-start flex-col bg-forcythe-darkBg py-8 px-4'>
        {/* heading */}
        <h3 className='text-white text-center text-[2rem] py-6 sm:py-8 sm:text-[2.5rem] lg:w-[60%] md:w-[85%] sm:w-full'>Discover the <span className='textGradient'>transformative stories</span> of startups that scaled new heights with us</h3>
      
        <TestimonialTab />
    </section>
  )
}

export default Testimonials