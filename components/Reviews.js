"use client"

import React, { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = () => {
        fetch('http://127.0.0.1:5000/api/review/all')
            .then((response) => response.json())
            .then((data) => {
                console.log('Received data:', data);

                if (Array.isArray(data.review)) {
                    setReviews(data.review);
                } else {
                    console.error('Invalid data structure. Expected an array of reviews.');
                }
            })
            .catch((error) => console.error('Error fetching reviews:', error));
    };

    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                pagination={{ clickable: true }}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div key={review._id} className="flex flex-col items-center text-center justify-between bg-white text-black p-4 mb-4 rounded-md">
                            <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className='mb-5 text-[60px]' />
                            <p className='text-xl font-semibold mb-4'>{review.text}</p>
                            <p className='text-gray-600'>{review.comment}</p>
                            <div className='flex flex-col items-center gap-3 mt-5'>
                                {/* <CldImage
                                    width="960"
                                    height="600"
                                    src={review.image}
                                    sizes="100vw"
                                    alt="Description of my image"
                                /> */}
                                <p className='text-gray-800 font-bold'>{review.author}</p>
                                <p className='text-gray-800 font-bold'>{review.company}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='text-center mt-10'>
                <Link href="/reviews/reviewform">Drop a Review</Link>
            </div>
        </>
    );
};

export default Reviews;