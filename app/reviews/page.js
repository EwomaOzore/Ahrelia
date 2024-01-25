import React from 'react'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'
import Button from '@/components/Button'

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
            <div className='flex flex-col p-20 bg-[#D9D9D9] items-center'>
                <h1 className='font-bold text-center mb-10'>No two projects are alike!</h1>
                <p className='text-center mb-10'>You can TRUST us for your next project, engage us and expect a perfect luxurious fit-out design and build that focus on spectacular opulence for clients.</p>
                <Button destination="/contact" label="CONTACT US" />
            </div>
            <Footer />
        </>
    )
}

export default reviews