import Link from 'next/link';

const Button = ({ destination, label }) => {
    return (
        <Link href={destination} className='bg-black text-white py-3 px-6 rounded-2xl'>
            <button className="button">{label}</button>
        </Link>
    );
};

export default Button;