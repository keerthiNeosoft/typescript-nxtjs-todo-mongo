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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction createUser(username, password) {\n    return _createUser.apply(this, arguments);\n}\nfunction _createUser() {\n    _createUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, password) {\n        var response, data;\n        return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"/api/auth/signup\", {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            username: username,\n                            password: password\n                        }),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    throw new Error(data.message || \"Something went wrong!\");\n                case 8:\n                    return _ctx.abrupt(\"return\", data);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _createUser.apply(this, arguments);\n}\nfunction AuthForm() {\n    var switchAuthModeHandler = function switchAuthModeHandler() {\n        setIsLogin(function(prevState) {\n            return !prevState;\n        });\n    };\n    _s();\n    var nameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLogin = ref[0], setIsLogin = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var allLabels, i, enteredUsername, enteredPassword, result, result1, response, i1;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        allLabels = document.getElementsByTagName(\"label\");\n                        if (!(nameInputRef.current.value === \"\" || passwordInputRef.current.value === \"\")) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        for(i = 0; i < allLabels.length; i++){\n                            if (allLabels[i].htmlFor.includes(\"error\")) {\n                                allLabels[i].innerHTML = \"Please enter value\";\n                            }\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        enteredUsername = nameInputRef.current && nameInputRef.current.value;\n                        enteredPassword = passwordInputRef.current && passwordInputRef.current.value;\n                        if (!isLogin) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.next = 10;\n                        return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                            redirect: false,\n                            username: enteredUsername,\n                            password: enteredPassword\n                        });\n                    case 10:\n                        result = _ctx.sent;\n                        if (!(result === null || result === void 0 ? void 0 : result.error)) {\n                            // set some auth state\n                            router.replace(\"/profile\");\n                        }\n                        _ctx.next = 29;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        if (!(enteredUsername && enteredPassword)) {\n                            _ctx.next = 24;\n                            break;\n                        }\n                        _ctx.next = 18;\n                        return createUser(enteredUsername, enteredPassword);\n                    case 18:\n                        result1 = _ctx.sent;\n                        console.log(result1);\n                        _ctx.next = 22;\n                        return result1.json();\n                    case 22:\n                        response = _ctx.sent;\n                        for(i1 = 0; i1 < allLabels.length; i1++){\n                            if (allLabels[i1].htmlFor.includes(\"error\")) {\n                                if (result1.status === 201) {\n                                    allLabels[i1].style.color = \"green\";\n                                }\n                                allLabels[i1].innerHTML = response;\n                            }\n                        }\n                    case 24:\n                        _ctx.next = 29;\n                        break;\n                    case 26:\n                        _ctx.prev = 26;\n                        _ctx.t0 = _ctx[\"catch\"](14);\n                        console.log(_ctx.t0);\n                    case 29:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    14,\n                    26\n                ]\n            ]);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Name\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                required: true,\n                                ref: nameInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().textlabel),\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                required: true,\n                                ref: passwordInputRef\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().errorlabel)\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_6___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/auth/auth-form.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"j26o4LSwuBAWgQxxQETX7mKslms=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsUUFBUTtnQ0FDYlYsU0FBUyxFQUFFakQscUVBQWM7Z0NBQ3pCbUUsT0FBTyxFQUFFbEQscUJBQXFCOzBDQUU3QkssT0FBTyxHQUFHLG9CQUFvQixHQUFHLDZCQUE2Qjs7Ozs7b0NBQ3hEOzs7Ozs7NEJBQ0w7Ozs7OztvQkFDRDs7Ozs7O1lBQ0MsQ0FDVjtDQUNIO0dBckdRTixRQUFROztRQUtBakIsa0RBQVM7OztBQUxqQmlCLEtBQUFBLFFBQVE7QUF1R2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS50c3g/ODI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gQXV0aEZvcm0oKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBhc3N3b3JkSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFsbExhYmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGFiZWxcIik7XG5cbiAgICBpZiAoXG4gICAgICBuYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlID09PSBcIlwiXG4gICAgKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYWxsTGFiZWxzW2ldLmh0bWxGb3IuaW5jbHVkZXMoXCJlcnJvclwiKSkge1xuICAgICAgICAgIGFsbExhYmVsc1tpXS5pbm5lckhUTUwgPSBcIlBsZWFzZSBlbnRlciB2YWx1ZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZFVzZXJuYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQgJiYgbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID1cbiAgICAgIHBhc3N3b3JkSW5wdXRSZWYuY3VycmVudCAmJiBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICAvLyBvcHRpb25hbDogQWRkIHZhbGlkYXRpb25cblxuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgdXNlcm5hbWU6IGVudGVyZWRVc2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdD8uZXJyb3IpIHtcbiAgICAgICAgLy8gc2V0IHNvbWUgYXV0aCBzdGF0ZVxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9wcm9maWxlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZW50ZXJlZFVzZXJuYW1lICYmIGVudGVyZWRQYXNzd29yZCkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIoZW50ZXJlZFVzZXJuYW1lLCBlbnRlcmVkUGFzc3dvcmQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxMYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhbGxMYWJlbHNbaV0uaHRtbEZvci5pbmNsdWRlcyhcImVycm9yXCIpKSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICBhbGxMYWJlbHNbaV0uc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWxsTGFiZWxzW2ldLmlubmVySFRNTCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRsYWJlbH0+XG4gICAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIHJlZj17bmFtZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0bGFiZWx9PlxuICAgICAgICAgICAgWW91ciBQYXNzd29yZFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtwYXNzd29yZElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9ybGFiZWx9PjwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbj57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiQ3JlYXRlIEFjY291bnRcIn08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic2lnbkluIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsImNyZWF0ZVVzZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInNldElzTG9naW4iLCJwcmV2U3RhdGUiLCJuYW1lSW5wdXRSZWYiLCJwYXNzd29yZElucHV0UmVmIiwiaXNMb2dpbiIsInJvdXRlciIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsImFsbExhYmVscyIsImkiLCJlbnRlcmVkVXNlcm5hbWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJyZXN1bHQiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJsZW5ndGgiLCJodG1sRm9yIiwiaW5jbHVkZXMiLCJpbm5lckhUTUwiLCJyZWRpcmVjdCIsImVycm9yIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdHlsZSIsImNvbG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImF1dGgiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2wiLCJsYWJlbCIsInRleHRsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJyZWYiLCJhY3Rpb25zIiwiZXJyb3JsYWJlbCIsImJ1dHRvbiIsInRvZ2dsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.tsx\n"));

/***/ })

});