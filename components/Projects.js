"use client";

import React from 'react';
import Image from 'next/image';

import salonspa from '@/public/Landing Page/Projects/salonspa.svg'
import bedroom from '@/public/Landing Page/Projects/bedroom.svg'
import hotel from '@/public/Landing Page/Projects/hotel.svg'
import lounge from '@/public/Landing Page/Projects/lounge.svg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projects = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image src={salonspa} alt='SALON / SPA' width={250} height={300} className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-2xl font-bold mb-2">SALON / SPA</h1>
              <button className="bg-black text-white py-2 px-4 rounded-lg">View More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image src={bedroom} alt='BEDROOM' width={250} height={300} className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-2xl font-bold mb-2">BEDROOM</h1>
              <button className="bg-black text-white py-2 px-4 rounded-lg">View More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image src={hotel} alt='HOTEL' width={250} height={300} className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-2xl font-bold mb-2">HOTEL</h1>
              <button className="bg-black text-white py-2 px-4 rounded-lg">View More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <Image src={lounge} alt='LOUNGE' width={250} height={300} className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-2xl font-bold mb-2">LOUNGE</h1>
              <button className="bg-black text-white py-2 px-4 rounded-lg">View More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;