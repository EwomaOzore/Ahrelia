import Button from '@/components/Button'
import Footer from '@/components/Footer'
import LatestOpening from '@/components/Careers/LatestOpening'
import NavBar from '@/components/NavBar'
import React from 'react'
import ApplicationForm from '@/components/Careers/ApplicationForm'

const careers = () => {
    return (
        <>
            <NavBar />

            <div className='bg-[#E9E7E7]'>
                <div className='bg-[#E9E7E7] p-20'>
                    <div className="flex">
                        <hr className="border-t-2 border-black flex-grow-[0.4] mr-4 mt-[25px]" />
                        <div className='flex flex-col ml-[8%]'>
                            <p className="font-bold mb-2">WISH TO<br /> JOIN US ?</p>
                            <p>At Ahrelia ®, we do not compete for jobs, but we compete for people. Our people are our brand. <br />
                                Joining us involves a lot of rigorous process, psychological, mental, and medical test but, we offer the<br />
                                best rewarding professional experience to be part of our brand.</p>
                        </div>
                    </div>

                </div>
                <div className='flex p-10'>
                    <div className='w-[75%]'>
                        <LatestOpening />
                    </div>
                    <div className='w-[25%] ml-10'>
                        <h1 className='p-5 mb-3 bg-[#D9D9D9] shadow-lg'>REQUIREMENTS</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>MSc. In related field</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>4yrs related experience</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>NYSC mandatory</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>Health Assessment is mandatory</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>IELTS min. of 6.5 overall</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>Updated resume</h1>
                        <h1 className='p-3 mb-3 bg-[#D9D9D9] shadow-lg'>3 References</h1>
                    </div>
                </div>

                <div className='p-20'>
                    <ApplicationForm />
                </div>

                <div className='flex flex-col p-20 bg-[#D9D9D9] items-center'>
                    <h1 className='font-bold text-center mb-10'>Have an upcoming project</h1>
                    <p className='text-center mb-10'>let's work with you (Ahrelia ®) to achieve your goal</p>
                    <Button destination="/contact" label="CONTACT US" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default careers