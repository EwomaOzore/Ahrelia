import React from 'react'
import Image from 'next/image'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import TeamBox from '@/components/AboutUs/TeamBox'
import WhyUsBox from '@/components/AboutUs/WhyUsBox'
import Team from '@/components/AboutUs/Team'
import SemiFooter from '@/components/SemiFooter'

import '../about/aboutus.css'

import image from '@/public/AboutPage/about.svg'
import values from '@/public/AboutPage/values.svg'

import team from '@/public/AboutPage/TeamBox/team.svg'
import client from '@/public/AboutPage/TeamBox/client.svg'
import countries from '@/public/AboutPage/TeamBox/countries.svg'
import squareareas from '@/public/AboutPage/TeamBox/squareareas.svg'

import brand from '@/public/AboutPage/WhyUs/brand.svg'
import passion from '@/public/AboutPage/WhyUs/passion.svg'
import individualism from '@/public/AboutPage/WhyUs/individualism.svg'
import professionalism from '@/public/AboutPage/WhyUs/professionalism.svg'
import qualified from '@/public/AboutPage/WhyUs/qualified.svg'
import experienced from '@/public/AboutPage/WhyUs/experienced.svg'

import oladusin from '@/public/AboutPage/Team/oladisun.png'
import wale from '@/public/AboutPage/Team/wale.png'
import deborah from '@/public/AboutPage/Team/deborah.png'
import francis from '@/public/AboutPage/Team/francis.png'
import mayowa from '@/public/AboutPage/Team/mayowa.png'
import akitobi from '@/public/AboutPage/Team/akitobi.png'
import ayo from '@/public/AboutPage/Team/ayo.png'
import timothy from '@/public/AboutPage/Team/timothy.png'
import michael from '@/public/AboutPage/Team/michael.png'

