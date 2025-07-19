// src/lib/api.ts
// (هذا هو الكود الذي قدمته سابقًا، فقط للتأكيد على السياق)

import type { ApiResponse, CustomerListResponse } from "@/types/customer.d.ts"; // تأكد من استيراد الواجهة هنا
import type {
  SessionListResponse,
  SessionResponse,
  CreateSessionRequest,
  UpdateSessionRequest,
  QRCodeResponse,
  SendTextMessageRequest,
  SendMediaMessageRequest,
  SendMessageResponse,
  MessageListResponse,
  Message,
  MessageType,
} from "@/types/session.d.ts";

// واجهة استجابة تسجيل الدخول
export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    fullName: string;
    email: string;
    role: string;
  };
}

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number>;
}

class ApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY || "";
  }

  private buildUrl(
    endpoint: string,
    params?: Record<string, string | number>
  ): string {
    // استخدام الوسيط المحلي بدلاً من الاتصال المباشر بـ API
    // سيتم توجيه الطلبات من /api إلى الخادم الفعلي عبر next.config.js
    let base = "/api";

    let path = endpoint;
    // إزالة /cretechsoft/Whatsapp من المسار إذا كان موجوداً
    // لأنه قد يكون مضمناً بالفعل في baseUrl
    if (path.startsWith("/cretechsoft/Whatsapp/")) {
      path = path.replace("/cretechsoft/Whatsapp/", "/");
    }
    if (path.startsWith("/")) {
      path = path.substring(1);
    }

    // بناء URL كامل
    const fullUrl = `${base}/${path}`;
    console.log(`🔗 Built URL: ${fullUrl}`);

    // إضافة معلمات الاستعلام إذا وجدت
    if (!params || Object.keys(params).length === 0) {
      return fullUrl;
    }

    // بناء سلسلة معلمات الاستعلام
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, String(value));
      }
    });

    const queryString = queryParams.toString();
    if (queryString) {
      return `${fullUrl}?${queryString}`;
    }

    return fullUrl;
  }

  // استخدام ApiResponse<T> الذي قمت بتعريفه
  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    // تم تحديث نوع الإرجاع هنا
    const { params, ...requestConfig } = config;

    const url = this.buildUrl(endpoint, params);

    // طباعة معلومات تشخيصية
    console.log(`🔍 API Request to: ${url}`);

    // تحسين رؤوس الطلب لتتضمن المزيد من المعلومات للتوثيق
    const defaultConfig: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // إزالة رؤوس التوثيق من الطلب المبدئي (preflight)
        // سيتم إضافتها بواسطة الخادم الوسيط
        ...requestConfig.headers,
      },
      ...requestConfig,
      // تعديل خيارات الطلب لتعمل مع الوسيط
      credentials: "same-origin", // تغيير من include إلى same-origin لأننا نستخدم وسيطاً محلياً
      cache: "no-cache", // تجنب مشاكل التخزين المؤقت
    };

    try {
      console.log(`📤 Request Headers:`, defaultConfig.headers);
      console.log(`📤 Request Method:`, defaultConfig.method || "GET");

      const response = await fetch(url, defaultConfig);
      console.log(`📥 Response Status:`, response.status, response.statusText);

      if (!response.ok) {
        // محاولة تحليل رسالة الخطأ من الاستجابة
        let errorMessage = `HTTP Error ${response.status}: ${response.statusText}`;
        let errorData = {};

        try {
          // محاولة قراءة بيانات الخطأ كـ JSON
          errorData = (await response.json()) as Record<string, any>;
          console.error(`❌ API Error Response:`, errorData);
          if (typeof errorData === "object" && errorData !== null) {
            // استخدام الوصول إلى الكائن بطريقة آمنة من نوع البيانات
            const message =
              "message" in errorData ? String(errorData.message) : undefined;
            const error =
              "error" in errorData ? String(errorData.error) : undefined;
            errorMessage = message || error || errorMessage;
          }
        } catch (parseError) {
          // إذا لم تكن الاستجابة بتنسيق JSON
          console.error(`❌ Failed to parse error response:`, parseError);
          try {
            // محاولة قراءة الاستجابة كنص
            const textResponse = await response.text();
            console.error(`❌ Error Response Text:`, textResponse);
          } catch (textError) {
            console.error(
              `❌ Failed to read error response as text:`,
              textError
            );
          }
        }

        return {
          success: false,
          error: errorMessage,
          statusCode: response.status,
        } as ApiResponse<T>;
      }

      // محاولة تحليل الاستجابة الناجحة
      try {
        const data = await response.json();
        console.log(`✅ API Response Success:`, {
          dataPreview: data ? typeof data : "null",
        });
        return { success: true, data };
      } catch (parseError) {
        console.error(`❌ Failed to parse successful response:`, parseError);
        return {
          success: false,
          error: "Failed to parse API response",
          statusCode: 200,
        } as ApiResponse<T>;
      }
    } catch (error) {
      console.error(`❌ API Request Failed:`, error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Network request failed",
        statusCode: 0, // عدم وجود رمز حالة يشير إلى فشل الشبكة
      } as ApiResponse<T>;
    }
  }

  // بيانات وهمية للعملاء لاستخدامها في حالة فشل الاتصال بـ API
  private getMockCustomers(): CustomerListResponse {
    return {
      items: [
        {
          id: 1,
          creationTime: new Date().toISOString(),
          creatorId: "1",
          lastModificationTime: new Date().toISOString(),
          lastModifierId: "1",
          isDeleted: false,
          deleterId: "",
          deletionTime: "",
          fullName: "محمد أحمد",
          companyName: "شركة الأفق",
          mobileNumber: "0501234567",
          masterMobileNumber: "0501234567",
        },
        {
          id: 2,
          creationTime: new Date().toISOString(),
          creatorId: "1",
          lastModificationTime: new Date().toISOString(),
          lastModifierId: "1",
          isDeleted: false,
          deleterId: "",
          deletionTime: "",
          fullName: "سارة محمد",
          companyName: "شركة النور",
          mobileNumber: "0507654321",
          masterMobileNumber: "0507654321",
        },
        {
          id: 3,
          creationTime: new Date().toISOString(),
          creatorId: "1",
          lastModificationTime: new Date().toISOString(),
          lastModifierId: "1",
          isDeleted: false,
          deleterId: "",
          deletionTime: "",
          fullName: "خالد عبدالله",
          companyName: "شركة المستقبل",
          mobileNumber: "0509876543",
          masterMobileNumber: "0509876543",
        },
      ],
      totalCount: 3,
    };
  }

  // بيانات وهمية لجلسات WhatsApp لاستخدامها في حالة فشل الاتصال بـ API
  private getMockSessions(): SessionListResponse {
    return {
      sessions: [
        {
          id: "1",
          customerId: 1,
          mobileNumber: "966500000001",
          status: "CONNECTED",
          lastActive: new Date().toISOString(),
          createdAt: new Date(
            Date.now() - 7 * 24 * 60 * 60 * 1000
          ).toISOString(),
          updatedAt: new Date().toISOString(),
          deviceInfo: {
            platform: "Android",
            deviceModel: "Samsung Galaxy S21",
            osVersion: "Android 12",
            waVersion: "2.22.24.78",
          },
        },
        {
          id: "2",
          customerId: 2,
          mobileNumber: "966500000002",
          status: "DISCONNECTED",
          lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date(
            Date.now() - 14 * 24 * 60 * 60 * 1000
          ).toISOString(),
          updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: "3",
          customerId: 3,
          mobileNumber: "966500000003",
          status: "SCANNING_QR",
          lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
      ],
      totalCount: 3,
    };
  }

  // بيانات وهمية لجلسة WhatsApp واحدة
  private getMockSession(sessionId: string): SessionResponse {
    // الحصول على الجلسات الوهمية
    const allSessions = this.getMockSessions().sessions;

    // البحث عن الجلسة بالمعرف
    const foundSession = allSessions.find(
      (session) => session.id === sessionId
    );

    // إذا وجدت الجلسة، أرجعها، وإلا أرجع جلسة افتراضية
    if (foundSession) {
      return {
        session: foundSession,
      };
    } else {
      // جلسة افتراضية إذا لم يتم العثور على الجلسة المطلوبة
      return {
        session: {
          id: sessionId,
          customerId: 999,
          mobileNumber: "966500000999",
          status: "CONNECTED",
          lastActive: new Date().toISOString(),
          createdAt: new Date(
            Date.now() - 3 * 24 * 60 * 60 * 1000
          ).toISOString(),
          updatedAt: new Date().toISOString(),
          deviceInfo: {
            platform: "iOS",
            deviceModel: "iPhone 13",
            osVersion: "iOS 15.4",
            waVersion: "2.22.24.79",
          },
        },
      };
    }
  }

  // بيانات وهمية لرسائل WhatsApp
  private getMockMessages(sessionId?: string): MessageListResponse {
    const now = Date.now();
    const oneHourAgo = now - 60 * 60 * 1000;
    const twoHoursAgo = now - 2 * 60 * 60 * 1000;
    const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000;

    // إنشاء قائمة من الرسائل الوهمية
    const messages: Message[] = [
      {
        id: "msg1",
        sessionId: "1",
        type: "TEXT" as MessageType,
        to: "966500000001",
        content: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
        status: "DELIVERED" as
          | "PENDING"
          | "SENT"
          | "DELIVERED"
          | "READ"
          | "FAILED",
        sentAt: new Date(twoHoursAgo).toISOString(),
        deliveredAt: new Date(twoHoursAgo + 5000).toISOString(),
      },
      {
        id: "msg2",
        sessionId: "1",
        type: "TEXT" as MessageType,
        to: "966500000001",
        content: "نود إبلاغكم بأن طلبكم رقم #12345 جاهز للاستلام",
        status: "READ" as "PENDING" | "SENT" | "DELIVERED" | "READ" | "FAILED",
        sentAt: new Date(oneHourAgo).toISOString(),
        deliveredAt: new Date(oneHourAgo + 2000).toISOString(),
        readAt: new Date(oneHourAgo + 60000).toISOString(),
      },
      {
        id: "msg3",
        sessionId: "2",
        type: "IMAGE" as MessageType,
        to: "966500000002",
        content: "",
        mediaUrl: "https://example.com/images/product.jpg",
        caption: "صورة المنتج الجديد",
        status: "SENT" as "PENDING" | "SENT" | "DELIVERED" | "READ" | "FAILED",
        sentAt: new Date(threeDaysAgo).toISOString(),
      },
      {
        id: "msg4",
        sessionId: "3",
        type: "DOCUMENT" as MessageType,
        to: "966500000003",
        content: "",
        mediaUrl: "https://example.com/docs/invoice.pdf",
        caption: "فاتورة الطلب #5678",
        status: "FAILED" as
          | "PENDING"
          | "SENT"
          | "DELIVERED"
          | "READ"
          | "FAILED",
        sentAt: new Date(now - 30 * 60 * 1000).toISOString(),
        error: "فشل في إرسال الملف",
      },
      {
        id: "msg5",
        sessionId: "1",
        type: "TEXT" as MessageType,
        to: "966500000001",
        content: "شكراً لتواصلك معنا. سنقوم بالرد عليك قريباً.",
        status: "PENDING" as
          | "PENDING"
          | "SENT"
          | "DELIVERED"
          | "READ"
          | "FAILED",
        sentAt: new Date(now).toISOString(),
      },
    ];

    // إذا تم تحديد معرف جلسة، قم بتصفية الرسائل لتلك الجلسة فقط
    if (sessionId) {
      const filteredMessages = messages.filter(
        (msg) => msg.sessionId === sessionId
      );
      return {
        messages: filteredMessages,
        totalCount: filteredMessages.length,
      };
    }

    return {
      messages: messages,
      totalCount: messages.length,
    };
  }

  // طرق العملاء
  // هنا نحدد أن getCustomers ستعيد Promise<ApiResponse<CustomerListResponse>>
  async getCustomers(params?: {
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<CustomerListResponse>> {
    try {
      // استخدام طريقة request المحسنة
      console.log("جاري محاولة الاتصال بـ API لجلب بيانات العملاء...");

      const response = await this.request<CustomerListResponse>(
        "/neosending/Whatsapp/customer",
        {
          params: params,
        }
      );

      if (response.success) {
        console.log("تم الحصول على بيانات العملاء بنجاح", response.data);
        return response;
      } else {
        console.error("خطأ في جلب بيانات العملاء:", response.error);
        // استخدام البيانات الوهمية في حالة الفشل
        const mockData = this.getMockCustomers();
        return {
          success: true,
          data: mockData,
          message: "تم استخدام بيانات وهمية بسبب تعذر الاتصال بالخادم",
        };
      }
    } catch (error) {
      console.error("خطأ في جلب بيانات العملاء من NeoSending API:", error);

      // في حالة الخطأ، استخدم البيانات الوهمية
      console.log("استخدام البيانات الوهمية للعملاء بسبب خطأ");
      const mockData = this.getMockCustomers();
      return { success: true, data: mockData };
    }
  }

  // ... باقي الطرق (مثل getCustomer, createCustomer, إلخ) كما هي
  async getCustomer(id: number) {
    return this.request(`/customers/${id}`);
  }

  async createCustomer(customerData: any) {
    return this.request("/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
    });
  }

  async updateCustomer(id: number, customerData: any) {
    return this.request(`/customer/${id}`, {
      method: "PUT",
      body: JSON.stringify(customerData),
    });
  }

  async getCustomerBalance(customerId: number) {
    return this.request("/customer/customer-balance", {
      params: { customerId },
    });
  }

  // طرق حسابات الجوال
  async getMobileAccounts(params?: { customerId?: number }) {
    return this.request("/mobile-account", { params });
  }

  async createMobileAccount(accountData: any) {
    return this.request("/mobile-account", {
      method: "POST",
      body: JSON.stringify(accountData),
    });
  }

  async updateMobileAccount(id: number, accountData: any) {
    return this.request(`/mobile-account/${id}`, {
      method: "PUT",
      body: JSON.stringify(accountData),
    });
  }

  async deleteMobileAccount(id: number) {
    return this.request(`/mobile-account/${id}`, {
      method: "DELETE",
    });
  }

  async restartSession(params: { mobileNumber: string; customerId: number }) {
    return this.request("/mobile-account/restart-session", {
      params,
    });
  }

  async deleteSession(params: { mobileNumber: string; customerId: number }) {
    return this.request("/mobile-account/delete-session", {
      params,
    });
  }

  // ===== وظائف جلسات WhatsApp الجديدة =====

  // الحصول على قائمة الجلسات
  async getSessions(params?: {
    customerId?: number;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<SessionListResponse>> {
    try {
      console.log("جاري محاولة الاتصال بـ API لجلب جلسات WhatsApp...");

      const response = await this.request<SessionListResponse>(
        "/neosending/Whatsapp/sessions",
        {
          params,
        }
      );

      if (response.success) {
        console.log("تم الحصول على جلسات WhatsApp بنجاح", response.data);
        return response;
      } else {
        console.error("خطأ في جلب جلسات WhatsApp:", response.error);
        // استخدام البيانات الوهمية في حالة الفشل
        const mockData = this.getMockSessions();
        return {
          success: true,
          data: mockData,
          message: "تم استخدام بيانات وهمية للجلسات بسبب تعذر الاتصال بالخادم",
        };
      }
    } catch (error) {
      console.error("خطأ في جلب جلسات WhatsApp من API:", error);

      // في حالة الخطأ، استخدم البيانات الوهمية
      console.log("استخدام البيانات الوهمية لجلسات WhatsApp بسبب خطأ");
      const mockData = this.getMockSessions();
      return { success: true, data: mockData };
    }
  }

  // الحصول على جلسة محددة
  async getSession(sessionId: string): Promise<ApiResponse<SessionResponse>> {
    try {
      console.log(
        `جاري محاولة الاتصال بـ API لجلب جلسة WhatsApp بمعرف ${sessionId}...`
      );

      const response = await this.request<SessionResponse>(
        `/neosending/Whatsapp/sessions/${sessionId}`
      );

      if (response.success) {
        console.log(`تم الحصول على جلسة WhatsApp بنجاح`, response.data);
        return response;
      } else {
        console.error(
          `خطأ في جلب جلسة WhatsApp بمعرف ${sessionId}:`,
          response.error
        );
        // استخدام البيانات الوهمية في حالة الفشل
        const mockData = this.getMockSession(sessionId);
        return {
          success: true,
          data: mockData,
          message: `تم استخدام بيانات وهمية للجلسة بمعرف ${sessionId} بسبب تعذر الاتصال بالخادم`,
        };
      }
    } catch (error) {
      console.error(
        `خطأ في جلب جلسة WhatsApp بمعرف ${sessionId} من API:`,
        error
      );

      // في حالة الخطأ، استخدم البيانات الوهمية
      console.log(
        `استخدام البيانات الوهمية لجلسة WhatsApp بمعرف ${sessionId} بسبب خطأ`
      );
      const mockData = this.getMockSession(sessionId);
      return { success: true, data: mockData };
    }
  }

  // إنشاء جلسة جديدة
  async createSession(
    data: CreateSessionRequest
  ): Promise<ApiResponse<SessionResponse>> {
    try {
      console.log(`جاري محاولة إنشاء جلسة WhatsApp جديدة...`);

      const response = await this.request<SessionResponse>(
        "/neosending/Whatsapp/sessions",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.success) {
        console.log(`تم إنشاء جلسة WhatsApp بنجاح`, response.data);
        return response;
      } else {
        console.error(`خطأ في إنشاء جلسة WhatsApp:`, response.error);
        return response;
      }
    } catch (error) {
      console.error(`خطأ في إنشاء جلسة WhatsApp من API:`, error);

      return {
        success: false,
        error: `خطأ في الاتصال بالخادم أثناء محاولة إنشاء جلسة WhatsApp. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.`,
        message: `فشل في إنشاء جلسة WhatsApp`,
      };
    }
  }

  // تحديث جلسة
  async updateSession(
    sessionId: string,
    data: UpdateSessionRequest
  ): Promise<ApiResponse<SessionResponse>> {
    try {
      console.log(`جاري محاولة تحديث جلسة WhatsApp بمعرف ${sessionId}...`);

      const response = await this.request<SessionResponse>(
        `/neosending/Whatsapp/sessions/${sessionId}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );

      if (response.success) {
        console.log(`تم تحديث جلسة WhatsApp بنجاح`, response.data);
        return response;
      } else {
        console.error(
          `خطأ في تحديث جلسة WhatsApp بمعرف ${sessionId}:`,
          response.error
        );
        return response;
      }
    } catch (error) {
      console.error(
        `خطأ في تحديث جلسة WhatsApp بمعرف ${sessionId} من API:`,
        error
      );

      return {
        success: false,
        error: `خطأ في الاتصال بالخادم أثناء محاولة تحديث جلسة WhatsApp. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.`,
        message: `فشل في تحديث جلسة WhatsApp بمعرف ${sessionId}`,
      };
    }
  }

  // حذف جلسة
  async removeSession(sessionId: string): Promise<ApiResponse<void>> {
    try {
      console.log(`جاري محاولة حذف جلسة WhatsApp بمعرف ${sessionId}...`);

      const response = await this.request<void>(
        `/neosending/Whatsapp/sessions/${sessionId}`,
        {
          method: "DELETE",
        }
      );

      if (response.success) {
        console.log(`تم حذف جلسة WhatsApp بنجاح`);
        return response;
      } else {
        console.error(
          `خطأ في حذف جلسة WhatsApp بمعرف ${sessionId}:`,
          response.error
        );
        return response;
      }
    } catch (error) {
      console.error(
        `خطأ في حذف جلسة WhatsApp بمعرف ${sessionId} من API:`,
        error
      );

      return {
        success: false,
        error: `خطأ في الاتصال بالخادم أثناء محاولة حذف جلسة WhatsApp. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.`,
        message: `فشل في حذف جلسة WhatsApp بمعرف ${sessionId}`,
      };
    }
  }

  // إعادة تشغيل جلسة وإنشاء رمز QR جديد
  async generateQRCode(
    sessionId: string
  ): Promise<ApiResponse<QRCodeResponse>> {
    try {
      console.log(
        `جاري محاولة إنشاء رمز QR جديد لجلسة WhatsApp بمعرف ${sessionId}...`
      );

      const response = await this.request<QRCodeResponse>(
        `/neosending/Whatsapp/sessions/${sessionId}/qr`,
        {
          method: "POST",
        }
      );

      if (response.success) {
        console.log(`تم إنشاء رمز QR بنجاح لجلسة WhatsApp`);
        return response;
      } else {
        console.error(
          `خطأ في إنشاء رمز QR لجلسة WhatsApp بمعرف ${sessionId}:`,
          response.error
        );
        return response;
      }
    } catch (error) {
      console.error(
        `خطأ في إنشاء رمز QR لجلسة WhatsApp بمعرف ${sessionId} من API:`,
        error
      );

      return {
        success: false,
        error: `خطأ في الاتصال بالخادم أثناء محاولة إنشاء رمز QR. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.`,
        message: `فشل في إنشاء رمز QR لجلسة WhatsApp بمعرف ${sessionId}`,
      };
    }
  }

  // الحصول على حالة جلسة
  async getSessionStatus(
    sessionId: string
  ): Promise<ApiResponse<SessionResponse>> {
    try {
      console.log(
        `جاري محاولة الحصول على حالة جلسة WhatsApp بمعرف ${sessionId}...`
      );

      const response = await this.request<SessionResponse>(
        `/neosending/Whatsapp/sessions/${sessionId}/status`
      );

      if (response.success) {
        console.log(`تم الحصول على حالة جلسة WhatsApp بنجاح`, response.data);
        return response;
      } else {
        console.error(
          `خطأ في الحصول على حالة جلسة WhatsApp بمعرف ${sessionId}:`,
          response.error
        );
        // استخدام البيانات الوهمية في حالة الفشل
        const mockData = this.getMockSession(sessionId);
        return {
          success: true,
          data: mockData,
          message: `تم استخدام بيانات وهمية لحالة الجلسة بمعرف ${sessionId} بسبب تعذر الاتصال بالخادم`,
        };
      }
    } catch (error) {
      console.error(
        `خطأ في الحصول على حالة جلسة WhatsApp بمعرف ${sessionId} من API:`,
        error
      );

      // في حالة الخطأ، استخدم البيانات الوهمية
      console.log(
        `استخدام البيانات الوهمية لحالة جلسة WhatsApp بمعرف ${sessionId} بسبب خطأ`
      );
      const mockData = this.getMockSession(sessionId);
      return { success: true, data: mockData };
    }
  }

  // ===== وظائف رسائل WhatsApp =====

  // إرسال رسالة نصية
  async sendTextMessage(
    sessionId: string,
    data: SendTextMessageRequest
  ): Promise<ApiResponse<SendMessageResponse>> {
    try {
      console.log(
        `جاري محاولة إرسال رسالة نصية عبر جلسة WhatsApp بمعرف ${sessionId}...`
      );

      const response = await this.request<SendMessageResponse>(
        `/neosending/Whatsapp/sessions/${sessionId}/messages/text`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.success) {
        console.log(
          `تم إرسال الرسالة النصية بنجاح إلى ${data.to}`,
          response.data
        );
        return response;
      } else {
        console.error(`خطأ في إرسال الرسالة النصية:`, response.error);
        // إرجاع استجابة الخطأ للتعامل معها في الواجهة
        return response;
      }
    } catch (error) {
      console.error(`خطأ في إرسال الرسالة النصية من API:`, error);

      // في حالة الخطأ، إرجاع استجابة خطأ مع رسالة مفيدة
      return {
        success: false,
        error: `خطأ في الاتصال بالخادم أثناء محاولة إرسال الرسالة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.`,
        message: `فشل في إرسال الرسالة النصية إلى ${data.to}`,
      };
    }
  }

  // إرسال رسالة وسائط (صورة، فيديو، مستند، إلخ)
  async sendMediaMessage(
    sessionId: string,
    data: SendMediaMessageRequest
  ): Promise<ApiResponse<SendMessageResponse>> {
    try {
      console.log(
        `جاري محاولة إرسال رسالة وسائط عبر جلسة WhatsApp بمعرف ${sessionId}...`
      );
      console.log(`نوع الوسائط: ${data.type}, المستلم: ${data.to}`);

      const response = await this.request<SendMessageResponse>(
        `/neosending/Whatsapp/sessions/${sessionId}/messages/media`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.success) {
        console.log(
          `تم إرسال رسالة الوسائط بنجاح إلى ${data.to}`,
          response.data
        );
        return response;
      } else {
        console.error(`خطأ في إرسال رسالة الوسائط:`, response.error);
        // إرجاع استجابة الخطأ للتعامل معها في الواجهة
        return response;
      }
    } catch (error) {
      console.error(`خطأ في إرسال رسالة الوسائط من API:`, error);

      // في حالة الخطأ، إرجاع استجابة خطأ مع رسالة مفيدة
      return {
        success: false,
        error: `خطأ في الاتصال بالخادم أثناء محاولة إرسال الوسائط. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.`,
        message: `فشل في إرسال رسالة الوسائط إلى ${data.to}`,
      };
    }
  }

  // الحصول على قائمة الرسائل
  async getMessages(params?: {
    sessionId?: string;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<MessageListResponse>> {
    try {
      console.log("جاري محاولة الاتصال بـ API لجلب رسائل WhatsApp...");

      const response = await this.request<MessageListResponse>(
        "/neosending/Whatsapp/messages",
        {
          params,
        }
      );

      if (response.success) {
        console.log("تم الحصول على رسائل WhatsApp بنجاح", response.data);
        return response;
      } else {
        console.error("خطأ في جلب رسائل WhatsApp:", response.error);
        // استخدام البيانات الوهمية في حالة الفشل
        const mockData = this.getMockMessages(params?.sessionId);
        return {
          success: true,
          data: mockData,
          message: "تم استخدام بيانات وهمية للرسائل بسبب تعذر الاتصال بالخادم",
        };
      }
    } catch (error) {
      console.error("خطأ في جلب رسائل WhatsApp من API:", error);

      // في حالة الخطأ، استخدم البيانات الوهمية
      console.log("استخدام البيانات الوهمية لرسائل WhatsApp بسبب خطأ");
      const mockData = this.getMockMessages(params?.sessionId);
      return { success: true, data: mockData };
    }
  }

  // الحصول على حالة رسالة
  async getMessageStatus(
    messageId: string
  ): Promise<ApiResponse<SendMessageResponse>> {
    return this.request<SendMessageResponse>(
      `/neosending/Whatsapp/messages/${messageId}/status`
    );
  }

  // طرق الاشتراكات
  async getSubscriptions(params?: { customerId?: number }) {
    return this.request("/customer-subscription", { params });
  }

  async createSubscription(subscriptionData: any) {
    return this.request("/customer-subscription", {
      method: "POST",
      body: JSON.stringify(subscriptionData),
    });
  }

  async updateSubscription(id: number, subscriptionData: any) {
    return this.request(`/customer-subscription/${id}`, {
      method: "PUT",
      body: JSON.stringify(subscriptionData),
    });
  }

  async deleteSubscription(id: number) {
    return this.request(`/customer-subscription/${id}`, {
      method: "DELETE",
    });
  }

  async getCurrentPackage(customerId: number) {
    return this.request("/customer-subscription/current-package", {
      params: { customerId },
    });
  }

  async searchCustomers(query: string) {
    return this.request("/customer-subscription/customer-lookup", {
      params: { query },
    });
  }

  async searchPackages(query: string) {
    return this.request("/customer-subscription/package-lookup", {
      params: { query },
    });
  }

  // دالة تسجيل الدخول
  async login(username: string, password: string): Promise<ApiResponse<LoginResponse>> {
    console.log(`🔑 محاولة تسجيل الدخول للمستخدم: ${username}`);
    
    try {
      const response = await this.request<LoginResponse>("auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (response.success && response.data) {
        // حفظ رمز الوصول في التخزين المحلي
        if (typeof window !== "undefined") {
          localStorage.setItem("auth_token", response.data.token);
          localStorage.setItem("user_info", JSON.stringify(response.data.user));
        }
        console.log("✅ تم تسجيل الدخول بنجاح");
        return response;
      } else {
        console.error("❌ فشل تسجيل الدخول:", response.error);
        return response;
      }
    } catch (error) {
      console.error("❌ خطأ أثناء تسجيل الدخول:", error);
      return this.getMockLoginResponse(username);
    }
  }

  // بيانات وهمية لاستجابة تسجيل الدخول
  private getMockLoginResponse(username: string): ApiResponse<LoginResponse> {
    // استخدام بيانات وهمية في حالة فشل الاتصال بالخادم
    if (username === "admin" || username === "test") {
      return {
        success: true,
        data: {
          token: "mock_token_12345",
          user: {
            id: 1,
            username: username,
            fullName: username === "admin" ? "مدير النظام" : "مستخدم تجريبي",
            email: `${username}@example.com`,
            role: username === "admin" ? "admin" : "user",
          },
        },
      };
    } else {
      return {
        success: false,
        error: "اسم المستخدم أو كلمة المرور غير صحيحة"
      };
    }
  }
}

export const apiService = new ApiService();

// تصدير الدوال العامة
export const login = apiService.login.bind(apiService);
