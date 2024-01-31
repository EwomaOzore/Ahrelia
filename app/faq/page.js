import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import SemiFooter from '@/components/SemiFooter'
import Faqs from '@/components/Faqs'
import Faq from '@/public/Faqs/faq.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <Image src={Faq} className='bg-[#D9D9D9]' />
            <Faqs />

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