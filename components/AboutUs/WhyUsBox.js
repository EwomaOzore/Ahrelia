import React from 'react';
import Image from 'next/image';

const WhyUsBox = ({ imageSrc, title, description }) => {
    return (
        <div className='flex flex-col w-[30%] items-center text-center bg-[#E9E7E7] p-4'>
            <Image src={imageSrc} className='mb-20' width={200} height={200} />
            <h1 className='font-bold mb-20'>{title}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    );
};

export default WhyUsBox;
