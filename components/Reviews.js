"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            text: 'The results given are very satisfying',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Sarah Dyan',
            company: 'Purple Homes',
            image: '/Landing Page/Reviews/profile.png',
        },
        {
            id: 2,
            text: 'The service provided is very budget-friendly',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Manny Hugh',
            company: 'Pay limited',
            image: '/Landing Page/Reviews/profile.png',
        },
    ]);

    const updateReviewText = (id, newText) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === id ? { ...review, text: newText } : review
            )
        );
    };

    return (
        <>
            {reviews.map((review) => (
                <div key={review.id} className='flex w-[48%] mb-5 justify-between'>
                    <div className='bg-white p-10 text-center rounded-lg shadow-md'>
                        <p className='text-[100px] font-bold'>“</p>
                        <p className='text-xl font-semibold mb-4'>{review.text}</p>
                        <p className='text-gray-600'>{review.comment}</p>
                        <div className='flex flex-col items-center gap-3 mt-5'>
                            <Image src={review.image} alt='Author' width={100} height={100} className='rounded-full' />
                            <p className='text-gray-800 font-bold'>{review.author}</p>
                            <p className='text-gray-800 font-bold'>{review.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Reviews;