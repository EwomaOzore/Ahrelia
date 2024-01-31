import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ServicePages from '@/components/ServicePages'
import SemiFooter from '@/components/SemiFooter'
import header from '@/public/BuildAndImplementing/header.svg'
import body1 from '@/public/BuildAndImplementing/body1.svg'
import body2 from '@/public/BuildAndImplementing/body2.svg'
import slide1 from '@/public/BuildAndImplementing/slide1.svg'
import slide2 from '@/public/BuildAndImplementing/slide2.svg'
import slide3 from '@/public/BuildAndImplementing/slide3.svg'

const page = () => {
    return (
        <>
            <NavBar />

            <ServicePages
                title='BUILD & IMPLEMENTING'
                description1='We partner with some of the most reputable specialist contractors to ensure that our client’s desire goal is achieved on every project.'
                description2='We can design, interpret, construct and maintain buildings of various scopes and functions, from single homes to high-rise buildings, residential complexes, hospitals and religion centres. We partner with some of the most reputable specialist contractors to ensure that our client’s desire goal is achieved on every project. Furthermore, we are a leader in constructing according to environment protection standards, with the proven capacity to construct high performance green buildings built to comply with the Leadership in Energy and Environmental Design (LEED) requirements.'
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