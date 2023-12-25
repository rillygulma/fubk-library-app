import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Branches = () => {
  return (
    <div className='text-center mt-40 px-4 lg:px-24'>
      <h1 className='font-Custom font-bold mb-10'>We have three(3) Main Branches in Fedral University Birnin Kebbi Library which are:</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='font-samibold'>1. Main University Library, Located At Permenent site.</SwiperSlide>
        <SwiperSlide className='font-samibold'>2. Takeoff Libary, Located At University TakeOff site. </SwiperSlide>
        <SwiperSlide className='font-samibold'>3. College Of Health Science Library, Located At College of Health Scince.</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Branches;
