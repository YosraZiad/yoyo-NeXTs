"use client";

import { DataTable } from "@/components/data-table";
// import { SectionCards } from "@/components/section-cards";
import { useCustomers } from "@/hooks/useApi";
import type { Customer, CustomerListResponse } from "@/types/customer.d.ts"; // Already correctly using `import type`

import { ColumnDef } from "@tanstack/react-table"; // Ensure this import is present

export default function Page() {
  // FIXED: Removed the type argument from useCustomers()
  const { data: customerData, loading, error } = useCustomers();

  // Ensure 'customers' is an array of 'Customer' objects
  const customers: Customer[] = customerData?.items || [];

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
            {loading && <div className="text-center text-gray-600">جاري تحميل بيانات العملاء...</div>}
            {error && <div className="text-red-500 text-center">حدث خطأ: {error}</div>}

            {!loading && !error && customers.length > 0 && (
              // FIXED: DataTable now correctly accepts Customer[] due to being generic
              <DataTable columns={customerColumns} data={customers} />
            )}

            {!loading && !error && customers.length === 0 && (
              <div className="text-center text-gray-600">لا يوجد عملاء لعرضهم.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}