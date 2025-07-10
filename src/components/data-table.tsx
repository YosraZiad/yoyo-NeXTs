"use client"

// src/components/data-table.tsx
import {
  ColumnDef, // This is crucial for defining your columns with a generic type
  flexRender,
  getCoreRowModel,
  useReactTable,
  // ... other necessary imports for your table implementation
} from "@tanstack/react-table"; // Adjust this import based on your actual library

// Define the props interface to be generic over TData and TValue
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]; // The columns should also be generic
  data: TData[]; // Make data prop generic (TData[])
}

// Make the functional component itself generic
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Add other necessary table options here (e.g., pagination, sorting)
  });

  return (
    <div className="rounded-md border">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-500">
                لا يوجد بيانات.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}