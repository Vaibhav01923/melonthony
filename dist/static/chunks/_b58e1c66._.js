(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/superjson/dist/double-indexed-kv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoubleIndexedKV",
    ()=>DoubleIndexedKV
]);
class DoubleIndexedKV {
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
    constructor(){
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
} //# sourceMappingURL=double-indexed-kv.js.map
}),
"[project]/node_modules/superjson/dist/registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Registry",
    ()=>Registry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/double-indexed-kv.js [app-client] (ecmascript)");
;
class Registry {
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
    constructor(generateIdentifier){
        this.generateIdentifier = generateIdentifier;
        this.kv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleIndexedKV"]();
    }
} //# sourceMappingURL=registry.js.map
}),
"[project]/node_modules/superjson/dist/class-registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassRegistry",
    ()=>ClassRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/registry.js [app-client] (ecmascript)");
;
class ClassRegistry extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"] {
    register(value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        } else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
    constructor(){
        super((c)=>c.name);
        this.classToAllowedProps = new Map();
    }
} //# sourceMappingURL=class-registry.js.map
}),
"[project]/node_modules/superjson/dist/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "find",
    ()=>find,
    "findArr",
    ()=>findArr,
    "forEach",
    ()=>forEach,
    "includes",
    ()=>includes
]);
function valuesOfObj(record) {
    if ('values' in Object) {
        // eslint-disable-next-line es5/no-es6-methods
        return Object.values(record);
    }
    const values = [];
    // eslint-disable-next-line no-restricted-syntax
    for(const key in record){
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ('find' in values) {
        // eslint-disable-next-line es5/no-es6-methods
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for(let i = 0; i < valuesNotNever.length; i++){
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
function forEach(record, run) {
    Object.entries(record).forEach((param)=>{
        let [key, value] = param;
        return run(value, key);
    });
}
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
    for(let i = 0; i < record.length; i++){
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
} //# sourceMappingURL=util.js.map
}),
"[project]/node_modules/superjson/dist/custom-transformer-registry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomTransformerRegistry",
    ()=>CustomTransformerRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
;
class CustomTransformerRegistry {
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(this.transfomers, (transformer)=>transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
    constructor(){
        this.transfomers = {};
    }
} //# sourceMappingURL=custom-transformer-registry.js.map
}),
"[project]/node_modules/superjson/dist/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArray",
    ()=>isArray,
    "isBigint",
    ()=>isBigint,
    "isBoolean",
    ()=>isBoolean,
    "isDate",
    ()=>isDate,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isError",
    ()=>isError,
    "isInfinite",
    ()=>isInfinite,
    "isMap",
    ()=>isMap,
    "isNaNValue",
    ()=>isNaNValue,
    "isNull",
    ()=>isNull,
    "isNumber",
    ()=>isNumber,
    "isPlainObject",
    ()=>isPlainObject,
    "isPrimitive",
    ()=>isPrimitive,
    "isRegExp",
    ()=>isRegExp,
    "isSet",
    ()=>isSet,
    "isString",
    ()=>isString,
    "isSymbol",
    ()=>isSymbol,
    "isTypedArray",
    ()=>isTypedArray,
    "isURL",
    ()=>isURL,
    "isUndefined",
    ()=>isUndefined
]);
const getType = (payload)=>Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload)=>typeof payload === 'undefined';
const isNull = (payload)=>payload === null;
const isPlainObject = (payload)=>{
    if (typeof payload !== 'object' || payload === null) return false;
    if (payload === Object.prototype) return false;
    if (Object.getPrototypeOf(payload) === null) return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload)=>isPlainObject(payload) && Object.keys(payload).length === 0;
const isArray = (payload)=>Array.isArray(payload);
const isString = (payload)=>typeof payload === 'string';
const isNumber = (payload)=>typeof payload === 'number' && !isNaN(payload);
const isBoolean = (payload)=>typeof payload === 'boolean';
const isRegExp = (payload)=>payload instanceof RegExp;
const isMap = (payload)=>payload instanceof Map;
const isSet = (payload)=>payload instanceof Set;
const isSymbol = (payload)=>getType(payload) === 'Symbol';
const isDate = (payload)=>payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload)=>payload instanceof Error;
const isNaNValue = (payload)=>typeof payload === 'number' && isNaN(payload);
const isPrimitive = (payload)=>isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
const isBigint = (payload)=>typeof payload === 'bigint';
const isInfinite = (payload)=>payload === Infinity || payload === -Infinity;
const isTypedArray = (payload)=>ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload)=>payload instanceof URL; //# sourceMappingURL=is.js.map
}),
"[project]/node_modules/superjson/dist/pathstringifier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeKey",
    ()=>escapeKey,
    "parsePath",
    ()=>parsePath,
    "stringifyPath",
    ()=>stringifyPath
]);
const escapeKey = (key)=>key.replace(/\./g, '\\.');
const stringifyPath = (path)=>path.map(String).map(escapeKey).join('.');
const parsePath = (string)=>{
    const result = [];
    let segment = '';
    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i);
        const isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i++;
            continue;
        }
        const isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
}; //# sourceMappingURL=pathstringifier.js.map
}),
"[project]/node_modules/superjson/dist/transformer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInstanceOfRegisteredClass",
    ()=>isInstanceOfRegisteredClass,
    "transformValue",
    ()=>transformValue,
    "untransformValue",
    ()=>untransformValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
