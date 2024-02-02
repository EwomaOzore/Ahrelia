import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouseChimneyWindow, faPhone } from '@fortawesome/free-solid-svg-icons';
import contactimage from '@/public/contact.svg'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Map from '@/components/Map';
import Faqs from '@/components/Faqs';

const contact = () => {
    return (
        <>
            <Navbar />

            <div className='bg-[#E9E7E7] p-10'>
                <h1 className='font-bold mb-10'>Get In Touch</h1>
                <div className='flex justify-center'>
                    <div className='w-[30%] p-8 bg-[#D9D9D9]'>
                        <h2 className='text-2xl font-bold mb-4'>Send a Message</h2>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor='name' className='block text-sm font-semibold mb-1'>Name</label>
                                <input type='text' id='name' className='w-full p-2 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-sm font-semibold mb-1'>Email Address</label>
                                <input type='email' id='email' className='w-full p-2 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-7'>
                                <label htmlFor='message' className='block text-sm font-semibold mb-1'>Message</label>
                                <textarea id='message' rows='4' className='w-full p-2 border border-gray-300 rounded'></textarea>
                            </div>
                            <div className='flex justify-between'>
                                <FontAwesomeIcon icon={faSquareWhatsapp} size='2xl' style={{ color: "#25d366" }} />
                                <Button destination="/" label="SUBMIT" />
                            </div>
                        </form>
                    </div>
                    <div className='w-[30%] p-8 bg-gray-100'>
                        <h2 className='text-2xl font-bold mb-4'>Contact Info</h2>
                        <div className='mb-4 flex items-center'>
                            <FontAwesomeIcon icon={faHouseChimneyWindow} className='mr-10' />
                            <p>1B, Eric Moore Close, Eric Moore, Surulere, Lagos, Nigeria.</p>
                        </div>
                        <div className='mb-4 flex items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='mr-10' />
                            <p>contact@ahrelia.com</p>
                        </div>
                        <div className='mb-4 flex items-center'>
                            <FontAwesomeIcon icon={faPhone} className='mr-10' />
                            <div>
                                <p>+234 802 387 9884</p>
                                <p>+234 806 683 9628</p>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm font-semibold mb-4'>Opening Hours</p>
                            <p>Mon - Fri: 10am - 5pm</p>
                            <p>Sat: 11am - 3pm</p>
                            <p>Sun: Closed</p>
                        </div>
                        <Image src={contactimage} alt='contact' width={150} height='auto' className='relative top[5%] left-[58%]' />
                    </div>
                </div>
            </div>

            <Faqs />

            <Map />
            <Footer />
        </>
    )
}

export default contact