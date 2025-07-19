(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__5491a9ac._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/messages/ar.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"LanguageSwitcher\":{\"language\":\"اللغة\",\"english\":\"الإنجليزية\",\"arabic\":\"العربية\"},\"user\":{\"name\":\"محمد أحمد\"},\"navMain\":{\"dashboard\":\"لوحة التحكم\",\"customers\":\"العملاء\",\"subscriptions\":\"الاشتراكات\",\"mobile-accounts\":\"حسابات الموبايل\"},\"navSecondary\":{\"settings\":\"الإعدادات\",\"getHelp\":\"المساعدة\",\"search\":\"بحث\"},\"companyName\":\"شركتنا\"}"));}),
"[project]/messages/en.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"LanguageSwitcher\":{\"language\":\"Language\",\"english\":\"English\",\"arabic\":\"Arabic\"},\"user\":{\"name\":\"Mohamed Ahmed\"},\"Dashboard\":{},\"navMain\":{\"dashboard\":\"Dashboard\",\"customers\":\"Customers\",\"subscriptions\":\"Subscriptions\",\"mobile-accounts\":\"Mobile Accounts\"},\"navSecondary\":{\"settings\":\"Settings\",\"getHelp\":\"Help\",\"search\":\"Search\"},\"companyName\":\"Our Company\"}"));}),
"[project]/src/i18n.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/i18n.ts
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "defaultLocale": ()=>defaultLocale,
    "locales": ()=>locales
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [middleware-edge] (ecmascript) <export default as getRequestConfig>");
;
const locales = [
    'en',
    'ar'
];
const defaultLocale = 'en';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ locale })=>{
    // التأكد من أن locale ليس undefined
    const localeToUse = locale || defaultLocale;
    return {
        locale: localeToUse,
        messages: (await __turbopack_context__.f({
            "../messages/ar.json": {
                id: ()=>"[project]/messages/ar.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/messages/ar.json (json)"))
            },
            "../messages/en.json": {
                id: ()=>"[project]/messages/en.json (json)",
                module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/messages/en.json (json)"))
            }
        }).import(`../messages/${localeToUse}.json`)).default
    };
});
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "config": ()=>config,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    // قائمة اللغات المدعومة
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"],
    // اللغة الافتراضية
    defaultLocale: 'ar',
    // لا تستخدم كوكيز لتخزين اللغة المفضلة
    localePrefix: 'as-needed',
    // استخدم مسار اللغة في عنوان URL
    localeDetection: true
});
const config = {
    // مطابقة جميع المسارات التي لا تبدأ بـ api أو _next أو _vercel أو public
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5491a9ac._.js.map