// src/lib/api.ts
// (هذا هو الكود الذي قدمته سابقًا، فقط للتأكيد على السياق)

import type { ApiResponse ,CustomerListResponse } from '@/types/customer.d.ts'; // تأكد من استيراد الواجهة هنا

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number>;
}

class ApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
  }

  private buildUrl(endpoint: string, params?: Record<string, string | number>): string {
    const url = new URL(endpoint, this.baseUrl);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  // استخدام ApiResponse<T> الذي قمت بتعريفه
  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> { // تم تحديث نوع الإرجاع هنا
    const { params, ...requestConfig } = config;

    const url = this.buildUrl(endpoint, params);

    const defaultConfig: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
        'Authorization': `Bearer ${this.apiKey}`,
        ...requestConfig.headers,
      },
      ...requestConfig,
    };
    try {
      const response = await fetch(url, defaultConfig);

      if (!response.ok) {
        // إذا كان الـ API يرجع كائن خطأ، يمكنك محاولة تحليله هنا
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // طرق العملاء
  // هنا نحدد أن getCustomers ستعيد Promise<ApiResponse<CustomerListResponse>>
  async getCustomers(params?: { page?: number; limit?: number }): Promise<ApiResponse<CustomerListResponse>> {
    return this.request('/api/cretechsoft/Whatsapp/customer', { params });
  }

  // ... باقي الطرق (مثل getCustomer, createCustomer, إلخ) كما هي
  async getCustomer(id: number) {
    return this.request(`/api/cretechsoft/Whatsapp/customer/${id}`);
  }

  async createCustomer(customerData: any) {
    return this.request('/api/cretechsoft/Whatsapp/customer', {
      method: 'POST',
      body: JSON.stringify(customerData)
    });
  }

  async updateCustomer(id: number, customerData: any) {
    return this.request(`/api/cretechsoft/Whatsapp/customer/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customerData)
    });
  }

  async getCustomerBalance(customerId: number) {
    return this.request('/api/cretechsoft/Whatsapp/customer/customer-balance', {
      params: { customerId }
    });
  }

  // طرق حسابات الجوال
  async getMobileAccounts(params?: { customerId?: number }) {
    return this.request('/api/cretechsoft/Whatsapp/mobile-account', { params });
  }

  async createMobileAccount(accountData: any) {
    return this.request('/api/cretechsoft/Whatsapp/mobile-account', {
      method: 'POST',
      body: JSON.stringify(accountData)
    });
  }

  async updateMobileAccount(id: number, accountData: any) {
    return this.request(`/api/cretechsoft/Whatsapp/mobile-account/${id}`, {
      method: 'PUT',
      body: JSON.stringify(accountData)
    });
  }

  async deleteMobileAccount(id: number) {
    return this.request(`/api/cretechsoft/Whatsapp/mobile-account/${id}`, {
      method: 'DELETE'
    });
  }

  async restartSession(params: { mobileNumber: string; customerId: number }) {
    return this.request('/api/cretechsoft/Whatsapp/mobile-account/restart-session', {
      params
    });
  }

  async deleteSession(params: { mobileNumber: string; customerId: number }) {
    return this.request('/api/cretechsoft/Whatsapp/mobile-account/delete-session', {
      params
    });
  }

  // طرق الاشتراكات
  async getSubscriptions(params?: { customerId?: number }) {
    return this.request('/api/cretechsoft/Whatsapp/customer-subscription', { params });
  }

  async createSubscription(subscriptionData: any) {
    return this.request('/api/cretechsoft/Whatsapp/customer-subscription', {
      method: 'POST',
      body: JSON.stringify(subscriptionData)
    });
  }

  async updateSubscription(id: number, subscriptionData: any) {
    return this.request(`/api/cretechsoft/Whatsapp/customer-subscription/${id}`, {
      method: 'PUT',
      body: JSON.stringify(subscriptionData)
    });
  }

  async deleteSubscription(id: number) {
    return this.request(`/api/cretechsoft/Whatsapp/customer-subscription/${id}`, {
      method: 'DELETE'
    });
  }

  async getCurrentPackage(customerId: number) {
    return this.request('/api/cretechsoft/Whatsapp/customer-subscription/current-package', {
      params: { customerId }
    });
  }

  async searchCustomers(query: string) {
    return this.request('/api/cretechsoft/Whatsapp/customer-subscription/customer-lookup', {
      params: { query }
    });
  }

  async searchPackages(query: string) {
    return this.request('/api/cretechsoft/Whatsapp/customer-subscription/package-lookup', {
      params: { query }
    });
  }
}

export const apiService = new ApiService();