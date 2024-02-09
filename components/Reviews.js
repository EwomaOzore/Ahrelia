"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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
                <div key={review.id} className='reviewbox flex w-[40%] mb-5 justify-between'>
                    <div className='bg-white p-10 text-center rounded-lg shadow-md'>
                        <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className='mb-5 text-[60px]' />
                        <p className='text-xl font-semibold mb-4'>{review.text}</p>
                        <p className='text-gray-600'>{review.comment}</p>
                        <div className='flex flex-col items-center gap-3 mt-5'>
                            <Image src={review.image} alt='Author' width={100} height={100} className='image rounded-full' />
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