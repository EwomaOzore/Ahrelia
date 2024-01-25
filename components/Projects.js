import React from 'react';
import Image from 'next/image';

const Projects = ({ imageUrl, altText, projectName, showViewMoreButton }) => {
  return (
    <div className="flex flex-col items-center sm:w-1/2 md:w-1/4 p-4">
      <div className="relative mb-4">
        <Image src={imageUrl} alt={altText} width={250} height={300} className="rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-2xl font-bold mb-2">{projectName}</h1>
          {showViewMoreButton && (
            <button className="bg-black text-white py-2 px-4 rounded-lg">View More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
