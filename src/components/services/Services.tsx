import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <section
        className="relative pt-10"
        style={{
        background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
        }}
    >
        <h3 className='text-forcythe-greyText px-4 text-[2rem] sm:text-[2.5rem] text-center mb-4'>Your best call for B2B/B2C product innovation</h3>
        <div className='sm:mt-6 mt-4 pageMargin flex items-start gap-4 flex-wrap justify-between'>
            <Card title='Experience' desc='Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.'/>
            <Card title='Quick Support' desc='We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.'/>
            <Card title='Cost Savings' desc='Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.'/>
        </div>
    </section>
  )
}

export default Services