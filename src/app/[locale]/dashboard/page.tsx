"use client"

import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

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
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}