const about = () => {
  return (
    <>
      <NavBar />
      <div className='bg-[#E9E7E7]'>

        <div className='aboutus p-20 pb-0 bg-[#D9D9D9]'>
          <div className='aboutus flex p-10 bg-[#E9E7E7]'>
            <Image src={image} alt='about' width='auto' height='auto' className='image w-[40%]' />
            <div className='aboutus p-10 ml-20'>
              <h1 className='text-center font-bold mb-5'>ABOUT US</h1>
              <p className='leading-10 tracking-widest'>Ahrelia ® is a luxurious design and build company that focus on spectacular opulence for clients. We provide services such as Design & Build (Turnkey), Design & Architecture, Build & Implementation, Cost Management and Facilities Management. Our aim is to provide our clients with high end experience wherever they may be. We focus on very specific clients hence our services are not readily available to the public.</p>
            </div>
          </div>
        </div>

        <div className="vision flex items-center mb-20 p-20">
          <hr className="border-t-2 border-black flex-grow-[0.4] mr-4" />
          <div className='visiontext flex flex-col ml-[8%]'>
            <p className="text-center font-bold mb-2">OUR VISION</p>
            <p className='text-center'>To be the leading prestigious luxury space provider in <br /> Africa.</p>
          </div>
        </div>

        <div className="vision flex justify-end mb-4 p-20">
          <div className='visiontext flex flex-col mr-[8%]'>
            <p className="text-center font-bold mb-2">HOW WE WORK</p>
            <p className='text-center'>We adopt and hybrid methodology to how we work as we understand each project is unique. Our experience, <br />
              combined with our services, allows us to maintain an exemplary level of performance for the successful delivery<br />
              of projects. Our team has been critically selected from diverse backgrounds and disciplines to provide our<br />
              clients with a wide range of capability, experience, and knowledge.</p>
          </div>
          <hr className="border-t-2 border-black flex-grow-[0.4] mr-4" />
        </div>

        <div className='team flex p-20 pt-0 justify-evenly'>
          <TeamBox imageSrc={team} title='10+' description='Team Members' />
          <TeamBox imageSrc={client} title='11+' description='Clients' />
          <TeamBox imageSrc={countries} title='3' description='Countries' />
          <TeamBox imageSrc={squareareas} title='7,980+' description='Square Areas' />
        </div>

        <div className='whyus p-20'>
          <h1 className='font-bold text-center mb-10'>WHY US</h1>
          <div className='whyusbox p-20 pt-0'>
            <div className='why flex justify-evenly'>
              <WhyUsBox imageSrc={brand} title='BRAND ASSOCIATION' description='Ahrelia ® is a luxurious brand with a focus on an opulent lifestyle' />
              <WhyUsBox imageSrc={passion} title='PASSION' description='At Ahrelia ®, we are passionate about our work and our strength lies in working as a team to engage with our clients and deliver first class customer service and the highest standards of excellence.' />
              <WhyUsBox imageSrc={individualism} title='INDIVIDUALISM' description='We provide options for each design project, understanding creativity and functionality are specific to each individual client. Our objective is to provide bespoke solutions, which fit within specified budgetary restraints.' />
            </div>
            <div className='why flex justify-evenly'>
              <WhyUsBox imageSrc={professionalism} title='PROFESSIONALISM' description='Contractors All insurance covers all work undertaken by Ahrelia ® . In addition, we comply with stringent Health and Safety regulations, which is essential both to our clients and the safety of our workforce.' />
              <WhyUsBox imageSrc={qualified} title='QUALIFIED AND CERTIFIED' description='Ahrelia ® we pride ourselves on ensuring all certifications are current and in line with Government legislation.' />
              <WhyUsBox imageSrc={experienced} title='EXPERIENCED TEAM' description='Our team is very experienced and can offer a range of styles from contemporary to traditional, innovative or cutting edge design. We are fully conversant with current planning laws and our experience and expert advice allows clients to make informed choices about the design and implementation of the project. Our expertise ensures that each client can be confident about colour schemes, textures, choice of materials and accessories, which all contribute to the finished project being unique, innovative, and finished to the highest standards.' />
            </div>
          </div>
        </div>

        <div className='bg-[#D9D9D9] pt-10'>
          <h1 className='text-center font-bold'>OUR VALUES</h1>
          <Image src={values} alt='values' width='auto' height='auto' />
        </div>

        <div className='team p-20'>
          <h1 className='font-bold text-center mb-10'>WHY US</h1>
          <p className='text-center mb-32'>At Ahrelia ®, we do not compete for jobs, but we compete for people. Our people are our brand.</p>
          <div className='flex justify-evenly mb-32'>
            <Team imageSrc={oladusin} title='CAPT. OLADISUN COKER (RTD)' description='Chief Executive Officer' />
            <Team imageSrc={wale} title='DR. WALE OYEDEJI' description='Head of Facilities & Real estate' />
            <Team imageSrc={deborah} title='DEBORAH DANIELS' description='Head Of Procurement & Commercials' />
          </div>
          <div className='flex justify-evenly mb-32'>
            <Team imageSrc={francis} title='DR. FRANCIS MADUBUIKE' description='Head Of Architecture' />
            <Team imageSrc={mayowa} title='MAYOWA ADEGOKE' description='Head Of Projects' />
            <Team imageSrc={akitobi} title='AKITOBI AKINTUNDE' description='Head of Product & Creatives' />
          </div>
          <div className='flex justify-evenly'>
            <Team imageSrc={ayo} title='AYO AYANBEKU' description='Head Of Interior Design' />
            <Team imageSrc={timothy} title='TIMOTHY MAINA' description='Head Of Operations Kenya' />
            <Team imageSrc={michael} title='MICHAEL FAYOMI' description='Chief Operating Officer' />
          </div>
        </div>

        <SemiFooter
          title='Want to be part of our team?'
          description=""
          buttonDestination='/careers'
          buttonLabel='JOIN OUR TEAM'
        />

      </div>
      <Footer />
    </>
  )
}

export default about