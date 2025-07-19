"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface QRCodeDisplayProps {
  qrBase64Image?: string;
  qrString?: string;
  expiresAt?: string;
  onExpired?: () => void;
}

export function QRCodeDisplay({ qrBase64Image, qrString, expiresAt, onExpired }: QRCodeDisplayProps) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  
  // حساب الوقت المتبقي لانتهاء صلاحية رمز QR
  useEffect(() => {
    if (!expiresAt) return;
    
    const calculateTimeLeft = () => {
      const expiryTime = new Date(expiresAt).getTime();
      const now = new Date().getTime();
      const difference = expiryTime - now;
      
      if (difference <= 0) {
        setTimeLeft(0);
        if (onExpired) onExpired();
        return;
      }
      
      setTimeLeft(Math.floor(difference / 1000));
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [expiresAt, onExpired]);
  
  // إذا لم يتم توفير صورة رمز QR أو سلسلة QR
  if (!qrBase64Image && !qrString) {
    return (
      <div className="flex flex-col items-center p-4 border rounded-md bg-gray-50">
        <p className="text-gray-500">رمز QR غير متوفر</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center p-4 border rounded-md">
      {qrBase64Image ? (
        <div className="relative w-64 h-64">
          <Image
            src={qrBase64Image}
            alt="QR Code"
            fill
            className="object-contain"
            priority
          />
        </div>
      ) : (
        <div className="w-64 h-64 flex items-center justify-center bg-gray-100">
          <p className="text-sm text-gray-500">رمز QR متوفر كنص فقط</p>
        </div>
      )}
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700 font-medium">امسح رمز QR باستخدام تطبيق WhatsApp على هاتفك</p>
        
        {timeLeft !== null && (
          <p className="text-xs text-gray-500 mt-1">
            {timeLeft > 0 
              ? `ينتهي في ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`
              : 'انتهت صلاحية الرمز'}
          </p>
        )}
      </div>
      
      {qrString && (
        <div className="mt-2 w-full">
          <details className="text-xs">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">عرض رمز QR كنص</summary>
            <p className="mt-1 p-2 bg-gray-50 rounded-md break-all">{qrString}</p>
          </details>
        </div>
      )}
    </div>
  );
}
