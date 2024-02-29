import React from 'react';
import Image from 'next/image';
import Logo from '@/public/LOGO.svg'
import Link from 'next/link';
import '@/app/Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="footer-container flex justify-between bg-black text-[#E9E7E7] p-8 pl-20">
        <div className="brand-info flex flex-col">
          <Image src={Logo} alt="Ahrelia" width='auto' height='auto' priority className="logo w-40 h-20" />
          <div className='description p-4 w-96'>
            <p>You can TRUST us for your next project, engage us and expect a perfect luxurious fit-out design and build that focuses on spectacular opulence for clients.</p>
          </div>
        </div>

        <div className="links-container flex flex-row">
          <div className='links mr-20'>
            <p className="font-bold mt-4 mb-7">ABOUT</p>
            <ul className='flex flex-col'>
              <Link href='/about' className='mb-2'>About Us</Link>
              <Link href='/careers'>Careers</Link>
            </ul>
          </div>

          <div className='links mr-20'>
            <p className="font-bold mt-4 mb-7">SERVICES</p>
            <ul className='flex flex-col'>
              <Link href='/projectmanagement' className='mb-2'>Project management</Link>
              <Link href='/designandbuild' className='mb-2'>Design & build</Link>
              <Link href='/designandarchitecture' className='mb-2'>Design & architecture</Link>
              <Link href='/buildandimplementing' className='mb-2'>Build & implementing</Link>
              <Link href='/costmanagement' className='mb-2'>Cost management</Link>
              <Link href='/facilitiesmanagement'>Facilities management</Link>
            </ul>
          </div>

          <div className='links mr-20'>
            <p className="font-bold mt-4 mb-7">COMPANY</p>
            <ul className='flex flex-col'>
              <Link href='/ourteam' className='mb-2'>Our Team</Link>
              <Link href='/faq'>FAQ</Link>
            </ul>
          </div>

          <div className='links mr-20'>
            <p className="font-bold mt-4 mb-7">GET IN TOUCH</p>
            <ul className='flex flex-col'>
              <Link href='/' className='mb-2'>E-mail</Link>
              <Link href='/'>Whatsapp</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom flex justify-between bg-[#323433] p-3 px-10'>
        <h1 className='copyright-text font-extrabold'>© 2023 All rights reserved | Designed by: </h1>
        <div className='social-icons flex space-x-5'>
          <Link href='/'>
            <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faTwitter} className='w-5 h-5' />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faFacebook} className='w-5 h-5' />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faLinkedin} className='w-5 h-5' />
          </Link>
          <Link href='/'>
            <FontAwesomeIcon icon={faYoutube} className='w-5 h-5' />
          </Link>
          <Link href='/admin/login'>
            <FontAwesomeIcon icon={faUser} className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;