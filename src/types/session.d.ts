// src/types/session.d.ts
// تعريفات TypeScript للجلسات والرسائل في WhatsApp API

// تعريف حالات الجلسة
export type SessionStatus = 
  | "CONNECTED" // متصل
  | "DISCONNECTED" // غير متصل
  | "CONNECTING" // جاري الاتصال
  | "SCANNING_QR" // في انتظار مسح رمز QR
  | "CONNECTION_LOST" // فقد الاتصال
  | "LOGGED_OUT"; // تم تسجيل الخروج

// تعريف بيانات رمز QR
export interface QRCodeData {
  qrString: string; // سلسلة رمز QR
  qrBase64Image?: string; // صورة رمز QR بتنسيق Base64
  expiresAt?: string; // وقت انتهاء صلاحية رمز QR
}

// تعريف بيانات الجلسة
export interface Session {
  id: string; // معرف الجلسة
  customerId: number; // معرف العميل
  mobileNumber: string; // رقم الجوال المرتبط بالجلسة
  status: SessionStatus; // حالة الجلسة
  qrCode?: QRCodeData; // بيانات رمز QR (إذا كانت الحالة SCANNING_QR)
  lastActive?: string; // آخر نشاط للجلسة
  createdAt: string; // تاريخ إنشاء الجلسة
  updatedAt: string; // تاريخ آخر تحديث للجلسة
  deviceInfo?: {
    platform?: string; // منصة الجهاز
    deviceModel?: string; // طراز الجهاز
    osVersion?: string; // إصدار نظام التشغيل
    waVersion?: string; // إصدار WhatsApp
  };
}

// تعريف استجابة API للجلسات
export interface SessionListResponse {
  sessions: Session[]; // قائمة الجلسات
  totalCount: number; // إجمالي عدد الجلسات
}

// تعريف استجابة API لجلسة واحدة
export interface SessionResponse {
  session: Session; // بيانات الجلسة
}

// تعريف طلب إنشاء جلسة
export interface CreateSessionRequest {
  customerId: number; // معرف العميل
  mobileNumber: string; // رقم الجوال
  webhookUrl?: string; // رابط Webhook لاستقبال الإشعارات (اختياري)
}

// تعريف طلب تحديث جلسة
export interface UpdateSessionRequest {
  webhookUrl?: string; // رابط Webhook لاستقبال الإشعارات (اختياري)
}

// تعريف استجابة API لرمز QR
export interface QRCodeResponse {
  qrCode: QRCodeData; // بيانات رمز QR
  sessionId: string; // معرف الجلسة
  expiresIn: number; // مدة صلاحية رمز QR بالثواني
}

// تعريفات للرسائل
export type MessageType = 
  | "TEXT" // نص
  | "IMAGE" // صورة
  | "DOCUMENT" // مستند
  | "VIDEO" // فيديو
  | "AUDIO" // صوت
  | "LOCATION" // موقع
  | "CONTACT" // جهة اتصال
  | "TEMPLATE"; // قالب

// تعريف بيانات الرسالة
export interface Message {
  id: string; // معرف الرسالة
  sessionId: string; // معرف الجلسة
  type: MessageType; // نوع الرسالة
  to: string; // رقم المستلم
  content: string; // محتوى الرسالة (نص أو رابط للوسائط)
  status: "PENDING" | "SENT" | "DELIVERED" | "READ" | "FAILED"; // حالة الرسالة
  mediaUrl?: string; // رابط الوسائط (للصور والفيديو والمستندات)
  caption?: string; // وصف الوسائط
  sentAt?: string; // وقت الإرسال
  deliveredAt?: string; // وقت التسليم
  readAt?: string; // وقت القراءة
  error?: string; // رسالة الخطأ في حالة الفشل
}

// تعريف استجابة API للرسائل
export interface MessageListResponse {
  messages: Message[]; // قائمة الرسائل
  totalCount: number; // إجمالي عدد الرسائل
}

// تعريف طلب إرسال رسالة نصية
export interface SendTextMessageRequest {
  sessionId: string; // معرف الجلسة
  to: string; // رقم المستلم (مع رمز الدولة)
  text: string; // نص الرسالة
}

// تعريف طلب إرسال رسالة وسائط
export interface SendMediaMessageRequest {
  sessionId: string; // معرف الجلسة
  to: string; // رقم المستلم (مع رمز الدولة)
  type: Exclude<MessageType, "TEXT" | "TEMPLATE">; // نوع الوسائط
  mediaUrl: string; // رابط الوسائط
  caption?: string; // وصف الوسائط (اختياري)
}

// تعريف استجابة إرسال الرسائل
export interface SendMessageResponse {
  messageId: string; // معرف الرسالة
  status: "PENDING" | "SENT" | "FAILED"; // حالة الرسالة
}