;
;
function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const simpleRules = [
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"], 'undefined', ()=>null, ()=>undefined),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBigint"], 'bigint', (v)=>v.toString(), (v)=>{
        if (typeof BigInt !== 'undefined') {
            return BigInt(v);
        }
        console.error('Please add a BigInt polyfill.');
        return v;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"], 'Date', (v)=>v.toISOString(), (v)=>new Date(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"], 'Error', (v, superJson)=>{
        const baseError = {
            name: v.name,
            message: v.message
        };
        superJson.allowedErrorProps.forEach((prop)=>{
            baseError[prop] = v[prop];
        });
        return baseError;
    }, (v, superJson)=>{
        const e = new Error(v.message);
        e.name = v.name;
        e.stack = v.stack;
        superJson.allowedErrorProps.forEach((prop)=>{
            e[prop] = v[prop];
        });
        return e;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"], 'regexp', (v)=>'' + v, (regex)=>{
        const body = regex.slice(1, regex.lastIndexOf('/'));
        const flags = regex.slice(regex.lastIndexOf('/') + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"], 'set', // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v)=>[
            ...v.values()
        ], (v)=>new Set(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"], 'map', (v)=>[
            ...v.entries()
        ], (v)=>new Map(v)),
    simpleTransformation((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNaNValue"])(v) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInfinite"])(v), 'number', (v)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNaNValue"])(v)) {
            return 'NaN';
        }
        if (v > 0) {
            return 'Infinity';
        } else {
            return '-Infinity';
        }
    }, Number),
    simpleTransformation((v)=>v === 0 && 1 / v === -Infinity, 'number', ()=>{
        return '-0';
    }, Number),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isURL"], 'URL', (v)=>v.toString(), (v)=>new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const symbolRule = compositeTransformation((s, superJson)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"])(s)) {
        const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
        return isRegistered;
    }
    return false;
}, (s, superJson)=>{
    const identifier = superJson.symbolRegistry.getIdentifier(s);
    return [
        'symbol',
        identifier
    ];
}, (v)=>v.description, (_, a, superJson)=>{
    const value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
        throw new Error('Trying to deserialize unknown symbol');
    }
    return value;
});
const constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
].reduce((obj, ctor)=>{
    obj[ctor.name] = ctor;
    return obj;
}, {});
const typedArrayRule = compositeTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypedArray"], (v)=>[
        'typed-array',
        v.constructor.name
    ], (v)=>[
        ...v
    ], (v, a)=>{
    const ctor = constructorToName[a[1]];
    if (!ctor) {
        throw new Error('Trying to deserialize unknown typed array');
    }
    return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
        const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson)=>{
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return [
        'class',
        identifier
    ];
}, (clazz, superJson)=>{
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
        return {
            ...clazz
        };
    }
    const result = {};
    allowedProps.forEach((prop)=>{
        result[prop] = clazz[prop];
    });
    return result;
}, (v, a, superJson)=>{
    const clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
        throw new Error("Trying to deserialize unknown class '".concat(a[1], "' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"));
    }
    return Object.assign(Object.create(clazz.prototype), v);
});
const customRule = compositeTransformation((value, superJson)=>{
    return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return [
        'custom',
        transformer.name
    ];
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
}, (v, a, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
        throw new Error('Trying to deserialize unknown custom value');
    }
    return transformer.deserialize(v);
});
const compositeRules = [
    classRule,
    symbolRule,
    customRule,
    typedArrayRule
];
const transformValue = (value, superJson)=>{
    const applicableCompositeRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findArr"])(compositeRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson)
        };
    }
    const applicableSimpleRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findArr"])(simpleRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation
        };
    }
    return undefined;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach((rule)=>{
    simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(type)) {
        switch(type[0]){
            case 'symbol':
                return symbolRule.untransform(json, type, superJson);
            case 'class':
                return classRule.untransform(json, type, superJson);
            case 'custom':
                return customRule.untransform(json, type, superJson);
            case 'typed-array':
                return typedArrayRule.untransform(json, type, superJson);
            default:
                throw new Error('Unknown transformation: ' + type);
        }
    } else {
        const transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error('Unknown transformation: ' + type);
        }
        return transformation.untransform(json, superJson);
    }
}; //# sourceMappingURL=transformer.js.map
}),
"[project]/node_modules/superjson/dist/accessDeep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDeep",
    ()=>getDeep,
    "setDeep",
    ()=>setDeep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
;
;
const getNthKey = (value, n)=>{
    if (n > value.size) throw new Error('index out of bounds');
    const keys = value.keys();
    while(n > 0){
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path)=>{
    validatePath(path);
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(object)) {
            object = getNthKey(object, +key);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(object, row);
            switch(type){
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        } else {
            object = object[key];
        }
    }
    return object;
};
const setDeep = (object, path, mapper)=>{
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for(let i = 0; i < path.length - 1; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
            const index = +key;
            parent = parent[index];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
            parent = parent[key];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(parent, row);
            switch(type){
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? 'key' : 'value';
        switch(type){
            case 'key':
                {
                    const newKey = mapper(keyToRow);
                    parent.set(newKey, parent.get(keyToRow));
                    if (newKey !== keyToRow) {
                        parent.delete(keyToRow);
                    }
                    break;
                }
            case 'value':
                {
                    parent.set(keyToRow, mapper(parent.get(keyToRow)));
                    break;
                }
        }
    }
    return object;
}; //# sourceMappingURL=accessDeep.js.map
}),
"[project]/node_modules/superjson/dist/plainer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyReferentialEqualityAnnotations",
    ()=>applyReferentialEqualityAnnotations,
    "applyValueAnnotations",
    ()=>applyValueAnnotations,
    "generateReferentialEqualityAnnotations",
    ()=>generateReferentialEqualityAnnotations,
    "walker",
    ()=>walker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/pathstringifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/transformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/accessDeep.js [app-client] (ecmascript)");
