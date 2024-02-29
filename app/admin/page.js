"use client"

import React, { useState } from 'react';
import Logo from '@/public/LOGO.svg';
import Link from 'next/link';
import Image from 'next/image';
import ReviewsSection from '@/components/Admin/ReviewsSection';
import ImagesSection from '@/components/Admin/ImagesSection';
import UsersSection from '@/components/Admin/UsersSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('reviews');

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="hidden md:flex md:w-64 justify-center bg-black text-white">
                <div className="flex flex-col items-center justify-between h-full py-4">
                    <div className="items-center mb-4">
                        <Link href="/">
                            <Image src={Logo} alt='Ahrelia' priority />
                        </Link>
                    </div>

                    <nav className="space-y-4">
                        <a
                            href="#"
                            className={`flex items-center p-3 ${activeSection === 'reviews' ? 'bg-gray-600' : 'hover:bg-gray-600'
                                }`}
                            onClick={() => setActiveSection('reviews')}
                        >
                            <FontAwesomeIcon icon={faStar} className='mr-5' />
                            Reviews
                        </a>

                        <a
                            href="#"
                            className={`flex items-center p-3 ${activeSection === 'images' ? 'bg-gray-600' : 'hover:bg-gray-600'
                                }`}
                            onClick={() => setActiveSection('images')}
                        >
                            <FontAwesomeIcon icon={faImages} className='mr-5' />
                            Images
                        </a>

                        <a
                            href="#"
                            className={`flex items-center p-3 ${activeSection === 'users' ? 'bg-gray-600' : 'hover:bg-gray-600'
                                }`}
                            onClick={() => setActiveSection('users')}
                        >
                            <FontAwesomeIcon icon={faUsers} className='mr-5' />
                            Users
                        </a>
                    </nav>
                </div>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
                    {activeSection === 'reviews' ? (
                        <ReviewsSection />
                    ) : activeSection === 'images' ? (
                        <ImagesSection />
                    ) : (
                        <UsersSection />
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;