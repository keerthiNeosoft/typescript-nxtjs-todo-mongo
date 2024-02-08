"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./components/settings/profile-update-form.tsx":
/*!*****************************************************!*\
  !*** ./components/settings/profile-update-form.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-update-form.module.css */ \"./components/settings/profile-update-form.module.css\");\n/* harmony import */ var _profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ProfileUpdateForm() {\n    _s();\n    var oldPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var newPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var allLabels, i, enteredOldPassword, enteredNewPassword, passwordData, response, data;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (oldPasswordRef.current.value === \"\" || newPasswordRef.current.value === \"\") {\n                            allLabels = document.getElementsByTagName(\"label\");\n                            for(i = 0; i < allLabels.length; i++){\n                                if (allLabels[i].htmlFor.includes(\"error\")) {\n                                    allLabels[i].innerHTML = \"Please enter password\";\n                                }\n                            }\n                        }\n                        enteredOldPassword = oldPasswordRef.current.value;\n                        enteredNewPassword = newPasswordRef.current.value;\n                        passwordData = {\n                            oldPassword: enteredOldPassword,\n                            newPassword: enteredNewPassword\n                        };\n                        _ctx.next = 7;\n                        return fetch(\"/api/user/change-password\", {\n                            method: \"PATCH\",\n                            body: JSON.stringify(passwordData),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        _ctx.next = 10;\n                        return response.json();\n                    case 10:\n                        data = _ctx.sent;\n                        if (response.status === 200) {\n                            document.getElementById(\"message\").innerHTML = data.message;\n                        }\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n        onSubmit: submitHandler,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Update your password\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"new-password\",\n                        className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().textlabel),\n                        children: \"New Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"new-password\",\n                        ref: newPasswordRef\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"new-password-error\",\n                        className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorlabel)\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"old-password\",\n                        className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().textlabel),\n                        children: \"Old Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"old-password\",\n                        ref: oldPasswordRef\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"old-password-error\",\n                        className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorlabel)\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().action),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        id: \"message\",\n                        className: (_profile_update_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().msglabel)\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        children: \"Change Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/settings/profile-update-form.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfileUpdateForm, \"+JTl7VdP5jjPqTUsqa02Ht0LnfA=\");\n_c = ProfileUpdateForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileUpdateForm);\nvar _c;\n$RefreshReg$(_c, \"ProfileUpdateForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NldHRpbmdzL3Byb2ZpbGUtdXBkYXRlLWZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQ0s7QUFFd0I7O0FBT3ZELFNBQVNHLGlCQUFpQixHQUFzQjs7SUFDOUMsSUFBTUMsY0FBYyxHQUFHSCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNuQyxJQUFNSSxjQUFjLEdBQUdKLDZDQUFNLENBQUMsSUFBSSxDQUFDO2FBRXBCSyxhQUFhLENBQUNDLEtBQUs7ZUFBbkJELGNBQWE7O2FBQWJBLGNBQWE7UUFBYkEsY0FBYSxHQUE1Qix5UEFBNkJDLEtBQUssRUFBaUI7Z0JBTzNDQyxTQUFTLEVBQ0pDLENBQUMsRUFPTkMsa0JBQWtCLEVBQ2xCQyxrQkFBa0IsRUFHbEJDLFlBQVksRUFLWkMsUUFBUSxFQVFSQyxJQUFJOzs7O3dCQS9CVlAsS0FBSyxDQUFDUSxjQUFjLEVBQUUsQ0FBQzt3QkFFdkIsSUFDRVgsY0FBYyxDQUFDWSxPQUFPLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQ25DWixjQUFjLENBQUNXLE9BQU8sQ0FBQ0MsS0FBSyxLQUFLLEVBQUUsRUFDbkM7NEJBQ0lULFNBQVMsR0FBR1UsUUFBUSxDQUFDQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDdkQsSUFBU1YsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxTQUFTLENBQUNZLE1BQU0sRUFBRVgsQ0FBQyxFQUFFLENBQUU7Z0NBQ3pDLElBQUlELFNBQVMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUNZLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29DQUMxQ2QsU0FBUyxDQUFDQyxDQUFDLENBQUMsQ0FBQ2MsU0FBUyxHQUFHLHVCQUF1QixDQUFDO2lDQUNsRDs2QkFDRjt5QkFDRjt3QkFFS2Isa0JBQWtCLEdBQUdOLGNBQWMsQ0FBQ1ksT0FBTyxDQUFDQyxLQUFLLENBQUM7d0JBQ2xETixrQkFBa0IsR0FBR04sY0FBYyxDQUFDVyxPQUFPLENBQUNDLEtBQUssQ0FBQzt3QkFHbERMLFlBQVksR0FBcUI7NEJBQ3JDWSxXQUFXLEVBQUVkLGtCQUFrQjs0QkFDL0JlLFdBQVcsRUFBRWQsa0JBQWtCO3lCQUNoQyxDQUFDOzsrQkFFcUJlLEtBQUssQ0FBQywyQkFBMkIsRUFBRTs0QkFDeERDLE1BQU0sRUFBRSxPQUFPOzRCQUNmQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDbEIsWUFBWSxDQUFDOzRCQUNsQ21CLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzt5QkFDRixDQUFDOzt3QkFOSWxCLFFBQVEsWUFNWjs7K0JBRWlCQSxRQUFRLENBQUNtQixJQUFJLEVBQUU7O3dCQUE1QmxCLElBQUksWUFBd0I7d0JBQ2xDLElBQUlELFFBQVEsQ0FBQ29CLE1BQU0sS0FBSyxHQUFHLEVBQUU7NEJBQzNCZixRQUFRLENBQUNnQixjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNYLFNBQVMsR0FBR1QsSUFBSSxDQUFDcUIsT0FBTyxDQUFDO3lCQUM3RDs7Ozs7O1NBQ0Y7ZUFwQ2M3QixjQUFhOztJQXNDNUIscUJBQ0UsOERBQUM4QixNQUFJO1FBQUNDLFNBQVMsRUFBRW5DLDZFQUFZO1FBQUVvQyxRQUFRLEVBQUVoQyxhQUFhOzswQkFDcEQsOERBQUNpQyxJQUFFOzBCQUFDLHNCQUFvQjs7Ozs7b0JBQUs7MEJBQzdCLDhEQUFDQyxLQUFHO2dCQUFDSCxTQUFTLEVBQUVuQyxnRkFBZTs7a0NBQzdCLDhEQUFDd0MsT0FBSzt3QkFBQ3JCLE9BQU8sRUFBQyxjQUFjO3dCQUFDZ0IsU0FBUyxFQUFFbkMsa0ZBQWlCO2tDQUFFLGNBRTVEOzs7Ozs0QkFBUTtrQ0FDUiw4REFBQzBDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxFQUFFLEVBQUMsY0FBYzt3QkFBQ0MsR0FBRyxFQUFFMUMsY0FBYzs7Ozs7NEJBQUk7a0NBQ2hFLDhEQUFDcUMsT0FBSzt3QkFDSnJCLE9BQU8sRUFBQyxvQkFBb0I7d0JBQzVCZ0IsU0FBUyxFQUFFbkMsbUZBQWtCOzs7Ozs0QkFDdEI7Ozs7OztvQkFDTDswQkFDTiw4REFBQ3NDLEtBQUc7Z0JBQUNILFNBQVMsRUFBRW5DLGdGQUFlOztrQ0FDN0IsOERBQUN3QyxPQUFLO3dCQUFDckIsT0FBTyxFQUFDLGNBQWM7d0JBQUNnQixTQUFTLEVBQUVuQyxrRkFBaUI7a0NBQUUsY0FFNUQ7Ozs7OzRCQUFRO2tDQUNSLDhEQUFDMEMsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLEVBQUUsRUFBQyxjQUFjO3dCQUFDQyxHQUFHLEVBQUUzQyxjQUFjOzs7Ozs0QkFBSTtrQ0FDaEUsOERBQUNzQyxPQUFLO3dCQUNKckIsT0FBTyxFQUFDLG9CQUFvQjt3QkFDNUJnQixTQUFTLEVBQUVuQyxtRkFBa0I7Ozs7OzRCQUN0Qjs7Ozs7O29CQUNMOzBCQUNOLDhEQUFDc0MsS0FBRztnQkFBQ0gsU0FBUyxFQUFFbkMsK0VBQWM7O2tDQUM1Qiw4REFBQ3dDLE9BQUs7d0JBQUNJLEVBQUUsRUFBQyxTQUFTO3dCQUFDVCxTQUFTLEVBQUVuQyxpRkFBZ0I7Ozs7OzRCQUFVO2tDQUN6RCw4REFBQ2lELFFBQU07a0NBQUMsaUJBQWU7Ozs7OzRCQUFTOzs7Ozs7b0JBQzVCOzs7Ozs7WUFDRCxDQUNQO0NBQ0g7R0F2RVFoRCxpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjtBQXlFMUIsK0RBQWVBLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2V0dGluZ3MvcHJvZmlsZS11cGRhdGUtZm9ybS50c3g/ZGM5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vcHJvZmlsZS11cGRhdGUtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzc3dvcmRGb3JtRGF0YSB7XG4gIG9sZFBhc3N3b3JkOiBzdHJpbmc7XG4gIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFByb2ZpbGVVcGRhdGVGb3JtKCk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3Qgb2xkUGFzc3dvcmRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG5ld1Bhc3N3b3JkUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKFxuICAgICAgb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgbmV3UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgbGV0IGFsbExhYmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGFiZWxcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbExhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYWxsTGFiZWxzW2ldLmh0bWxGb3IuaW5jbHVkZXMoXCJlcnJvclwiKSkge1xuICAgICAgICAgIGFsbExhYmVsc1tpXS5pbm5lckhUTUwgPSBcIlBsZWFzZSBlbnRlciBwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXJlZE9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmV3UGFzc3dvcmQgPSBuZXdQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgLy8gb3B0aW9uYWw6IEFkZCB2YWxpZGF0aW9uXG4gICAgY29uc3QgcGFzc3dvcmREYXRhOiBQYXNzd29yZEZvcm1EYXRhID0ge1xuICAgICAgb2xkUGFzc3dvcmQ6IGVudGVyZWRPbGRQYXNzd29yZCxcbiAgICAgIG5ld1Bhc3N3b3JkOiBlbnRlcmVkTmV3UGFzc3dvcmQsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFzc3dvcmREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5pbm5lckhUTUwgPSBkYXRhLm1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPGgxPlVwZGF0ZSB5b3VyIHBhc3N3b3JkPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ldy1wYXNzd29yZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0bGFiZWx9PlxuICAgICAgICAgIE5ldyBQYXNzd29yZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJuZXctcGFzc3dvcmRcIiByZWY9e25ld1Bhc3N3b3JkUmVmfSAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwibmV3LXBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JsYWJlbH1cbiAgICAgICAgPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZC1wYXNzd29yZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0bGFiZWx9PlxuICAgICAgICAgIE9sZCBQYXNzd29yZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJvbGQtcGFzc3dvcmRcIiByZWY9e29sZFBhc3N3b3JkUmVmfSAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwib2xkLXBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JsYWJlbH1cbiAgICAgICAgPjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XG4gICAgICAgIDxsYWJlbCBpZD1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9e2NsYXNzZXMubXNnbGFiZWx9PjwvbGFiZWw+XG4gICAgICAgIDxidXR0b24+Q2hhbmdlIFBhc3N3b3JkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVVcGRhdGVGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiY2xhc3NlcyIsIlByb2ZpbGVVcGRhdGVGb3JtIiwib2xkUGFzc3dvcmRSZWYiLCJuZXdQYXNzd29yZFJlZiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsImFsbExhYmVscyIsImkiLCJlbnRlcmVkT2xkUGFzc3dvcmQiLCJlbnRlcmVkTmV3UGFzc3dvcmQiLCJwYXNzd29yZERhdGEiLCJyZXNwb25zZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJodG1sRm9yIiwiaW5jbHVkZXMiLCJpbm5lckhUTUwiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwic3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaDEiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJ0ZXh0bGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlZiIsImVycm9ybGFiZWwiLCJhY3Rpb24iLCJtc2dsYWJlbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/settings/profile-update-form.tsx\n"));

/***/ })

});