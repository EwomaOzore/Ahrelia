import React from 'react'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'
import Button from '@/components/Button'
import SemiFooter from '@/components/SemiFooter'

const reviews = () => {
    return (
        <>
            <Navbar />

            <div className='p-20 items-center'>
                <h1 className='font-bold text-center mb-2'>REVIEWS</h1>
                <p className='text-center mb-10'>What our clients say about us.</p>
                <div className='flex space-x-20 justify-between'>
                    <Reviews />
                </div>
            </div>

            <SemiFooter
                title='No two projects are alike!'
                description="You can TRUST us for your next project, engage us and expect a perfect luxurious fit-out design and build that focus on spectacular opulence for clients."
                buttonDestination='/contact'
                buttonLabel='CONTACT US'
            />

            <Footer />
        </>
    )
}

export default reviews