;
;
;
;
;
;
function traverse(tree, walker) {
    let origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (!tree) {
        return;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(tree)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(tree, (subtree, key)=>traverse(subtree, walker, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(key)
            ]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(children, (child, key)=>{
            traverse(child, walker, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(key)
            ]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, (type, path)=>{
        plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDeep"])(plain, path, (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["untransformValue"])(v, type, superJson));
    });
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
        const object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(path));
        identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"]).forEach((identicalObjectPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDeep"])(plain, identicalObjectPath, ()=>object);
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(annotations)) {
        const [root, other] = annotations;
        root.forEach((identicalPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePath"])(identicalPath), ()=>plain);
        });
        if (other) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(other, apply);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(annotations, apply);
    }
    return plain;
}
const isDeep = (object, superJson)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInstanceOfRegisteredClass"])(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    } else {
        identities.set(object, [
            path
        ]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = undefined;
    identitites.forEach((paths)=>{
        if (paths.length <= 1) {
            return;
        }
        // if we're not deduping, all of these objects continue existing.
        // putting the shortest path first makes it easier to parse for humans
        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
        if (!dedupe) {
            paths = paths.map((path)=>path.map(String)).sort((a, b)=>a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPath"]);
        } else {
            result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPath"])(representativePath)] = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyPath"]);
        }
    });
    if (rootEqualityPaths) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(result)) {
            return [
                rootEqualityPaths
            ];
        } else {
            return [
                rootEqualityPaths,
                result
            ];
        }
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(result) ? undefined : result;
    }
}
const walker = function(object, identities, superJson, dedupe) {
    let path = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], objectsInThisPath = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], seenObjects = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : new Map();
    const primitive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            // short-circuit result if we've seen this object before
            return dedupe ? {
                transformedValue: null
            } : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
        const result = transformed ? {
            transformedValue: transformed.value,
            annotations: [
                transformed.type
            ]
        } : {
            transformedValue: object
        };
        if (!primitive) {
            seenObjects.set(object, result);
        }
        return result;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["includes"])(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null
        };
    }
    const transformationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
    var _transformationResult_value;
    const transformed = (_transformationResult_value = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _transformationResult_value !== void 0 ? _transformationResult_value : object;
    const transformedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(transformed) ? [] : {};
    const innerAnnotations = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(transformed, (value, index)=>{
        if (index === '__proto__' || index === 'constructor' || index === 'prototype') {
            throw new Error("Detected property ".concat(index, ". This is a prototype pollution risk, please remove it from your object."));
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [
            ...path,
            index
        ], [
            ...objectsInThisPath,
            object
        ], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(recursiveResult.annotations)) {
            innerAnnotations[index] = recursiveResult.annotations;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(recursiveResult.annotations)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(recursiveResult.annotations, (tree, key)=>{
                innerAnnotations[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeKey"])(index) + '.' + key] = tree;
            });
        }
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"])(innerAnnotations) ? {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type
        ] : undefined
    } : {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type,
            innerAnnotations
        ] : innerAnnotations
    };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
}; //# sourceMappingURL=plainer.js.map
}),
"[project]/node_modules/is-what/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getType",
    ()=>getType,
    "isAnyObject",
    ()=>isAnyObject,
    "isArray",
    ()=>isArray,
    "isBlob",
    ()=>isBlob,
    "isBoolean",
    ()=>isBoolean,
    "isDate",
    ()=>isDate,
    "isEmptyArray",
    ()=>isEmptyArray,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isEmptyString",
    ()=>isEmptyString,
    "isError",
    ()=>isError,
    "isFile",
    ()=>isFile,
    "isFullArray",
    ()=>isFullArray,
    "isFullObject",
    ()=>isFullObject,
    "isFullString",
    ()=>isFullString,
    "isFunction",
    ()=>isFunction,
    "isInstanceOf",
    ()=>isInstanceOf,
    "isMap",
    ()=>isMap,
    "isNaNValue",
    ()=>isNaNValue,
    "isNegativeNumber",
    ()=>isNegativeNumber,
    "isNull",
    ()=>isNull,
    "isNullOrUndefined",
    ()=>isNullOrUndefined,
    "isNumber",
    ()=>isNumber,
    "isObject",
    ()=>isObject,
    "isObjectLike",
    ()=>isObjectLike,
    "isOneOf",
    ()=>isOneOf,
    "isPlainObject",
    ()=>isPlainObject,
    "isPositiveNumber",
    ()=>isPositiveNumber,
    "isPrimitive",
    ()=>isPrimitive,
    "isPromise",
    ()=>isPromise,
    "isRegExp",
    ()=>isRegExp,
    "isSet",
    ()=>isSet,
    "isString",
    ()=>isString,
    "isSymbol",
    ()=>isSymbol,
    "isType",
    ()=>isType,
    "isUndefined",
    ()=>isUndefined,
    "isWeakMap",
    ()=>isWeakMap,
    "isWeakSet",
    ()=>isWeakSet
]);
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
function isAnyObject(payload) {
    return getType(payload) === "Object";
}
function isArray(payload) {
    return getType(payload) === "Array";
}
function isBlob(payload) {
    return getType(payload) === "Blob";
}
function isBoolean(payload) {
    return getType(payload) === "Boolean";
}
function isDate(payload) {
    return getType(payload) === "Date" && !isNaN(payload);
}
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
function isPlainObject(payload) {
    if (getType(payload) !== "Object") return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
function isEmptyString(payload) {
    return payload === "";
}
function isError(payload) {
    return getType(payload) === "Error" || payload instanceof Error;
}
function isFile(payload) {
    return getType(payload) === "File";
}
function isFullArray(payload) {
    return isArray(payload) && payload.length > 0;
}
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
function isString(payload) {
    return getType(payload) === "String";
}
function isFullString(payload) {
    return isString(payload) && payload !== "";
}
function isFunction(payload) {
    return typeof payload === "function";
}
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError("Type must be a function");
    }
    if (!Object.prototype.hasOwnProperty.call(type, "prototype")) {
        throw new TypeError("Type is not a class");
    }
    const name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}
function isInstanceOf(value, classOrClassName) {
    if (typeof classOrClassName === "function") {
        for(let p = value; p; p = Object.getPrototypeOf(p)){
            if (isType(p, classOrClassName)) {
                return true;
            }
        }
        return false;
    } else {
        for(let p = value; p; p = Object.getPrototypeOf(p)){
            if (getType(p) === classOrClassName) {
                return true;
            }
        }
        return false;
    }
}
function isMap(payload) {
    return getType(payload) === "Map";
}
function isNaNValue(payload) {
    return getType(payload) === "Number" && isNaN(payload);
}
function isNumber(payload) {
    return getType(payload) === "Number" && !isNaN(payload);
}
function isNegativeNumber(payload) {
    return isNumber(payload) && payload < 0;
}
function isNull(payload) {
    return getType(payload) === "Null";
}
function isOneOf(a, b, c, d, e) {
    return (value)=>a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}
function isUndefined(payload) {
    return getType(payload) === "Undefined";
}
const isNullOrUndefined = isOneOf(isNull, isUndefined);
function isObject(payload) {
    return isPlainObject(payload);
}
function isObjectLike(payload) {
    return isAnyObject(payload);
}
function isPositiveNumber(payload) {
    return isNumber(payload) && payload > 0;
}
function isSymbol(payload) {
    return getType(payload) === "Symbol";
}
function isPrimitive(payload) {
    return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}
function isPromise(payload) {
    return getType(payload) === "Promise";
}
function isRegExp(payload) {
    return getType(payload) === "RegExp";
}
function isSet(payload) {
    return getType(payload) === "Set";
}
function isWeakMap(payload) {
    return getType(payload) === "WeakMap";
}
function isWeakSet(payload) {
    return getType(payload) === "WeakSet";
}
;
}),
"[project]/node_modules/copy-anything/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copy",
    ()=>copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/is-what/dist/index.js [app-client] (ecmascript)");
