import ContactForm from "./ContactForm";
import Image from "next/image";
import OfficeLocations from "./OfficeLocation";
 
const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="
  w-full max-w-[1920px] mx-auto hero-container
 
  
">
        {/* Main Container */}
        <div className="max-w-[1824px] bg-gradient-to-r from-[#FFFFFF] to-[#EFE9FF] rounded-xl sm:rounded-2xl lg:rounded-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          {/* Header Section */}
          <div className="max-w-[930px] mx-auto text-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#230044] mb-3 sm:mb-4 leading-tight">
              We&apos;d Love to Hear From You
            </h1>
            <p className="max-w-[604px] mx-auto font-medium text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2 sm:px-0">
              We're here to provide you with the support you need. Drop us a message and Deepanshu and Vishal will get back to you promptly.
            </p>
          </div>
 
          {/* CTA Banner */}
          <div className="mt-8 sm:mt-10 lg:mt-12 xl:mt-16 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-[#753AFD] to-[#3FD48F] rounded-2xl lg:rounded-3xl w-full max-w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[930px] h-auto sm:h-[100px] md:h-[120px] lg:h-[130px] xl:h-[142px] mx-auto">
            <div className="text-white text-center lg:text-left font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight ">
              Ready to Transform Your Workflow?
              <p className="font-light text-xs sm:text-sm md:text-base lg:text-lg mt-2">
                Contact us today and discover how our solutions can elevate your
                productivity and efficiency.
              </p>
            </div>
          </div>
 
          {/* Contact Info Section */}
          <div className="mt-8 sm:mt-10 lg:mt-12 xl:mt-16 border border-gray-300 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl w-full max-w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[930px] mx-auto">
            <div className="flex flex-col sm:flex-row justify-start sm:justify-between sm:items-start gap-4 sm:gap-6 lg:gap-8  sm:text-left text-[#4D4D4D] font-bold text-sm sm:text-base lg:text-lg">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Image
                  src="/Images/PhoneIcon.svg"
                  alt="Phone"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
                <div>
                  <div>Phone</div>
                  <div className="text-gray-600 text-xs sm:text-sm">
                    7404631808
                  </div>
                </div>
              </div>
 
              {/* Support */}
              <div className="flex items-center gap-3">
                <Image
                  src="/Images/SupportIcon.svg"
                  alt="Support"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
                <div>
                  <div>Support</div>
                  <div className="text-gray-600 text-xs sm:text-sm break-all">
                    Deepdawer77@gmail.com
                  </div>
                </div>
              </div>
 
              {/* Business Hours */}
              <div className="flex items-center gap-3">
                <Image
                  src="/Images/ClockIcon.svg"
                  alt="Business Hours"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                />
                <div>
                  <div>Business Hours</div>
                  <div className="text-gray-600 text-xs sm:text-sm">
                    Mon - Fri, 10AM - 6PM
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Contact Form */}
          <div className="mt-8 sm:mt-10 lg:mt-12 mx-auto">
            <ContactForm />
          </div>
        </div>
 
        {/* Office Locations */}
        <div className="">
          <OfficeLocations />
        </div>
      </div>
    </div>
  );
};
 
export default HeroSection;
 