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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction createUser(username, password) {\n    return _createUser.apply(this, arguments);\n}\nfunction _createUser() {\n    _createUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, password) {\n        var response, data;\n        return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"/api/auth/signup\", {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            username: username,\n                            password: password\n                        }),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    throw new Error(data.message || \"Something went wrong!\");\n                case 8:\n                    return _ctx.abrupt(\"return\", data);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _createUser.apply(this, arguments);\n}\nfunction AuthForm() {\n    var switchAuthModeHandler = function switchAuthModeHandler() {\n        setIsLogin(function(prevState) {\n            return !prevState;\n        });\n        var allLabels = document.getElementsByTagName(\"label\");\n        for(var i = 0; i < allLabels.length; i++){\n            if (allLabels[i].htmlFor === \"message\") {\n                allLabels[i].innerHTML = \"\";\n            }\n        }\n    };\n    _s();\n    var nameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLogin = ref[0], setIsLogin = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var allLabels, messageLabel, i, enteredUsername, enteredPassword, result, result1;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        allLabels = document.getElementsByTagName(\"label\");\n                        ;\n                        for(i = 0; i < allLabels.length; i++){\n                            if (allLabels[i].htmlFor === \"message\") {\n                                messageLabel = allLabels[i];\n                            }\n                        }\n                        enteredUsername = nameInputRef.current && nameInputRef.current.value;\n                        enteredPassword = passwordInputRef.current && passwordInputRef.current.value;\n                        if (!isLogin) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.next = 9;\n                        return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                            redirect: false,\n                            username: enteredUsername,\n                            password: enteredPassword\n                        });\n                    case 9:\n                        result = _ctx.sent;\n                        messageLabel.innerHTML = result.error;\n                        console.log(\"=============result sign\", result.error);\n                        if (!(result === null || result === void 0 ? void 0 : result.error)) {\n                            // set some auth state\n                            router.replace(\"/profile\");\n                        }\n                        _ctx.next = 28;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        if (!(enteredUsername && enteredPassword)) {\n                            _ctx.next = 23;\n                            break;\n                        }\n                        _ctx.next = 19;\n                        return createUser(enteredUsername, enteredPassword);\n                    case 19:\n                        result1 = _ctx.sent;\n                        console.log(result1);\n                        messageLabel.innerHTML = result1.error;\n                        if (result1.status === 201) {\n                            nameInputRef.current.value = \"\";\n                            passwordInputRef.current.value = \"\";\n                        }\n                    case 23:\n                        _ctx.next = 28;\n                        break;\n                    case 25:\n                        _ctx.prev = 25;\n                        _ctx.t0 = _ctx[\"catch\"](15);\n                        console.log(_ctx.t0);\n                    case 28:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    15,\n                    25\n                ]\n            ]);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                required: true,\n                                ref: nameInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                required: true,\n                                ref: passwordInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().msglabel)\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"j26o4LSwuBAWgQxxQETX7mKslms=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxnQkFBZ0I7Ozs7O29DQUFVOzBDQUN2RCw4REFBQ2tDLFFBQU07Z0NBQ0xOLElBQUksRUFBQyxRQUFRO2dDQUNiVixTQUFTLEVBQUUvQyxxRUFBYztnQ0FDekJpRSxPQUFPLEVBQUVoRCxxQkFBcUI7MENBRTdCWSxPQUFPLEdBQUcsb0JBQW9CLEdBQUcsNkJBQTZCOzs7OztvQ0FDeEQ7Ozs7Ozs0QkFDTDs7Ozs7O29CQUNEOzs7Ozs7WUFDQyxDQUNWO0NBQ0g7R0FyR1FiLFFBQVE7O1FBS0FqQixrREFBUzs7O0FBTGpCaUIsS0FBQUEsUUFBUTtBQXVHakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLnRzeD84MjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXV0aC1mb3JtLm1vZHVsZS5jc3NcIjtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBBdXRoRm9ybSgpOiBSZWFjdC5KU1guRWxlbWVudCB7XG4gIGNvbnN0IG5hbWVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gc3dpdGNoQXV0aE1vZGVIYW5kbGVyKCkge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gICAgbGV0IGFsbExhYmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGFiZWxcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxMYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhbGxMYWJlbHNbaV0uaHRtbEZvciA9PT0gXCJtZXNzYWdlXCIpIHtcbiAgICAgICAgYWxsTGFiZWxzW2ldLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFsbExhYmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGFiZWxcIik7XG4gICAgbGV0IG1lc3NhZ2VMYWJlbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWxsTGFiZWxzW2ldLmh0bWxGb3IgPT09IFwibWVzc2FnZVwiKSB7XG4gICAgICAgIG1lc3NhZ2VMYWJlbCA9IGFsbExhYmVsc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbnRlcmVkVXNlcm5hbWUgPSBuYW1lSW5wdXRSZWYuY3VycmVudCAmJiBuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPVxuICAgICAgcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50ICYmIHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIC8vIG9wdGlvbmFsOiBBZGQgdmFsaWRhdGlvblxuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICB1c2VybmFtZTogZW50ZXJlZFVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIG1lc3NhZ2VMYWJlbC5pbm5lckhUTUwgPSByZXN1bHQuZXJyb3I7XG4gICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT1yZXN1bHQgc2lnblwiLCByZXN1bHQuZXJyb3IpO1xuICAgICAgaWYgKCFyZXN1bHQ/LmVycm9yKSB7XG4gICAgICAgIC8vIHNldCBzb21lIGF1dGggc3RhdGVcblxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9wcm9maWxlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZW50ZXJlZFVzZXJuYW1lICYmIGVudGVyZWRQYXNzd29yZCkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZFVzZXJuYW1lLCBlbnRlcmVkUGFzc3dvcmQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgbWVzc2FnZUxhYmVsLmlubmVySFRNTCA9IHJlc3VsdC5lcnJvcjtcblxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgIG5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aH0+XG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGxhYmVsfT5cbiAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQgcmVmPXtuYW1lSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRsYWJlbH0+XG4gICAgICAgICAgICBZb3VyIFBhc3N3b3JkXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByZWY9e3Bhc3N3b3JkSW5wdXRSZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tc2dsYWJlbH0+PC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3N3aXRjaEF1dGhNb2RlSGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2dpbiA/IFwiQ3JlYXRlIG5ldyBhY2NvdW50XCIgOiBcIkxvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzaWduSW4iLCJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwiY3JlYXRlVXNlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwic2V0SXNMb2dpbiIsInByZXZTdGF0ZSIsImFsbExhYmVscyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwiaHRtbEZvciIsImlubmVySFRNTCIsIm5hbWVJbnB1dFJlZiIsInBhc3N3b3JkSW5wdXRSZWYiLCJpc0xvZ2luIiwicm91dGVyIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwibWVzc2FnZUxhYmVsIiwiZW50ZXJlZFVzZXJuYW1lIiwiZW50ZXJlZFBhc3N3b3JkIiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJyZWRpcmVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJzdGF0dXMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYXV0aCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY29udHJvbCIsImxhYmVsIiwidGV4dGxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInJlZiIsImFjdGlvbnMiLCJtc2dsYWJlbCIsImJ1dHRvbiIsInRvZ2dsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.tsx\n"));

/***/ })

});