import React from 'react';
import '@/app/careers/careers.css'

const ApplicationForm = () => {
    return (
        <>
            <div className='form bg-[#D9D9D9] p-10'>
                <h1 className='text-center font-bold'>APPLICATION</h1>

                <form className='px-44 mx-auto'>
                    {/* First Name and Last Name */}
                    <div className='flex space-x-4 mb-4'>
                        <div className='w-1/2'>
                            <label htmlFor='firstName' className='block text-sm font-medium'>
                                FIRST NAME
                            </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                                className='mt-1 p-2 w-full border rounded-md'
                            />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor='lastName' className='block text-sm font-medium'>
                                LAST NAME
                            </label>
                            <input
                                type='text'
                                id='lastName'
                                name='lastName'
                                className='mt-1 p-2 w-full border rounded-md'
                            />
                        </div>
                    </div>

                    {/* Desired Role and Upload CV */}
                    <div className='flex space-x-4 mb-4'>
                        <div className='w-1/2'>
                            <label htmlFor='desiredRole' className='block text-sm font-medium'>
                                DESIRED ROLE
                            </label>
                            <input
                                type='text'
                                id='desiredRole'
                                name='desiredRole'
                                className='mt-1 p-2 w-full border rounded-md'
                            />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor='uploadCV' className='block text-sm font-medium'>
                                UPLOAD CV
                            </label>
                            <input type='file' id='uploadCV' name='uploadCV' className='mt-1 p-2 w-full' />
                        </div>
                    </div>

                    {/* Email Address and Phone */}
                    <div className='flex space-x-4 mb-4'>
                        <div className='w-1/2'>
                            <label htmlFor='email' className='block text-sm font-medium'>
                                EMAIL ADDRESS
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='mt-1 p-2 w-full border rounded-md'
                            />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor='phone' className='block text-sm font-medium'>
                                PHONE
                            </label>
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                className='mt-1 p-2 w-full border rounded-md'
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className='mb-4'>
                        <label htmlFor='message' className='block text-sm font-medium'>
                            MESSAGE
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows='4'
                            className='mt-1 p-2 w-full border rounded-md'
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type='submit'
                            className='bg-black text-white p-2 px-10 rounded-md'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ApplicationForm;