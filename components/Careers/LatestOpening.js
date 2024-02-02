import React from 'react'
import Image from 'next/image'
import pm from '@/public/Careers/pm.svg'
import architect from '@/public/Careers/archi.svg'
import cm from '@/public/Careers/cm.svg'
import hr from '@/public/Careers/hr.svg'
import admin from '@/public/Careers/admin.svg'
import intdesigner from '@/public/Careers/intdes.svg'
import accofficer from '@/public/Careers/accofficer.svg'
import cs from '@/public/Careers/cs.svg'
import qs from '@/public/Careers/qs.svg'
import sma from '@/public/Careers/sma.svg'

const LatestOpening = () => {
    return (
        <>
            <div className='bg-[#D9D9D9] p-10 shadow-lg'>
                <h1 className='text-center font-bold'>LATEST OPENINGS</h1>
                <div className='flex justify-evenly'>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={pm} alt='Project Manager' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Project Manager</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={architect} alt='Architect' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Architect</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={cm} alt='Construction Manager' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Construction Manager</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={hr} alt='Human Resource' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Human Resource</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={admin} alt='Administration' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Administration</p>
                    </div>
                </div>
                <div className='flex justify-evenly'>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={intdesigner} alt='Interior Designer' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Interior Designer</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={accofficer} alt='Account Officer' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Account Officer</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={cs} alt='Customer Service' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Customer Service</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={qs} alt='Quantity Surveyor' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Quantity Surveyor</p>
                    </div>
                    <div className='flex flex-col p-10 items-center'>
                        <Image src={sma} alt='Social Media Associate' width='auto' height='auto' className='mb-3' />
                        <p className='text-xs'>Social Media Associate</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestOpening