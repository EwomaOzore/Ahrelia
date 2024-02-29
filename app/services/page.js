import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Service from '@/components/Services'
import SemiFooter from '@/components/SemiFooter'
import '@/app/services/services.css'

import service from '@/public/Landing Page/Services/service.svg'
import Projectmanagement from '@/public/Landing Page/Services/projectmanagement.svg'
import Designandbuild from '@/public/Landing Page/Services/designandbuild.svg'
import Designandarchitecture from '@/public/Landing Page/Services/designandarchitecture.svg'
import Buildingandimplementing from '@/public/Landing Page/Services/buildingandimplementing.svg'
import Costmanagement from '@/public/Landing Page/Services/costmanagement.svg'
import Facilitiesmanagement from '@/public/Landing Page/Services/facilitiesmanagement.svg'

const services = () => {
    return (
        <>
            <Navbar />

            <div className='services p-10 bg-[#D9D9D9]'>
                <div className=" services flex">
                    <hr className="border-t-2 border-black flex-grow-[0.4] mr-4 mt-[25px]" />
                    <div className='flex flex-col ml-[8%]'>
                        <p className="font-bold mb-2">Professional Project <br /> Management</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                            tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />
                            dolore magna aliqua</p>
                    </div>
                </div>
                <div className='services flex flex-col py-5 items-center'>
                    <Button destination="/" label="Read more" />
                </div>
                <Image src={service} alt='service' width='100%' height='70%' />
            </div>
            <div className='bg-white pt-5'>
                <h1 className='font-bold text-center'>what we do</h1>
                <div className="flex flex-wrap p-8 text-white justify-between">
                    <Service image={Projectmanagement} title="PROJECT MANAGEMENT" link="/project-management" />
                    <Service image={Designandbuild} title="DESIGN & BUILD" link="/design-and-build" />
                    <Service image={Designandarchitecture} title="DESIGN & ARCHITECTURE" link="/design-and-architecture" />
                    <Service image={Buildingandimplementing} title="BUILD & IMPLEMENTING" link="/build-and-implementing" />
                    <Service image={Costmanagement} title="COST MANAGEMENT" link="/cost-management" />
                    <Service image={Facilitiesmanagement} title="FACILITIES MANAGEMENT" link="/facilities-management" />
                </div>
            </div>

            <SemiFooter
                title='Cant find what your’e looking for?'
                description=""
                buttonDestination='/careers'
                buttonLabel='JOIN OUR TEAM'
            />

            <Footer />
        </>
    )
}

export default services