import React from 'react';
import '@/app/Styles/Faqs.css'

const CustomBox = ({ title, description, backgroundColor, textColor }) => {
    const boxStyle = {
        backgroundColor: backgroundColor || '#E9E7E7',
        color: textColor || '#000000',
    };

    return (
        <div className='custombox flex flex-col w-[30%] items-center text-center p-8 rounded shadow-md' style={boxStyle}>
            <h1 className='text-2xl font-bold mb-5'>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default CustomBox;
