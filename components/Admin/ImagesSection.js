'use client'

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

var initialImageState = {
    image: '',
};

var imageText = ''

const ImagesSection = () => {
    const [images, setImages] = useState([]);
    const [imageData, setImageData] = useState(initialImageState);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        fetch('http://127.0.0.1:5000/api/gallery/all')
            .then((response) => response.json())
            .then((data) => {
                console.log('Received data:', data);

                if (Array.isArray(data.image)) {
                    setImages(data.image);
                } else {
                    console.error('Invalid data structure. Expected an array of images.');
                }
            })
            .catch((error) => console.error('Error fetching images:', error));
    };

    const deleteImage = (imageId) => {
        fetch(`http://127.0.0.1:5000/api/gallery/${imageId}/delete`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Image deleted successfully:', data);
                setReviews(images.filter((image) => image._id !== imageId));
            })
            .catch((error) => console.error('Error deleting image:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setImageData((prevData) => ({
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
                    setImageData((prevData) => ({
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
            const response = await fetch('http://127.0.0.1:5000/api/gallery/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...imageData, image: imageText }),
            });

            if (response.ok) {
                console.log('Image data submitted successfully');
                setImageData(initialImageState);
            } else {
                console.error('Failed to submit image data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting image data:', error.message);
        }
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Manage Images</h2>
            {images.map((image) => (
                <div key={image.id} className="flex items-center justify-between bg-white p-4 mb-4 rounded-md">
                    <CldImage
                        width="960"
                        height="600"
                        src={image.image}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <div>
                        <button
                            className="bg-red-500 text-white px-3 py-1"
                            onClick={() => deleteImage(image.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                    Image URL
                </label>
                <input
                    type="file"
                    id="uploadImage"
                    name="image"
                    value={imageData.image}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                >
                    Submit
                </button>
            </div>
        </section>
    );
};

export default ImagesSection;