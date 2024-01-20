import React from 'react'
import BcimrCard from './BcimrCard'
import LogosCard from './LogosCard';
import DmeCard from './DmeCard';

const PhotoSection = () => {
  return (
    <div className="text-center text-4xl font-bold text-white mt-4  md:mb-12 ">
      <h1 className="text-4xl font-bold text-white mt-28 ">
        Infographie et Design
      </h1>
      <div className="lg:grid grid-cols-subgrid gap-4 sm:w-75  ">
        <LogosCard />
        <BcimrCard />
        <DmeCard />
       
      </div>
    </div>
  );
};
export default PhotoSection