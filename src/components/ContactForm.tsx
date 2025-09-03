"use client";
import React, { useState } from "react";
import Captcha from "../components/Captcha";
 
const ContactForm: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify you are not a robot!");
      return;
    }
    alert("Form submitted successfully!");
  };
 
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[24px] shadow-lg w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[690px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 space-y-4"
    >
      {/* First & Last Name */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <label className="font-bold mb-2">First Name*</label>
          <input
            type="text"
            placeholder="First Name"
            className="border border-[#CECDD4] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-[44px]"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <label className="font-bold mb-2">Last Name*</label>
          <input
            type="text"
            placeholder="Last Name"
            className="border border-[#CECDD4] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-[44px]"
          />
        </div>
      </div>
 
      {/* Email */}
      <div className="flex flex-col w-full">
        <label className="font-bold mb-2">Email*</label>
        <input
          type="text"
          placeholder="Email address"
          className="border border-[#CECDD4] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-[44px]"
        />
      </div>
 
      {/* Phone */}
      <div className="flex flex-col w-full">
        <label className="font-bold mb-2">Phone*</label>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-[#CECDD4] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-[44px]"
        />
      </div>
 
      {/* Message */}
      <div className="flex flex-col w-full">
        <label className="font-bold mb-2">Message*</label>
        <textarea
          placeholder="Message"
          className="border border-[#CECDD4] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-[120px]"
        />
      </div>
 
      {/* Captcha */}
      <div className="w-full md:w-[302px] mt-4">
        <Captcha />
      </div>
 
      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="rounded-[99px] w-[95px] h-[48px] text-white bg-[#753AFD] hover:bg-[#5e2ecc] font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
 
export default ContactForm;
 