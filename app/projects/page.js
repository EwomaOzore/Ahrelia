import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import Projects from '@/components/Projects'

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
import SemiFooter from '@/components/SemiFooter'

const projects = () => {
    return (
        <>
            <Navbar />

            <div className='p-20'>
                <div className="flex items-center mb-4">
                    <hr className="border-t-2 border-black flex-grow-[0.2] mr-4" />
                    <p className="">See Our Projects</p>
                </div>
                <div className='flex justify-evenly'>
                    <Projects imageUrl={residential} altText="Descrip" projectName="RESIDENTIAL" showViewMoreButton={true} />
                    <Projects imageUrl={hospitality} altText="Desc" projectName="HOSPITALITY" showViewMoreButton={true} />
                    <Projects imageUrl={hotel} altText="Descript" projectName="HOTEL" showViewMoreButton={true} />
                    <Projects imageUrl={lounge} altText="Description of the image" projectName="LOUNGE" showViewMoreButton={true} />
                </div>
                <div className='flex justify-evenly'>
                    <Projects imageUrl={officespace} altText="Descri" projectName="OFFICE SPACE" showViewMoreButton={true} />
                    <Projects imageUrl={salonspa} altText="Description of the image" projectName="SALON / SPA" showViewMoreButton={true} />
                    <Projects imageUrl={bedroom} altText="Descrip" projectName="BEDROOM" showViewMoreButton={true} />
                    <Projects imageUrl={cafe} altText="Descr" projectName="CAFE" showViewMoreButton={true} />
                </div>
                <div className='flex justify-evenly'>
                    <Projects imageUrl={resturant} altText="Descripti" projectName="RESTAURANT" showViewMoreButton={true} />
                    <Projects imageUrl={school} altText="Descri" projectName="SCHOOL" showViewMoreButton={true} />
                    <Projects imageUrl={auditorium} altText="Descrip" projectName="AUDITORIUM" showViewMoreButton={true} />
                    <Projects imageUrl={playground} altText="Descri" projectName="PLAY GROUND" showViewMoreButton={true} />
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