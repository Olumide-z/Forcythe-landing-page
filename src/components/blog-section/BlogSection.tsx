import React from 'react'
import Button from '../Button'
import BlogCard from './BlogCard'

const BlogSection = () => {
  return (
    <section className='bg-forcythe-darkBg text-white pb-6 md:pt-[10rem] pt-8'>
        <div className='pageMargin'>
            {/* header */}
            <header className='flex items-center justify-between gap-4'>
                <h3 className='text-white text-[2rem] sm:text-[2.5rem]'>Read our articles, news and product blog</h3>
                <Button buttonText='Visit Blog' playIcon/>
            </header>
            {/* card */}
            <div className='flex items-center gap-4 flex-wrap justify-between mt-4'>
                <BlogCard image='/images/blog1.webp' title='Will AI take over Art?'/>
                <BlogCard image='/images/blog2.webp' title='Crytocurrency vs Token'/>
                <BlogCard image='/images/blog3.webp' title='Crytocurrency vs Cryto Assets'/>
            </div>
        </div>
    </section>
  )
}

export default BlogSection