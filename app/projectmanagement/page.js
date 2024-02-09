import React from 'react'
import Image from 'next/image'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import SemiFooter from '@/components/SemiFooter'
import ServicePages from '@/components/ServicePages'
import OurProcessItem from '@/components/OurProcessItem'

import '@/app/projectmanagement/projectmanagement.css'

import image from '@/public/ProjectManagement/pmheader.svg'
import pm1 from '@/public/ProjectManagement/pm1.svg'
import pm2 from '@/public/ProjectManagement/pm2.svg'
import pmprocess from '@/public/ProjectManagement/pmprocess.svg'
import development from '@/public/ProjectManagement/development.svg'
import advice from '@/public/ProjectManagement/advice.svg'
import planning from '@/public/ProjectManagement/planning.svg'
import monitoring from '@/public/ProjectManagement/monitoring.svg'
import coordination from '@/public/ProjectManagement/coordination.svg'
import management from '@/public/ProjectManagement/management.svg'
import arbitration from '@/public/ProjectManagement/arbitration.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <ServicePages
                title='PROJECT MANAGEMENT'
                description1='We operate in a way that the expectations and requirements of every stakeholder, especially our clients, are fulfilled and exceeded.'
                description2='The basic requirements for any given development are that it is completed at the right cost, on time and, to the best quality. At Ahrelia., we understand this perfectly well; hence our Project Management team has this pivotal reference for all our operations. We apply all our skills, resources, and technical know-how to achieve every project objective. We operate in a way that the expectations and requirements of every stakeholder, especially our clients, are fulfilled and exceeded.'
                image1={image}
                image2={pm2}
                image3={pm1}
            />

            <div className='pm flex p-10 bg-[#E9E7E7]'>
                <div className=' image w-[30%]'>
                    <Image src={pmprocess} alt='project management' width='auto' height='auto' />
                </div>
                <div className='process bg-[#D9D9D9] p-5 w-[70%] ml-10'>
                    <h1 className='text-center mb-10'>OUR PROCESS</h1>
                    <div className='processitem flex'>
                        <OurProcessItem stepImage={development}
                            heading='DEVELOPMENT'
                            description='Project Development and Objective-Organisation with Client'
                            stepNumber={1}
                        />
                        <OurProcessItem stepImage={advice}
                            heading='ADVICE'
                            description='Advice on Project Procurement Method to be adopted'
                            stepNumber={2}
                        />
                        <OurProcessItem stepImage={planning}
                            heading='PLANNING'
                            description='Project Planning – Providing Time Schedules and Project Milestones'
                            stepNumber={3}
                        />
                        <OurProcessItem stepImage={monitoring}
                            heading='MONITORING'
                            description='Project Monitoring & Control'
                            stepNumber={4}
                        />
                        <OurProcessItem stepImage={coordination}
                            heading='COORDINATION'
                            description='Project Coordination'
                            stepNumber={5}
                        />
                        <OurProcessItem stepImage={management}
                            heading='MANAGEMENT'
                            description='Quality Management'
                            stepNumber={6}
                        />
                        <OurProcessItem stepImage={arbitration}
                            heading='ARBITRATION'
                            description='Arbitration (Construction Dispute Resolution)'
                            stepNumber={7}
                        />
                    </div>
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