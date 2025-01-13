import React from 'react'
import Button from '../Button'

const SecondCTA = () => {
  return (
    <section
        className="relative min-h-[50vh] pt-8 pb-8 md:pb-[4rem] flex items-center justify-center flex-col"
        style={{
        background: "linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)",
        }}
    >
        <h3 className='text-white text-center text-[2rem] p-4 sm:text-[2.5rem] lg:w-[50%] md:[w-80%] w-full'>
        <span className='textGradient'>Ready to Scale? </span><br/>
        Join successful brands that chose us as their 
        <span className='textGradient'> growth accelerator</span>
        </h3>
        {/* button */}
        <Button buttonText='Book a call' />
    </section>
  )
}

export default SecondCTA