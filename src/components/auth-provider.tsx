"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// تعريف نوع بيانات المستخدم
export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  role: string;
}

// تعريف سياق المصادقة
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

// إنشاء سياق المصادقة
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// مسارات لا تتطلب تسجيل الدخول
const publicPaths = ["/login", "/register", "/forgot-password"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("auth_token");
        const userInfo = localStorage.getItem("user_info");

        if (token && userInfo) {
          const userData = JSON.parse(userInfo) as User;
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("خطأ في التحقق من حالة تسجيل الدخول:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    // تنفيذ التحقق فقط في جانب العميل
    if (typeof window !== "undefined") {
      checkAuth();
    }
  }, []);

  // التحقق من الوصول إلى المسارات المحمية
  useEffect(() => {
    if (!isLoading) {
      // استخراج المسار الأساسي بدون معلمات اللغة
      const basePath = pathname?.split("/").slice(2).join("/") || "";
      const isPublicPath = publicPaths.some(path => 
        basePath === path.substring(1) || // مطابقة المسار بدون "/"
        basePath === "" // الصفحة الرئيسية
      );

      // إذا كان المستخدم غير مسجل والمسار محمي، توجيه إلى صفحة تسجيل الدخول
      if (!user && !isPublicPath) {
        const locale = pathname?.split("/")[1] || "ar";
        router.push(`/${locale}/login`);
      }
      
      // إذا كان المستخدم مسجل والمسار هو تسجيل الدخول، توجيه إلى لوحة التحكم
      if (user && basePath === "login") {
        const locale = pathname?.split("/")[1] || "ar";
        router.push(`/${locale}/dashboard`);
      }
    }
  }, [user, isLoading, pathname, router]);

  // دوال المصادقة
  const login = (token: string, userData: User) => {
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user_info", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_info");
    setUser(null);
    
    // توجيه إلى صفحة تسجيل الدخول بعد تسجيل الخروج
    const locale = pathname?.split("/")[1] || "ar";
    router.push(`/${locale}/login`);
  };

  // إذا كان التحميل جارياً، عرض شاشة التحميل
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// هوك لاستخدام سياق المصادقة
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("يجب استخدام useAuth داخل AuthProvider");
  }
  return context;
}
