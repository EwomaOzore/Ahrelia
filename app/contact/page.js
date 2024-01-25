import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouseChimneyWindow, faPhone } from '@fortawesome/free-solid-svg-icons';
import contactimage from '@/public/contact.svg'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CustomBox from '@/components/CustomBox';
import Map from '@/components/map';

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
                        <Image src={contactimage} width={150} className='relative top[5%] left-[58%]' />
                    </div>
                </div>
            </div>
            <div className='bg-[#D9D9D9] p-10'>
                <h1 className='font-bold mb-10'>Frequently Asked Questions</h1>
                <div className='flex justify-evenly mb-10'>
                    <CustomBox title='HOW DO I ENGAGE AHRELIA' description='Please visit our website and click on the Contact tab, fill in with the required information. We will revert within 72Hrs.' backgroundColor='#000' textColor='#FFF' />
                    <CustomBox title='I HAVE A PROJECT FOR TENDERING, CAN I ALSO INVITE AHRELIA?' description='We do not participate in tenders.' backgroundColor='#FFFFFF' textColor='#000000' />
                    <CustomBox title='WHAT DO I DO IF MY PROJECT IS DECLINED' description='We are grateful for the consideration, unfortunately, there’s nothing that could be done based on the information you’ve provided.' backgroundColor='#000' textColor='#FFF' />
                </div>
                <div className='flex justify-evenly'>
                    <CustomBox title='WHAT SOCIAL MEDIA PLATFORM IS AHRELIA ON?' description='We are on several social media platforms. Click on the contact tab to see available links . However All required information is available on our website.' backgroundColor='#FFF' textColor='#000' />
                    <CustomBox title='DO YOU ACCEPT PROJECTS IN EVERY COUNTRY' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' backgroundColor='#000' textColor='#FFF' />
                    <CustomBox title='TERMS OF SERVICE' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' backgroundColor='#FFF' textColor='#000' />
                </div>
            </div>

            <Map />
            <Footer />
        </>
    )
}

export default contact