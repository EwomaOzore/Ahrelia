import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import SemiFooter from '@/components/SemiFooter'
import Team from '@/components/AboutUs/Team'

import './ourteam.css'

import oladusin from '@/public/AboutPage/Team/oladisun.png'
import wale from '@/public/AboutPage/Team/wale.png'
import deborah from '@/public/AboutPage/Team/deborah.png'
import francis from '@/public/AboutPage/Team/francis.png'
import mayowa from '@/public/AboutPage/Team/mayowa.png'
import akitobi from '@/public/AboutPage/Team/akitobi.png'
import ayo from '@/public/AboutPage/Team/ayo.png'
import timothy from '@/public/AboutPage/Team/timothy.png'
import michael from '@/public/AboutPage/Team/michael.png'

const page = () => {
    return (
        <>
            <NavBar />

            <div className='ourteam p-20 bg-[#F0EEEE]'>
                <h1 className='font-bold text-center mb-10'>MEET OUR TEAM</h1>
                <p className='text-center mb-44'>At Ahrelia ®, we do not compete for jobs, but we compete for people. Our people are our brand.</p>
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
                title='Have an upcoming project'
                description="let's work with you (Ahrelia ®) to achieve your goal"
                buttonDestination='/contact'
                buttonLabel='CONTACT US'
            />
            <Footer />
        </>
    )
}

export default page