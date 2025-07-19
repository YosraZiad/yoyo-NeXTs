import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n';

export default createMiddleware({
  // قائمة اللغات المدعومة
  locales: locales,
  // اللغة الافتراضية
  defaultLocale: 'ar',
  // لا تستخدم كوكيز لتخزين اللغة المفضلة
  localePrefix: 'as-needed',
  // استخدم مسار اللغة في عنوان URL
  localeDetection: true
});

export const config = {
  // مطابقة جميع المسارات التي لا تبدأ بـ api أو _next أو _vercel أو public
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
