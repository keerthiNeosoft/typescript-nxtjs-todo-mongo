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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction createUser(username, password) {\n    return _createUser.apply(this, arguments);\n}\nfunction _createUser() {\n    _createUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, password) {\n        var response, data;\n        return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"/api/auth/signup\", {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            username: username,\n                            password: password\n                        }),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    throw new Error(data.message || \"Something went wrong!\");\n                case 8:\n                    return _ctx.abrupt(\"return\", data);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _createUser.apply(this, arguments);\n}\nfunction AuthForm() {\n    var switchAuthModeHandler = function switchAuthModeHandler() {\n        setIsLogin(function(prevState) {\n            return !prevState;\n        });\n        var allLabels = document.getElementsByTagName(\"label\");\n        for(var i = 0; i < allLabels.length; i++){\n            if (allLabels[i].htmlFor === \"message\") {\n                allLabels[i].innerHTML = \"\";\n            }\n        }\n    };\n    _s();\n    var nameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLogin = ref[0], setIsLogin = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var allLabels, messageLabel, i, enteredUsername, enteredPassword, result, result1;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        allLabels = document.getElementsByTagName(\"label\");\n                        ;\n                        for(i = 0; i < allLabels.length; i++){\n                            if (allLabels[i].htmlFor === \"message\") {\n                                messageLabel = allLabels[i];\n                            }\n                        }\n                        enteredUsername = nameInputRef.current && nameInputRef.current.value;\n                        enteredPassword = passwordInputRef.current && passwordInputRef.current.value;\n                        if (!isLogin) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.next = 9;\n                        return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                            redirect: false,\n                            username: enteredUsername,\n                            password: enteredPassword\n                        });\n                    case 9:\n                        result = _ctx.sent;\n                        messageLabel.innerHTML = result.error;\n                        console.log(\"=============result sign\", result.error);\n                        if (!(result === null || result === void 0 ? void 0 : result.error)) {\n                            // set some auth state\n                            router.replace(\"/profile\");\n                        }\n                        _ctx.next = 27;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        if (!(enteredUsername && enteredPassword)) {\n                            _ctx.next = 22;\n                            break;\n                        }\n                        _ctx.next = 19;\n                        return createUser(enteredUsername, enteredPassword);\n                    case 19:\n                        result1 = _ctx.sent;\n                        if (result1.error) {\n                            messageLabel.innerHTML = result1.error;\n                        }\n                        if (result1.status === 201) {\n                            nameInputRef.current.value = \"\";\n                            passwordInputRef.current.value = \"\";\n                        }\n                    case 22:\n                        _ctx.next = 27;\n                        break;\n                    case 24:\n                        _ctx.prev = 24;\n                        _ctx.t0 = _ctx[\"catch\"](15);\n                        console.log(_ctx.t0);\n                    case 27:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    15,\n                    24\n                ]\n            ]);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                required: true,\n                                ref: nameInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                required: true,\n                                ref: passwordInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().msglabel)\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"j26o4LSwuBAWgQxxQETX7mKslms=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCOzs7OztvQ0FBVTswQ0FDdkQsOERBQUNrQyxRQUFNO2dDQUNMTixJQUFJLEVBQUMsUUFBUTtnQ0FDYlYsU0FBUyxFQUFFL0MscUVBQWM7Z0NBQ3pCaUUsT0FBTyxFQUFFaEQscUJBQXFCOzBDQUU3QlksT0FBTyxHQUFHLG9CQUFvQixHQUFHLDZCQUE2Qjs7Ozs7b0NBQ3hEOzs7Ozs7NEJBQ0w7Ozs7OztvQkFDRDs7Ozs7O1lBQ0MsQ0FDVjtDQUNIO0dBdkdRYixRQUFROztRQUtBakIsa0RBQVM7OztBQUxqQmlCLEtBQUFBLFFBQVE7QUF5R2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS50c3g/ODI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gQXV0aEZvcm0oKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAgIGxldCBhbGxMYWJlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxhYmVsXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWxsTGFiZWxzW2ldLmh0bWxGb3IgPT09IFwibWVzc2FnZVwiKSB7XG4gICAgICAgIGFsbExhYmVsc1tpXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBhbGxMYWJlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxhYmVsXCIpO1xuICAgIGxldCBtZXNzYWdlTGFiZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbExhYmVsc1tpXS5odG1sRm9yID09PSBcIm1lc3NhZ2VcIikge1xuICAgICAgICBtZXNzYWdlTGFiZWwgPSBhbGxMYWJlbHNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZFVzZXJuYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQgJiYgbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID1cbiAgICAgIHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudCAmJiBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgdXNlcm5hbWU6IGVudGVyZWRVc2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBtZXNzYWdlTGFiZWwuaW5uZXJIVE1MID0gcmVzdWx0LmVycm9yO1xuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09cmVzdWx0IHNpZ25cIiwgcmVzdWx0LmVycm9yKTtcbiAgICAgIGlmICghcmVzdWx0Py5lcnJvcikge1xuICAgICAgICAvLyBzZXQgc29tZSBhdXRoIHN0YXRlXG5cbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvcHJvZmlsZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGVudGVyZWRVc2VybmFtZSAmJiBlbnRlcmVkUGFzc3dvcmQpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVudGVyZWRVc2VybmFtZSwgZW50ZXJlZFBhc3N3b3JkKTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VMYWJlbC5pbm5lckhUTUwgPSByZXN1bHQuZXJyb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0bGFiZWx9PlxuICAgICAgICAgICAgWW91ciBOYW1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZCByZWY9e25hbWVJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGxhYmVsfT5cbiAgICAgICAgICAgIFlvdXIgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJlZj17cGFzc3dvcmRJbnB1dFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1zZ2xhYmVsfT48L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInNpZ25JbiIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJzd2l0Y2hBdXRoTW9kZUhhbmRsZXIiLCJzZXRJc0xvZ2luIiwicHJldlN0YXRlIiwiYWxsTGFiZWxzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJsZW5ndGgiLCJodG1sRm9yIiwiaW5uZXJIVE1MIiwibmFtZUlucHV0UmVmIiwicGFzc3dvcmRJbnB1dFJlZiIsImlzTG9naW4iLCJyb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJtZXNzYWdlTGFiZWwiLCJlbnRlcmVkVXNlcm5hbWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJyZXN1bHQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJlZGlyZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsInN0YXR1cyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhdXRoIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJ0ZXh0bGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlcXVpcmVkIiwicmVmIiwiYWN0aW9ucyIsIm1zZ2xhYmVsIiwiYnV0dG9uIiwidG9nZ2xlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/auth-form.tsx\n"));

/***/ })

});