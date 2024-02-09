import React from 'react'
import Image from 'next/image';
import image from '@/public/Landing Page/image.svg';
import image1 from '@/public/Landing Page/image1.svg';
import '@/app/Styles/Benefits.css'

const Benefits = () => {
    return (
        <>
            <div className='benefitsbox bg-[#E9E7E7] p-20'>
                <div className="flex items-center mb-4">
                    <hr className="border-t-2 border-black flex-grow-[0.2] mr-4" />
                    <p className="">Benefits you get when <br /> using our services</p>
                </div>

                <div className="benefits flex mb-40">
                    <div className="imagebox block w-[40%]">
                        <Image src={image} alt="Image 1" width='auto' height='auto' />
                    </div>
                    <div className="benefitstext relative w-1/2 bg-[#F0EEEE] p-20 rounded-tr-[150px]">
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="benefits flex">
                    <div className=" benefitstext2 w-1/2 bg-[#F0EEEE] p-20 rounded-tl-[150px]">
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="imagebox block w-[40%]">
                        <Image src={image1} alt="Image 1" width='auto' height='auto' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefits