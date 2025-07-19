"use client"

import { useState, useEffect } from "react";
import { apiService } from "@/lib/api";
import { Session } from "@/types/session.d";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SessionStatusBadge } from "@/components/session-status-badge";
import { Loader2, Send, Image as ImageIcon, FileText, Paperclip, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";

// بيانات وهمية للجلسات
const mockSessions: Session[] = [
  {
    id: "1",
    customerId: 1,
    mobileNumber: "966500000001",
    status: "CONNECTED",
    lastActive: "2025-07-18T12:30:45Z",
    createdAt: "2025-07-10T08:15:30Z",
    updatedAt: "2025-07-18T12:30:45Z",
    deviceInfo: {
      platform: "Android",
      deviceModel: "Samsung Galaxy S21",
      osVersion: "Android 12",
      waVersion: "2.22.24.78"
    }
  },
  {
    id: "2",
    customerId: 2,
    mobileNumber: "966500000002",
    status: "DISCONNECTED",
    lastActive: "2025-07-17T15:45:12Z",
    createdAt: "2025-07-12T09:20:15Z",
    updatedAt: "2025-07-17T15:45:12Z"
  }
];

export default function MessagesPage() {
  // حالة النموذج
  const [selectedSessionId, setSelectedSessionId] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [messageText, setMessageText] = useState<string>("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaCaption, setMediaCaption] = useState<string>("");
  const [mediaType, setMediaType] = useState<string>("image");
  
  // حالة البيانات
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // جلب قائمة الجلسات
  const fetchSessions = async () => {
    try {
      setLoading(true);
      const response = await apiService.getSessions();
      
      if (response.success && response.data) {
        setSessions(response.data.sessions);
      } else {
        // استخدام البيانات الوهمية في حالة الخطأ
        console.log("استخدام البيانات الوهمية للجلسات");
        setSessions(mockSessions);
      }
    } catch (err) {
      console.error('خطأ في جلب بيانات الجلسات:', err);
      setError('حدث خطأ أثناء تحميل بيانات الجلسات');
      // استخدام البيانات الوهمية في حالة الخطأ
      setSessions(mockSessions);
    } finally {
      setLoading(false);
    }
  };

  // معالجة تغيير الملف
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // التحقق من نوع الملف وحجمه
    const maxSizeInBytes = 16 * 1024 * 1024; // 16 ميجابايت
    if (file.size > maxSizeInBytes) {
      toast({
        title: "خطأ في الملف",
        description: "حجم الملف يتجاوز الحد المسموح به (16 ميجابايت)",
        variant: "destructive",
      });
      return;
    }

    // تحديد نوع الوسائط بناءً على نوع الملف
    if (file.type.startsWith("image/")) {
      setMediaType("image");
    } else if (file.type.startsWith("video/")) {
      setMediaType("video");
    } else if (file.type.startsWith("audio/")) {
      setMediaType("audio");
    } else {
      setMediaType("document");
    }

    // إنشاء معاينة للملف إذا كان صورة
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setMediaPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setMediaPreview(null);
    }

    setMediaFile(file);
  };

  // إزالة الملف المحدد
  const handleRemoveFile = () => {
    setMediaFile(null);
    setMediaPreview(null);
    setMediaCaption("");
  };

  // إرسال رسالة نصية
  const handleSendTextMessage = async () => {
    if (!selectedSessionId || !recipient || !messageText.trim()) {
      toast({
        title: "تعذر إرسال الرسالة",
        description: "يرجى ملء جميع الحقول المطلوبة",
      });
      return;
    }

    try {
      setSending(true);
      const response = await apiService.sendTextMessage(selectedSessionId, {
        to: recipient,
        text: messageText,
      });

      if (response.success) {
        toast({
          title: "تم إرسال الرسالة",
          description: "تم إرسال الرسالة النصية بنجاح",
        });
        setMessageText("");
      } else {
        toast({
          title: "خطأ في إرسال الرسالة",
          description: response.message || "حدث خطأ أثناء إرسال الرسالة",
        });
      }
    } catch (err) {
      console.error('خطأ في إرسال الرسالة النصية:', err);
      toast({
        title: "خطأ في إرسال الرسالة",
        description: "حدث خطأ أثناء إرسال الرسالة",
      });
    } finally {
      setSending(false);
    }
  };

  // إرسال رسالة وسائط
  const handleSendMediaMessage = async () => {
    if (!selectedSessionId || !recipient || !mediaFile) {
      toast({
        title: "تعذر إرسال الرسالة",
        description: "يرجى ملء جميع الحقول المطلوبة واختيار ملف",
      });
      return;
    }

    try {
      setSending(true);
      
      // تحويل الملف إلى Base64
      const base64Data = await fileToBase64(mediaFile);
      
      const response = await apiService.sendMediaMessage(selectedSessionId, {
        to: recipient,
        mediaType,
        media: base64Data,
        caption: mediaCaption,
        fileName: mediaFile.name,
      });

      if (response.success) {
        toast({
          title: "تم إرسال الرسالة",
          description: "تم إرسال رسالة الوسائط بنجاح",
        });
        handleRemoveFile();
        setMediaCaption("");
      } else {
        toast({
          title: "خطأ في إرسال الرسالة",
          description: response.message || "حدث خطأ أثناء إرسال رسالة الوسائط",
        });
      }
    } catch (err) {
      console.error('خطأ في إرسال رسالة الوسائط:', err);
      toast({
        title: "خطأ في إرسال الرسالة",
        description: "حدث خطأ أثناء إرسال رسالة الوسائط",
      });
    } finally {
      setSending(false);
    }
  };

  // تحويل الملف إلى Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // إزالة الجزء الأول من سلسلة Base64 (مثل "data:image/png;base64,")
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // جلب البيانات عند تحميل الصفحة
  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h1 className="text-3xl font-bold mb-4">إرسال رسائل WhatsApp</h1>
            <p className="text-gray-500 mb-6">
              يمكنك من هنا إرسال رسائل نصية ووسائط إلى جهات الاتصال عبر WhatsApp.
            </p>
          </div>

          {/* عرض الخطأ إذا وجد */}
          {error && (
            <div className="px-4 lg:px-6">
              <Alert variant="destructive">
                <AlertTitle>خطأ</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}

          {/* نموذج إرسال الرسائل */}
          <div className="px-4 lg:px-6">
            <Card>
              <CardHeader>
                <CardTitle>إرسال رسالة جديدة</CardTitle>
                <CardDescription>
                  اختر جلسة WhatsApp المتصلة وأدخل رقم المستلم لإرسال رسالة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* اختيار الجلسة */}
                  <div className="space-y-2">
                    <Label htmlFor="session">جلسة WhatsApp</Label>
                    <Select
                      value={selectedSessionId}
                      onValueChange={setSelectedSessionId}
                      disabled={loading || sessions.length === 0}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر جلسة WhatsApp" />
                      </SelectTrigger>
                      <SelectContent>
                        {sessions.map((session) => (
                          <SelectItem
                            key={session.id}
                            value={session.id}
                            disabled={session.status !== "CONNECTED"}
                          >
                            <div className="flex items-center gap-2">
                              <span>{session.mobileNumber}</span>
                              <SessionStatusBadge status={session.status} />
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {sessions.length === 0 && !loading && (
                      <p className="text-sm text-red-500">
                        لا توجد جلسات متاحة. يرجى إنشاء جلسة جديدة أولاً.
                      </p>
                    )}
                  </div>

                  {/* رقم المستلم */}
                  <div className="space-y-2">
                    <Label htmlFor="recipient">رقم المستلم</Label>
                    <Input
                      id="recipient"
                      placeholder="أدخل رقم الهاتف مع رمز الدولة (مثال: 966501234567)"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                    />
                    <p className="text-xs text-gray-500">
                      يجب إدخال رقم الهاتف مع رمز الدولة بدون علامات أو مسافات
                    </p>
                  </div>

                  {/* نوع الرسالة (نص أو وسائط) */}
                  <Tabs defaultValue="text">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="text">رسالة نصية</TabsTrigger>
                      <TabsTrigger value="media">وسائط</TabsTrigger>
                    </TabsList>

                    {/* محتوى علامة تبويب الرسالة النصية */}
                    <TabsContent value="text" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="message">نص الرسالة</Label>
                        <Textarea
                          id="message"
                          placeholder="أدخل نص الرسالة هنا..."
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <Button
                        type="button"
                        className="w-full"
                        onClick={handleSendTextMessage}
                        disabled={sending || !selectedSessionId || !recipient || !messageText.trim()}
                      >
                        {sending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            جاري الإرسال...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            إرسال الرسالة
                          </>
                        )}
                      </Button>
                    </TabsContent>

                    {/* محتوى علامة تبويب الوسائط */}
                    <TabsContent value="media" className="space-y-4 mt-4">
                      {!mediaFile ? (
                        <div className="space-y-2">
                          <Label htmlFor="media">اختر ملف الوسائط</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                            <Paperclip className="h-8 w-8 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-500 mb-2">
                              اسحب وأفلت الملف هنا، أو انقر لاختيار ملف
                            </p>
                            <p className="text-xs text-gray-400">
                              الحد الأقصى لحجم الملف: 16 ميجابايت
                            </p>
                            <Input
                              id="media"
                              type="file"
                              className="hidden"
                              onChange={handleFileChange}
                              accept="image/*,video/*,audio/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("media")?.click()}
                              className="mt-4"
                            >
                              اختر ملفاً
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              {mediaType === "image" ? (
                                <ImageIcon className="h-5 w-5 text-blue-500" />
                              ) : mediaType === "document" ? (
                                <FileText className="h-5 w-5 text-blue-500" />
                              ) : (
                                <Paperclip className="h-5 w-5 text-blue-500" />
                              )}
                              <span className="font-medium">{mediaFile.name}</span>
                              <span className="text-sm text-gray-500">
                                ({(mediaFile.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={handleRemoveFile}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>

                          {mediaPreview && (
                            <div className="mt-2">
                              <img
                                src={mediaPreview}
                                alt="Media Preview"
                                className="max-h-48 rounded-md mx-auto"
                              />
                            </div>
                          )}

                          <div className="space-y-2">
                            <Label htmlFor="caption">وصف الوسائط (اختياري)</Label>
                            <Textarea
                              id="caption"
                              placeholder="أدخل وصفاً للوسائط..."
                              value={mediaCaption}
                              onChange={(e) => setMediaCaption(e.target.value)}
                              rows={3}
                            />
                          </div>

                          <Button
                            type="button"
                            className="w-full"
                            onClick={handleSendMediaMessage}
                            disabled={sending || !selectedSessionId || !recipient || !mediaFile}
                          >
                            {sending ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                جاري الإرسال...
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                إرسال الوسائط
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="text-sm text-gray-500">
                  ملاحظة: يجب أن تكون جلسة WhatsApp متصلة لإرسال الرسائل.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
