// src/data/offices.ts

import { OfficeLocation } from '@/types/office';

    const officeLocations: OfficeLocation[] = [
  {
    id: 'canada',
    country: "Canada Office",
    flag: "🇨🇦",
    address: [
      "53 Derry Tr Toronto, On",
      "The It Solutions Inc.",
      "53 Derry Drive Toronto On Ca",
      "M9P 1A3"
    ],
    phone: "(905) 459-3821",
    email: "support@example.com"
  },
  {
    id: 'india',
    country: "India Office", 
    flag: "🇮🇳",
    address: [
      "Plot No 1, 2/F5, Industrial Area,",
      "Sector 75, Sahibzada Ajit Singh",
      "Nagar, Punjab (INDIA)",
      " ‎  "
      
    ],
    phone: "9876789999",
    email: "support@indianoffice.com"
  },
  {
    id: 'indonesia',
    country: "Indonesia Office",
    flag: "🇮🇩", 
    address: [
      "Jl. Raya Serpong III No.7",
      "Blok L RT 001/RW 006, Tangerang,",
      "Kecamatan Serpong Utara,",
      "Kota Tangerang Selatan, Banten 15326"
    
      
    ],
    phone: "(+6221) 2345 6789",
    email: "support@indonesianoffice.com"
  },
  {
    id: 'riyadh',
    country: "Riyadh Office",
    flag: "🇸🇦",
    address: [],
    phone: "",
    email: "",
    isComingSoon: true
   
  }
];
export default officeLocations;