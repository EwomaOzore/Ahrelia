import React from 'react';
import Button from './Button';

const SemiFooter = ({ title, description, buttonDestination, buttonLabel }) => {
    return (
        <div className='flex flex-col p-20 bg-[#D9D9D9] items-center'>
            <h1 className='font-bold text-center mb-5'>{title}</h1>
            <p className='text-center mb-5'>{description}</p>
            <Button destination={buttonDestination} label={buttonLabel} />
        </div>
    );
};

export default SemiFooter;