// src/components/sections/OfficeLocations.tsx
import React from 'react';
import { OfficeLocation } from '../types/office';
import officeLocations from '../Data/offices';
import Button from './Button';
 
interface OfficeCardProps {
  office: OfficeLocation;
}
 
const OfficeCard: React.FC<OfficeCardProps> = ({ office }) => {
  if (office.isComingSoon) {
    return (
      <div className="flex flex-col items-center justify-center h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[150px] lg:min-h-[160px] xl:min-h-[170px] w-full max-w-[1410px] mx-auto px-4 py-6 sm:py-8 lg:py-10">
        <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center justify-center mb-3 sm:mb-4 lg:mb-5">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{office.flag}</span>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-center">
            {office.country}
          </h3>
        </div>
        <div className="text-[#4E4E4E] italic w-full text-center px-2 sm:px-4 text-sm sm:text-base lg:text-lg">
          We&apos;re expanding! Our newest office is coming soon...
        </div>
      </div>
    );
  }
 
  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 h-auto bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
        <span className="text-xl sm:text-2xl lg:text-3xl">{office.flag}</span>
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
          {office.country}
        </h3>
      </div>
 
      {/* Details Section */}
      <div className="space-y-4 sm:space-y-5 min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
        {/* Address */}
        <div>
          <h4 className="text-sm sm:text-base font-extrabold mb-2">Address</h4>
          <div className="font-medium text-xs sm:text-sm text-gray-800 space-y-1">
            {office.address.map((line, i) => (
              <div key={i} className="leading-relaxed">{line}</div>
            ))}
          </div>
        </div>
 
        {/* Contact */}
        <div>
          <h4 className="text-sm sm:text-base font-extrabold mb-2">Contact</h4>
          <div className="font-medium text-xs sm:text-sm text-gray-800 space-y-1">
            <div className="leading-relaxed">Phone: {office.phone}</div>
            <div className="leading-relaxed">
              Email:{" "}
              <a
                href={`mailto:${office.email}`}
                className="text-blue-600 hover:underline transition-colors break-all sm:break-normal"
              >
                {office.email}
              </a>
            </div>
          </div>
        </div>
 
        {/* Button */}
        <div className="pt-4 sm:pt-6">
          <Button />
        </div>
      </div>
    </div>
  );
};
 
const OfficeLocations: React.FC = () => {
  const regularOffices = officeLocations.filter((office) => !office.isComingSoon);
  const comingSoonOffices = officeLocations.filter((office) => office.isComingSoon);
 
  return (
    <section className="text-[#4E4E4E] font-bold py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[850px] xl:min-h-[900px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Offices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 w-full max-w-[1410px] mx-auto">
          {regularOffices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
 
        {/* Coming Soon Offices */}
        {comingSoonOffices.length > 0 && (
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            {comingSoonOffices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
 
export default OfficeLocations;