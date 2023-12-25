import React from 'react'

const Services = () => {
  return (
    <div className='text-center mt-40 px-4 lg:px-24'>
      <button disabled className="mb-8 text-white text-7xl font-bold border-b-2 rounded bg-blue-700">Our Services</button>
    <div class="flex flex-col items-start">
      <button disabled className='mb-4 text-white text-2xl font-bold border-b-2 rounded bg-blue-700'>Working Hours</button>
        <p className='mb-5 text-2xl font-semibold'>We are open for consultation and work on the following schedule:</p>
          <ul class='inline-flex text-2xl font-samibold'>
              <li className='mr-4'>Monday -  8:00AM - 10pm</li>
              <li className='mr-4'>Tuesday -  8:00AM - 10pm</li>
              <li className='mr-4'>Wednesday -  8:00AM - 10pm</li>
              <li className='mr-4'>Thursday -  8:00AM - 10pm</li>
              <li className='mr-4'>Friday -  8:00AM - 10pm</li>
              <li className='mr-4'>Saturday -  8:00AM - 4pm</li>
              <li className='mr-4'>Sunday -  <span className='text-black font-bold border rounded bg-red-800'>Closed</span></li>
          </ul>
      </div>
      <div className='mt-20'>
        <button disabled className='mb-8 text-white text-5xl font-bold border-b-2 rounded bg-blue-700'>REFERENCE SERVICE</button>
        <p className='text-2xl'>Our library provides in-person and e-reference services through Chat-A-Librarian live chat; Email and Zoom virtual meetings. To schedule zoom virtual meeting, please contact the Reference Librarian.</p>
      </div>
      <div className='mt-20'>
        <button disabled className='mb-8 text-white text-5xl font-bold border-b-2 rounded bg-blue-700'>Support for Users with Disabilities</button>
        <p className='mb-5 text-3xl font-semibold'>The University Library renders inclusive library services to users with disabilities. Our service offering includes:</p>
        <ol className='flex flex-col text-2xl items-start list-decimal space-y-3 mb-5'>
          <li>Provision of assistive tools on students’ personal devices</li>
          <li>Scan and convert course materials to braille or audio</li>
          <li>Transcription and conversion of resources to accessible format</li>
          <li>Research Assistance (For in-depth research assistance), students are expected to book appointment with the Librarians.</li>
          <li>Continuous library orientation and information literacy programme</li>
          <li>Extended loan periods</li>
          <li>Provision of ramps for users on wheel chair.</li>
        </ol>
      </div>
      </div>
  )
}

export default Services;
