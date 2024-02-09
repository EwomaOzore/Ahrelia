import React from 'react';
import Image from 'next/image';
import '@/app/Styles/Servicepage.css'

const ServicePages = ({ title, description1, description2, image1, image2, image3 }) => {
    return (
        <>
            <div className='servicepage p-20 pb-0 bg-[#D9D9D9]'>
                <div className='section1 flex p-10 bg-[#E9E7E7]'>
                    <Image src={image1} alt='' width='auto' height='auto' className='image w-[40%]' />
                    <div className='texts p-10 ml-20'>
                        <h1 className='text-center font-bold mb-5'>{title}</h1>
                        <p className='leading-10 tracking-widest'>{description1}</p>
                    </div>
                </div>
            </div>

            <div className='servicepage2 flex p-20 bg-[#D9D9D9]'>
                <div className='section2 w-[60%]'>
                    <h1 className='leading-10 tracking-widest'>{description2}</h1>
                    <Image src={image2} alt='' width='auto' height='auto' className='image mt-10' />
                </div>
                <Image src={image3} alt='' width='auto' height='auto' className='image w-[31%] ml-10' />
            </div>
        </>
    );
};

export default ServicePages;
