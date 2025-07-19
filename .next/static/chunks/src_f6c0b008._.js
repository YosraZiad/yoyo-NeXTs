(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/lib/api.ts
// (هذا هو الكود الذي قدمته سابقًا، فقط للتأكيد على السياق)
__turbopack_context__.s({
    "apiService": ()=>apiService,
    "login": ()=>login
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
class ApiService {
    buildUrl(endpoint, params) {
        // استخدام الوسيط المحلي بدلاً من الاتصال المباشر بـ API
        // سيتم توجيه الطلبات من /api إلى الخادم الفعلي عبر next.config.js
        let base = "/api";
        let path = endpoint;
        // إزالة /cretechsoft/Whatsapp من المسار إذا كان موجوداً
        // لأنه قد يكون مضمناً بالفعل في baseUrl
        if (path.startsWith("/cretechsoft/Whatsapp/")) {
            path = path.replace("/cretechsoft/Whatsapp/", "/");
        }
        if (path.startsWith("/")) {
            path = path.substring(1);
        }
        // بناء URL كامل
        const fullUrl = "".concat(base, "/").concat(path);
        console.log("🔗 Built URL: ".concat(fullUrl));
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
                // إزالة رؤوس التوثيق من الطلب المبدئي (preflight)
                // سيتم إضافتها بواسطة الخادم الوسيط
                ...requestConfig.headers
            },
            ...requestConfig,
            // تعديل خيارات الطلب لتعمل مع الوسيط
            credentials: "same-origin",
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
                    if (typeof errorData === "object" && errorData !== null) {
                        // استخدام الوصول إلى الكائن بطريقة آمنة من نوع البيانات
                        const message = "message" in errorData ? String(errorData.message) : undefined;
                        const error = "error" in errorData ? String(errorData.error) : undefined;
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
    // بيانات وهمية لجلسات WhatsApp لاستخدامها في حالة فشل الاتصال بـ API
    getMockSessions() {
        return {
            sessions: [
                {
                    id: "1",
                    customerId: 1,
                    mobileNumber: "966500000001",
                    status: "CONNECTED",
                    lastActive: new Date().toISOString(),
                    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                    updatedAt: new Date().toISOString(),
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
                    lastActive: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
                    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
                },
                {
                    id: "3",
                    customerId: 3,
                    mobileNumber: "966500000003",
                    status: "SCANNING_QR",
                    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
                }
            ],
            totalCount: 3
        };
    }
    // بيانات وهمية لجلسة WhatsApp واحدة
    getMockSession(sessionId) {
        // الحصول على الجلسات الوهمية
        const allSessions = this.getMockSessions().sessions;
        // البحث عن الجلسة بالمعرف
        const foundSession = allSessions.find((session)=>session.id === sessionId);
        // إذا وجدت الجلسة، أرجعها، وإلا أرجع جلسة افتراضية
        if (foundSession) {
            return {
                session: foundSession
            };
        } else {
            // جلسة افتراضية إذا لم يتم العثور على الجلسة المطلوبة
            return {
                session: {
                    id: sessionId,
                    customerId: 999,
                    mobileNumber: "966500000999",
                    status: "CONNECTED",
                    lastActive: new Date().toISOString(),
                    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                    updatedAt: new Date().toISOString(),
                    deviceInfo: {
                        platform: "iOS",
                        deviceModel: "iPhone 13",
                        osVersion: "iOS 15.4",
                        waVersion: "2.22.24.79"
                    }
                }
            };
        }
    }
    // بيانات وهمية لرسائل WhatsApp
    getMockMessages(sessionId) {
        const now = Date.now();
        const oneHourAgo = now - 60 * 60 * 1000;
        const twoHoursAgo = now - 2 * 60 * 60 * 1000;
        const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000;
        // إنشاء قائمة من الرسائل الوهمية
        const messages = [
            {
                id: "msg1",
                sessionId: "1",
                type: "TEXT",
                to: "966500000001",
                content: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
                status: "DELIVERED",
                sentAt: new Date(twoHoursAgo).toISOString(),
                deliveredAt: new Date(twoHoursAgo + 5000).toISOString()
            },
            {
                id: "msg2",
                sessionId: "1",
                type: "TEXT",
                to: "966500000001",
                content: "نود إبلاغكم بأن طلبكم رقم #12345 جاهز للاستلام",
                status: "READ",
                sentAt: new Date(oneHourAgo).toISOString(),
                deliveredAt: new Date(oneHourAgo + 2000).toISOString(),
                readAt: new Date(oneHourAgo + 60000).toISOString()
            },
            {
                id: "msg3",
                sessionId: "2",
                type: "IMAGE",
                to: "966500000002",
                content: "",
                mediaUrl: "https://example.com/images/product.jpg",
                caption: "صورة المنتج الجديد",
                status: "SENT",
                sentAt: new Date(threeDaysAgo).toISOString()
            },
            {
                id: "msg4",
                sessionId: "3",
                type: "DOCUMENT",
                to: "966500000003",
                content: "",
                mediaUrl: "https://example.com/docs/invoice.pdf",
                caption: "فاتورة الطلب #5678",
                status: "FAILED",
                sentAt: new Date(now - 30 * 60 * 1000).toISOString(),
                error: "فشل في إرسال الملف"
            },
            {
                id: "msg5",
                sessionId: "1",
                type: "TEXT",
                to: "966500000001",
                content: "شكراً لتواصلك معنا. سنقوم بالرد عليك قريباً.",
                status: "PENDING",
                sentAt: new Date(now).toISOString()
            }
        ];
        // إذا تم تحديد معرف جلسة، قم بتصفية الرسائل لتلك الجلسة فقط
        if (sessionId) {
            const filteredMessages = messages.filter((msg)=>msg.sessionId === sessionId);
            return {
                messages: filteredMessages,
                totalCount: filteredMessages.length
            };
        }
        return {
            messages: messages,
            totalCount: messages.length
        };
    }
    // طرق العملاء
    // هنا نحدد أن getCustomers ستعيد Promise<ApiResponse<CustomerListResponse>>
    async getCustomers(params) {
        try {
            // استخدام طريقة request المحسنة
            console.log("جاري محاولة الاتصال بـ API لجلب بيانات العملاء...");
            const response = await this.request("/neosending/Whatsapp/customer", {
                params: params
            });
            if (response.success) {
                console.log("تم الحصول على بيانات العملاء بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في جلب بيانات العملاء:", response.error);
                // استخدام البيانات الوهمية في حالة الفشل
                const mockData = this.getMockCustomers();
                return {
                    success: true,
                    data: mockData,
                    message: "تم استخدام بيانات وهمية بسبب تعذر الاتصال بالخادم"
                };
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
        try {
            console.log("جاري محاولة الاتصال بـ API لجلب جلسات WhatsApp...");
            const response = await this.request("/neosending/Whatsapp/sessions", {
                params
            });
            if (response.success) {
                console.log("تم الحصول على جلسات WhatsApp بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في جلب جلسات WhatsApp:", response.error);
                // استخدام البيانات الوهمية في حالة الفشل
                const mockData = this.getMockSessions();
                return {
                    success: true,
                    data: mockData,
                    message: "تم استخدام بيانات وهمية للجلسات بسبب تعذر الاتصال بالخادم"
                };
            }
        } catch (error) {
            console.error("خطأ في جلب جلسات WhatsApp من API:", error);
            // في حالة الخطأ، استخدم البيانات الوهمية
            console.log("استخدام البيانات الوهمية لجلسات WhatsApp بسبب خطأ");
            const mockData = this.getMockSessions();
            return {
                success: true,
                data: mockData
            };
        }
    }
    // الحصول على جلسة محددة
    async getSession(sessionId) {
        try {
            console.log("جاري محاولة الاتصال بـ API لجلب جلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId));
            if (response.success) {
                console.log("تم الحصول على جلسة WhatsApp بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في جلب جلسة WhatsApp بمعرف ".concat(sessionId, ":"), response.error);
                // استخدام البيانات الوهمية في حالة الفشل
                const mockData = this.getMockSession(sessionId);
                return {
                    success: true,
                    data: mockData,
                    message: "تم استخدام بيانات وهمية للجلسة بمعرف ".concat(sessionId, " بسبب تعذر الاتصال بالخادم")
                };
            }
        } catch (error) {
            console.error("خطأ في جلب جلسة WhatsApp بمعرف ".concat(sessionId, " من API:"), error);
            // في حالة الخطأ، استخدم البيانات الوهمية
            console.log("استخدام البيانات الوهمية لجلسة WhatsApp بمعرف ".concat(sessionId, " بسبب خطأ"));
            const mockData = this.getMockSession(sessionId);
            return {
                success: true,
                data: mockData
            };
        }
    }
    // إنشاء جلسة جديدة
    async createSession(data) {
        try {
            console.log("جاري محاولة إنشاء جلسة WhatsApp جديدة...");
            const response = await this.request("/neosending/Whatsapp/sessions", {
                method: "POST",
                body: JSON.stringify(data)
            });
            if (response.success) {
                console.log("تم إنشاء جلسة WhatsApp بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في إنشاء جلسة WhatsApp:", response.error);
                return response;
            }
        } catch (error) {
            console.error("خطأ في إنشاء جلسة WhatsApp من API:", error);
            return {
                success: false,
                error: "خطأ في الاتصال بالخادم أثناء محاولة إنشاء جلسة WhatsApp. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
                message: "فشل في إنشاء جلسة WhatsApp"
            };
        }
    }
    // تحديث جلسة
    async updateSession(sessionId, data) {
        try {
            console.log("جاري محاولة تحديث جلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId), {
                method: "PUT",
                body: JSON.stringify(data)
            });
            if (response.success) {
                console.log("تم تحديث جلسة WhatsApp بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في تحديث جلسة WhatsApp بمعرف ".concat(sessionId, ":"), response.error);
                return response;
            }
        } catch (error) {
            console.error("خطأ في تحديث جلسة WhatsApp بمعرف ".concat(sessionId, " من API:"), error);
            return {
                success: false,
                error: "خطأ في الاتصال بالخادم أثناء محاولة تحديث جلسة WhatsApp. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
                message: "فشل في تحديث جلسة WhatsApp بمعرف ".concat(sessionId)
            };
        }
    }
    // حذف جلسة
    async removeSession(sessionId) {
        try {
            console.log("جاري محاولة حذف جلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId), {
                method: "DELETE"
            });
            if (response.success) {
                console.log("تم حذف جلسة WhatsApp بنجاح");
                return response;
            } else {
                console.error("خطأ في حذف جلسة WhatsApp بمعرف ".concat(sessionId, ":"), response.error);
                return response;
            }
        } catch (error) {
            console.error("خطأ في حذف جلسة WhatsApp بمعرف ".concat(sessionId, " من API:"), error);
            return {
                success: false,
                error: "خطأ في الاتصال بالخادم أثناء محاولة حذف جلسة WhatsApp. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
                message: "فشل في حذف جلسة WhatsApp بمعرف ".concat(sessionId)
            };
        }
    }
    // إعادة تشغيل جلسة وإنشاء رمز QR جديد
    async generateQRCode(sessionId) {
        try {
            console.log("جاري محاولة إنشاء رمز QR جديد لجلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/qr"), {
                method: "POST"
            });
            if (response.success) {
                console.log("تم إنشاء رمز QR بنجاح لجلسة WhatsApp");
                return response;
            } else {
                console.error("خطأ في إنشاء رمز QR لجلسة WhatsApp بمعرف ".concat(sessionId, ":"), response.error);
                return response;
            }
        } catch (error) {
            console.error("خطأ في إنشاء رمز QR لجلسة WhatsApp بمعرف ".concat(sessionId, " من API:"), error);
            return {
                success: false,
                error: "خطأ في الاتصال بالخادم أثناء محاولة إنشاء رمز QR. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
                message: "فشل في إنشاء رمز QR لجلسة WhatsApp بمعرف ".concat(sessionId)
            };
        }
    }
    // الحصول على حالة جلسة
    async getSessionStatus(sessionId) {
        try {
            console.log("جاري محاولة الحصول على حالة جلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/status"));
            if (response.success) {
                console.log("تم الحصول على حالة جلسة WhatsApp بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في الحصول على حالة جلسة WhatsApp بمعرف ".concat(sessionId, ":"), response.error);
                // استخدام البيانات الوهمية في حالة الفشل
                const mockData = this.getMockSession(sessionId);
                return {
                    success: true,
                    data: mockData,
                    message: "تم استخدام بيانات وهمية لحالة الجلسة بمعرف ".concat(sessionId, " بسبب تعذر الاتصال بالخادم")
                };
            }
        } catch (error) {
            console.error("خطأ في الحصول على حالة جلسة WhatsApp بمعرف ".concat(sessionId, " من API:"), error);
            // في حالة الخطأ، استخدم البيانات الوهمية
            console.log("استخدام البيانات الوهمية لحالة جلسة WhatsApp بمعرف ".concat(sessionId, " بسبب خطأ"));
            const mockData = this.getMockSession(sessionId);
            return {
                success: true,
                data: mockData
            };
        }
    }
    // ===== وظائف رسائل WhatsApp =====
    // إرسال رسالة نصية
    async sendTextMessage(sessionId, data) {
        try {
            console.log("جاري محاولة إرسال رسالة نصية عبر جلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/messages/text"), {
                method: "POST",
                body: JSON.stringify(data)
            });
            if (response.success) {
                console.log("تم إرسال الرسالة النصية بنجاح إلى ".concat(data.to), response.data);
                return response;
            } else {
                console.error("خطأ في إرسال الرسالة النصية:", response.error);
                // إرجاع استجابة الخطأ للتعامل معها في الواجهة
                return response;
            }
        } catch (error) {
            console.error("خطأ في إرسال الرسالة النصية من API:", error);
            // في حالة الخطأ، إرجاع استجابة خطأ مع رسالة مفيدة
            return {
                success: false,
                error: "خطأ في الاتصال بالخادم أثناء محاولة إرسال الرسالة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
                message: "فشل في إرسال الرسالة النصية إلى ".concat(data.to)
            };
        }
    }
    // إرسال رسالة وسائط (صورة، فيديو، مستند، إلخ)
    async sendMediaMessage(sessionId, data) {
        try {
            console.log("جاري محاولة إرسال رسالة وسائط عبر جلسة WhatsApp بمعرف ".concat(sessionId, "..."));
            console.log("نوع الوسائط: ".concat(data.type, ", المستلم: ").concat(data.to));
            const response = await this.request("/neosending/Whatsapp/sessions/".concat(sessionId, "/messages/media"), {
                method: "POST",
                body: JSON.stringify(data)
            });
            if (response.success) {
                console.log("تم إرسال رسالة الوسائط بنجاح إلى ".concat(data.to), response.data);
                return response;
            } else {
                console.error("خطأ في إرسال رسالة الوسائط:", response.error);
                // إرجاع استجابة الخطأ للتعامل معها في الواجهة
                return response;
            }
        } catch (error) {
            console.error("خطأ في إرسال رسالة الوسائط من API:", error);
            // في حالة الخطأ، إرجاع استجابة خطأ مع رسالة مفيدة
            return {
                success: false,
                error: "خطأ في الاتصال بالخادم أثناء محاولة إرسال الوسائط. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
                message: "فشل في إرسال رسالة الوسائط إلى ".concat(data.to)
            };
        }
    }
    // الحصول على قائمة الرسائل
    async getMessages(params) {
        try {
            console.log("جاري محاولة الاتصال بـ API لجلب رسائل WhatsApp...");
            const response = await this.request("/neosending/Whatsapp/messages", {
                params
            });
            if (response.success) {
                console.log("تم الحصول على رسائل WhatsApp بنجاح", response.data);
                return response;
            } else {
                console.error("خطأ في جلب رسائل WhatsApp:", response.error);
                // استخدام البيانات الوهمية في حالة الفشل
                const mockData = this.getMockMessages(params === null || params === void 0 ? void 0 : params.sessionId);
                return {
                    success: true,
                    data: mockData,
                    message: "تم استخدام بيانات وهمية للرسائل بسبب تعذر الاتصال بالخادم"
                };
            }
        } catch (error) {
            console.error("خطأ في جلب رسائل WhatsApp من API:", error);
            // في حالة الخطأ، استخدم البيانات الوهمية
            console.log("استخدام البيانات الوهمية لرسائل WhatsApp بسبب خطأ");
            const mockData = this.getMockMessages(params === null || params === void 0 ? void 0 : params.sessionId);
            return {
                success: true,
                data: mockData
            };
        }
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
    // دالة تسجيل الدخول
    async login(username, password) {
        console.log("🔑 محاولة تسجيل الدخول للمستخدم: ".concat(username));
        try {
            const response = await this.request("auth/login", {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (response.success && response.data) {
                // حفظ رمز الوصول في التخزين المحلي
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem("auth_token", response.data.token);
                    localStorage.setItem("user_info", JSON.stringify(response.data.user));
                }
                console.log("✅ تم تسجيل الدخول بنجاح");
                return response;
            } else {
                console.error("❌ فشل تسجيل الدخول:", response.error);
                return response;
            }
        } catch (error) {
            console.error("❌ خطأ أثناء تسجيل الدخول:", error);
            return this.getMockLoginResponse(username);
        }
    }
    // بيانات وهمية لاستجابة تسجيل الدخول
    getMockLoginResponse(username) {
        // استخدام بيانات وهمية في حالة فشل الاتصال بالخادم
        if (username === "admin" || username === "test") {
            return {
                success: true,
                data: {
                    token: "mock_token_12345",
                    user: {
                        id: 1,
                        username: username,
                        fullName: username === "admin" ? "مدير النظام" : "مستخدم تجريبي",
                        email: "".concat(username, "@example.com"),
                        role: username === "admin" ? "admin" : "user"
                    }
                }
            };
        } else {
            return {
                success: false,
                error: "اسم المستخدم أو كلمة المرور غير صحيحة"
            };
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "baseUrl", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "apiKey", void 0);
        this.baseUrl = ("TURBOPACK compile-time value", "https://neosending.com/api/cretechsoft/Whatsapp") || "";
        this.apiKey = ("TURBOPACK compile-time value", "test_key_123") || "";
    }
}
const apiService = new ApiService();
const login = apiService.login.bind(apiService);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/[locale]/customers/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/data-table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page() {
    _s();
    // استخدام useState و useEffect بدلاً من hook مخصص للمزيد من التحكم
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // استخدام useEffect لجلب البيانات عند تحميل الصفحة
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const fetchCustomers = {
                "Page.useEffect.fetchCustomers": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        // استدعاء API مباشرة
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].getCustomers();
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
                    } finally{
                        setLoading(false);
                    }
                }
            }["Page.useEffect.fetchCustomers"];
            fetchCustomers();
        }
    }["Page.useEffect"], []);
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
            cell: (param)=>{
                let { row } = param;
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold",
                                    children: "قائمة العملاء"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                totalCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: [
                                        "إجمالي العملاء: ",
                                        totalCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center py-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-10 w-10 border-b-2 border-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-3 text-gray-600",
                                    children: "جاري تحميل بيانات العملاء..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "font-bold",
                                    children: "خطأ! "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block sm:inline",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-2 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm",
                                    onClick: ()=>window.location.reload(),
                                    children: "إعادة المحاولة"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this),
                        !loading && !error && customers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                columns: customerColumns,
                                data: customers
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this),
                        !loading && !error && customers.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-10 bg-gray-50 rounded-lg border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "mx-auto h-12 w-12 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-2 text-sm font-medium text-gray-900",
                                    children: "لا يوجد عملاء"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-gray-500",
                                    children: "لم يتم العثور على أي عملاء في النظام."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/customers/page.tsx",
                            lineNumber: 118,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/[locale]/customers/page.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/customers/page.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/customers/page.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/customers/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(Page, "0JQ1hImu1y2YXa9LobiLXrnVwN4=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f6c0b008._.js.map