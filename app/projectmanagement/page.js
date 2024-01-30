import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import image from '@/public/ProjectManagement/pmheader.svg'
import pm1 from '@/public/ProjectManagement/pm1.svg'
import pm2 from '@/public/ProjectManagement/pm2.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <div className='p-20 pb-0 bg-[#D9D9D9]'>
                <div className=' flex p-10 bg-[#E9E7E7]'>
                    <Image src={image} className='w-[40%]' />
                    <div className='p-10 ml-20'>
                        <h1 className='text-center font-bold mb-5'>PROJECT MANAGEMENT</h1>
                        <p className='leading-10 tracking-widest'>We operate in a way that the expectations and requirements of every stakeholder, especially our clients, are fulfilled and exceeded.</p>
                    </div>
                </div>
            </div>

            <div className='flex p-20 bg-[#D9D9D9]'>
                <div className='w-[60%]'>
                    <h1 className='leading-10 tracking-widest'>The basic requirements for any given development are that it is completed at the right cost, on time and, to the best quality. At Ahrelia., we understand this perfectly well; hence our Project Management team has this pivotal reference for all our operations.
                        We apply all our skills, resources, and technical know-how to achieve every project objective. We operate in a way that the expectations and requirements of every stakeholder, especially our clients, are fulfilled and exceeded.</h1>
                    <Image src={pm2} className='mt-10' />
                </div>
                <Image src={pm1} className='w-[40%] ml-10' />
            </div>

            <Footer />
        </>
    )
}

export default page