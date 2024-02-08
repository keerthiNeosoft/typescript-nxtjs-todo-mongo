"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user/delete-todo";
exports.ids = ["pages/api/user/delete-todo"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://keerthigadipelli:wPXjSdZnxn2ut0Uu@keerthicluster0.ddofmks.mongodb.net/ts_next_auth?retryWrites=true&w=majority\");\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBbUIsQ0FDdEMsOEhBQThILENBQy9IO0lBRUQsT0FBT0UsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2tlZXJ0aGlnYWRpcGVsbGk6d1BYalNkWm54bjJ1dDBVdUBrZWVydGhpY2x1c3RlcjAuZGRvZm1rcy5tb25nb2RiLm5ldC90c19uZXh0X2F1dGg/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/user/delete-todo.ts":
/*!***************************************!*\
  !*** ./pages/api/user/delete-todo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"DELETE\") {\n        return;\n    }\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req: req\n    });\n    if (!session) {\n        res.status(401).json({\n            message: \"Not authenticated!\"\n        });\n        return;\n    }\n    const userCollectionName = session.user?.name;\n    const todo = req.body.todo;\n    const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const db = client.db();\n    const result = await db.collection(userCollectionName).deleteOne({\n        todo\n    });\n    await client.close();\n    if (result.deletedCount === 1) {\n        res.status(201).json({\n            message: \"Deleted todo!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9kZWxldGUtdG9kby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBRU07QUFFcEQsZUFBZUUsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFpQjtJQUM3RSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDekIsT0FBTztLQUNWO0lBRUQsTUFBTUMsT0FBTyxHQUFHLE1BQU1OLDREQUFVLENBQUM7UUFBRUcsR0FBRyxFQUFFQSxHQUFHO0tBQUUsQ0FBQztJQUU5QyxJQUFJLENBQUNHLE9BQU8sRUFBRTtRQUNWRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7UUFDeEQsT0FBTztLQUNWO0lBRUQsTUFBTUMsa0JBQWtCLEdBQUdKLE9BQU8sQ0FBQ0ssSUFBSSxFQUFFQyxJQUFJO0lBQzdDLE1BQU1DLElBQUksR0FBR1YsR0FBRyxDQUFDVyxJQUFJLENBQUNELElBQUk7SUFFMUIsTUFBTUUsTUFBTSxHQUFHLE1BQU1kLDBEQUFpQixFQUFFO0lBQ3hDLE1BQU1lLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLEVBQUU7SUFDdEIsTUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDUixrQkFBa0IsQ0FBQyxDQUFDUyxTQUFTLENBQUM7UUFDN0ROLElBQUk7S0FDUCxDQUFDO0lBRUYsTUFBTUUsTUFBTSxDQUFDSyxLQUFLLEVBQUUsQ0FBQztJQUNyQixJQUFJSCxNQUFNLENBQUNJLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDM0JqQixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxlQUFlO1NBQUUsQ0FBQyxDQUFDO0tBQ3REO0NBQ0o7QUFFRCxpRUFBZVAsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS91c2VyL2RlbGV0ZS10b2RvLnRzPzlkYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogbW9kZWxzLlJlcXVlc3QsIHJlczogbW9kZWxzLlJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHJlcS5tZXRob2QgIT09IFwiREVMRVRFXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XG5cbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk5vdCBhdXRoZW50aWNhdGVkIVwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckNvbGxlY3Rpb25OYW1lID0gc2Vzc2lvbi51c2VyPy5uYW1lO1xuICAgIGNvbnN0IHRvZG8gPSByZXEuYm9keS50b2RvO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24odXNlckNvbGxlY3Rpb25OYW1lKS5kZWxldGVPbmUoe1xuICAgICAgICB0b2RvXG4gICAgfSk7XG5cbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcbiAgICBpZiAocmVzdWx0LmRlbGV0ZWRDb3VudCA9PT0gMSkge1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiRGVsZXRlZCB0b2RvIVwiIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidXNlckNvbGxlY3Rpb25OYW1lIiwidXNlciIsIm5hbWUiLCJ0b2RvIiwiYm9keSIsImNsaWVudCIsImRiIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImRlbGV0ZU9uZSIsImNsb3NlIiwiZGVsZXRlZENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/delete-todo.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/delete-todo.ts"));
module.exports = __webpack_exports__;

})();