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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _todos_list_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos-list.module.css */ \"./components/todosList/todos-list.module.css\");\n/* harmony import */ var _todos_list_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_todos_list_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TodosList(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var handleDelete = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(todo) {\n            var toDelete, response;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        toDelete = confirm(\"You are deleting \".concat(todo));\n                        console.log(\"===============toDelete\", toDelete);\n                        _ctx.next = 4;\n                        return fetch(\"/api/user/delete-todo\", {\n                            method: \"DELETE\",\n                            body: JSON.stringify({\n                                todo: todo\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        if (response.status === 201) {\n                            router.reload();\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleDelete(todo) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: (_todos_list_module_css__WEBPACK_IMPORTED_MODULE_5___default().listing),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"All your TODOs\"\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ol\", {\n                children: data.length > 0 ? data.map(function(todo, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                value: todo.todo,\n                                disabled: true\n                            }, index, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                className: (_todos_list_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconbtn),\n                                onClick: function() {\n                                    return handleDelete(todo.todo);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 15\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"Yet to add todo list\"\n                }, void 0, false, {\n                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/todosList/todos-list.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(TodosList, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = TodosList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodosList);\nvar _c;\n$RefreshReg$(_c, \"TodosList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9zTGlzdC90b2Rvcy1saXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQjtBQUNjO0FBQ1k7QUFFTjs7QUFFOUMsU0FBU0ksU0FBUyxDQUFDLEtBQVEsRUFBcUI7UUFBN0IsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNTSxZQUFZO21CQUFHLHlQQUFPQyxJQUFZLEVBQUs7Z0JBQ3JDQyxRQUFRLEVBRVJDLFFBQVE7Ozs7d0JBRlJELFFBQVEsR0FBR0UsT0FBTyxDQUFDLG1CQUFrQixDQUFPLE9BQUxILElBQUksQ0FBRSxDQUFDLENBQUM7d0JBQ3JESSxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRUosUUFBUSxDQUFDLENBQUM7OytCQUMxQkssS0FBSyxDQUFDLHVCQUF1QixFQUFFOzRCQUNwREMsTUFBTSxFQUFFLFFBQVE7NEJBQ2hCQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dDQUFFVixJQUFJLEVBQUVBLElBQUk7NkJBQUUsQ0FBQzs0QkFDcENXLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzt5QkFDRixDQUFDOzt3QkFOSVQsUUFBUSxZQU1aO3dCQUVGLElBQUlBLFFBQVEsQ0FBQ1UsTUFBTSxLQUFLLEdBQUcsRUFBRTs0QkFDM0JkLE1BQU0sQ0FBQ2UsTUFBTSxFQUFFLENBQUM7eUJBQ2pCOzs7Ozs7U0FDRjt3QkFkS2QsWUFBWSxDQUFVQyxJQUFZOzs7T0FjdkM7SUFFRCxxQkFDRSw4REFBQ2MsU0FBTztRQUFDQyxTQUFTLEVBQUVwQix1RUFBZTs7MEJBQ2pDLDhEQUFDc0IsSUFBRTswQkFBQyxnQkFBYzs7Ozs7b0JBQUs7MEJBQ3ZCLDhEQUFDQyxJQUFFOzBCQUNBckIsSUFBSSxDQUFDc0IsTUFBTSxHQUFHLENBQUMsR0FDZHRCLElBQUksQ0FBQ3VCLEdBQUcsQ0FBQyxTQUFDcEIsSUFBd0IsRUFBRXFCLEtBQWEsRUFBSztvQkFDcEQscUJBQ0UsOERBQUNDLElBQUU7OzBDQUNELDhEQUFDQyxPQUFLO2dDQUFhQyxLQUFLLEVBQUV4QixJQUFJLENBQUNBLElBQUk7Z0NBQUV5QixRQUFROytCQUFqQ0osS0FBSzs7OztxQ0FBK0I7MENBQ2hELDhEQUFDSyxNQUFJO2dDQUNIWCxTQUFTLEVBQUVwQix1RUFBZTtnQ0FDMUJpQyxPQUFPLEVBQUU7MkNBQU03QixZQUFZLENBQUNDLElBQUksQ0FBQ0EsSUFBSSxDQUFDO2lDQUFBOzBDQUV0Qyw0RUFBQ04sa0VBQVU7Ozs7eUNBQUc7Ozs7O3FDQUNUOzs7Ozs7NkJBQ0osQ0FDTDtpQkFDSCxDQUFDLGlCQUVGLDhEQUFDbUMsR0FBQzs4QkFBQyxzQkFBb0I7Ozs7O3dCQUFJOzs7OztvQkFFMUI7Ozs7OztZQUNHLENBQ1Y7Q0FDSDtHQTFDUWpDLFNBQVM7O1FBQ0RILGtEQUFTOzs7QUFEakJHLEtBQUFBLFNBQVM7QUE0Q2xCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2Rvc0xpc3QvdG9kb3MtbGlzdC50c3g/YTZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZVwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi90b2Rvcy1saXN0Lm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gVG9kb3NMaXN0KHsgZGF0YSB9KTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHRvZG86IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRvRGVsZXRlID0gY29uZmlybShgWW91IGFyZSBkZWxldGluZyAke3RvZG99YCk7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT10b0RlbGV0ZVwiLCB0b0RlbGV0ZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvdXNlci9kZWxldGUtdG9kb1wiLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvZG86IHRvZG8gfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0aW5nfT5cbiAgICAgIDxoMz5BbGwgeW91ciBUT0RPczwvaDM+XG4gICAgICA8b2w+XG4gICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgZGF0YS5tYXAoKHRvZG86IG1vZGVscy5Ub2RvRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBrZXk9e2luZGV4fSB2YWx1ZT17dG9kby50b2RvfSBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbmJ0bn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZSh0b2RvLnRvZG8pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPllldCB0byBhZGQgdG9kbyBsaXN0PC9wPlxuICAgICAgICApfVxuICAgICAgPC9vbD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkRlbGV0ZUljb24iLCJjbGFzc2VzIiwiVG9kb3NMaXN0IiwiZGF0YSIsInJvdXRlciIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ0b0RlbGV0ZSIsInJlc3BvbnNlIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInN0YXR1cyIsInJlbG9hZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsaXN0aW5nIiwiaDMiLCJvbCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwibGkiLCJpbnB1dCIsInZhbHVlIiwiZGlzYWJsZWQiLCJzcGFuIiwiaWNvbmJ0biIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todosList/todos-list.tsx\n"));

/***/ })

});