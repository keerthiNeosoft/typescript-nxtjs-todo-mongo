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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userTodo-form.module.css */ \"./components/userstodo/userTodo-form.module.css\");\n/* harmony import */ var _userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserTodoForm() {\n    _s();\n    var todoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var handleAddTodo = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var todo, errorLabel, alllabels, i, response, errmsg;\n            return _home_neosoft_MyWorks_next_auth_ts_mongo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        todo = todoRef.current.value;\n                        ;\n                        alllabels = document.getElementsByTagName(\"label\");\n                        for(i = 0; i < alllabels.length; i++){\n                            if (alllabels[i].htmlFor === \"todo-error\") {\n                                errorLabel = alllabels[i];\n                            }\n                        }\n                        if (!(todo === \"\")) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        errorLabel.innerHTML = \"Please enter todo\";\n                        return _ctx.abrupt(\"return\");\n                    case 8:\n                        _ctx.next = 10;\n                        return fetch(\"/api/user/add-todo\", {\n                            method: \"POST\",\n                            body: JSON.stringify(todo),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 10:\n                        response = _ctx.sent;\n                        ;\n                        if (!(response.status === 401)) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.next = 15;\n                        return response.json();\n                    case 15:\n                        errmsg = _ctx.sent;\n                    case 16:\n                        console.log(\"response\", response.status);\n                        // props.addTodo({ todo });\n                        if (props.errmsg) {\n                            errorLabel.innerHTML = errmsg;\n                        }\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleAddTodo(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n            onSubmit: handleAddTodo,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"todo\",\n                            className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().textlabel),\n                            children: \"Enter your Todo here\"\n                        }, void 0, false, {\n                            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"todo\",\n                            ref: todoRef\n                        }, void 0, false, {\n                            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"todo-error\",\n                            className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().errorlabel)\n                        }, void 0, false, {\n                            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_userTodo_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().action),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        children: \"Add TODO\"\n                    }, void 0, false, {\n                        fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/neosoft/MyWorks/next-auth-ts-mongo/components/userstodo/userTodo-form.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(UserTodoForm, \"l81FluIUx+stEtc6B6RaByQcDxs=\");\n_c = UserTodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTodoForm);\nvar _c;\n$RefreshReg$(_c, \"UserTodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzdG9kby91c2VyVG9kby1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUVrQjs7QUFFakQsU0FBU0UsWUFBWSxHQUFHOztJQUN0QixJQUFNQyxPQUFPLEdBQUdILDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTVCLElBQU1JLGFBQWE7bUJBQUcseVBBQU9DLENBQUMsRUFBSztnQkFFM0JDLElBQUksRUFFTkMsVUFBVSxFQUNSQyxTQUFTLEVBQ05DLENBQUMsRUFXSkMsUUFBUSxFQVFWQyxNQUFNOzs7O3dCQXhCVk4sQ0FBQyxDQUFDTyxjQUFjLEVBQUUsQ0FBQzt3QkFDYk4sSUFBSSxHQUFHSCxPQUFPLENBQUNVLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO3lCQUVwQjt3QkFDVE4sU0FBUyxHQUFHTyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6RCxJQUFTUCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ1MsTUFBTSxFQUFFUixDQUFDLEVBQUUsQ0FBRTs0QkFDekMsSUFBSUQsU0FBUyxDQUFDQyxDQUFDLENBQUMsQ0FBQ1MsT0FBTyxLQUFLLFlBQVksRUFBRTtnQ0FDekNYLFVBQVUsR0FBR0MsU0FBUyxDQUFDQyxDQUFDLENBQUMsQ0FBQzs2QkFDM0I7eUJBQ0Y7NEJBRUdILENBQUFBLENBQUFBLElBQUksS0FBSyxFQUFFOzs7O3dCQUNiQyxVQUFVLENBQUNZLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQzs7OzsrQkFJdEJDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRTs0QkFDakRDLE1BQU0sRUFBRSxNQUFNOzRCQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDbEIsSUFBSSxDQUFDOzRCQUMxQm1CLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzt5QkFDRixDQUFDOzt3QkFOSWYsUUFBUSxZQU1aO3lCQUVTOzRCQUNQQSxDQUFBQSxDQUFBQSxRQUFRLENBQUNnQixNQUFNLEtBQUssR0FBRzs7Ozs7K0JBQ1ZoQixRQUFRLENBQUNpQixJQUFJLEVBQUU7O3dCQUE5QmhCLE1BQU0sWUFBd0I7O3dCQUVoQ2lCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRW5CLFFBQVEsQ0FBQ2dCLE1BQU0sQ0FBQyxDQUFDO3dCQUN6QywyQkFBMkI7d0JBQzNCLElBQUlJLEtBQUssQ0FBQ25CLE1BQU0sRUFBRTs0QkFDaEJKLFVBQVUsQ0FBQ1ksU0FBUyxHQUFHUixNQUFNLENBQUM7eUJBQy9COzs7Ozs7U0FDRjt3QkFsQ0tQLGFBQWEsQ0FBVUMsQ0FBQzs7O09Ba0M3QjtJQUVELHFCQUNFO2tCQUNFLDRFQUFDMEIsTUFBSTtZQUFDQyxTQUFTLEVBQUUvQix1RUFBWTtZQUFFZ0MsUUFBUSxFQUFFN0IsYUFBYTs7OEJBQ3BELDhEQUFDOEIsS0FBRztvQkFBQ0YsU0FBUyxFQUFFL0IsMEVBQWU7O3NDQUM3Qiw4REFBQ21DLE9BQUs7NEJBQUNsQixPQUFPLEVBQUMsTUFBTTs0QkFBQ2MsU0FBUyxFQUFFL0IsNEVBQWlCO3NDQUFFLHNCQUVwRDs7Ozs7Z0NBQVE7c0NBQ1IsOERBQUNxQyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsTUFBTTs0QkFBQ0MsRUFBRSxFQUFDLE1BQU07NEJBQUNDLEdBQUcsRUFBRXRDLE9BQU87Ozs7O2dDQUFJO3NDQUM3Qyw4REFBQ2lDLE9BQUs7NEJBQUNsQixPQUFPLEVBQUMsWUFBWTs0QkFBQ2MsU0FBUyxFQUFFL0IsNkVBQWtCOzs7OztnQ0FBVTs7Ozs7O3dCQUMvRDs4QkFDTiw4REFBQ2lDLEtBQUc7b0JBQUNGLFNBQVMsRUFBRS9CLHlFQUFjOzhCQUM1Qiw0RUFBQzJDLFFBQU07a0NBQUMsVUFBUTs7Ozs7NEJBQVM7Ozs7O3dCQUNyQjs7Ozs7O2dCQUNEO3FCQUNOLENBQ0g7Q0FDSDtHQXZEUTFDLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXlEckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzdG9kby91c2VyVG9kby1mb3JtLnRzeD81NmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi91c2VyVG9kby1mb3JtLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gVXNlclRvZG9Gb3JtKCkge1xuICBjb25zdCB0b2RvUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvID0gdG9kb1JlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgbGV0IGVycm9yTGFiZWw7XG4gICAgY29uc3QgYWxsbGFiZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsYWJlbFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFsbGxhYmVsc1tpXS5odG1sRm9yID09PSBcInRvZG8tZXJyb3JcIikge1xuICAgICAgICBlcnJvckxhYmVsID0gYWxsbGFiZWxzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2RvID09PSBcIlwiKSB7XG4gICAgICBlcnJvckxhYmVsLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIHRvZG9cIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2VyL2FkZC10b2RvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IGVycm1zZztcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIGVycm1zZyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgIC8vIHByb3BzLmFkZFRvZG8oeyB0b2RvIH0pO1xuICAgIGlmIChwcm9wcy5lcnJtc2cpIHtcbiAgICAgIGVycm9yTGFiZWwuaW5uZXJIVE1MID0gZXJybXNnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZUFkZFRvZG99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG9cIiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dGxhYmVsfT5cbiAgICAgICAgICAgIEVudGVyIHlvdXIgVG9kbyBoZXJlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRvZG9cIiByZWY9e3RvZG9SZWZ9IC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvLWVycm9yXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9ybGFiZWx9PjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb259PlxuICAgICAgICAgIDxidXR0b24+QWRkIFRPRE88L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJUb2RvRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJjbGFzc2VzIiwiVXNlclRvZG9Gb3JtIiwidG9kb1JlZiIsImhhbmRsZUFkZFRvZG8iLCJlIiwidG9kbyIsImVycm9yTGFiZWwiLCJhbGxsYWJlbHMiLCJpIiwicmVzcG9uc2UiLCJlcnJtc2ciLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJodG1sRm9yIiwiaW5uZXJIVE1MIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiZGl2IiwiY29udHJvbCIsImxhYmVsIiwidGV4dGxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJlcnJvcmxhYmVsIiwiYWN0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/userstodo/userTodo-form.tsx\n"));

/***/ })

});