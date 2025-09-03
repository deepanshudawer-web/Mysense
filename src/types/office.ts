export interface OfficeLocation {
  id: string;
  country: string;
  flag: string;
  address: string[];
  phone: string;
  email: string;
  isComingSoon?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
}