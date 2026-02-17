export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Service {
  title: string;
  items: string[];
}

export interface CompanyEntity {
  id: string;
  acronym: string;
  name: string;
  role: string;
  description: string;
}

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  from: string;
}