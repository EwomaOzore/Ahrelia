import React from 'react';
import Image from 'next/image';

const TeamBox = ({ imageSrc, title, description }) => {
    return (
        <div className='flex flex-col w-[10%] items-center text-center bg-[#E9E7E7] p-4 rounded-lg shadow-md'>
            <Image src={imageSrc} alt='teambox' width='auto' height='auto' className='mb-1' />
            <h1 className='font-bold'>{title}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    );
};

export default TeamBox;
