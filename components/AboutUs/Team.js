import React from 'react';
import Image from 'next/image';
import '@/app/Styles/Team.css'

const Team = ({ imageSrc, title, description }) => {
    return (
        <div className='team flex flex-col w-[25%] items-center text-center bg-[#E9E7E7] p-4 shadow-md relative'>
            <Image src={imageSrc} className='image relative bottom-[100px] -mb-20' alt='team' width='auto' height='auto' />
            <h1 className='font-bold mb-5'>{title}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    );
};

export default Team;
