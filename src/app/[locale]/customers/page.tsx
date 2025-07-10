"use client";

import { DataTable } from "@/components/data-table";
// import { SectionCards } from "@/components/section-cards";
import { useCustomers } from "@/hooks/useApi";
import type { Customer, CustomerListResponse } from "@/types/customer.d.ts"; // Already correctly using `import type`
import { apiService } from "@/lib/api";
import { useState, useEffect } from "react";

import { ColumnDef } from "@tanstack/react-table"; // Ensure this import is present

export default function Page() {
  // استخدام useState و useEffect بدلاً من hook مخصص للمزيد من التحكم
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  // استخدام useEffect لجلب البيانات عند تحميل الصفحة
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // استدعاء API مباشرة
        const response = await apiService.getCustomers();
        
        if (response.success && response.data) {
          setCustomers(response.data.items || []);
          setTotalCount(response.data.totalCount || 0);
        } else {
          setError(response.message || "فشل في جلب بيانات العملاء");
          setCustomers([]);
        }
      } catch (err) {
        console.error("خطأ في جلب بيانات العملاء:", err);
        setError(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Define columns using ColumnDef<Customer> for type safety
  const customerColumns: ColumnDef<Customer>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "fullName",
      header: "الاسم الكامل",
    },
    {
      accessorKey: "companyName",
      header: "اسم الشركة",
    },
    {
      accessorKey: "mobileNumber",
      header: "رقم الجوال",
    },
    {
      accessorKey: "masterMobileNumber",
      header: "رقم الجوال الرئيسي",
    },
    {
      accessorKey: "creationTime",
      header: "تاريخ الإنشاء",
      cell: ({ row }) => {
        return new Date(row.original.creationTime).toLocaleDateString();
      },
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* <SectionCards /> */}

          <div className="px-4 lg:px-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">قائمة العملاء</h1>
              {totalCount > 0 && <p className="text-gray-600">إجمالي العملاء: {totalCount}</p>}
            </div>
            
            {loading && (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                <span className="mr-3 text-gray-600">جاري تحميل بيانات العملاء...</span>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4">
                <strong className="font-bold">خطأ! </strong>
                <span className="block sm:inline">{error}</span>
                <button 
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm"
                  onClick={() => window.location.reload()}
                >
                  إعادة المحاولة
                </button>
              </div>
            )}

            {!loading && !error && customers.length > 0 && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <DataTable columns={customerColumns} data={customers} />
              </div>
            )}

            {!loading && !error && customers.length === 0 && (
              <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">لا يوجد عملاء</h3>
                <p className="mt-1 text-sm text-gray-500">لم يتم العثور على أي عملاء في النظام.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}