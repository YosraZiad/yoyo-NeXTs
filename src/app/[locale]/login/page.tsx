"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { login } from "@/lib/api";
import { useAuth } from "@/components/auth-provider";

export default function LoginPage() {
  const router = useRouter();
  const { login: authLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(username, password);
      
      if (response.success && response.data) {
        // تم تسجيل الدخول بنجاح
        console.log("تم تسجيل الدخول بنجاح:", response.data);
        
        // استخدام مكون AuthProvider لتخزين بيانات المستخدم
        authLogin(response.data.token, response.data.user);
        
        // سيتم التوجيه تلقائياً بواسطة AuthProvider
      } else {
        // فشل تسجيل الدخول
        setError(response.error || "فشل تسجيل الدخول. يرجى التحقق من اسم المستخدم وكلمة المرور.");
      }
    } catch (err) {
      console.error("خطأ في تسجيل الدخول:", err);
      setError("حدث خطأ أثناء محاولة تسجيل الدخول. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/logo.png"
              alt="شعار التطبيق"
              width={120}
              height={120}
              className="rounded-md"
              onError={(e) => {
                // إذا فشل تحميل الصورة، استخدم نصاً بديلاً
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">تسجيل الدخول</CardTitle>
          <CardDescription className="text-center">
            أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="username">اسم المستخدم</Label>
              <Input
                id="username"
                placeholder="أدخل اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">كلمة المرور</Label>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    // يمكن إضافة وظيفة استعادة كلمة المرور هنا
                    alert("سيتم تنفيذ هذه الميزة قريباً");
                  }}
                >
                  نسيت كلمة المرور؟
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
