import React from 'react'
import CustomBox from './CustomBox'

const Faqs = () => {
    return (
        <>
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
        </>
    )
}

export default Faqs