;
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = ({}).propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
    if (propType === "enumerable") carry[key] = newVal;
    if (includeNonenumerable && propType === "nonenumerable") {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function copy(target) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(target)) {
        return target.map((item)=>copy(item, options));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(target)) {
        return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [
        ...props,
        ...symbols
    ].reduce((carry, key)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(options.props) && !options.props.includes(key)) {
            return carry;
        }
        const val = target[key];
        const newVal = copy(val, options);
        assignProp(carry, key, newVal, target, options.nonenumerable);
        return carry;
    }, {});
}
;
}),
"[project]/node_modules/superjson/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuperJSON",
    ()=>SuperJSON,
    "allowErrorProps",
    ()=>allowErrorProps,
    "default",
    ()=>SuperJSON,
    "deserialize",
    ()=>deserialize,
    "parse",
    ()=>parse,
    "registerClass",
    ()=>registerClass,
    "registerCustom",
    ()=>registerCustom,
    "registerSymbol",
    ()=>registerSymbol,
    "serialize",
    ()=>serialize,
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/class-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/custom-transformer-registry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/plainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/copy-anything/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
class SuperJSON {
    serialize(object) {
        const identities = new Map();
        const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["walker"])(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations
            };
        }
        const equalityAnnotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateReferentialEqualityAnnotations"])(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations
            };
        }
        return res;
    }
    deserialize(payload) {
        const { json, meta } = payload;
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(json);
        if (meta === null || meta === void 0 ? void 0 : meta.values) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyValueAnnotations"])(result, meta.values, this);
        }
        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyReferentialEqualityAnnotations"])(result, meta.referentialEqualities);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string));
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer
        });
    }
    allowErrorProps() {
        for(var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++){
            props[_key] = arguments[_key];
        }
        this.allowedErrorProps.push(...props);
    }
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */ constructor({ dedupe = false } = {}){
        this.classRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClassRegistry"]();
        this.symbolRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"]((s)=>{
            var _s_description;
            return (_s_description = s.description) !== null && _s_description !== void 0 ? _s_description : '';
        });
        this.customTransformerRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomTransformerRegistry"]();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
}
;
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
;
const serialize = SuperJSON.serialize;
const deserialize = SuperJSON.deserialize;
const stringify = SuperJSON.stringify;
const parse = SuperJSON.parse;
const registerClass = SuperJSON.registerClass;
const registerCustom = SuperJSON.registerCustom;
const registerSymbol = SuperJSON.registerSymbol;
const allowErrorProps = SuperJSON.allowErrorProps; //# sourceMappingURL=index.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = (param)=>{
    let { client, children } = param;
    __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "QueryClientProvider.useEffect": ()=>{
            client.mount();
            return ({
                "QueryClientProvider.useEffect": ()=>{
                    client.unmount();
                }
            })["QueryClientProvider.useEffect"];
        }
    }["QueryClientProvider.useEffect"], [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_get
]);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_extract_field_descriptor
]);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_get
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "get");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_check_private_redeclaration
]);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_field_init(obj, privateMap, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateMap);
    privateMap.set(obj, value);
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_set
]);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "set");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor, value);
    return value;
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/timeoutManager.ts
__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
;
;
;
var // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
// type at app boot; and if we leave that type, then any new timer provider
// would need to support ReturnType<typeof setTimeout>, which is infeasible.
//
// We settle for type safety for the TimeoutProvider type, and accept that
// this class is unsafe internally to allow for extension.
_provider, _providerCalled;
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var TimeoutManager = (_provider = /*#__PURE__*/ new WeakMap(), _providerCalled = /*#__PURE__*/ new WeakMap(), class {
    setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerCalled) && provider !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider)) {
                console.error("[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.", {
                    previous: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider),
                    provider
                });
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, provider);
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerCalled, false);
        }
    }
    setTimeout(callback, delay) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerCalled, true);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerCalled, true);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider).clearInterval(intervalId);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _provider, {
            writable: true,
            value: defaultTimeoutProvider
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _providerCalled, {
            writable: true,
            value: false
        });
    }
});
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
 //# sourceMappingURL=timeoutManager.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = (options === null || options === void 0 ? void 0 : options.queryKeyHashFn) || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error("Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [".concat(options.queryHash, "]: ").concat(error));
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item) {
    let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item) {
    let max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error("Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '".concat(options.queryHash, "'"));
        }
    }
    if (!options.queryFn && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.initialPromise)) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error("Missing queryFn: '".concat(options.queryHash, "'")));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/thenable.ts
