import React from 'react';
import Image from 'next/image';
import '@/app/Styles/Ourprocessitem.css'

const OurProcessItem = ({ stepImage, description, stepNumber, heading }) => {
    return (
        <div className='ourprocess flex flex-col items-center p-2 w-40'>
            <Image src={stepImage} alt='Process' width='auto' height='auto' className='image mb-10 w-10' />
            <h1 className='mb-10 text-[12px]'>{heading}</h1>
            <p className='text-[10px] text-center mb-10'>{description}</p>
            <h1 className='rounded-full shadow-md w-6 text-center'>{stepNumber}</h1>
        </div>

    );
};

export default OurProcessItem;
