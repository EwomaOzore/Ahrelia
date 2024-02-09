import React from 'react';
import Header from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import Service from '@/components/Services';
import RecentProjects from '@/components/RecentProjects';
import Reviews from '@/components/Reviews';
import Benefits from '@/components/Benefits';
import Button from '@/components/Button';
import Footer from '@/components/Footer';

import '@/app/Styles/Reviews.css'

import Projectmanagement from '@/public/Landing Page/Services/projectmanagement.svg'
import Designandbuild from '@/public/Landing Page/Services/designandbuild.svg'
import Designandarchitecture from '@/public/Landing Page/Services/designandarchitecture.svg'
import Buildingandimplementing from '@/public/Landing Page/Services/buildingandimplementing.svg'
import Costmanagement from '@/public/Landing Page/Services/costmanagement.svg'
import Facilitiesmanagement from '@/public/Landing Page/Services/facilitiesmanagement.svg'

import Project1 from '@/public/Landing Page/RecentProjects/image1.png';
import Project2 from '@/public/Landing Page/RecentProjects/image2.png';
import Project3 from '@/public/Landing Page/RecentProjects/image3.png';
import Project4 from '@/public/Landing Page/RecentProjects/image4.png';
import Project5 from '@/public/Landing Page/RecentProjects/image5.png';
import Project6 from '@/public/Landing Page/RecentProjects/image6.png';
import Project7 from '@/public/Landing Page/RecentProjects/image7.png';
import Project8 from '@/public/Landing Page/RecentProjects/image8.png';

const Page = () => {
  const recentProjectsImages = [Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8];

  return (
    <>
      <Header />

      <HeroSection />

      <div className="p-10 bg-[#D9D9D9] text-white">
        <Projects />
      </div>

      <div>
        <h1 className='text-black text-center font-bold pt-10'>OUR SERVICES</h1>
        <div className="flex flex-wrap p-5 text-white justify-center">
          <Service image={Projectmanagement} title="PROJECT MANAGEMENT" link="/projectmanagement" />
          <Service image={Designandbuild} title="DESIGN & BUILD" link="/designandbuild" />
          <Service image={Designandarchitecture} title="DESIGN & ARCHITECTURE" link="/designandarchitecture" />
          <Service image={Buildingandimplementing} title="BUILD & IMPLEMENTING" link="/buildandimplementing" />
          <Service image={Costmanagement} title="COST MANAGEMENT" link="/costmanagement" />
          <Service image={Facilitiesmanagement} title="FACILITIES MANAGEMENT" link="/facilitiesmanagement" />
        </div>
      </div>

      <RecentProjects images={recentProjectsImages} />

      <Benefits />

      <div className='reviewsection p-14 bg-[#D9D9D9]'>
        <h1 className='text-black text-center mb-5 font-bold pt-10'>REVIEWS</h1>
        <div className='reviews flex justify-evenly'>
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