__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    var _promise_then;
    let data;
    (_promise_then = promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"])) === null || _promise_then === void 0 ? void 0 : _promise_then.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hydration.ts
__turbopack_context__.s([
    "defaultShouldDehydrateMutation",
    ()=>defaultShouldDehydrateMutation,
    "defaultShouldDehydrateQuery",
    ()=>defaultShouldDehydrateQuery,
    "dehydrate",
    ()=>dehydrate,
    "hydrate",
    ()=>hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
;
function defaultTransformerFn(data) {
    return data;
}
function dehydrateMutation(mutation) {
    return {
        mutationKey: mutation.options.mutationKey,
        state: mutation.state,
        ...mutation.options.scope && {
            scope: mutation.options.scope
        },
        ...mutation.meta && {
            meta: mutation.meta
        }
    };
}
function dehydrateQuery(query, serializeData, shouldRedactErrors) {
    var _query_promise;
    return {
        dehydratedAt: Date.now(),
        state: {
            ...query.state,
            ...query.state.data !== void 0 && {
                data: serializeData(query.state.data)
            }
        },
        queryKey: query.queryKey,
        queryHash: query.queryHash,
        ...query.state.status === "pending" && {
            promise: (_query_promise = query.promise) === null || _query_promise === void 0 ? void 0 : _query_promise.then(serializeData).catch((error)=>{
                if (!shouldRedactErrors(error)) {
                    return Promise.reject(error);
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error("A query that was dehydrated as pending ended up rejecting. [".concat(query.queryHash, "]: ").concat(error, "; The error will be redacted in production builds"));
                }
                return Promise.reject(new Error("redacted"));
            })
        },
        ...query.meta && {
            meta: query.meta
        }
    };
}
function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
    return query.state.status === "success";
}
function defaultShouldRedactErrors(_) {
    return true;
}
function dehydrate(client) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _client_getDefaultOptions_dehydrate, _client_getDefaultOptions_dehydrate1, _client_getDefaultOptions_dehydrate2, _client_getDefaultOptions_dehydrate3;
    var _options_shouldDehydrateMutation, _ref;
    const filterMutation = (_ref = (_options_shouldDehydrateMutation = options.shouldDehydrateMutation) !== null && _options_shouldDehydrateMutation !== void 0 ? _options_shouldDehydrateMutation : (_client_getDefaultOptions_dehydrate = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate === void 0 ? void 0 : _client_getDefaultOptions_dehydrate.shouldDehydrateMutation) !== null && _ref !== void 0 ? _ref : defaultShouldDehydrateMutation;
    const mutations = client.getMutationCache().getAll().flatMap((mutation)=>filterMutation(mutation) ? [
            dehydrateMutation(mutation)
        ] : []);
    var _options_shouldDehydrateQuery, _ref1;
    const filterQuery = (_ref1 = (_options_shouldDehydrateQuery = options.shouldDehydrateQuery) !== null && _options_shouldDehydrateQuery !== void 0 ? _options_shouldDehydrateQuery : (_client_getDefaultOptions_dehydrate1 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate1 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate1.shouldDehydrateQuery) !== null && _ref1 !== void 0 ? _ref1 : defaultShouldDehydrateQuery;
    var _options_shouldRedactErrors, _ref2;
    const shouldRedactErrors = (_ref2 = (_options_shouldRedactErrors = options.shouldRedactErrors) !== null && _options_shouldRedactErrors !== void 0 ? _options_shouldRedactErrors : (_client_getDefaultOptions_dehydrate2 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate2 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate2.shouldRedactErrors) !== null && _ref2 !== void 0 ? _ref2 : defaultShouldRedactErrors;
    var _options_serializeData, _ref3;
    const serializeData = (_ref3 = (_options_serializeData = options.serializeData) !== null && _options_serializeData !== void 0 ? _options_serializeData : (_client_getDefaultOptions_dehydrate3 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate3 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate3.serializeData) !== null && _ref3 !== void 0 ? _ref3 : defaultTransformerFn;
    const queries = client.getQueryCache().getAll().flatMap((query)=>filterQuery(query) ? [
            dehydrateQuery(query, serializeData, shouldRedactErrors)
        ] : []);
    return {
        mutations,
        queries
    };
}
function hydrate(client, dehydratedState, options) {
    var _options_defaultOptions, _client_getDefaultOptions_hydrate;
    if (typeof dehydratedState !== "object" || dehydratedState === null) {
        return;
    }
    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache();
    var _options_defaultOptions_deserializeData, _ref;
    const deserializeData = (_ref = (_options_defaultOptions_deserializeData = options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.deserializeData) !== null && _options_defaultOptions_deserializeData !== void 0 ? _options_defaultOptions_deserializeData : (_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.deserializeData) !== null && _ref !== void 0 ? _ref : defaultTransformerFn;
    const mutations = dehydratedState.mutations || [];
    const queries = dehydratedState.queries || [];
    mutations.forEach((param)=>{
        let { state, ...mutationOptions } = param;
        var _client_getDefaultOptions_hydrate, _options_defaultOptions;
        mutationCache.build(client, {
            ...(_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.mutations,
            ...options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.mutations,
            ...mutationOptions
        }, state);
    });
    queries.forEach((param)=>{
        let { queryKey, state, queryHash, meta, promise, dehydratedAt } = param;
        const syncData = promise ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tryResolveSync"])(promise) : void 0;
        const rawData = state.data === void 0 ? syncData === null || syncData === void 0 ? void 0 : syncData.data : state.data;
        const data = rawData === void 0 ? rawData : deserializeData(rawData);
        let query = queryCache.get(queryHash);
        const existingQueryIsPending = (query === null || query === void 0 ? void 0 : query.state.status) === "pending";
        const existingQueryIsFetching = (query === null || query === void 0 ? void 0 : query.state.fetchStatus) === "fetching";
        if (query) {
            const hasNewerSyncData = syncData && // We only need this undefined check to handle older dehydration
            // payloads that might not have dehydratedAt
            dehydratedAt !== void 0 && dehydratedAt > query.state.dataUpdatedAt;
            if (state.dataUpdatedAt > query.state.dataUpdatedAt || hasNewerSyncData) {
                const { fetchStatus: _ignored, ...serializedState } = state;
                query.setState({
                    ...serializedState,
                    data
                });
            }
        } else {
            var _client_getDefaultOptions_hydrate, _options_defaultOptions;
            query = queryCache.build(client, {
                ...(_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.queries,
                ...options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.queries,
                queryKey,
                queryHash,
                meta
            }, // Reset fetch status to idle to avoid
            // query being stuck in fetching state upon hydration
            {
                ...state,
                data,
                fetchStatus: "idle",
                status: data !== void 0 ? "success" : state.status
            });
        }
        if (promise && !existingQueryIsPending && !existingQueryIsFetching && // Only hydrate if dehydration is newer than any existing data,
        // this is always true for new queries
        (dehydratedAt === void 0 || dehydratedAt > query.state.dataUpdatedAt)) {
            void query.fetch(void 0, {
                // RSC transformed promises are not thenable
                initialPromise: Promise.resolve(promise).then(deserializeData)
            });
        }
    });
}
;
 //# sourceMappingURL=hydration.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_apply_descriptor_update
]);
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_field_update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_apply_descriptor_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js [app-client] (ecmascript)");
;
;
function _class_private_field_update(receiver, privateMap) {
    var descriptor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_extract_field_descriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, privateMap, "update");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_apply_descriptor_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(receiver, descriptor);
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_get
]);
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_private_method_init
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_check_private_redeclaration.js [app-client] (ecmascript)");
;
function _class_private_method_init(obj, privateSet) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_check_private_redeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(obj, privateSet);
    privateSet.add(obj);
}
;
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/notifyManager.ts
__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
var defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/subscribable.ts
__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
var Subscribable = class {
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/focusManager.ts
__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
var _focused, _cleanup, _setup;
;
;
var FocusManager = (_focused = /*#__PURE__*/ new WeakMap(), _cleanup = /*#__PURE__*/ new WeakMap(), _setup = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    onSubscribe() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup)) {
            this.setEventListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup));
        }
    }
    onUnsubscribe() {
        var _this, _this1, _ref;
        if (!this.hasListeners()) {
            (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, void 0);
        }
    }
    setEventListener(setup) {
        var _this, _this1, _ref;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, setup);
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        }));
    }
    setFocused(focused) {
        const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused) !== focused;
        if (changed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused, focused);
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        var _globalThis_document;
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused) === "boolean") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused);
        }
        return ((_globalThis_document = globalThis.document) === null || _globalThis_document === void 0 ? void 0 : _globalThis_document.visibilityState) !== "hidden";
    }
    constructor(){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _focused, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        });
    }
});
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/onlineManager.ts
__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
var _online, _cleanup, _setup;
;
;
var OnlineManager = (_online = /*#__PURE__*/ new WeakMap(), _cleanup = /*#__PURE__*/ new WeakMap(), _setup = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    onSubscribe() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup)) {
            this.setEventListener((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup));
        }
    }
    onUnsubscribe() {
        var _this, _this1, _ref;
        if (!this.hasListeners()) {
            (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, void 0);
        }
    }
    setEventListener(setup) {
        var _this, _this1, _ref;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, setup);
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _cleanup)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, setup(this.setOnline.bind(this)));
    }
    setOnline(online) {
        const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online) !== online;
        if (changed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online, online);
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online);
    }
    constructor(){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _online, {
            writable: true,
            value: true
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cleanup, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _setup, (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        });
    }
});
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/retryer.ts
__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode !== null && networkMode !== void 0 ? networkMode : "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options === null || options === void 0 ? void 0 : options.revert;
        this.silent = options === null || options === void 0 ? void 0 : options.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            var _config_onCancel;
            const error = new CancelledError(cancelOptions);
            reject(error);
            (_config_onCancel = config.onCancel) === null || _config_onCancel === void 0 ? void 0 : _config_onCancel.call(config, error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn === null || continueFn === void 0 ? void 0 : continueFn();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn === null || continueFn === void 0 ? void 0 : continueFn();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            var _config_onPause;
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            (_config_onPause = config.onPause) === null || _config_onPause === void 0 ? void 0 : _config_onPause.call(config);
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                var _config_onContinue;
                (_config_onContinue = config.onContinue) === null || _config_onContinue === void 0 ? void 0 : _config_onContinue.call(config);
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise !== null && initialPromise !== void 0 ? initialPromise : config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            var _config_onFail;
            if (isResolved()) {
                return;
            }
            var _config_retry;
            const retry = (_config_retry = config.retry) !== null && _config_retry !== void 0 ? _config_retry : __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3;
            var _config_retryDelay;
            const retryDelay = (_config_retryDelay = config.retryDelay) !== null && _config_retryDelay !== void 0 ? _config_retryDelay : defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            (_config_onFail = config.onFail) === null || _config_onFail === void 0 ? void 0 : _config_onFail.call(config, failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn === null || continueFn === void 0 ? void 0 : continueFn();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/removable.ts
__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
var _gcTimeout;
;
;
var Removable = (_gcTimeout = /*#__PURE__*/ new WeakMap(), class {
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime));
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime !== null && newGcTime !== void 0 ? newGcTime : __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3);
    }
    clearGcTimeout() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout, void 0);
        }
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _gcTimeout, {
            writable: true,
            value: void 0
        });
    }
});
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/query.ts
__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
;
;
;
;
;
var _initialState, _revertState, _cache, _client, _retryer, _defaultOptions, _abortSignalConsumed, _dispatch, _class;
;
;
;
;
var Query = (_initialState = /*#__PURE__*/ new WeakMap(), _revertState = /*#__PURE__*/ new WeakMap(), _cache = /*#__PURE__*/ new WeakMap(), _client = /*#__PURE__*/ new WeakMap(), _retryer = /*#__PURE__*/ new WeakMap(), _defaultOptions = /*#__PURE__*/ new WeakMap(), _abortSignalConsumed = /*#__PURE__*/ new WeakMap(), _dispatch = /*#__PURE__*/ new WeakSet(), _class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    get meta() {
        return this.options.meta;
    }
    get promise() {
        var _class_private_field_get;
        return (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.promise;
    }
    setOptions(options) {
        this.options = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions),
            ...options
        };
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setData(defaultState.data, {
                    updatedAt: defaultState.dataUpdatedAt,
                    manual: true
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState, defaultState);
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
            data,
            type: "success",
            dataUpdatedAt: options === null || options === void 0 ? void 0 : options.updatedAt,
            manual: options === null || options === void 0 ? void 0 : options.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        var _class_private_field_get, _class_private_field_get1;
        const promise = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.promise;
        (_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get1 === void 0 ? void 0 : _class_private_field_get1.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState));
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime() {
        let staleTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        var _class_private_field_get;
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer === null || observer === void 0 ? void 0 : observer.refetch({
            cancelRefetch: false
        });
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.continue();
    }
    onOnline() {
        var _class_private_field_get;
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer === null || observer === void 0 ? void 0 : observer.refetch({
            cancelRefetch: false
        });
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed)) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).cancel({
                            revert: true
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        var _class_private_field_get, _this_options_behavior, _context_fetchOptions;
        if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        ((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.status()) !== "rejected") {
            if (this.state.data !== void 0 && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.cancelRefetch)) {
                this.cancel({
                    silent: true
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).continueRetry();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, true);
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, false);
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client),
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        (_this_options_behavior = this.options.behavior) === null || _this_options_behavior === void 0 ? void 0 : _this_options_behavior.onFetch(context, this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState, this.state);
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context_fetchOptions = context.fetchOptions) === null || _context_fetchOptions === void 0 ? void 0 : _context_fetchOptions.meta)) {
            var _context_fetchOptions1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "fetch",
                meta: (_context_fetchOptions1 = context.fetchOptions) === null || _context_fetchOptions1 === void 0 ? void 0 : _context_fetchOptions1.meta
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) {
                    this.setState({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState),
                        fetchStatus: "idle"
                    });
                }
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "pause"
                });
            },
            onContinue: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        }));
        try {
            var _class_private_field_get_config_onSuccess, _class_private_field_get_config, _class_private_field_get_config_onSettled, _class_private_field_get_config1;
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ".concat(this.queryHash));
                }
                throw new Error("".concat(this.queryHash, " data is undefined"));
            }
            this.setData(data);
            (_class_private_field_get_config_onSuccess = (_class_private_field_get_config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onSuccess) === null || _class_private_field_get_config_onSuccess === void 0 ? void 0 : _class_private_field_get_config_onSuccess.call(_class_private_field_get_config, data, this);
            (_class_private_field_get_config_onSettled = (_class_private_field_get_config1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onSettled) === null || _class_private_field_get_config_onSettled === void 0 ? void 0 : _class_private_field_get_config_onSettled.call(_class_private_field_get_config1, data, this.state.error, this);
            return data;
        } catch (error) {
            var _class_private_field_get_config_onError, _class_private_field_get_config2, _class_private_field_get_config_onSettled1, _class_private_field_get_config3;
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).promise;
                } else if (error.revert) {
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "error",
                error
            });
            (_class_private_field_get_config_onError = (_class_private_field_get_config2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onError) === null || _class_private_field_get_config_onError === void 0 ? void 0 : _class_private_field_get_config_onError.call(_class_private_field_get_config2, error, this);
            (_class_private_field_get_config_onSettled1 = (_class_private_field_get_config3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).config).onSettled) === null || _class_private_field_get_config_onSettled1 === void 0 ? void 0 : _class_private_field_get_config_onSettled1.call(_class_private_field_get_config3, this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    constructor(config){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _abortSignalConsumed, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, config.defaultOptions);
        this.setOptions(config.options);
        this.observers = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, config.client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache());
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState, getDefaultState(this.options));
        var _config_state;
        this.state = (_config_state = config.state) !== null && _config_state !== void 0 ? _config_state : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _initialState);
        this.scheduleGc();
    }
}, _class);
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt !== null && initialDataUpdatedAt !== void 0 ? initialDataUpdatedAt : Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
function dispatch(action) {
    const reducer = (state)=>{
        switch(action.type){
            case "failed":
                return {
                    ...state,
                    fetchFailureCount: action.failureCount,
                    fetchFailureReason: action.error
                };
            case "pause":
                return {
                    ...state,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...state,
                    fetchStatus: "fetching"
                };
            case "fetch":
                var _action_meta;
                return {
                    ...state,
                    ...fetchState(state.data, this.options),
                    fetchMeta: (_action_meta = action.meta) !== null && _action_meta !== void 0 ? _action_meta : null
                };
            case "success":
                var _action_dataUpdatedAt;
                const newState = {
                    ...state,
                    data: action.data,
                    dataUpdateCount: state.dataUpdateCount + 1,
                    dataUpdatedAt: (_action_dataUpdatedAt = action.dataUpdatedAt) !== null && _action_dataUpdatedAt !== void 0 ? _action_dataUpdatedAt : Date.now(),
                    error: null,
                    isInvalidated: false,
                    status: "success",
                    ...!action.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _revertState, action.manual ? newState : void 0);
                return newState;
            case "error":
                const error = action.error;
                return {
                    ...state,
                    error,
                    errorUpdateCount: state.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: state.fetchFailureCount + 1,
                    fetchFailureReason: error,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...state,
                    isInvalidated: true
                };
            case "setState":
                return {
                    ...state,
                    ...action.state
                };
        }
    };
    this.state = reducer(this.state);
    __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
        this.observers.forEach((observer)=>{
            observer.onQueryUpdate();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _cache).notify({
            query: this,
            type: "updated",
            action
        });
    });
}
 //# sourceMappingURL=query.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryCache.ts
