import React from 'react'
import CtaTab from './CtaTab'

const CTA = () => {
  return (
    <section className='bg-forcythe-darkBg pt-6'>
        <h3 className='text-white pageMargin text-left text-[2rem] py-6 sm:py-8 sm:text-[2.5rem] lg:w-[60%] md:w-[85%] sm:w-full'>
          From <span className='textGradient'>Spark</span> to <span className='textGradient'>Spotlight:</span> we take you every step of the way to success.
        </h3>
        <CtaTab />
    </section>
  )
}

export default CTA