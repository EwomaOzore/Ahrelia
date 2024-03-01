import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import Service from '@/components/Services';
import RecentProjects from '@/components/RecentProjects';
import Reviews from '@/components/Reviews';
import Benefits from '@/components/Benefits';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

import '@/app/Styles/Reviews.css'
import '@/app/globals.css'

import Projectmanagement from '@/public/Landing Page/Services/projectmanagement.svg'
import Designandbuild from '@/public/Landing Page/Services/designandbuild.svg'
import Designandarchitecture from '@/public/Landing Page/Services/designandarchitecture.svg'
import Buildingandimplementing from '@/public/Landing Page/Services/buildingandimplementing.svg'
import Costmanagement from '@/public/Landing Page/Services/costmanagement.svg'
import Facilitiesmanagement from '@/public/Landing Page/Services/facilitiesmanagement.svg'

const Page = () => {
  return (
    <>
      <NavBar />

      <HeroSection />

      <div className="p-10 bg-[#D9D9D9] text-white">
        <Projects />
      </div>

      <div>
        <h1 className='text-black text-center font-bold text-[30px] pt-10'>OUR SERVICES</h1>
        <div className="flex flex-wrap p-5 text-white justify-evenly">
          <Service image={Projectmanagement} title="PROJECT MANAGEMENT" link="/projectmanagement" />
          <Service image={Designandbuild} title="DESIGN & BUILD" link="/designandbuild" />
          <Service image={Designandarchitecture} title="DESIGN & ARCHITECTURE" link="/designandarchitecture" />
          <Service image={Buildingandimplementing} title="BUILD & IMPLEMENTING" link="/buildandimplementing" />
          <Service image={Costmanagement} title="COST MANAGEMENT" link="/costmanagement" />
          <Service image={Facilitiesmanagement} title="FACILITIES MANAGEMENT" link="/facilitiesmanagement" />
        </div>
      </div>

      <RecentProjects />

      <Benefits />

      <div className='reviewsection p-14 bg-[#D9D9D9]'>
        <h1 className='text-black text-center mb-5 font-bold pt-10'>REVIEWS</h1>
        <div className='reviews justify-evenly'>
          <Reviews />
        </div>
      </div>

      <div className='subscribe p-14 bg-[#D9D9D9] flex flex-col items-center'>
        <h1 className='text-black text-center font-bold pt-10'>Subscribe to get the latest news about us</h1>
        <div className='subscribebox flex flex-row justify-between bg-white p-10 w-1/2 mt-10'>
          <div className='w-1/2'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email address'
              className='mt-1 p-2 w-full rounded-md placeholder:text-xs'
            />
          </div>
          <Button destination="/" label="SUBSCRIBE" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;