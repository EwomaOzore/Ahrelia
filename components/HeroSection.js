"use client"

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const fetchVideoUrl = async () => {
            try {
                const response = await fetch('https://res.cloudinary.com/dp7niullu/video/upload/v1709283151/ahrelia/herovideo_fybq63.mp4');
                if (response.ok) {
                    const blob = await response.blob();
                    setVideoUrl(URL.createObjectURL(blob));
                } else {
                    console.error('Failed to fetch video:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideoUrl();
    }, []);

    return (
        <>
            <div autoPlay loop className="relative h-[650px] bg-cover bg-center flex items-center justify-center">
                {videoUrl && (
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        className='absolute -z-10 w-full h-full object-cover'
                    />
                )}
                <div className="text-black text-center">
                    <h1 className="text-4xl font-bold">WELCOME TO AHRELIA</h1>
                    <h3 className="text-2xl">The luxurious fit-out company</h3>
                    <p className="text-lg">
                        “We inspire a life full of possibilities, offering experiences and memories never to be forgotten.”
                    </p>
                </div>
            </div>
        </>
    );
};

export default HeroSection;