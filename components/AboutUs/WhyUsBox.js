import React from 'react';
import Image from 'next/image';
import '@/app/Styles/Whyusbox.css'

const WhyUsBox = ({ imageSrc, title, description }) => {
    return (
        <div className='whyusbox flex flex-col w-[30%] items-center text-center bg-[#E9E7E7] p-4'>
            <Image src={imageSrc} alt='Why Us' className='image mb-20' width={200} height={200} />
            <h1 className='font-bold mb-20'>{title}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    );
};

export default WhyUsBox;
