// src/types/customer.d.ts

export interface Customer {
  id: number;
  creationTime: string;
  creatorId: string;
  lastModificationTime: string;
  lastModifierId: string;
  isDeleted: boolean;
  deleterId: string;
  deletionTime: string;
  fullName: string;
  companyName: string;
  mobileNumber: string;
  masterMobileNumber: string;
  // أضف أي حقول أخرى تتوقعها من الـ API هنا
}

export interface CustomerListResponse {
  items: Customer[];
  totalCount: number;
}

// بناءً على ApiResponse في ApiService
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}