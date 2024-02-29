'use client'

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const ReviewsSection = () => {
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

    const handleDeleteReview = (reviewId) => {
        fetch(`http://127.0.0.1:5000/api/review/${reviewId}/delete`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Review deleted successfully:', data);
                setReviews(reviews.filter((review) => review._id !== reviewId));
            })
            .catch((error) => console.error('Error deleting review:', error));
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Manage Reviews</h2>
            <div className='flex flex-wrap'>
                {reviews.map((review) => (
                    <div className="relative w-[30%] mr-10 mb-5">
                        <div key={review._id} className="flex flex-col items-center text-center justify-between bg-white w-[100%] p-4 rounded-xl">
                            <FontAwesomeIcon icon={faQuoteLeft} size="2xl" className='mb-5 text-[60px]' />
                            {/* <p className='text-xl font-semibold mb-4'>{review.header}</p> */}
                            <p className='text-xl font-semibold mb-4'>{review.text}</p>
                            <p className='text-gray-600'>{review.comment}</p>
                            <div className='flex flex-col items-center gap-3 mt-5 mb-5'>
                                <CldImage
                                    width="400"
                                    height="300"
                                    src={review.image}
                                    sizes="100vw"
                                    alt="Description of my image"
                                />
                                <p className='text-gray-800 font-bold'>{review.author}</p>
                                <p className='text-gray-800 font-bold'>{review.company}</p>
                            </div>
                            <div>
                                <button
                                    className="bg-red-500 text-white px-3 py-1"
                                    onClick={() => handleDeleteReview(review._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewsSection;
