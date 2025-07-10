"use client"

import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { apiService } from "@/lib/api";
import { useEffect, useState } from "react";

// تعريف نوع البيانات
type Customer = {
  id: string;
  name: string;
  email: string;
  status: "نشط" | "غير نشط" | "معلق";
  lastActive: string;
  subscription: string;
};

// إنشاء بيانات وهمية للجدول
const data: Customer[] = [
  {
    id: "1",
    name: "أحمد محمد",
    email: "ahmed@example.com",
    status: "نشط",
    lastActive: "2025-07-09",
    subscription: "الباقة الذهبية"
  },
  {
    id: "2",
    name: "سارة علي",
    email: "sara@example.com",
    status: "نشط",
    lastActive: "2025-07-08",
    subscription: "الباقة الفضية"
  },
  {
    id: "3",
    name: "محمد خالد",
    email: "mohamed@example.com",
    status: "معلق",
    lastActive: "2025-06-30",
    subscription: "الباقة البرونزية"
  },
  {
    id: "4",
    name: "فاطمة أحمد",
    email: "fatima@example.com",
    status: "غير نشط",
    lastActive: "2025-06-15",
    subscription: "الباقة الذهبية"
  },
  {
    id: "5",
    name: "خالد عمر",
    email: "khaled@example.com",
    status: "نشط",
    lastActive: "2025-07-10",
    subscription: "الباقة الفضية"
  }
];

// تعريف أعمدة الجدول
const columns: ColumnDef<Customer, any>[] = [
  {
    accessorKey: "name",
    header: "الاسم"
  },
  {
    accessorKey: "email",
    header: "البريد الإلكتروني"
  },
  {
    accessorKey: "status",
    header: "الحالة",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className={`px-2 py-1 rounded-full text-center text-sm ${status === "نشط" ? "bg-green-100 text-green-800" : status === "معلق" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
          {status}
        </div>
      );
    }
  },
  {
    accessorKey: "lastActive",
    header: "آخر نشاط"
  },
  {
    accessorKey: "subscription",
    header: "نوع الاشتراك"
  }
];

export default function Page() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await apiService.getCustomers({ page: 1, limit: 10 });
        
        // تحويل البيانات من API إلى التنسيق المطلوب للجدول
        if (response.data && Array.isArray(response.data)) {
          const formattedCustomers = response.data.map(customer => {
            // تحويل حالة العميل إلى الصيغة المناسبة للنوع المحدد
            let status: "نشط" | "غير نشط" | "معلق" = "غير نشط";
            if (customer.status === 'active') status = "نشط";
            else if (customer.status === 'pending') status = "معلق";
            
            return {
              id: customer.id?.toString() || '',
              name: customer.name || '',
              email: customer.email || '',
              status: status,
              lastActive: customer.lastActive || new Date().toISOString().split('T')[0],
              subscription: customer.subscription?.name || 'غير محدد'
            };
          });
          setCustomers(formattedCustomers);
        } else {
          // إذا لم يكن هناك بيانات، استخدم البيانات الوهمية
          setCustomers(data);
        }
      } catch (err) {
        console.error('خطأ في جلب بيانات العملاء:', err);
        setError('حدث خطأ أثناء تحميل البيانات');
        // استخدم البيانات الوهمية في حالة الخطأ
        setCustomers(data);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h1 className="text-3xl font-bold mb-4">لوحة التحكم</h1>
          </div>
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <div className="px-4 lg:px-6">
            <h2 className="text-xl font-semibold mb-4">العملاء النشطين</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {loading ? (
              <div className="text-center py-4">جاري تحميل البيانات...</div>
            ) : (
              <DataTable columns={columns} data={customers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}