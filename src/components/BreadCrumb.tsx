import React from 'react';
import Image from 'next/image';

const BreadCrumb = () => {
  return (
    <div className='w-full'>
      <div className='w-full max-w-[1920px] mx-auto h-[56px] sm:h-[60px] lg:h-[64px] flex items-center'>
        <div className='max-w-full lg:max-w-[1410px] mx-auto px-2 sm:px-4 w-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[#230044]'>
          <div className='font-bold text-sm sm:text-lg lg:text-xl truncate'>Homepage</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex-shrink-0"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

          <div className='font-bold text-sm sm:text-lg lg:text-xl text-[#753AFD] truncate'>Contact Us</div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb;