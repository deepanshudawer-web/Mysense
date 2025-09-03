import Image from 'next/image'
import React from 'react'
import footerData from '@/Data/footerData';


export default function Footer() {
  return (
     <div className='bg-black'>
        <div className='w-full max-w-[1920px] mx-auto h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[500px] pt-6 sm:pt-8 md:pt-12 lg:pt-[48px] xl:pt-[96px]'>
            <div className='padding px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black'>
                <div className='flex flex-col pb-8 sm:pb-10 md:pb-12 lg:pb-[48px] xl:pb-[64px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[70px] 2xl:gap-[127px] xl:flex-row'>
                    {/* Logo and Description Section */}
                    <div className='max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] 2xl:max-w-[481px] w-full'>
                        <div className='pb-4 sm:pb-6 md:pb-8 lg:pb-9'>
                            <div className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[401.79px]'>
                                <Image 
                                    src='/Images/Logo.svg' 
                                    alt='Maxel Icon' 
                                    height={48} 
                                    width={401.79}
                                    className='w-full h-auto'
                                />
                            </div>
                        </div>
                        <div className='font-regular text-sm sm:text-base text-[#ADABB7] leading-relaxed pr-0 sm:pr-4 md:pr-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                    </div>
    
                    {/* Footer Links Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full'>
                        {footerData.map((data)=> (
                            <div key={data.heading}>
                                <div className='footerHeading pb-3 sm:pb-[12px]'>
                                    <h3 className='text-white font-semibold text-sm sm:text-base md:text-lg'>
                                        {data.heading}
                                    </h3>
                                </div>
                                {data.desc.map((descContainer, idx)=> (  
                                    <div key={`${data.heading}-${idx}`} className='pb-2 sm:pb-[10px]'>
                                        <p className='desc text-[#ADABB7] text-xs sm:text-sm md:text-base leading-relaxed hover:text-white transition-colors cursor-pointer'>
                                            {descContainer.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
    
                {/* Bottom Section */}
                <div className=' flex flex-col-reverse items-center px-0 sm:px-[15px] pt-4 sm:pt-6 md:pt-8 lg:pt-9 gap-4 sm:gap-[15px] justify-between pb-6 sm:pb-8 md:pb-10 lg:pb-12 md:flex-row md:justify-items-normal border-t border-white/20'>
                    <p className='desc text-[#ADABB7] text-xs sm:text-sm md:text-base text-center md:text-left'>
                        @Maxel Tracker 2024  ― All rights reserved.
                    </p>
    
                    {/* Social Media Icons */}
                    <div className='flex max-w-[240px] sm:max-w-[280px] md:max-w-[320px] w-full justify-between items-center gap-2 sm:gap-3'>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className='hover:opacity-80 transition-opacity'> 
                            <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                                <Image 
                                    src='/Images/Facebook.svg' 
                                    alt='facebook' 
                                    width={48} 
                                    height={48}
                                    className='w-full h-full'
                                />
                            </div>
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' className='hover:opacity-80 transition-opacity'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                                <Image 
                                    src='/Images/Youtube.svg' 
                                    alt='youtube' 
                                    width={48} 
                                    height={48}
                                    className='w-full h-full'
                                />
                            </div>
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='hover:opacity-80 transition-opacity'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                                <Image 
                                    src='/Images/Instagram.svg' 
                                    alt='instagram' 
                                    width={48} 
                                    height={48}
                                    className='w-full h-full'
                                />
                            </div>
                        </a>
                        <a href='https://www.x.com/' target='_blank' rel='noreferrer' className='hover:opacity-80 transition-opacity'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                                <Image 
                                    src='/Images/Twitter.svg' 
                                    alt='twitter/x' 
                                    width={48} 
                                    height={48}
                                    className='w-full h-full'
                                />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' className='hover:opacity-80 transition-opacity'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                                <Image 
                                    src='/Images/Linkedin.svg' 
                                    alt='linkedin' 
                                    width={48} 
                                    height={48}
                                    className='w-full h-full'
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}