__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
;
var _queries;
;
;
;
;
var QueryCache = (_queries = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    build(client, options, state) {
        const queryKey = options.queryKey;
        var _options_queryHash;
        const queryHash = (_options_queryHash = options.queryHash) !== null && _options_queryHash !== void 0 ? _options_queryHash : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).has(query.queryHash)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).get(queryHash);
    }
    getAll() {
        return [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries).values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll() {
        let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
    constructor(config = {}){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries, {
            writable: true,
            value: void 0
        });
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queries, /* @__PURE__ */ new Map());
    }
});
;
 //# sourceMappingURL=queryCache.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutation.ts
__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
;
;
;
;
;
var _client, _observers, _mutationCache, _retryer, _dispatch, _class;
;
;
;
var Mutation = (_client = /*#__PURE__*/ new WeakMap(), _observers = /*#__PURE__*/ new WeakMap(), _mutationCache = /*#__PURE__*/ new WeakMap(), _retryer = /*#__PURE__*/ new WeakMap(), _dispatch = /*#__PURE__*/ new WeakSet(), _class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).includes(observer)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).push(observer);
            this.clearGcTimeout();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).filter((x)=>x !== observer));
        this.scheduleGc();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).remove(this);
            }
        }
    }
    continue() {
        var _class_private_field_get;
        var _class_private_field_get_continue;
        return (_class_private_field_get_continue = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.continue()) !== null && _class_private_field_get_continue !== void 0 ? _class_private_field_get_continue : // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        var _this_options_retry;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "pause"
                });
            },
            onContinue,
            retry: (_this_options_retry = this.options.retry) !== null && _this_options_retry !== void 0 ? _this_options_retry : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).canRun(this)
        }));
        const restored = this.state.status === "pending";
        const isPaused = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).canStart();
        try {
            var _class_private_field_get_config_onSuccess, _class_private_field_get_config, _this_options_onSuccess, _this_options, _class_private_field_get_config_onSettled, _class_private_field_get_config1, _this_options_onSettled, _this_options1;
            if (restored) {
                onContinue();
            } else {
                var _class_private_field_get_config_onMutate, _class_private_field_get_config2, _this_options_onMutate, _this_options2;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "pending",
                    variables,
                    isPaused
                });
                await ((_class_private_field_get_config_onMutate = (_class_private_field_get_config2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onMutate) === null || _class_private_field_get_config_onMutate === void 0 ? void 0 : _class_private_field_get_config_onMutate.call(_class_private_field_get_config2, variables, this, mutationFnContext));
                const context = await ((_this_options_onMutate = (_this_options2 = this.options).onMutate) === null || _this_options_onMutate === void 0 ? void 0 : _this_options_onMutate.call(_this_options2, variables, mutationFnContext));
                if (context !== this.state.context) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer).start();
            await ((_class_private_field_get_config_onSuccess = (_class_private_field_get_config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onSuccess) === null || _class_private_field_get_config_onSuccess === void 0 ? void 0 : _class_private_field_get_config_onSuccess.call(_class_private_field_get_config, data, variables, this.state.context, this, mutationFnContext));
            await ((_this_options_onSuccess = (_this_options = this.options).onSuccess) === null || _this_options_onSuccess === void 0 ? void 0 : _this_options_onSuccess.call(_this_options, data, variables, this.state.context, mutationFnContext));
            await ((_class_private_field_get_config_onSettled = (_class_private_field_get_config1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onSettled) === null || _class_private_field_get_config_onSettled === void 0 ? void 0 : _class_private_field_get_config_onSettled.call(_class_private_field_get_config1, data, null, this.state.variables, this.state.context, this, mutationFnContext));
            await ((_this_options_onSettled = (_this_options1 = this.options).onSettled) === null || _this_options_onSettled === void 0 ? void 0 : _this_options_onSettled.call(_this_options1, data, null, variables, this.state.context, mutationFnContext));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                var _class_private_field_get_config_onError, _class_private_field_get_config3, _this_options_onError, _this_options3, _class_private_field_get_config_onSettled1, _class_private_field_get_config4, _this_options_onSettled1, _this_options4;
                await ((_class_private_field_get_config_onError = (_class_private_field_get_config3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onError) === null || _class_private_field_get_config_onError === void 0 ? void 0 : _class_private_field_get_config_onError.call(_class_private_field_get_config3, error, variables, this.state.context, this, mutationFnContext));
                await ((_this_options_onError = (_this_options3 = this.options).onError) === null || _this_options_onError === void 0 ? void 0 : _this_options_onError.call(_this_options3, error, variables, this.state.context, mutationFnContext));
                await ((_class_private_field_get_config_onSettled1 = (_class_private_field_get_config4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).config).onSettled) === null || _class_private_field_get_config_onSettled1 === void 0 ? void 0 : _class_private_field_get_config_onSettled1.call(_class_private_field_get_config4, void 0, error, this.state.variables, this.state.context, this, mutationFnContext));
                await ((_this_options_onSettled1 = (_this_options4 = this.options).onSettled) === null || _this_options_onSettled1 === void 0 ? void 0 : _this_options_onSettled1.call(_this_options4, void 0, error, variables, this.state.context, mutationFnContext));
                throw error;
            } finally{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch, dispatch).call(this, {
                    type: "error",
                    error
                });
            }
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).runNext(this);
        }
    }
    constructor(config){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _dispatch), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _retryer, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, config.client);
        this.mutationId = config.mutationId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, config.mutationCache);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers, []);
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
}, _class);
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
function dispatch(action) {
    const reducer = (state)=>{
        switch(action.type){
            case "failed":
                return {
                    ...state,
                    failureCount: action.failureCount,
                    failureReason: action.error
                };
            case "pause":
                return {
                    ...state,
                    isPaused: true
                };
            case "continue":
                return {
                    ...state,
                    isPaused: false
                };
            case "pending":
                return {
                    ...state,
                    context: action.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: action.isPaused,
                    status: "pending",
                    variables: action.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...state,
                    data: action.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: false
                };
            case "error":
                return {
                    ...state,
                    data: void 0,
                    error: action.error,
                    failureCount: state.failureCount + 1,
                    failureReason: action.error,
                    isPaused: false,
                    status: "error"
                };
        }
    };
    this.state = reducer(this.state);
    __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _observers).forEach((observer)=>{
            observer.onMutationUpdate(action);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).notify({
            mutation: this,
            type: "updated",
            action
        });
    });
}
 //# sourceMappingURL=mutation.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationCache.ts
