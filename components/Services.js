import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/app/Styles/Services.css'

const Service = ({ image, title, link }) => {
    return (
        <div className="service relative mb-8 ml-6 w-[60%] md:w-[1/3] lg:w-1/4">
            <Link href={link} passHref>
                <div className="relative overflow-hidden rounded-lg transition-transform transform hover:scale-105">
                    <Image src={image} alt={title} className="w-full h-auto" />

                    <div className="absolute inset-x-0 bottom-0 bg-black p-2 text-white text-center transition-transform transform hover:scale-105">
                        <p className="text text-lg font-bold">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;