"use client";

import Image from 'next/image'
import React, { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="w-full">
            <div className=' pt-[32px]'> </div>
      <div className="flex justify-center px-[1rem]">
        <div className="flex items-center max-w-[1410px] w-full lg:h-[70px] justify-between border border-[#CECDD4] rounded-full px-[16px] md:px-[32px] py-[12px] md:py-[19px] relative gap-3">
        
          <Image
            src="/Images/HeaderLogo.svg"
            alt="Logo"
            width={200}
            height={24}
            className="w-[140px] h-auto sm:w-[180px] md:w-[220px] lg:w-[260px] md:h-[31px]"
          />
 

          <div className="hidden lg:flex max-w-[657px] w-full justify-between mx-2 lg:mx-8">
            {["About Us", "Features", "Pricing", "Works", "Blog", "Contact Us"].map(
              (item, idx) => (
                <p
                  key={idx}
                  className={`font-semibold text-[13px] sm:text-[14px] md:text-[16px] leading-[1.5] ${
                    item === "About Us" ? "text-[#753AFD]" : "text-[#4E4E4E]"
                  } whitespace-nowrap cursor-pointer hover:text-[#753AFD] transition-colors`}
                >
                  {item}
                </p>
              )
            )}
          </div>
 
  
          <div className="hidden md:flex max-w-[192px] w-full justify-end gap-2 flex-shrink-0">
            <button className="rounded-full border border-[#D3D3D3] py-[8px] md:py-[10px] px-[12px] md:px-[16px] font-semibold text-[14px] md:text-[16px] leading-[1.5] text-[#4E4E4E] hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button className="rounded-full py-[8px] md:py-[10px] px-[12px] md:px-[16px] font-semibold text-[14px] md:text-[16px] leading-[1.5] text-white bg-[#753AFD] hover:bg-[#6530E8] transition-colors">
              Register
            </button>
          </div>
 
     
          <button
            className="lg:hidden flex flex-col gap-1 cursor-pointer p-2 -mr-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-black"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
          </button>
 

          <div
            className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white border-l border-[#E5E5EA] shadow-2xl transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 z-50`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
       
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Image src="/Images/HeaderLogo.svg" alt="Logo" width={140} height={24} className="w-[120px] h-auto" />
              <button
                className="cursor-pointer text-2xl font-bold p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
 
            <div className="flex flex-col p-4 space-y-4">
              {["About Us", "Features", "Pricing", "Works", "Blog", "Contact Us"].map(
                (item, idx) => (
                  <p
                    key={idx}
                    className={`font-semibold text-[16px] leading-[1.5] ${
                      item === "About Us" ? "text-[#753AFD]" : "text-[#4E4E4E]"
                    } cursor-pointer hover:text-[#753AFD] transition-colors`}
                  >
                    {item}
                  </p>
                )
              )}
 
          
              <div className="flex flex-col space-y-2 pt-4">
                <button className="w-full rounded-full border border-[#D3D3D3] py-[12px] px-[16px] font-semibold text-[16px] leading-[1.5] text-[#4E4E4E] hover:bg-gray-50 transition-colors">
                  Login
                </button>
                <button className="w-full rounded-full py-[12px] px-[16px] font-semibold text-[16px] leading-[1.5] text-white bg-[#753AFD] hover:bg-[#6530E8] transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
 
        
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}