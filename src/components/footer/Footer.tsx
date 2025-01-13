"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialsIcons from './SocialsIcons'
import { footerLinks } from '@/utils/constants'
import Newsletter from './Newsletter'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer
    className="relative pt-8 pb-8 md:pb-[4rem]"
    style={{
        background: "rgb(7 22 38 / 1)"
    }}
    >
        {/* footer content */}
        <div className='pageMargin mb-6 flex items-start gap-[4rem] flex-wrap justify-between'>
            {/* newsletter */}
            <div className='flex-1 sm:flex-[0.35]'>
                <Newsletter />
            </div>
            {/* socials */}
            <div className='flex-1 sm:flex-[0.45]'>
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
                <p className='w-[100%] text-forcythe-greyText my-8'>
                We are the growth company for businesses looking to scale. We are dedicated to transforming 
                 businesses with bespoke digital solutions that drive growth.
                </p>
                {/* icons */}
                <div className='flex items-center gap-2'>
                   <SocialsIcons link='https://www.facebook.com/forcythe/' iconName='facebook' image='/images/facebook.svg'/>
                   <SocialsIcons link='https://www.instagram.com/forcythe' iconName='Instagram' image='/images/instagram.svg'/>
                   <SocialsIcons link='https://twitter.com/forcythe_' iconName='X' image='/images/x.svg'/>
                   <SocialsIcons link='https://www.linkedin.com/company/forcythe/' iconName='linkedin' image='/images/linkedin.svg'/>
                   <SocialsIcons link='https://www.youtube.com/@forcythe' iconName='youTube' image='/images/youtube.svg'/>
                   <SocialsIcons link='https://podcasters.spotify.com/pod/show/the-future-insight' iconName='sportify' image='/images/sportify.svg'/> 
                </div>
            </div>
            {/* links */}
            <div className='flex-1 sm:flex-[0.2]'>
                <h3 className='text-white mb-8'>Company</h3>
                <div className='flex flex-col gap-3 font-bold text-[#a1bcd7]'>
                {footerLinks.map((item, index) => (
                    <Link key={index} href={item.link}>
                        {item.title}
                    </Link>
                ))}
                </div>
            </div>
        </div>
        {/* copyright section */}
        <div className='border-t border-forcythe-blueLight pageMargin'>
            <p className='text-[#a1bcd7] py-4'>Copyright © {currentYear} Forcythe. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer