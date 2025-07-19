"use client"

import { useState, useEffect } from "react";
import { apiService } from "@/lib/api";
import { Session, SessionStatus } from "@/types/session.d";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCw, Trash2, Plus } from "lucide-react";
import { QRCodeDisplay } from "@/components/qr-code-display";
import { SessionStatusBadge } from "@/components/session-status-badge";



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
  },
  {
    id: "3",
    customerId: 1,
    mobileNumber: "966500000003",
    status: "SCANNING_QR",
    qrCode: {
      qrString: "1@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      qrBase64Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
    },
    createdAt: "2025-07-18T10:05:22Z",
    updatedAt: "2025-07-18T10:05:22Z"
  }
];

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [actionLoading, setActionLoading] = useState<Record<string, boolean>>({});

  // تعريف أعمدة جدول الجلسات
  const columns: ColumnDef<Session, any>[] = [
    {
      accessorKey: "mobileNumber",
      header: "رقم الجوال"
    },
    {
      accessorKey: "status",
      header: "الحالة",
      cell: ({ row }) => {
        const status = row.getValue("status") as SessionStatus;
        return <SessionStatusBadge status={status} />;
      }
    },
    {
      accessorKey: "lastActive",
      header: "آخر نشاط",
      cell: ({ row }) => {
        const lastActive = row.getValue("lastActive") as string;
        return lastActive ? new Date(lastActive).toLocaleString('ar-SA') : 'غير متوفر';
      }
    },
    {
      id: "actions",
      header: "الإجراءات",
      cell: ({ row }) => {
        const session = row.original;
        const isLoading = actionLoading[session.id] || false;

        return (
          <div className="flex space-x-2 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleRestartSession(session.id)}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              <span className="sr-only">إعادة تشغيل</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDeleteSession(session.id)}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              <span className="sr-only">حذف</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleViewSession(session)}
            >
              عرض
            </Button>
          </div>
        );
      }
    }
  ];

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
      setError('حدث خطأ أثناء تحميل البيانات');
      // استخدام البيانات الوهمية في حالة الخطأ
      setSessions(mockSessions);
    } finally {
      setLoading(false);
    }
  };

  // إعادة تشغيل جلسة
  const handleRestartSession = async (sessionId: string) => {
    try {
      setActionLoading(prev => ({ ...prev, [sessionId]: true }));
      const response = await apiService.generateQRCode(sessionId);
      
      if (response.success && response.data) {
        // تحديث الجلسة في القائمة
        setSessions(prev => 
          prev.map(session => 
            session.id === sessionId 
              ? { 
                  ...session, 
                  status: "SCANNING_QR" as SessionStatus,
                  qrCode: response.data.qrCode 
                } 
              : session
          )
        );
        
        // عرض الجلسة المحددة
        const updatedSession = sessions.find(s => s.id === sessionId);
        if (updatedSession) {
          setSelectedSession({
            ...updatedSession,
            status: "SCANNING_QR" as SessionStatus,
            qrCode: response.data.qrCode
          });
        }
      }
    } catch (err) {
      console.error('خطأ في إعادة تشغيل الجلسة:', err);
      setError('حدث خطأ أثناء إعادة تشغيل الجلسة');
    } finally {
      setActionLoading(prev => ({ ...prev, [sessionId]: false }));
    }
  };

  // حذف جلسة
  const handleDeleteSession = async (sessionId: string) => {
    try {
      setActionLoading(prev => ({ ...prev, [sessionId]: true }));
      const response = await apiService.removeSession(sessionId);
      
      if (response.success) {
        // حذف الجلسة من القائمة
        setSessions(prev => prev.filter(session => session.id !== sessionId));
        
        // إغلاق تفاصيل الجلسة إذا كانت مفتوحة
        if (selectedSession?.id === sessionId) {
          setSelectedSession(null);
        }
      }
    } catch (err) {
      console.error('خطأ في حذف الجلسة:', err);
      setError('حدث خطأ أثناء حذف الجلسة');
    } finally {
      setActionLoading(prev => ({ ...prev, [sessionId]: false }));
    }
  };

  // عرض تفاصيل الجلسة
  const handleViewSession = (session: Session) => {
    setSelectedSession(session);
  };

  // إغلاق تفاصيل الجلسة
  const handleCloseDetails = () => {
    setSelectedSession(null);
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
            <h1 className="text-3xl font-bold mb-4">إدارة جلسات WhatsApp</h1>
            <p className="text-gray-500 mb-6">
              يمكنك من هنا إدارة جلسات WhatsApp الخاصة بالعملاء، وإنشاء جلسات جديدة، وإعادة تشغيل الجلسات الحالية.
            </p>
          </div>

          {/* قسم إنشاء جلسة جديدة */}
          <div className="px-4 lg:px-6 mb-6">
            <Button onClick={() => alert('سيتم تنفيذ هذه الميزة لاحقاً')}>
              إنشاء جلسة جديدة
            </Button>
          </div>

          {/* عرض الخطأ إذا وجد */}
          {error && (
            <div className="px-4 lg:px-6">
              <div className="bg-red-50 text-red-800 p-4 rounded-md mb-4">
                {error}
              </div>
            </div>
          )}

          {/* عرض تفاصيل الجلسة المحددة */}
          {selectedSession && (
            <div className="px-4 lg:px-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">تفاصيل الجلسة</h2>
                  <Button variant="outline" size="sm" onClick={handleCloseDetails}>
                    إغلاق
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>رقم الجوال:</strong> {selectedSession.mobileNumber}</p>
                    <p><strong>الحالة:</strong> <SessionStatusBadge status={selectedSession.status} /></p>
                    <p><strong>آخر نشاط:</strong> {selectedSession.lastActive ? new Date(selectedSession.lastActive).toLocaleString('ar-SA') : 'غير متوفر'}</p>
                    <p><strong>تاريخ الإنشاء:</strong> {new Date(selectedSession.createdAt).toLocaleString('ar-SA')}</p>
                    
                    {selectedSession.deviceInfo && (
                      <>
                        <p><strong>منصة الجهاز:</strong> {selectedSession.deviceInfo.platform || 'غير متوفر'}</p>
                        <p><strong>طراز الجهاز:</strong> {selectedSession.deviceInfo.deviceModel || 'غير متوفر'}</p>
                      </>
                    )}
                  </div>

                  <div className="flex justify-center items-start">
                    {selectedSession.status === "SCANNING_QR" && selectedSession.qrCode?.qrBase64Image && (
                      <QRCodeDisplay qrBase64Image={selectedSession.qrCode.qrBase64Image} />
                    )}
                  </div>
                </div>

                <div className="mt-6 flex space-x-2 rtl:space-x-reverse">
                  <Button 
                    onClick={() => handleRestartSession(selectedSession.id)}
                    disabled={actionLoading[selectedSession.id]}
                  >
                    {actionLoading[selectedSession.id] ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <RefreshCw className="h-4 w-4 mr-2" />
                    )}
                    إعادة تشغيل الجلسة
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleDeleteSession(selectedSession.id)}
                    disabled={actionLoading[selectedSession.id]}
                  >
                    {actionLoading[selectedSession.id] ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Trash2 className="h-4 w-4 mr-2" />
                    )}
                    حذف الجلسة
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* جدول الجلسات */}
          <div className="px-4 lg:px-6">
            <h2 className="text-xl font-semibold mb-4">جلسات WhatsApp</h2>
            {loading ? (
              <div className="text-center py-4">
                <Loader2 className="h-8 w-8 animate-spin mx-auto" />
                <p className="mt-2">جاري تحميل البيانات...</p>
              </div>
            ) : (
              <DataTable columns={columns} data={sessions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
