import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import OurProcessItem from '@/components/OurProcessItem'
import ServicePages from '@/components/ServicePages'
import SemiFooter from '@/components/SemiFooter'
import header from '@/public/CostManagement/header.svg'
import body1 from '@/public/CostManagement/body1.svg'
import body2 from '@/public/CostManagement/body2.svg'
import processimage from '@/public/CostManagement/processimage.svg'
import preconstruction from '@/public/CostManagement/preconstruction.svg'
import construction from '@/public/CostManagement/construction.svg'
import postconstruction from '@/public/CostManagement/postconstruction.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <ServicePages
                title='COST MANAGEMENT'
                description1='We have a track record of meticulously managing all aspects of the contractual and financial aspect of projects.'
                description2='We are also a Cost management expert; we have a track record of meticulously managing all aspects of the contractual and financial aspect of projects. We do this by minimising common project overruns such as cost and time. In all these, our clients are certain of getting optimal value. We offer value to our clients through every phase of their development. Our services span through the Pre-contract, Construction, and Post-contract stages.'
                image1={header}
                image2={body2}
                image3={body1}
            />

            <div className='flex p-10 bg-[#E9E7E7]'>
                <div className='w-[30%]'>
                    <Image src={processimage} alt='cost management' width='auto' height='auto' />
                </div>
                <div className='bg-[#D9D9D9] p-5 w-[70%] ml-10'>
                    <h1 className='text-center mb-10'>OUR STAGES</h1>
                    <div className='flex justify-evenly'>
                        <OurProcessItem stepImage={preconstruction}
                            heading='PRE CONSTRUCTION'
                            description='Feasibility and Viability studies.
                                Comparative economics of various designs and layouts.
                                Management & Reports.
                                Budget Estimation/Preliminary Estimate.
                                Project Cost Planning.'
                            stepNumber={1}
                        />
                        <OurProcessItem stepImage={construction}
                            heading='CONSTRUCTION'
                            description='Valuations.
                                Variation Management.
                                Value Management.
                                Recommendations for claims & fluctuations.
                                Project Cost Control.
                                Preparation of Financial Statement.'
                            stepNumber={2}
                        />
                        <OurProcessItem stepImage={postconstruction}
                            heading='POST CONSTRUCTION'
                            description='Post-Contract Financial Control
                                Preparation of Final Account
                                Construction Cost Auditing
                                Whole Life - C'
                            stepNumber={3}
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