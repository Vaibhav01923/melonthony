module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Melonthony/melonthony/src/trpc/query-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeQueryClient",
    ()=>makeQueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/hydration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
;
function makeQueryClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                staleTime: 30 * 1000
            },
            dehydrate: {
                // serializeData: superjson.serialize,
                shouldDehydrateQuery: (query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultShouldDehydrateQuery"])(query) || query.state.status === 'pending'
            },
            hydrate: {
            }
        }
    });
}
}),
"[project]/Melonthony/melonthony/src/trpc/client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRPCProvider",
    ()=>TRPCProvider,
    "TRPCReactProvider",
    ()=>TRPCReactProvider,
    "useTRPC",
    ()=>useTRPC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@trpc/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@trpc/tanstack-react-query'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$src$2f$trpc$2f$query$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/src/trpc/query-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const { TRPCProvider, useTRPC } = createTRPCContext();
let browserQueryClient;
function getQueryClient() {
    if ("TURBOPACK compile-time truthy", 1) {
        // Server: always make a new query client
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$src$2f$trpc$2f$query$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeQueryClient"])();
    }
    //TURBOPACK unreachable
    ;
}
function getUrl() {
    const base = (()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return "TURBOPACK compile-time value", "http://localhost:3000";
    })();
    return `${base}/api/trpc`;
}
function TRPCReactProvider(props) {
    // NOTE: Avoid useState when initializing the query client if you don't
    //       have a suspense boundary between this and the code that may
    //       suspend because React will throw away the client on the initial
    //       render if it suspends and there is no boundary
    const queryClient = getQueryClient();
    const [trpcClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>createTRPCClient({
            links: [
                httpBatchLink({
                    transformer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    url: getUrl()
                })
            ]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TRPCProvider, {
            trpcClient: trpcClient,
            queryClient: queryClient,
            children: props.children
        }, void 0, false, {
            fileName: "[project]/Melonthony/melonthony/src/trpc/client.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Melonthony/melonthony/src/trpc/client.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a17eee38._.js.map