"use client"

import { SessionStatus } from "@/types/session.d";
import { cn } from "@/lib/utils";

interface SessionStatusBadgeProps {
  status: SessionStatus;
  className?: string;
}

export function SessionStatusBadge({ status, className }: SessionStatusBadgeProps) {
  const getStatusDetails = (status: SessionStatus) => {
    switch (status) {
      case "CONNECTED":
        return { label: "متصل", className: "bg-green-100 text-green-800" };
      case "DISCONNECTED":
        return { label: "غير متصل", className: "bg-red-100 text-red-800" };
      case "CONNECTING":
        return { label: "جاري الاتصال", className: "bg-blue-100 text-blue-800" };
      case "SCANNING_QR":
        return { label: "انتظار مسح QR", className: "bg-yellow-100 text-yellow-800" };
      case "CONNECTION_LOST":
        return { label: "فقد الاتصال", className: "bg-orange-100 text-orange-800" };
      case "LOGGED_OUT":
        return { label: "تم تسجيل الخروج", className: "bg-gray-100 text-gray-800" };
      default:
        return { label: "غير معروف", className: "bg-gray-100 text-gray-800" };
    }
  };

  const { label, className: statusClassName } = getStatusDetails(status);
  
  return (
    <div className={cn("px-2 py-1 rounded-full text-center text-sm", statusClassName, className)}>
      {label}
    </div>
  );
}
