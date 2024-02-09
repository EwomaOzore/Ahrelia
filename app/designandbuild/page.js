import React from 'react'
import Image from 'next/image'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import OurProcessItem from '@/components/OurProcessItem'
import ServicePages from '@/components/ServicePages'
import SemiFooter from '@/components/SemiFooter'

import '@/app/projectmanagement/projectmanagement.css'

import dab from '@/public/DesignAndBuild/dab.svg'
import dab1 from '@/public/DesignAndBuild/dab1.svg'
import dab2 from '@/public/DesignAndBuild/dab2.svg'
import dabprocess from '@/public/DesignAndBuild/dabprocess.svg'
import consultation from '@/public/DesignAndBuild/consultation.svg'
import costing from '@/public/DesignAndBuild/costing.svg'
import selection from '@/public/DesignAndBuild/selection.svg'
import build from '@/public/DesignAndBuild/build.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <ServicePages
                title='DESIGN & BUILD'
                description1='You will interact with a specialised consultant who can guide you through various innovative approaches.'
                description2='An attractive home with a fully functional and aesthetic appeal is everyone’s dream. In particular the Kitchen and Bathroom, these places deserve special attention because they are used for very selective purposes and dem and greater attention in terms of their design, flexibility, durability and maintenance. We offer turnkey solutions starting from unique design to fully completed projects and have a team of experienced and talented professionals who will ensure that you own your dream within agreed budget and timeline.'
                image1={dab}
                image2={dab2}
                image3={dab1}
            />

            <div className='pm flex p-10 bg-[#E9E7E7]'>
                <div className='image w-[30%]'>
                    <Image src={dabprocess} alt='design and build' width='auto' height='auto' />
                </div>
                <div className='process bg-[#D9D9D9] p-5 w-[70%] ml-10'>
                    <h1 className='text-center mb-10'>OUR PROCESS</h1>
                    <div className='processitem flex justify-evenly'>
                        <OurProcessItem stepImage={consultation}
                            heading='CONSULTATION'
                            description='An obligation free phone or face-to-face consultation to gauge your requirements in terms of space usage , time frame, budget and desired design.'
                            stepNumber={1}
                        />
                        <OurProcessItem stepImage={costing}
                            heading='COSTING'
                            description='Once we undress  your requirements, we can provide you with bracket pricing as a starting point for your budget planning in terms of designing and building your project. '
                            stepNumber={2}
                        />
                        <OurProcessItem stepImage={selection}
                            heading='SELECTION'
                            description='A designer to present you with a creative and professional design that suits your requirements. This would include a preliminary design model that will demonstrate space layout, possible finishes, colour themes etc.'
                            stepNumber={3}
                        />
                        <OurProcessItem stepImage={build}
                            heading='BUILD'
                            description='A dedicated Project Manager will oversee the entire build and construction of your project throughout the process.Once construction is completed our team will complete a final thorough inspection to ensure that all quality standards have been met'
                            stepNumber={4}
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