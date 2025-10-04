(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Melonthony/melonthony/src/trpc/query-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeQueryClient",
    ()=>makeQueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
function makeQueryClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
        defaultOptions: {
            queries: {
                staleTime: 30 * 1000
            },
            dehydrate: {
                // serializeData: superjson.serialize,
                shouldDehydrateQuery: (query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultShouldDehydrateQuery"])(query) || query.state.status === 'pending'
            },
            hydrate: {
            }
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Melonthony/melonthony/src/trpc/client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRPCProvider",
    ()=>TRPCProvider,
    "TRPCReactProvider",
    ()=>TRPCReactProvider,
    "useTRPC",
    ()=>useTRPC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$src$2f$trpc$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/src/trpc/query-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const { TRPCProvider, useTRPC } = createTRPCContext();
let browserQueryClient;
function getQueryClient() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$src$2f$trpc$2f$query$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeQueryClient"])();
    return browserQueryClient;
}
function getUrl() {
    const base = (()=>{
        if ("TURBOPACK compile-time truthy", 1) return "";
        //TURBOPACK unreachable
        ;
    })();
    return "".concat(base, "/api/trpc");
}
function TRPCReactProvider(props) {
    _s();
    // NOTE: Avoid useState when initializing the query client if you don't
    //       have a suspense boundary between this and the code that may
    //       suspend because React will throw away the client on the initial
    //       render if it suspends and there is no boundary
    const queryClient = getQueryClient();
    const [trpcClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TRPCReactProvider.useState": ()=>createTRPCClient({
                links: [
                    httpBatchLink({
                        transformer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        url: getUrl()
                    })
                ]
            })
    }["TRPCReactProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TRPCProvider, {
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
_s(TRPCReactProvider, "f/dMvi7sgZeESOg4nZd+ORpE9eI=");
_c = TRPCReactProvider;
var _c;
__turbopack_context__.k.register(_c, "TRPCReactProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Melonthony_melonthony_src_trpc_246d6600._.js.map