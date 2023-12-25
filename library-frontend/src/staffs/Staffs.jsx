import React from 'react';
import StaffCard from './StaffCard';
import UL from '../assets/UL.jpg';
import VC from '../assets/vc.jpg';

const Staffs = () => {
  return (
    <div className='text-center mt-40 px-4 lg:px-24'>
      <StaffCard imgSrc={VC} name={'Prof. Muhammad Zaiyan Umar'} position={'Vice Chancellor Federal University, Birnin Kebbi'}/>
      <StaffCard imgSrc={UL} name={'Prof. Ahmad Audu Balarabe CLN, FNLA'} position={'University Librarian'}/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
      <StaffCard/>
    </div>
  );
};

export default Staffs;
