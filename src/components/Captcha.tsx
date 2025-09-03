import React, { useState } from "react";
import Image from "next/image";
 
const Captcha: React.FC = () => {
  const [verified, setVerified] = useState(false);
 
  const handleCheck = () => {
    setVerified(true);
  };
 
  return (
    <div className="flex items-center gap-2 border pl-4 pr-4 rounded-md shadow-md w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] h-auto py-3 border-[#CECDD4] overflow-hidden">
      <label className="flex items-center gap-2 flex-1 min-w-0">
        <input
          type="checkbox"
          onChange={handleCheck}
          className="w-5 h-5 accent-blue-500 flex-shrink-0"
        />
        <span className="text-gray-700 text-sm sm:text-base font-medium truncate">
          I am not a bot
        </span>
      </label>
 
      <div className="flex items-center gap-1 flex-shrink-0">
        {verified && (
          <span className="text-green-600 text-xs sm:text-sm font-medium whitespace-nowrap">
            ✔ Verified
          </span>
        )}
        
        <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex-shrink-0">
          <Image
            src="/Images/Captcha.svg"
            alt="Captcha Icon"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
 
export default Captcha;
 