"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./components/todosList/todos-list.tsx":
/*!*********************************************!*\
  !*** ./components/todosList/todos-list.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _todos_list_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos-list.module.css */ \"./components/todosList/todos-list.module.css\");\n/* harmony import */ var _todos_list_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_todos_list_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TodosList(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleDelete = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(todo) {\n            var toDelete, response;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        toDelete = confirm('You are deleting \"'.concat(todo, '\"'));\n                        if (toDelete) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        _ctx.next = 5;\n                        return fetch(\"/api/user/delete-todo\", {\n                            method: \"DELETE\",\n                            body: JSON.stringify({\n                                todo: todo\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 5:\n                        response = _ctx.sent;\n                        if (response.status === 201) {\n                            router.reload();\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleDelete(todo) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_todos_list_module_css__WEBPACK_IMPORTED_MODULE_5___default().listing),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"All your TODOs\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ol\", {\n                children: data.length > 0 ? data.map(function(todo, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                value: todo.todo,\n                                disabled: true\n                            }, index, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: (_todos_list_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconbtn),\n                                onClick: function() {\n                                    return handleDelete(todo.todo);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Yet to add todo list\"\n                }, void 0, false, {\n                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(TodosList, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = TodosList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodosList);\nvar _c;\n$RefreshReg$(_c, \"TodosList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9zTGlzdC90b2Rvcy1saXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNjO0FBQ1k7QUFFTjs7QUFFOUMsU0FBU0ksU0FBUyxDQUFDLEtBQVEsRUFBcUI7UUFBN0IsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNTSxZQUFZO21CQUFHLHlQQUFPQyxJQUFZLEVBQUs7Z0JBQ3JDQyxRQUFRLEVBSVJDLFFBQVE7Ozs7d0JBSlJELFFBQVEsR0FBWUUsT0FBTyxDQUFDLG9CQUFtQixDQUFPLE1BQUMsQ0FBTkgsSUFBSSxFQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzNEQyxRQUFROzs7Ozs7OytCQUdVRyxLQUFLLENBQUMsdUJBQXVCLEVBQUU7NEJBQ3BEQyxNQUFNLEVBQUUsUUFBUTs0QkFDaEJDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0NBQUVSLElBQUksRUFBRUEsSUFBSTs2QkFBRSxDQUFDOzRCQUNwQ1MsT0FBTyxFQUFFO2dDQUNQLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ25DO3lCQUNGLENBQUM7O3dCQU5JUCxRQUFRLFlBTVo7d0JBRUYsSUFBSUEsUUFBUSxDQUFDUSxNQUFNLEtBQUssR0FBRyxFQUFFOzRCQUMzQlosTUFBTSxDQUFDYSxNQUFNLEVBQUUsQ0FBQzt5QkFDakI7Ozs7OztTQUNGO3dCQWhCS1osWUFBWSxDQUFVQyxJQUFZOzs7T0FnQnZDO0lBRUQscUJBQ0UsOERBQUNZLFNBQU87UUFBQ0MsU0FBUyxFQUFFbEIsdUVBQWU7OzBCQUNqQyw4REFBQ29CLElBQUU7MEJBQUMsZ0JBQWM7Ozs7O29CQUFLOzBCQUN2Qiw4REFBQ0MsSUFBRTswQkFDQW5CLElBQUksQ0FBQ29CLE1BQU0sR0FBRyxDQUFDLEdBQ2RwQixJQUFJLENBQUNxQixHQUFHLENBQUMsU0FBQ2xCLElBQXdCLEVBQUVtQixLQUFhLEVBQUs7b0JBQ3BELHFCQUNFLDhEQUFDQyxJQUFFOzswQ0FDRCw4REFBQ0MsT0FBSztnQ0FBYUMsS0FBSyxFQUFFdEIsSUFBSSxDQUFDQSxJQUFJO2dDQUFFdUIsUUFBUTsrQkFBakNKLEtBQUs7Ozs7cUNBQStCOzBDQUNoRCw4REFBQ0ssTUFBSTtnQ0FDSFgsU0FBUyxFQUFFbEIsdUVBQWU7Z0NBQzFCK0IsT0FBTyxFQUFFOzJDQUFNM0IsWUFBWSxDQUFDQyxJQUFJLENBQUNBLElBQUksQ0FBQztpQ0FBQTswQ0FFdEMsNEVBQUNOLGtFQUFVOzs7O3lDQUFHOzs7OztxQ0FDVDs7Ozs7OzZCQUNKLENBQ0w7aUJBQ0gsQ0FBQyxpQkFFRiw4REFBQ2lDLEdBQUM7OEJBQUMsc0JBQW9COzs7Ozt3QkFBSTs7Ozs7b0JBRTFCOzs7Ozs7WUFDRyxDQUNWO0NBQ0g7R0E1Q1EvQixTQUFTOztRQUNESCxrREFBUzs7O0FBRGpCRyxLQUFBQSxTQUFTO0FBOENsQiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9kb3NMaXN0L3RvZG9zLWxpc3QudHN4P2E2YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGVcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdG9kb3MtbGlzdC5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFRvZG9zTGlzdCh7IGRhdGEgfSk6IFJlYWN0LkpTWC5FbGVtZW50IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICh0b2RvOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0b0RlbGV0ZTogYm9vbGVhbiA9IGNvbmZpcm0oYFlvdSBhcmUgZGVsZXRpbmcgXCIke3RvZG99XCJgKTtcbiAgICBpZiAoIXRvRGVsZXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXIvZGVsZXRlLXRvZG9cIiwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b2RvOiB0b2RvIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdGluZ30+XG4gICAgICA8aDM+QWxsIHlvdXIgVE9ET3M8L2gzPlxuICAgICAgPG9sPlxuICAgICAgICB7ZGF0YS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIGRhdGEubWFwKCh0b2RvOiBtb2RlbHMuVG9kb0VsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW5wdXQga2V5PXtpbmRleH0gdmFsdWU9e3RvZG8udG9kb30gZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25idG59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUodG9kby50b2RvKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5ZZXQgdG8gYWRkIHRvZG8gbGlzdDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2Rvc0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJEZWxldGVJY29uIiwiY2xhc3NlcyIsIlRvZG9zTGlzdCIsImRhdGEiLCJyb3V0ZXIiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidG9EZWxldGUiLCJyZXNwb25zZSIsImNvbmZpcm0iLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInN0YXR1cyIsInJlbG9hZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsaXN0aW5nIiwiaDMiLCJvbCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwibGkiLCJpbnB1dCIsInZhbHVlIiwiZGlzYWJsZWQiLCJzcGFuIiwiaWNvbmJ0biIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todosList/todos-list.tsx\n"));

/***/ })

});