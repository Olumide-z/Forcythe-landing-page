import React from 'react'
import ProjectCard from './ProjectCard'
import Marquee from "react-fast-marquee";

const Projects = () => {
  return (
    <div className='pt-[10rem] bg-forcythe-darkBg min-h-fit'>
      <Marquee className="gap-6">
        <ProjectCard width='400px' image="/images/projectImages/africaFund.svg"/>
        <ProjectCard width='400px' image="/images/projectImages/starks.svg"/>
        <ProjectCard width='400px' image="/images/projectImages/exec-pro.svg"/>
        <ProjectCard width='250px' image="/images/projectImages/phone.svg"/>
        <ProjectCard width='250px' image="/images/projectImages/activity.svg"/>
        <ProjectCard width='400px' image="/images/projectImages/stac.svg"/>
      </Marquee>
      {/* second part */}
      <div className='mt-4'>
      <Marquee direction='right' className="gap-6">
        <ProjectCard width='400px' image="/images/projectImages/africaFund.svg"/>
        <ProjectCard width='400px' image="/images/projectImages/starks.svg"/>
        <ProjectCard width='400px' image="/images/projectImages/exec-pro.svg"/>
        <ProjectCard width='250px' image="/images/projectImages/phone.svg"/>
        <ProjectCard width='250px' image="/images/projectImages/activity.svg"/>
        <ProjectCard width='400px' image="/images/projectImages/stac.svg"/>
      </Marquee>
      </div>
    </div>
  )
}

export default Projects