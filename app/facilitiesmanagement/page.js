import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ServicePages from '@/components/ServicePages'
import SemiFooter from '@/components/SemiFooter'
import header from '@/public/FacilitiesManagement/header.svg'
import body1 from '@/public/FacilitiesManagement/body1.svg'
import body2 from '@/public/FacilitiesManagement/body2.svg'
import slide1 from '@/public/FacilitiesManagement/slide1.svg'
import slide2 from '@/public/FacilitiesManagement/slide2.svg'
import slide3 from '@/public/FacilitiesManagement/slide3.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <ServicePages
                title='FACILITIES MANAGEMENT'
                description1='Whether the space is an office, residential building, hospital, and religion centers, we ensure that the building and all of its components work properly.'
                description2='We are dedicated to supporting people and businesses, to ensures the functionality, comfort, safety, sustainability, and efficiency of the built environment- the buildings we live and work in and their surrounding infrastructure.
                    Whether the space is an office, residential building, hospital, and religion centres, we ensure that the building and all of its components work properly. Ahrelia ® ensures that the systems in the built environment work together as they should, that buildings fulfil their intended purposes, and that personnel are healthy and productive.'
                image1={header}
                image2={body2}
                image3={body1}
            />



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