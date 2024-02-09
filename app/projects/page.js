import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import Projects from '@/components/Projects'
import SemiFooter from '@/components/SemiFooter'

import residential from '@/public/Landing Page/Projects/residential.svg'
import hospitality from '@/public/Landing Page/Projects/hospitality.svg'
import hotel from '@/public/Landing Page/Projects/hotel.svg'
import lounge from '@/public/Landing Page/Projects/lounge.svg'
import officespace from '@/public/Landing Page/Projects/officespace.svg'
import salonspa from '@/public/Landing Page/Projects/salonspa.svg'
import bedroom from '@/public/Landing Page/Projects/bedroom.svg'
import cafe from '@/public/Landing Page/Projects/cafe.svg'
import resturant from '@/public/Landing Page/Projects/resturant.svg'
import school from '@/public/Landing Page/Projects/school.svg'
import auditorium from '@/public/Landing Page/Projects/auditorium.svg'
import playground from '@/public/Landing Page/Projects/playground.svg'

const projects = () => {
    return (
        <>
            <Navbar />

            <div className='p-20'>
                <div className="flex items-center mb-4">
                    <hr className="border-t-2 border-black flex-grow-[0.2] mr-4" />
                    <p className="">See Our Projects</p>
                </div>
                <div className='mb-10'>
                    <Projects />
                </div>
                <div className='mb-10'>
                    <Projects />
                </div>
                <div className='mb-10'>
                    <Projects />
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

export default projects