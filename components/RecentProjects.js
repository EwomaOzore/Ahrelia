import React from 'react';
import Image from 'next/image';

const RecentProjects = ({ images }) => {
    return (
        <div className='bg-[#D9D9D9]'>
            <h1 className='text-black text-center font-bold pt-5'>RECENT PROJECTS</h1>
            <div className="flex justify-center">
                {images.map((image, index) => (
                    <div key={index} className="transition-transform transform hover:scale-105">
                        <Image src={image} alt={`Recent Project ${index}`} className="w-[100%]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;