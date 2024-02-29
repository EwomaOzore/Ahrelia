"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/LOGO.svg';
import { useRouter } from 'next/navigation'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from 'axios';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                console.error('Passwords do not match');
                return;
            }

            const response = await axios.post('http://127.0.0.1:5000/api/auth/register', {
                username,
                password,
            });

            if (response.status === 201) {
                console.log('User registered successfully');
                router.push('/admin/login');
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    };

    return (
        <>
            <NavBar />

            <div className='flex flex-col items-center p-20'>
                <Image src={Logo} alt='Ahrelia' width={300} height='auto' className='mb-10' />
                <form className='flex flex-col items-center w-full'>
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
                    <div className='flex flex-col w-[40%]'>
                        <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <input
                            type='password'
                            id='confirmPassword'
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className='border rounded-lg p-2 mb-10'
                        />
                    </div>
                    <button
                        type='button'
                        className='bg-black text-white py-3 px-6 rounded-2xl w-[20%]'
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default RegisterPage;