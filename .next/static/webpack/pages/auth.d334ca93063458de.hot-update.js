"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./components/auth/auth-form.tsx":
/*!***************************************!*\
  !*** ./components/auth/auth-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction createUser(username, password) {\n    return _createUser.apply(this, arguments);\n}\nfunction _createUser() {\n    _createUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, password) {\n        var response, data;\n        return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"/api/auth/signup\", {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            username: username,\n                            password: password\n                        }),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    throw new Error(data.message || \"Something went wrong!\");\n                case 8:\n                    return _ctx.abrupt(\"return\", data);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _createUser.apply(this, arguments);\n}\nfunction AuthForm() {\n    var switchAuthModeHandler = function switchAuthModeHandler() {\n        setIsLogin(function(prevState) {\n            return !prevState;\n        });\n    };\n    _s();\n    var nameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLogin = ref[0], setIsLogin = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var allLabels, messageLabel, i, enteredUsername, enteredPassword, result, result1, response;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        allLabels = document.getElementsByTagName(\"label\");\n                        ;\n                        for(i = 0; i < allLabels.length; i++){\n                            if (allLabels[i].htmlFor === \"message\") {\n                                messageLabel = allLabels[i];\n                            }\n                        }\n                        if (!(nameInputRef.current.value === \"\" || passwordInputRef.current.value === \"\")) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        messageLabel = \"Please enter value\";\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        enteredUsername = nameInputRef.current && nameInputRef.current.value;\n                        enteredPassword = passwordInputRef.current && passwordInputRef.current.value;\n                        if (!isLogin) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.next = 12;\n                        return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                            redirect: false,\n                            username: enteredUsername,\n                            password: enteredPassword\n                        });\n                    case 12:\n                        result = _ctx.sent;\n                        if (!(result === null || result === void 0 ? void 0 : result.error)) {\n                            // set some auth state\n                            router.replace(\"/profile\");\n                        }\n                        _ctx.next = 32;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        if (!(enteredUsername && enteredPassword)) {\n                            _ctx.next = 27;\n                            break;\n                        }\n                        _ctx.next = 20;\n                        return createUser(enteredUsername, enteredPassword);\n                    case 20:\n                        result1 = _ctx.sent;\n                        console.log(result1);\n                        _ctx.next = 24;\n                        return result1.json();\n                    case 24:\n                        response = _ctx.sent;\n                        if (result1.status === 201) {\n                            messageLabel.style.color = \"green\";\n                        }\n                        messageLabel = response;\n                    case 27:\n                        _ctx.next = 32;\n                        break;\n                    case 29:\n                        _ctx.prev = 29;\n                        _ctx.t0 = _ctx[\"catch\"](16);\n                        console.log(_ctx.t0);\n                    case 32:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    16,\n                    29\n                ]\n            ]);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                required: true,\n                                ref: nameInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                required: true,\n                                ref: passwordInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().errorlabel)\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"j26o4LSwuBAWgQxxQETX7mKslms=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxRQUFRO0FBcUdqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0udHN4PzgyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIEF1dGhGb3JtKCk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3QgbmFtZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZElucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIoKSB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhbGxMYWJlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxhYmVsXCIpO1xuICAgIGxldCBtZXNzYWdlTGFiZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbExhYmVsc1tpXS5odG1sRm9yID09PSBcIm1lc3NhZ2VcIikge1xuICAgICAgICBtZXNzYWdlTGFiZWwgPSBhbGxMYWJlbHNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlID09PSBcIlwiIHx8XG4gICAgICBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWUgPT09IFwiXCJcbiAgICApIHtcbiAgICAgIG1lc3NhZ2VMYWJlbCA9IFwiUGxlYXNlIGVudGVyIHZhbHVlXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZFVzZXJuYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQgJiYgbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID1cbiAgICAgIHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudCAmJiBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgdXNlcm5hbWU6IGVudGVyZWRVc2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdD8uZXJyb3IpIHtcbiAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9wcm9maWxlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZW50ZXJlZFVzZXJuYW1lICYmIGVudGVyZWRQYXNzd29yZCkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZFVzZXJuYW1lLCBlbnRlcmVkUGFzc3dvcmQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgbWVzc2FnZUxhYmVsLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlTGFiZWwgPSByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRsYWJlbH0+XG4gICAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIHJlZj17bmFtZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0bGFiZWx9PlxuICAgICAgICAgICAgWW91ciBQYXNzd29yZFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JsYWJlbH0+PC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IFwiQ3JlYXRlIG5ldyBhY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzaWduSW4iLCJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwic2V0SXNMb2dpbiIsInByZXZTdGF0ZSIsIm5hbWVJbnB1dFJlZiIsInBhc3N3b3JkSW5wdXRSZWYiLCJpc0xvZ2luIiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwiYWxsTGFiZWxzIiwibWVzc2FnZUxhYmVsIiwiaSIsImVudGVyZWRVc2VybmFtZSIsImVudGVyZWRQYXNzd29yZCIsInJlc3VsdCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsImh0bWxGb3IiLCJjdXJyZW50IiwidmFsdWUiLCJyZWRpcmVjdCIsImVycm9yIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdHlsZSIsImNvbG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImF1dGgiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2wiLCJsYWJlbCIsInRleHRsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJyZWYiLCJhY3Rpb25zIiwiZXJyb3JsYWJlbCIsImJ1dHRvbiIsInRvZ2dsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.tsx\n"));

/***/ })

});