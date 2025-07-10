module.exports = {

"[project]/src/components/data-table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataTable": (()=>DataTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/data-table.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-ssr] (ecmascript) <locals>"); // Adjust this import based on your actual library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function DataTable({ columns, data }) {
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoreRowModel"])()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full divide-y divide-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50",
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: headerGroup.headers.map((header)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    colSpan: header.colSpan,
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                }, header.id, false, {
                                    fileName: "[project]/src/components/data-table.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this);
                            })
                        }, headerGroup.id, false, {
                            fileName: "[project]/src/components/data-table.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/data-table.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                }, cell.id, false, {
                                    fileName: "[project]/src/components/data-table.tsx",
                                    lineNumber: 60,
                                    columnNumber: 19
                                }, this))
                        }, row.id, false, {
                            fileName: "[project]/src/components/data-table.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columns.length,
                            className: "px-6 py-4 text-center text-gray-500",
                            children: "لا يوجد بيانات."
                        }, void 0, false, {
                            fileName: "[project]/src/components/data-table.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/data-table.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/data-table.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/data-table.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/data-table.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/api.ts
// (هذا هو الكود الذي قدمته سابقًا، فقط للتأكيد على السياق)
__turbopack_context__.s({
    "apiService": (()=>apiService)
});
class ApiService {
    baseUrl;
    apiKey;
    constructor(){
        this.baseUrl = ("TURBOPACK compile-time value", "https://neosending.com/api") || '';
        this.apiKey = ("TURBOPACK compile-time value", "test_key_123") || '';
    }
    buildUrl(endpoint, params) {
        const url = new URL(endpoint, this.baseUrl);
        if (params) {
            Object.entries(params).forEach(([key, value])=>{
                url.searchParams.append(key, String(value));
            });
        }
        return url.toString();
    }
    // استخدام ApiResponse<T> الذي قمت بتعريفه
    async request(endpoint, config = {}) {
        const { params, ...requestConfig } = config;
        const url = this.buildUrl(endpoint, params);
        // تحسين رؤوس الطلب لتتضمن المزيد من المعلومات للتوثيق
        const defaultConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`,
                'X-Api-Key': this.apiKey,
                'X-Requested-With': 'XMLHttpRequest',
                ...requestConfig.headers
            },
            ...requestConfig,
            // إضافة خيارات إضافية للطلب
            credentials: 'include',
            mode: 'cors'
        };
        try {
            const response = await fetch(url, defaultConfig);
            if (!response.ok) {
                // إذا كان الـ API يرجع كائن خطأ، يمكنك محاولة تحليله هنا
                const errorData = await response.json().catch(()=>({}));
                throw new Error(errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API Request Error:', error);
            throw error;
        }
    }
    // طرق العملاء
    // هنا نحدد أن getCustomers ستعيد Promise<ApiResponse<CustomerListResponse>>
    async getCustomers(params) {
        // تحديث المسار ليتوافق مع هيكل API الصحيح
        return this.request('/customer', {
            params
        });
    }
    // ... باقي الطرق (مثل getCustomer, createCustomer, إلخ) كما هي
    async getCustomer(id) {
        return this.request(`/customer/${id}`);
    }
    async createCustomer(customerData) {
        return this.request('/customer', {
            method: 'POST',
            body: JSON.stringify(customerData)
        });
    }
    async updateCustomer(id, customerData) {
        return this.request(`/customer/${id}`, {
            method: 'PUT',
            body: JSON.stringify(customerData)
        });
    }
    async getCustomerBalance(customerId) {
        return this.request('/customer/customer-balance', {
            params: {
                customerId
            }
        });
    }
    // طرق حسابات الجوال
    async getMobileAccounts(params) {
        return this.request('/mobile-account', {
            params
        });
    }
    async createMobileAccount(accountData) {
        return this.request('/mobile-account', {
            method: 'POST',
            body: JSON.stringify(accountData)
        });
    }
    async updateMobileAccount(id, accountData) {
        return this.request(`/mobile-account/${id}`, {
            method: 'PUT',
            body: JSON.stringify(accountData)
        });
    }
    async deleteMobileAccount(id) {
        return this.request(`/mobile-account/${id}`, {
            method: 'DELETE'
        });
    }
    async restartSession(params) {
        return this.request('/mobile-account/restart-session', {
            params
        });
    }
    async deleteSession(params) {
        return this.request('/mobile-account/delete-session', {
            params
        });
    }
    // طرق الاشتراكات
    async getSubscriptions(params) {
        return this.request('/customer-subscription', {
            params
        });
    }
    async createSubscription(subscriptionData) {
        return this.request('/customer-subscription', {
            method: 'POST',
            body: JSON.stringify(subscriptionData)
        });
    }
    async updateSubscription(id, subscriptionData) {
        return this.request(`/customer-subscription/${id}`, {
            method: 'PUT',
            body: JSON.stringify(subscriptionData)
        });
    }
    async deleteSubscription(id) {
        return this.request(`/customer-subscription/${id}`, {
            method: 'DELETE'
        });
    }
    async getCurrentPackage(customerId) {
        return this.request('/customer-subscription/current-package', {
            params: {
                customerId
            }
        });
    }
    async searchCustomers(query) {
        return this.request('/customer-subscription/customer-lookup', {
            params: {
                query
            }
        });
    }
    async searchPackages(query) {
        return this.request('/customer-subscription/package-lookup', {
            params: {
                query
            }
        });
    }
}
const apiService = new ApiService();
}}),
"[project]/src/hooks/useApi.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/hooks/useApi.ts
__turbopack_context__.s({
    "useApi": (()=>useApi),
    "useCustomers": (()=>useCustomers),
    "useMobileAccounts": (()=>useMobileAccounts),
    "useSubscriptions": (()=>useSubscriptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-ssr] (ecmascript)");
;
;
function useApi(apiCall, dependencies = []) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        data: null,
        loading: true,
        error: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const fetchData = async ()=>{
            try {
                setState((prev)=>({
                        ...prev,
                        loading: true,
                        error: null
                    }));
                const response = await apiCall(); // response هو الآن من نوع ApiResponse<T>
                if (isMounted) {
                    // نستخدم response.data لأن ApiResponse الخاص بك يحتوي على خاصية data
                    setState({
                        data: response.data || null,
                        loading: false,
                        error: null
                    });
                }
            } catch (error) {
                if (isMounted) {
                    setState({
                        data: null,
                        loading: false,
                        error: error instanceof Error ? error.message : 'حدث خطأ غير متوقع'
                    });
                }
            }
        };
        fetchData();
        return ()=>{
            isMounted = false;
        };
    }, dependencies);
    return state;
}
function useCustomers() {
    // هنا نحدد أن useApi ستعود ببيانات من نوع CustomerListResponse
    return useApi(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getCustomers());
}
function useMobileAccounts(customerId) {
    return useApi(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getMobileAccounts(customerId ? {
            customerId
        } : undefined), [
        customerId
    ]);
}
function useSubscriptions(customerId) {
    return useApi(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiService"].getSubscriptions(customerId ? {
            customerId
        } : undefined), [
        customerId
    ]);
}
}}),
"[project]/src/app/[locale]/customers/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/data-table.tsx [app-ssr] (ecmascript)");
// import { SectionCards } from "@/components/section-cards";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    // FIXED: Removed the type argument from useCustomers()
    const { data: customerData, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCustomers"])();
    // Ensure 'customers' is an array of 'Customer' objects
    const customers = customerData?.items || [];
    // Define columns using ColumnDef<Customer> for type safety
    const customerColumns = [
        {
            accessorKey: "id",
            header: "ID"
        },
        {
            accessorKey: "fullName",
            header: "الاسم الكامل"
        },
        {
            accessorKey: "companyName",
            header: "اسم الشركة"
        },
        {
            accessorKey: "mobileNumber",
            header: "رقم الجوال"
        },
        {
            accessorKey: "masterMobileNumber",
            header: "رقم الجوال الرئيسي"
        },
        {
            accessorKey: "creationTime",
            header: "تاريخ الإنشاء",
            cell: ({ row })=>{
                return new Date(row.original.creationTime).toLocaleDateString();
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "@container/main flex flex-1 flex-col gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 py-4 md:gap-6 md:py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 lg:px-6",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-600",
                            children: "جاري تحميل بيانات العملاء..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-red-500 text-center",
                            children: [
                                "حدث خطأ: ",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 56,
                            columnNumber: 23
                        }, this),
                        !loading && !error && customers.length > 0 && // FIXED: DataTable now correctly accepts Customer[] due to being generic
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                            columns: customerColumns,
                            data: customers
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this),
                        !loading && !error && customers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-600",
                            children: "لا يوجد عملاء لعرضهم."
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/customers/page.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/customers/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/customers/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_e0eb1f91._.js.map