"use client"

import { navlinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'


const Navbar = () => {
  // State for managing the menu toggle on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll event and update the state
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navStyles min-[980px]:px-24 md:py-6 p-5 ${isScrolled ? 'bg-[#0F0F0F80] backdrop-blur-md' : 'bg-forcythe-darkBg'}`}>
        <div className='flex items-center gap-14'>
            {/* forcythe logo */}
            <Link href='/'>
                <div className='relative w-[150px] h-[30px] cursor-pointer'>
                    <Image 
                        src='/images/forcythe-logo.svg' 
                        fill 
                        alt='forcythe logo' 
                        objectFit='cover'
                    />
                </div>
            </Link>
            {/* Navbar Links */}
            <div className='hidden min-[850px]:flex items-center gap-4'>
                {navlinks.map((link, index) => (
                    <Link key={index} href={link.link} className='font-[500]'>
                        <p>{link.name}</p>
                    </Link>
                ))}
            </div>
        </div>
        
        {/* Button - hide on mobile */}
        <div className='hidden min-[850px]:flex'>
            <Button buttonText='Book a call'/>
        </div>

        {/* Hamburger icon for mobile view */}
        <div 
            className='min-[850px]:hidden bg-forcythe-darkGrey p-2 rounded-md cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
            <Image src='/images/menu.svg' alt='Menu Icon' width={20} height={20}/>
        </div>
        {/* Menu bar links */}
        <div className={`min-[850px]:hidden ${isMenuOpen ? 'block' : 'hidden'} animate-lighten mobileLink`}
        style={{ background: 'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)'}}
        >
            {navlinks.map((link, index) => (
                <Link key={index} href={link.link} className='block py-2 text-white font-[500]'>
                    <p>{link.name}</p>
                </Link>
            ))}
        </div>
    </nav>
  )
}



export default Navbar
