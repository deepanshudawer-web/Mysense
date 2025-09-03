import React from 'react';

const TopBar = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#753AFD] to-[#3FD48F] border-b border-gray-300">
            <div className="max-w-[1920px] mx-auto h-12 lg:h-[48px] flex items-center">
                <div className='w-full h-full flex items-center justify-center gap-1 md:gap-2 px-2'>
                    <div className="font-bold text-white text-sm md:text-base lg:text-lg whitespace-nowrap">Save</div>
                    <div className="font-extrabold text-white text-lg md:text-xl lg:text-2xl whitespace-nowrap">80%</div>
                    <div className="font-bold text-white text-xs md:text-sm lg:text-base whitespace-nowrap">on Annual Plans</div>
                    <button className='text-black bg-[#FDC63A] w-[105px] h-[28px] rounded-[99px] font-semibold'>Know more</button>
                </div>
            </div>
        </div>
        // <div>j3buhe</div>
    );
}

export default TopBar;