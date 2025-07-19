(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/lib/api.ts
// (هذا هو الكود الذي قدمته سابقًا، فقط للتأكيد على السياق)
__turbopack_context__.s({
    "apiService": ()=>apiService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class ApiService {
    buildUrl(endpoint, params) {
        // تأكد من أن baseUrl ينتهي بـ / وأن endpoint لا يبدأ بـ /
        let base = this.baseUrl;
        if (!base.endsWith("/")) {
            base = "".concat(base, "/");
        }
        let path = endpoint;
        if (path.startsWith("/")) {
            path = path.substring(1);
        }
        // بناء URL كامل
        const fullUrl = "".concat(base).concat(path);
        // إضافة معلمات الاستعلام إذا وجدت
        if (!params || Object.keys(params).length === 0) {
            return fullUrl;
        }
        // بناء سلسلة معلمات الاستعلام
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach((param)=>{
            let [key, value] = param;
            if (value !== undefined && value !== null) {
                queryParams.append(key, String(value));
            }
        });
        const queryString = queryParams.toString();
        if (queryString) {
            return "".concat(fullUrl, "?").concat(queryString);
        }
        return fullUrl;
    }
    // استخدام ApiResponse<T> الذي قمت بتعريفه
    async request(endpoint) {
        let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        // تم تحديث نوع الإرجاع هنا
        const { params, ...requestConfig } = config;
        const url = this.buildUrl(endpoint, params);
        // طباعة معلومات تشخيصية
        console.log("🔍 API Request to: ".concat(url));
        // تحسين رؤوس الطلب لتتضمن المزيد من المعلومات للتوثيق
        const defaultConfig = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer ".concat(this.apiKey),
                "X-Api-Key": this.apiKey,
                "X-Requested-With": "XMLHttpRequest",
                ...requestConfig.headers
            },
            ...requestConfig,
            // تعديل خيارات الطلب
            credentials: "same-origin",
            mode: "cors",
            cache: "no-cache"
        };
        try {
            console.log("📤 Request Headers:", defaultConfig.headers);
            console.log("📤 Request Method:", defaultConfig.method || "GET");
            const response = await fetch(url, defaultConfig);
            console.log("📥 Response Status:", response.status, response.statusText);
            if (!response.ok) {
                // محاولة تحليل رسالة الخطأ من الاستجابة
                let errorMessage = "HTTP Error ".concat(response.status, ": ").concat(response.statusText);
                let errorData = {};
                try {
                    // محاولة قراءة بيانات الخطأ كـ JSON
                    errorData = await response.json();
                    console.error("❌ API Error Response:", errorData);
                    if (typeof errorData === 'object' && errorData !== null) {
                        // استخدام الوصول إلى الكائن بطريقة آمنة من نوع البيانات
                        const message = 'message' in errorData ? String(errorData.message) : undefined;
                        const error = 'error' in errorData ? String(errorData.error) : undefined;
                        errorMessage = message || error || errorMessage;
                    }
                } catch (parseError) {
                    // إذا لم تكن الاستجابة بتنسيق JSON
                    console.error("❌ Failed to parse error response:", parseError);
                    try {
                        // محاولة قراءة الاستجابة كنص
                        const textResponse = await response.text();
                        console.error("❌ Error Response Text:", textResponse);
                    } catch (textError) {
                        console.error("❌ Failed to read error response as text:", textError);
                    }
                }
                return {
                    success: false,
                    error: errorMessage,
                    statusCode: response.status
                };
            }
            // محاولة تحليل الاستجابة الناجحة
            try {
                const data = await response.json();
                console.log("✅ API Response Success:", {
                    dataPreview: data ? typeof data : "null"
                });
                return {
                    success: true,
                    data
                };
            } catch (parseError) {
                console.error("❌ Failed to parse successful response:", parseError);
                return {
                    success: false,
                    error: "Failed to parse API response",
                    statusCode: 200
                };
            }
        } catch (error) {
            console.error("❌ API Request Failed:", error);
            return {
                success: false,
                error: error instanceof Error ? error.message : "Network request failed",
                statusCode: 0
            };
        }
    }
    // بيانات وهمية للعملاء لاستخدامها في حالة فشل الاتصال بـ API
    getMockCustomers() {
        return {
            items: [
                {
                    id: 1,
                    creationTime: new Date().toISOString(),
                    creatorId: "1",
                    lastModificationTime: new Date().toISOString(),
                    lastModifierId: "1",
                    isDeleted: false,
                    deleterId: "",
                    deletionTime: "",
                    fullName: "محمد أحمد",
                    companyName: "شركة الأفق",
                    mobileNumber: "0501234567",
                    masterMobileNumber: "0501234567"
                },
                {
                    id: 2,
                    creationTime: new Date().toISOString(),
                    creatorId: "1",
                    lastModificationTime: new Date().toISOString(),
                    lastModifierId: "1",
                    isDeleted: false,
                    deleterId: "",
                    deletionTime: "",
                    fullName: "سارة محمد",
                    companyName: "شركة النور",
                    mobileNumber: "0507654321",
                    masterMobileNumber: "0507654321"
                },
                {
                    id: 3,
                    creationTime: new Date().toISOString(),
                    creatorId: "1",
                    lastModificationTime: new Date().toISOString(),
                    lastModifierId: "1",
                    isDeleted: false,
                    deleterId: "",
                    deletionTime: "",
                    fullName: "خالد عبدالله",
                    companyName: "شركة المستقبل",
                    mobileNumber: "0509876543",
                    masterMobileNumber: "0509876543"
                }
            ],
            totalCount: 3
        };
    }
    // طرق العملاء
    // هنا نحدد أن getCustomers ستعيد Promise<ApiResponse<CustomerListResponse>>
    async getCustomers(params) {
        try {
            // استخدام رابط NeoSending API مباشرة
            console.log("جاري محاولة الاتصال بـ NeoSending API...");
            const neoSendingUrl = "api/neosending/Whatsapp/customer";
            const response = await fetch(neoSendingUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer ".concat(this.apiKey),
                    "X-Api-Key": this.apiKey
                }
            });
            if (response.ok) {
                const rawData = await response.json();
                console.log("تم الحصول على بيانات العملاء من NeoSending API", rawData);
                // تحويل البيانات من تنسيق NeoSending API إلى التنسيق المتوقع في التطبيق
                const formattedData = {
                    items: Array.isArray(rawData) ? rawData.map((customer, index)=>({
                            id: customer.id || index + 1,
                            creationTime: customer.creationTime || new Date().toISOString(),
                            creatorId: customer.creatorId || "",
                            lastModificationTime: customer.lastModificationTime || new Date().toISOString(),
                            lastModifierId: customer.lastModifierId || "",
                            isDeleted: customer.isDeleted || false,
                            deleterId: customer.deleterId || "",
                            deletionTime: customer.deletionTime || "",
                            fullName: customer.name || customer.fullName || "",
                            companyName: customer.company || customer.companyName || "",
                            mobileNumber: customer.phone || customer.mobileNumber || "",
                            masterMobileNumber: customer.masterMobileNumber || customer.phone || ""
                        })) : [],
                    totalCount: Array.isArray(rawData) ? rawData.length : 0
                };
                return {
                    success: true,
                    data: formattedData
                };
            } else {
                console.error("فشل في الاتصال بـ NeoSending API:", response.statusText);
                throw new Error("HTTP Error ".concat(response.status, ": ").concat(response.statusText));
            }
        } catch (error) {
            console.error("خطأ في جلب بيانات العملاء من NeoSending API:", error);
            // في حالة الخطأ، استخدم البيانات الوهمية
            console.log("استخدام البيانات الوهمية للعملاء بسبب خطأ");
            const mockData = this.getMockCustomers();
            return {
                success: true,
                data: mockData
            };
        }
    }
    // ... باقي الطرق (مثل getCustomer, createCustomer, إلخ) كما هي
    async getCustomer(id) {
        return this.request("/customers/".concat(id));
    }
    async createCustomer(customerData) {
        return this.request("/customers", {
            method: "POST",
            body: JSON.stringify(customerData)
        });
    }
    async updateCustomer(id, customerData) {
        return this.request("/customer/".concat(id), {
            method: "PUT",
            body: JSON.stringify(customerData)
        });
    }
    async getCustomerBalance(customerId) {
        return this.request("/customer/customer-balance", {
            params: {
                customerId
            }
        });
    }
    // طرق حسابات الجوال
    async getMobileAccounts(params) {
        return this.request("/mobile-account", {
            params
        });
    }
    async createMobileAccount(accountData) {
        return this.request("/mobile-account", {
            method: "POST",
            body: JSON.stringify(accountData)
        });
    }
    async updateMobileAccount(id, accountData) {
        return this.request("/mobile-account/".concat(id), {
            method: "PUT",
            body: JSON.stringify(accountData)
        });
    }
    async deleteMobileAccount(id) {
        return this.request("/mobile-account/".concat(id), {
            method: "DELETE"
        });
    }
    async restartSession(params) {
        return this.request("/mobile-account/restart-session", {
            params
        });
    }
    async deleteSession(params) {
        return this.request("/mobile-account/delete-session", {
            params
        });
    }
    // ===== وظائف جلسات WhatsApp الجديدة =====
    // الحصول على قائمة الجلسات
    async getSessions(params) {
        return this.request("/neosending/Whatsapp/sessions", {
            params
        });
    }
    // الحصول على جلسة محددة
    async getSession(sessionId) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId));
    }
    // إنشاء جلسة جديدة
    async createSession(data) {
        return this.request("/neosending/Whatsapp/sessions", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // تحديث جلسة
    async updateSession(sessionId, data) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId), {
            method: "PUT",
            body: JSON.stringify(data)
        });
    }
    // حذف جلسة
    async removeSession(sessionId) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId), {
            method: "DELETE"
        });
    }
    // إعادة تشغيل جلسة وإنشاء رمز QR جديد
    async generateQRCode(sessionId) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/qr"), {
            method: "POST"
        });
    }
    // الحصول على حالة جلسة
    async getSessionStatus(sessionId) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/status"));
    }
    // ===== وظائف رسائل WhatsApp =====
    // إرسال رسالة نصية
    async sendTextMessage(sessionId, data) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/messages/text"), {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // إرسال رسالة وسائط (صورة، فيديو، مستند، إلخ)
    async sendMediaMessage(sessionId, data) {
        return this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/messages/media"), {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // الحصول على قائمة الرسائل
    async getMessages(params) {
        return this.request("/neosending/Whatsapp/messages", {
            params
        });
    }
    // الحصول على حالة رسالة
    async getMessageStatus(messageId) {
        return this.request("/neosending/Whatsapp/messages/".concat(messageId, "/status"));
    }
    // طرق الاشتراكات
    async getSubscriptions(params) {
        return this.request("/customer-subscription", {
            params
        });
    }
    async createSubscription(subscriptionData) {
        return this.request("/customer-subscription", {
            method: "POST",
            body: JSON.stringify(subscriptionData)
        });
    }
    async updateSubscription(id, subscriptionData) {
        return this.request("/customer-subscription/".concat(id), {
            method: "PUT",
            body: JSON.stringify(subscriptionData)
        });
    }
    async deleteSubscription(id) {
        return this.request("/customer-subscription/".concat(id), {
            method: "DELETE"
        });
    }
    async getCurrentPackage(customerId) {
        return this.request("/customer-subscription/current-package", {
            params: {
                customerId
            }
        });
    }
    async searchCustomers(query) {
        return this.request("/customer-subscription/customer-lookup", {
            params: {
                query
            }
        });
    }
    async searchPackages(query) {
        return this.request("/customer-subscription/package-lookup", {
            params: {
                query
            }
        });
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "baseUrl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        this.baseUrl = ("TURBOPACK compile-time value", "https://neosending.com/api/cretechsoft/Whatsapp") || "";
        this.apiKey = ("TURBOPACK compile-time value", "test_key_123") || "";
    }
}
const apiService = new ApiService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/data-table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataTable": ()=>DataTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/data-table.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>"); // Adjust this import based on your actual library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DataTable(param) {
    let { columns, data } = param;
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
"[project]/src/components/qr-code-display.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "QRCodeDisplay": ()=>QRCodeDisplay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function QRCodeDisplay(param) {
    let { qrBase64Image, qrString, expiresAt, onExpired } = param;
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // حساب الوقت المتبقي لانتهاء صلاحية رمز QR
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QRCodeDisplay.useEffect": ()=>{
            if (!expiresAt) return;
            const calculateTimeLeft = {
                "QRCodeDisplay.useEffect.calculateTimeLeft": ()=>{
                    const expiryTime = new Date(expiresAt).getTime();
                    const now = new Date().getTime();
                    const difference = expiryTime - now;
                    if (difference <= 0) {
                        setTimeLeft(0);
                        if (onExpired) onExpired();
                        return;
                    }
                    setTimeLeft(Math.floor(difference / 1000));
                }
            }["QRCodeDisplay.useEffect.calculateTimeLeft"];
            calculateTimeLeft();
            const timer = setInterval(calculateTimeLeft, 1000);
            return ({
                "QRCodeDisplay.useEffect": ()=>clearInterval(timer)
            })["QRCodeDisplay.useEffect"];
        }
    }["QRCodeDisplay.useEffect"], [
        expiresAt,
        onExpired
    ]);
    // إذا لم يتم توفير صورة رمز QR أو سلسلة QR
    if (!qrBase64Image && !qrString) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center p-4 border rounded-md bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "رمز QR غير متوفر"
            }, void 0, false, {
                fileName: "[project]/src/components/qr-code-display.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/qr-code-display.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center p-4 border rounded-md",
        children: [
            qrBase64Image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-64 h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: qrBase64Image,
                    alt: "QR Code",
                    fill: true,
                    className: "object-contain",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/qr-code-display.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/qr-code-display.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 h-64 flex items-center justify-center bg-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "رمز QR متوفر كنص فقط"
                }, void 0, false, {
                    fileName: "[project]/src/components/qr-code-display.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/qr-code-display.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700 font-medium",
                        children: "امسح رمز QR باستخدام تطبيق WhatsApp على هاتفك"
                    }, void 0, false, {
                        fileName: "[project]/src/components/qr-code-display.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    timeLeft !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children: timeLeft > 0 ? "ينتهي في ".concat(Math.floor(timeLeft / 60), ":").concat((timeLeft % 60).toString().padStart(2, '0')) : 'انتهت صلاحية الرمز'
                    }, void 0, false, {
                        fileName: "[project]/src/components/qr-code-display.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/qr-code-display.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            qrString && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    className: "text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "cursor-pointer text-blue-600 hover:text-blue-800",
                            children: "عرض رمز QR كنص"
                        }, void 0, false, {
                            fileName: "[project]/src/components/qr-code-display.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 p-2 bg-gray-50 rounded-md break-all",
                            children: qrString
                        }, void 0, false, {
                            fileName: "[project]/src/components/qr-code-display.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/qr-code-display.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/qr-code-display.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/qr-code-display.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(QRCodeDisplay, "FOc75etvWWxLQuOXBaop/MjMUe8=");
_c = QRCodeDisplay;
var _c;
__turbopack_context__.k.register(_c, "QRCodeDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/session-status-badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SessionStatusBadge": ()=>SessionStatusBadge
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function SessionStatusBadge(param) {
    let { status, className } = param;
    const getStatusDetails = (status)=>{
        switch(status){
            case "CONNECTED":
                return {
                    label: "متصل",
                    className: "bg-green-100 text-green-800"
                };
            case "DISCONNECTED":
                return {
                    label: "غير متصل",
                    className: "bg-red-100 text-red-800"
                };
            case "CONNECTING":
                return {
                    label: "جاري الاتصال",
                    className: "bg-blue-100 text-blue-800"
                };
            case "SCANNING_QR":
                return {
                    label: "انتظار مسح QR",
                    className: "bg-yellow-100 text-yellow-800"
                };
            case "CONNECTION_LOST":
                return {
                    label: "فقد الاتصال",
                    className: "bg-orange-100 text-orange-800"
                };
            case "LOGGED_OUT":
                return {
                    label: "تم تسجيل الخروج",
                    className: "bg-gray-100 text-gray-800"
                };
            default:
                return {
                    label: "غير معروف",
                    className: "bg-gray-100 text-gray-800"
                };
        }
    };
    const { label, className: statusClassName } = getStatusDetails(status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1 rounded-full text-center text-sm", statusClassName, className),
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/session-status-badge.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = SessionStatusBadge;
var _c;
__turbopack_context__.k.register(_c, "SessionStatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/[locale]/sessions/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SessionsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$qr$2d$code$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/qr-code-display.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$session$2d$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/session-status-badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// بيانات وهمية للجلسات
const mockSessions = [
    {
        id: "1",
        customerId: 1,
        mobileNumber: "966500000001",
        status: "CONNECTED",
        lastActive: "2025-07-18T12:30:45Z",
        createdAt: "2025-07-10T08:15:30Z",
        updatedAt: "2025-07-18T12:30:45Z",
        deviceInfo: {
            platform: "Android",
            deviceModel: "Samsung Galaxy S21",
            osVersion: "Android 12",
            waVersion: "2.22.24.78"
        }
    },
    {
        id: "2",
        customerId: 2,
        mobileNumber: "966500000002",
        status: "DISCONNECTED",
        lastActive: "2025-07-17T15:45:12Z",
        createdAt: "2025-07-12T09:20:15Z",
        updatedAt: "2025-07-17T15:45:12Z"
    },
    {
        id: "3",
        customerId: 1,
        mobileNumber: "966500000003",
        status: "SCANNING_QR",
        qrCode: {
            qrString: "1@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            qrBase64Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        },
        createdAt: "2025-07-18T10:05:22Z",
        updatedAt: "2025-07-18T10:05:22Z"
    }
];
function SessionsPage() {
    var _selectedSession_qrCode;
    _s();
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSession, setSelectedSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // تعريف أعمدة جدول الجلسات
    const columns = [
        {
            accessorKey: "mobileNumber",
            header: "رقم الجوال"
        },
        {
            accessorKey: "status",
            header: "الحالة",
            cell: (param)=>{
                let { row } = param;
                const status = row.getValue("status");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$session$2d$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionStatusBadge"], {
                    status: status
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                    lineNumber: 73,
                    columnNumber: 16
                }, this);
            }
        },
        {
            accessorKey: "lastActive",
            header: "آخر نشاط",
            cell: (param)=>{
                let { row } = param;
                const lastActive = row.getValue("lastActive");
                return lastActive ? new Date(lastActive).toLocaleString('ar-SA') : 'غير متوفر';
            }
        },
        {
            id: "actions",
            header: "الإجراءات",
            cell: (param)=>{
                let { row } = param;
                const session = row.original;
                const isLoading = actionLoading[session.id] || false;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-2 rtl:space-x-reverse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>handleRestartSession(session.id),
                            disabled: isLoading,
                            children: [
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 75
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "إعادة تشغيل"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>handleDeleteSession(session.id),
                            disabled: isLoading,
                            children: [
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 75
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "حذف"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>handleViewSession(session),
                            children: "عرض"
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this);
            }
        }
    ];
    // جلب قائمة الجلسات
    const fetchSessions = async ()=>{
        try {
            setLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getSessions();
            if (response.success && response.data) {
                setSessions(response.data.sessions);
            } else {
                // استخدام البيانات الوهمية في حالة الخطأ
                console.log("استخدام البيانات الوهمية للجلسات");
                setSessions(mockSessions);
            }
        } catch (err) {
            console.error('خطأ في جلب بيانات الجلسات:', err);
            setError('حدث خطأ أثناء تحميل البيانات');
            // استخدام البيانات الوهمية في حالة الخطأ
            setSessions(mockSessions);
        } finally{
            setLoading(false);
        }
    };
    // إعادة تشغيل جلسة
    const handleRestartSession = async (sessionId)=>{
        try {
            setActionLoading((prev)=>({
                    ...prev,
                    [sessionId]: true
                }));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].generateQRCode(sessionId);
            if (response.success && response.data) {
                // تحديث الجلسة في القائمة
                setSessions((prev)=>prev.map((session)=>session.id === sessionId ? {
                            ...session,
                            status: "SCANNING_QR",
                            qrCode: response.data.qrCode
                        } : session));
                // عرض الجلسة المحددة
                const updatedSession = sessions.find((s)=>s.id === sessionId);
                if (updatedSession) {
                    setSelectedSession({
                        ...updatedSession,
                        status: "SCANNING_QR",
                        qrCode: response.data.qrCode
                    });
                }
            }
        } catch (err) {
            console.error('خطأ في إعادة تشغيل الجلسة:', err);
            setError('حدث خطأ أثناء إعادة تشغيل الجلسة');
        } finally{
            setActionLoading((prev)=>({
                    ...prev,
                    [sessionId]: false
                }));
        }
    };
    // حذف جلسة
    const handleDeleteSession = async (sessionId)=>{
        try {
            setActionLoading((prev)=>({
                    ...prev,
                    [sessionId]: true
                }));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].removeSession(sessionId);
            if (response.success) {
                // حذف الجلسة من القائمة
                setSessions((prev)=>prev.filter((session)=>session.id !== sessionId));
                // إغلاق تفاصيل الجلسة إذا كانت مفتوحة
                if ((selectedSession === null || selectedSession === void 0 ? void 0 : selectedSession.id) === sessionId) {
                    setSelectedSession(null);
                }
            }
        } catch (err) {
            console.error('خطأ في حذف الجلسة:', err);
            setError('حدث خطأ أثناء حذف الجلسة');
        } finally{
            setActionLoading((prev)=>({
                    ...prev,
                    [sessionId]: false
                }));
        }
    };
    // عرض تفاصيل الجلسة
    const handleViewSession = (session)=>{
        setSelectedSession(session);
    };
    // إغلاق تفاصيل الجلسة
    const handleCloseDetails = ()=>{
        setSelectedSession(null);
    };
    // جلب البيانات عند تحميل الصفحة
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionsPage.useEffect": ()=>{
            fetchSessions();
        }
    }["SessionsPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "@container/main flex flex-1 flex-col gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 py-4 md:gap-6 md:py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 lg:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-4",
                                children: "إدارة جلسات WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 mb-6",
                                children: "يمكنك من هنا إدارة جلسات WhatsApp الخاصة بالعملاء، وإنشاء جلسات جديدة، وإعادة تشغيل الجلسات الحالية."
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 lg:px-6 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>alert('سيتم تنفيذ هذه الميزة لاحقاً'),
                            children: "إنشاء جلسة جديدة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 lg:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 text-red-800 p-4 rounded-md mb-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                            lineNumber: 244,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                        lineNumber: 243,
                        columnNumber: 13
                    }, this),
                    selectedSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 lg:px-6 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold",
                                            children: "تفاصيل الجلسة"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleCloseDetails,
                                            children: "إغلاق"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "رقم الجوال:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        selectedSession.mobileNumber
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "الحالة:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$session$2d$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionStatusBadge"], {
                                                            status: selectedSession.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "آخر نشاط:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        selectedSession.lastActive ? new Date(selectedSession.lastActive).toLocaleString('ar-SA') : 'غير متوفر'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "تاريخ الإنشاء:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        new Date(selectedSession.createdAt).toLocaleString('ar-SA')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this),
                                                selectedSession.deviceInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "منصة الجهاز:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                selectedSession.deviceInfo.platform || 'غير متوفر'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "طراز الجهاز:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 28
                                                                }, this),
                                                                " ",
                                                                selectedSession.deviceInfo.deviceModel || 'غير متوفر'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center items-start",
                                            children: selectedSession.status === "SCANNING_QR" && ((_selectedSession_qrCode = selectedSession.qrCode) === null || _selectedSession_qrCode === void 0 ? void 0 : _selectedSession_qrCode.qrBase64Image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$qr$2d$code$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeDisplay"], {
                                                qrBase64Image: selectedSession.qrCode.qrBase64Image
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex space-x-2 rtl:space-x-reverse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>handleRestartSession(selectedSession.id),
                                            disabled: actionLoading[selectedSession.id],
                                            children: [
                                                actionLoading[selectedSession.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 23
                                                }, this),
                                                "إعادة تشغيل الجلسة"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "destructive",
                                            onClick: ()=>handleDeleteSession(selectedSession.id),
                                            disabled: actionLoading[selectedSession.id],
                                            children: [
                                                actionLoading[selectedSession.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 animate-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, this),
                                                "حذف الجلسة"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                            lineNumber: 253,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 lg:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "جلسات WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-8 w-8 animate-spin mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2",
                                        children: "جاري تحميل البيانات..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                columns: columns,
                                data: sessions
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/sessions/page.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/sessions/page.tsx",
            lineNumber: 225,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/sessions/page.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s(SessionsPage, "WD+E7ypKN2ND7iPhEV3ol2KkrYk=");
_c = SessionsPage;
var _c;
__turbopack_context__.k.register(_c, "SessionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_5ff1e06f._.js.map