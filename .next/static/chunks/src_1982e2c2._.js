(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/data-table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataTable": (()=>DataTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/data-table.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>"); // Adjust this import based on your actual library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DataTable({ columns, data }) {
    _s();
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "min-w-full divide-y divide-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50",
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: headerGroup.headers.map((header)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    colSpan: header.colSpan,
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: table.getRowModel().rows.length ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                }, cell.id, false, {
                                    fileName: "[project]/src/components/data-table.tsx",
                                    lineNumber: 60,
                                    columnNumber: 19
                                }, this))
                        }, row.id, false, {
                            fileName: "[project]/src/components/data-table.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_s(DataTable, "+qfJc9U8evODZQ8bBg9G2KVouAc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/lib/api.ts
// (هذا هو الكود الذي قدمته سابقًا، فقط للتأكيد على السياق)
__turbopack_context__.s({
    "apiService": (()=>apiService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class ApiService {
    baseUrl;
    apiKey;
    constructor(){
        this.baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || '';
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
        const defaultConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'Authorization': `Bearer ${this.apiKey}`,
                ...requestConfig.headers
            },
            ...requestConfig
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
        return this.request('/api/cretechsoft/Whatsapp/customer', {
            params
        });
    }
    // ... باقي الطرق (مثل getCustomer, createCustomer, إلخ) كما هي
    async getCustomer(id) {
        return this.request(`/api/cretechsoft/Whatsapp/customer/${id}`);
    }
    async createCustomer(customerData) {
        return this.request('/api/cretechsoft/Whatsapp/customer', {
            method: 'POST',
            body: JSON.stringify(customerData)
        });
    }
    async updateCustomer(id, customerData) {
        return this.request(`/api/cretechsoft/Whatsapp/customer/${id}`, {
            method: 'PUT',
            body: JSON.stringify(customerData)
        });
    }
    async getCustomerBalance(customerId) {
        return this.request('/api/cretechsoft/Whatsapp/customer/customer-balance', {
            params: {
                customerId
            }
        });
    }
    // طرق حسابات الجوال
    async getMobileAccounts(params) {
        return this.request('/api/cretechsoft/Whatsapp/mobile-account', {
            params
        });
    }
    async createMobileAccount(accountData) {
        return this.request('/api/cretechsoft/Whatsapp/mobile-account', {
            method: 'POST',
            body: JSON.stringify(accountData)
        });
    }
    async updateMobileAccount(id, accountData) {
        return this.request(`/api/cretechsoft/Whatsapp/mobile-account/${id}`, {
            method: 'PUT',
            body: JSON.stringify(accountData)
        });
    }
    async deleteMobileAccount(id) {
        return this.request(`/api/cretechsoft/Whatsapp/mobile-account/${id}`, {
            method: 'DELETE'
        });
    }
    async restartSession(params) {
        return this.request('/api/cretechsoft/Whatsapp/mobile-account/restart-session', {
            params
        });
    }
    async deleteSession(params) {
        return this.request('/api/cretechsoft/Whatsapp/mobile-account/delete-session', {
            params
        });
    }
    // طرق الاشتراكات
    async getSubscriptions(params) {
        return this.request('/api/cretechsoft/Whatsapp/customer-subscription', {
            params
        });
    }
    async createSubscription(subscriptionData) {
        return this.request('/api/cretechsoft/Whatsapp/customer-subscription', {
            method: 'POST',
            body: JSON.stringify(subscriptionData)
        });
    }
    async updateSubscription(id, subscriptionData) {
        return this.request(`/api/cretechsoft/Whatsapp/customer-subscription/${id}`, {
            method: 'PUT',
            body: JSON.stringify(subscriptionData)
        });
    }
    async deleteSubscription(id) {
        return this.request(`/api/cretechsoft/Whatsapp/customer-subscription/${id}`, {
            method: 'DELETE'
        });
    }
    async getCurrentPackage(customerId) {
        return this.request('/api/cretechsoft/Whatsapp/customer-subscription/current-package', {
            params: {
                customerId
            }
        });
    }
    async searchCustomers(query) {
        return this.request('/api/cretechsoft/Whatsapp/customer-subscription/customer-lookup', {
            params: {
                query
            }
        });
    }
    async searchPackages(query) {
        return this.request('/api/cretechsoft/Whatsapp/customer-subscription/package-lookup', {
            params: {
                query
            }
        });
    }
}
const apiService = new ApiService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/hooks/useApi.ts
__turbopack_context__.s({
    "useApi": (()=>useApi),
    "useCustomers": (()=>useCustomers),
    "useMobileAccounts": (()=>useMobileAccounts),
    "useSubscriptions": (()=>useSubscriptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
function useApi(apiCall, dependencies = []) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        data: null,
        loading: true,
        error: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApi.useEffect": ()=>{
            let isMounted = true;
            const fetchData = {
                "useApi.useEffect.fetchData": async ()=>{
                    try {
                        setState({
                            "useApi.useEffect.fetchData": (prev)=>({
                                    ...prev,
                                    loading: true,
                                    error: null
                                })
                        }["useApi.useEffect.fetchData"]);
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
                }
            }["useApi.useEffect.fetchData"];
            fetchData();
            return ({
                "useApi.useEffect": ()=>{
                    isMounted = false;
                }
            })["useApi.useEffect"];
        }
    }["useApi.useEffect"], dependencies);
    return state;
}
_s(useApi, "NZ+toRJcZRP0euW4ezbnWC9kE0A=");
function useCustomers() {
    _s1();
    // هنا نحدد أن useApi ستعود ببيانات من نوع CustomerListResponse
    return useApi({
        "useCustomers.useApi": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getCustomers()
    }["useCustomers.useApi"]);
}
_s1(useCustomers, "YdXwqDVp/2jyPTcf46wQe16nqmk=", false, function() {
    return [
        useApi
    ];
});
function useMobileAccounts(customerId) {
    _s2();
    return useApi({
        "useMobileAccounts.useApi": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getMobileAccounts(customerId ? {
                customerId
            } : undefined)
    }["useMobileAccounts.useApi"], [
        customerId
    ]);
}
_s2(useMobileAccounts, "YdXwqDVp/2jyPTcf46wQe16nqmk=", false, function() {
    return [
        useApi
    ];
});
function useSubscriptions(customerId) {
    _s3();
    return useApi({
        "useSubscriptions.useApi": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getSubscriptions(customerId ? {
                customerId
            } : undefined)
    }["useSubscriptions.useApi"], [
        customerId
    ]);
}
_s3(useSubscriptions, "YdXwqDVp/2jyPTcf46wQe16nqmk=", false, function() {
    return [
        useApi
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/[locale]/customers/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/data-table.tsx [app-client] (ecmascript)");
// import { SectionCards } from "@/components/section-cards";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Page() {
    _s();
    // FIXED: Removed the type argument from useCustomers()
    const { data: customerData, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "@container/main flex flex-1 flex-col gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 py-4 md:gap-6 md:py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 lg:px-6",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-600",
                            children: "جاري تحميل بيانات العملاء..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                            columns: customerColumns,
                            data: customers
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this),
                        !loading && !error && customers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Page, "nru/kZgaPwq38y2w1aQMRBDWhoY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1982e2c2._.js.map