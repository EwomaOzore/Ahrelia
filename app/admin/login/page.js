"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/LOGO.svg';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/auth/login/', {
                username,
                password,
            });
            if (response.status === 200) {
                setIsAuthenticated(true);
                router.push('/admin');
            } else {
                // console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            // console.error('Error during login:', error.message);
        }
    };

    return (
        <>
            <NavBar />

            <div className='flex flex-col items-center p-20'>
                <Image src={Logo} alt='Ahrelia' width={300} height='auto' priority className='mb-10' />
                <form onSubmit={handleLogin} className='flex flex-col items-center w-full'>
                    <div className='flex flex-col w-[40%]'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            onChange={handleUsernameChange}
                            className='border rounded-lg p-2 mb-5'
                        />
                    </div>
                    <div className='flex flex-col w-[40%]'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={handlePasswordChange}
                            className='border rounded-lg p-2 mb-10'
                        />
                    </div>
                    <button
                        type='button'
                        className='bg-black text-white py-3 px-6 rounded-2xl w-[20%]'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
                <Link href='/admin/register' className='mt-10'>Register a User</Link>
            </div>

            <Footer />
        </>
    );
};

export default Page;