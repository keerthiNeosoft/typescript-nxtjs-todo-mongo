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

/***/ "./components/userstodo/userTodo-form.tsx":
/*!************************************************!*\
  !*** ./components/userstodo/userTodo-form.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userTodo-form.module.css */ \"./components/userstodo/userTodo-form.module.css\");\n/* harmony import */ var _userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserTodoForm(props) {\n    _s();\n    var todoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var handleAddTodo = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var todo, errorLabel, alllabels, i;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        todo = todoRef.current.value;\n                        ;\n                        alllabels = document.getElementsByTagName(\"label\");\n                        for(i = 0; i < alllabels.length; i++){\n                            if (alllabels[i].htmlFor === \"todo-error\") {\n                                errorLabel = alllabels[i];\n                            }\n                        }\n                        if (!(todo === \"\")) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        errorLabel.innerHTML = \"Please enter todo\";\n                        return _ctx.abrupt(\"return\");\n                    case 8:\n                        props.addTodo({\n                            todo: todo\n                        });\n                        if (props.errmsg) {\n                            errorLabel.innerHTML = props.errmsg;\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleAddTodo(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n            onSubmit: handleAddTodo,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"todo\",\n                            className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().textlabel),\n                            children: \"Enter your Todo here\"\n                        }, void 0, false, {\n                            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"todo\",\n                            ref: todoRef\n                        }, void 0, false, {\n                            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"todo-error\",\n                            className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorlabel)\n                        }, void 0, false, {\n                            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().action),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        children: \"Add TODO\"\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(UserTodoForm, \"l81FluIUx+stEtc6B6RaByQcDxs=\");\n_c = UserTodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTodoForm);\nvar _c;\n$RefreshReg$(_c, \"UserTodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzdG9kby91c2VyVG9kby1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUVrQjs7QUFFakQsU0FBU0UsWUFBWSxDQUFDQyxLQUFLLEVBQUU7O0lBQzNCLElBQU1DLE9BQU8sR0FBR0osNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFNUIsSUFBTUssYUFBYTttQkFBRyx5UEFBT0MsQ0FBQyxFQUFLO2dCQUUzQkMsSUFBSSxFQUVOQyxVQUFVLEVBQ1JDLFNBQVMsRUFDTkMsQ0FBQzs7Ozt3QkFMVkosQ0FBQyxDQUFDSyxjQUFjLEVBQUUsQ0FBQzt3QkFDYkosSUFBSSxHQUFHSCxPQUFPLENBQUNRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO3lCQUVwQjt3QkFDVEosU0FBUyxHQUFHSyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6RCxJQUFTTCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ08sTUFBTSxFQUFFTixDQUFDLEVBQUUsQ0FBRTs0QkFDekMsSUFBSUQsU0FBUyxDQUFDQyxDQUFDLENBQUMsQ0FBQ08sT0FBTyxLQUFLLFlBQVksRUFBRTtnQ0FDekNULFVBQVUsR0FBR0MsU0FBUyxDQUFDQyxDQUFDLENBQUMsQ0FBQzs2QkFDM0I7eUJBQ0Y7NEJBRUdILENBQUFBLENBQUFBLElBQUksS0FBSyxFQUFFOzs7O3dCQUNiQyxVQUFVLENBQUNVLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQzs7O3dCQUk3Q2YsS0FBSyxDQUFDZ0IsT0FBTyxDQUFDOzRCQUFFWixJQUFJLEVBQUpBLElBQUk7eUJBQUUsQ0FBQyxDQUFDO3dCQUN4QixJQUFJSixLQUFLLENBQUNpQixNQUFNLEVBQUU7NEJBQ2hCWixVQUFVLENBQUNVLFNBQVMsR0FBR2YsS0FBSyxDQUFDaUIsTUFBTSxDQUFDO3lCQUNyQzs7Ozs7O1NBQ0Y7d0JBckJLZixhQUFhLENBQVVDLENBQUM7OztPQXFCN0I7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ2UsTUFBSTtZQUFDQyxTQUFTLEVBQUVyQix1RUFBWTtZQUFFc0IsUUFBUSxFQUFFbEIsYUFBYTs7OEJBQ3BELDhEQUFDbUIsS0FBRztvQkFBQ0YsU0FBUyxFQUFFckIsMEVBQWU7O3NDQUM3Qiw4REFBQ3lCLE9BQUs7NEJBQUNULE9BQU8sRUFBQyxNQUFNOzRCQUFDSyxTQUFTLEVBQUVyQiw0RUFBaUI7c0NBQUUsc0JBRXBEOzs7OztnQ0FBUTtzQ0FDUiw4REFBQzJCLE9BQUs7NEJBQUNDLElBQUksRUFBQyxNQUFNOzRCQUFDQyxFQUFFLEVBQUMsTUFBTTs0QkFBQ0MsR0FBRyxFQUFFM0IsT0FBTzs7Ozs7Z0NBQUk7c0NBQzdDLDhEQUFDc0IsT0FBSzs0QkFBQ1QsT0FBTyxFQUFDLFlBQVk7NEJBQUNLLFNBQVMsRUFBRXJCLDZFQUFrQjs7Ozs7Z0NBQVU7Ozs7Ozt3QkFDL0Q7OEJBQ04sOERBQUN1QixLQUFHO29CQUFDRixTQUFTLEVBQUVyQix5RUFBYzs4QkFDNUIsNEVBQUNpQyxRQUFNO2tDQUFDLFVBQVE7Ozs7OzRCQUFTOzs7Ozt3QkFDckI7Ozs7OztnQkFDRDtxQkFDTixDQUNIO0NBQ0g7R0ExQ1FoQyxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUE0Q3JCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vyc3RvZG8vdXNlclRvZG8tZm9ybS50c3g/NTZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlclRvZG8tZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFVzZXJUb2RvRm9ybShwcm9wcykge1xuICBjb25zdCB0b2RvUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvID0gdG9kb1JlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgbGV0IGVycm9yTGFiZWw7XG4gICAgY29uc3QgYWxsbGFiZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbGxhYmVsc1tpXS5odG1sRm9yID09PSBcInRvZG8tZXJyb3JcIikge1xuICAgICAgICBlcnJvckxhYmVsID0gYWxsbGFiZWxzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2RvID09PSBcIlwiKSB7XG4gICAgICBlcnJvckxhYmVsLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIHRvZG9cIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9wcy5hZGRUb2RvKHsgdG9kbyB9KTtcbiAgICBpZiAocHJvcHMuZXJybXNnKSB7XG4gICAgICBlcnJvckxhYmVsLmlubmVySFRNTCA9IHByb3BzLmVycm1zZztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVBZGRUb2RvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRsYWJlbH0+XG4gICAgICAgICAgICBFbnRlciB5b3VyIFRvZG8gaGVyZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvXCIgcmVmPXt0b2RvUmVmfSAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9kby1lcnJvclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcmxhYmVsfT48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgICA8YnV0dG9uPkFkZCBUT0RPPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyVG9kb0Zvcm07XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiY2xhc3NlcyIsIlVzZXJUb2RvRm9ybSIsInByb3BzIiwidG9kb1JlZiIsImhhbmRsZUFkZFRvZG8iLCJlIiwidG9kbyIsImVycm9yTGFiZWwiLCJhbGxsYWJlbHMiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaHRtbEZvciIsImlubmVySFRNTCIsImFkZFRvZG8iLCJlcnJtc2ciLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJ0ZXh0bGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlZiIsImVycm9ybGFiZWwiLCJhY3Rpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/userstodo/userTodo-form.tsx\n"));

/***/ })

});