__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
;
;
var _mutations, _scopes, _mutationId;
;
;
;
;
var MutationCache = (_mutations = /*#__PURE__*/ new WeakMap(), _scopes = /*#__PURE__*/ new WeakMap(), _mutationId = /*#__PURE__*/ new WeakMap(), class extends __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mutation"]({
            client,
            mutationCache: this,
            mutationId: ++(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationId).value,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope);
            if (scopedMutations) {
                scopedMutations.push(mutation);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).set(scope, [
                    mutation
                ]);
            }
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) {
                            scopedMutations.splice(index, 1);
                        }
                    } else if (scopedMutations[0] === mutation) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).delete(scope);
                    }
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope);
            const firstPendingMutation = mutationsWithSameScope === null || mutationsWithSameScope === void 0 ? void 0 : mutationsWithSameScope.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else {
            return true;
        }
    }
    runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            var _class_private_field_get_get;
            const foundMutation = (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).get(scope)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.find((m)=>m !== mutation && m.state.isPaused);
            var _foundMutation_continue;
            return (_foundMutation_continue = foundMutation === null || foundMutation === void 0 ? void 0 : foundMutation.continue()) !== null && _foundMutation_continue !== void 0 ? _foundMutation_continue : Promise.resolve();
        } else {
            return Promise.resolve();
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations).clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes).clear();
        });
    }
    getAll() {
        return Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations));
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll() {
        let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]))));
    }
    constructor(config = {}){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationId, {
            writable: true,
            value: void 0
        });
        this.config = config;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutations, /* @__PURE__ */ new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _scopes, /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationId, 0);
    }
});
function scopeFor(mutation) {
    var _mutation_options_scope;
    return (_mutation_options_scope = mutation.options.scope) === null || _mutation_options_scope === void 0 ? void 0 : _mutation_options_scope.id;
}
;
 //# sourceMappingURL=mutationCache.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryBehavior.ts
