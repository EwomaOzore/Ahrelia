import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className="relative h-[650px] bg-cover bg-center flex items-center justify-center">
                <video src={require('../public/herovideo.mp4')}
                    autoPlay
                    loop
                    className='absolute -z-10 w-full h-full object-cover'
                />
                <div className="text-black text-center ">
                    <h1 className="text-4xl font-bold">WELCOME TO AHRELIA</h1>
                    <h3 className="text-2xl">The luxurious fit-out company</h3>
                    <p className="text-lg">
                        “We inspire a life full of possibilities, offering experiences and memories never to be forgotten.”
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeroSection