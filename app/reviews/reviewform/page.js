"use client"

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

var initialReviewState = {
    header: '',
    comment: '',
    image: '',
    author: '',
    company: '',
};

var imageText = ''

const ReviewForm = () => {
    const [reviewData, setReviewData] = useState(initialReviewState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (e.target.name === 'image') {
            const selectedFile = e.target.files[0];

            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageData = e.target.result;
                    imageText = imageData
                    setReviewData((prevData) => ({
                        image: imageData,
                        ...prevData,
                    }));
                };
                reader.readAsDataURL(selectedFile);
            }

        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/api/review/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...reviewData, image: imageText }),
            });

            if (response.ok) {
                console.log('Review data submitted successfully');
                setReviewData(initialReviewState);
            } else {
                console.error('Failed to submit review data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting review data:', error.message);
        }
    };

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-8">
                <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="header" className="block text-sm font-medium text-gray-600">
                            Header
                        </label>
                        <input
                            type="text"
                            id="header"
                            name="header"
                            value={reviewData.header}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-600">
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={reviewData.comment}
                            onChange={handleInputChange}
                            rows="4"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-600">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={reviewData.author}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-600">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={reviewData.company}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default ReviewForm;