__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            var _context_fetchOptions_meta_fetchMore, _context_fetchOptions_meta, _context_fetchOptions, _context_state_data, _context_state_data1;
            const options = context.options;
            const direction = (_context_fetchOptions = context.fetchOptions) === null || _context_fetchOptions === void 0 ? void 0 : (_context_fetchOptions_meta = _context_fetchOptions.meta) === null || _context_fetchOptions_meta === void 0 ? void 0 : (_context_fetchOptions_meta_fetchMore = _context_fetchOptions_meta.fetchMore) === null || _context_fetchOptions_meta_fetchMore === void 0 ? void 0 : _context_fetchOptions_meta_fetchMore.direction;
            const oldPages = ((_context_state_data = context.state.data) === null || _context_state_data === void 0 ? void 0 : _context_state_data.pages) || [];
            const oldPageParams = ((_context_state_data1 = context.state.data) === null || _context_state_data1 === void 0 ? void 0 : _context_state_data1.pageParams) || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages !== null && pages !== void 0 ? pages : oldPages.length;
                    do {
                        var _oldPageParams_;
                        const param = currentPage === 0 ? (_oldPageParams_ = oldPageParams[0]) !== null && _oldPageParams_ !== void 0 ? _oldPageParams_ : options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    var _context_options_persister, _context_options;
                    return (_context_options_persister = (_context_options = context.options).persister) === null || _context_options_persister === void 0 ? void 0 : _context_options_persister.call(_context_options, fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, param) {
    let { pages, pageParams } = param;
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, param) {
    let { pages, pageParams } = param;
    var _options_getPreviousPageParam;
    return pages.length > 0 ? (_options_getPreviousPageParam = options.getPreviousPageParam) === null || _options_getPreviousPageParam === void 0 ? void 0 : _options_getPreviousPageParam.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryClient.ts
__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@swc/helpers/esm/_class_private_field_update.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Melonthony/melonthony/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-client] (ecmascript)");
;
;
;
;
var _queryCache, _mutationCache, _defaultOptions, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline;
;
;
;
;
;
;
;
var QueryClient = (_queryCache = /*#__PURE__*/ new WeakMap(), _mutationCache = /*#__PURE__*/ new WeakMap(), _defaultOptions = /*#__PURE__*/ new WeakMap(), _queryDefaults = /*#__PURE__*/ new WeakMap(), _mutationDefaults = /*#__PURE__*/ new WeakMap(), _mountCount = /*#__PURE__*/ new WeakMap(), _unsubscribeFocus = /*#__PURE__*/ new WeakMap(), _unsubscribeOnline = /*#__PURE__*/ new WeakMap(), class {
    mount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount).value++;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount) !== 1) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeFocus, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).onFocus();
            }
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeOnline, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).onOnline();
            }
        }));
    }
    unmount() {
        var _this, _this1, _ref, _this2, _this3, _ref1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_update$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount).value--;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount) !== 0) return;
        (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref = _this1 = this, _unsubscribeFocus)) === null || _this === void 0 ? void 0 : _this.call(_this1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeFocus, void 0);
        (_this2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref1 = _this3 = this, _unsubscribeOnline)) === null || _this2 === void 0 ? void 0 : _this2.call(_this3);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeOnline, void 0);
    }
    isFetching(filters) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        var _class_private_field_get_get;
        const options = this.defaultQueryOptions({
            queryKey
        });
        return (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).get(options.queryHash)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) {
            return this.fetchQuery(options);
        }
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
            void this.prefetchQuery(defaultedOptions);
        }
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).map((param)=>{
            let { queryKey, state } = param;
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).get(defaultedOptions.queryHash);
        const prevData = query === null || query === void 0 ? void 0 : query.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).map((param)=>{
                let { queryKey } = param;
                return [
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ];
            }));
    }
    getQueryState(queryKey) {
        var _class_private_field_get_get;
        const options = this.defaultQueryOptions({
            queryKey
        });
        return (_class_private_field_get_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).get(options.queryHash)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.state;
    }
    removeQueries(filters) {
        const queryCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache);
        __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters) {
        let cancelOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if ((filters === null || filters === void 0 ? void 0 : filters.refetchType) === "none") {
                return Promise.resolve();
            }
            var _filters_refetchType, _ref;
            return this.refetchQueries({
                ...filters,
                type: (_ref = (_filters_refetchType = filters === null || filters === void 0 ? void 0 : filters.refetchType) !== null && _filters_refetchType !== void 0 ? _filters_refetchType : filters === null || filters === void 0 ? void 0 : filters.type) !== null && _ref !== void 0 ? _ref : "active"
            }, options);
        });
    }
    refetchQueries(filters) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _options_cancelRefetch;
        const fetchOptions = {
            ...options,
            cancelRefetch: (_options_cancelRefetch = options.cancelRefetch) !== null && _options_cancelRefetch !== void 0 ? _options_cancelRefetch : true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache);
    }
    getMutationCache() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache);
    }
    getDefaultOptions() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions);
    }
    setDefaultOptions(options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, options);
    }
    setQueryDefaults(queryKey, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults).set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults).values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults).set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults).values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions).queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options === null || options === void 0 ? void 0 : options._defaulted) {
            return options;
        }
        return {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions).mutations,
            ...(options === null || options === void 0 ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache).clear();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache).clear();
    }
    constructor(config = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeFocus, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _unsubscribeOnline, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryCache, config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryCache"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationCache, config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationCache"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _defaultOptions, config.defaultOptions || {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _queryDefaults, /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutationDefaults, /* @__PURE__ */ new Map());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Melonthony$2f$melonthony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mountCount, 0);
    }
});
;
 //# sourceMappingURL=queryClient.js.map
}),
]);

//# sourceMappingURL=_b58e1c66._.js.map