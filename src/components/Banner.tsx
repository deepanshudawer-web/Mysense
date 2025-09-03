import React from 'react';

const Banner = () => {
  return (
    
    <div className="w-full bg-[url('/Images/MaxelBgImg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-3">
      <div className="w-full max-w-[1920px] h-[178px] flex flex-col justify-center items-center">
        <div className="max-w-full lg:max-w-[1410px] text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-semibold text-[#230044] text-center leading-snug">
          Contact Us
        </div>
        <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-[20px] font-medium text-center max-w-full md:max-w-[700px] lg:max-w-[800px] text-xs sm:text-sm md:text-base text-[#2B2B2B] px-2">
          For inquiries, assistance, or feedback, please feel free to reach out.
        </div>
      </div>
    </div>
  );
};

export default Banner;