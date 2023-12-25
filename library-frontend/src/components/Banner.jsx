import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BannerCard from './bannerCard/BannerCard';

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Wellcome to 👋", "Federal University Birnin Kebbi,","Library Complex."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side Banner */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-4xl text-blue-600 uppercase font-bold font-custom'>
                <span>{text}</span>
            </h2>
            <p className='md: w-4/5 text-xl font-custom'>Federal University Birnin Kebbi Library was established in 2013, to support the University in achieving its goals of teaching, learning and research. It is in line with this, the University library acquire, organise and disseminate information in both printed and electronic format to its users.</p>
            <div>
                <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 
                px-2 rounded-s-sm outline-none'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        {/* Right Side Banner */}
        <div><BannerCard/></div>
      </div>
    </div>
  )
}

export default Banner;
