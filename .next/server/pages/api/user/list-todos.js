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
exports.id = "pages/api/user/list-todos";
exports.ids = ["pages/api/user/list-todos"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://keerthigadipelli:wPXjSdZnxn2ut0Uu@keerthicluster0.ddofmks.mongodb.net/ts_next_auth?retryWrites=true&w=majority\");\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBbUIsQ0FDdEMsOEhBQThILENBQy9IO0lBRUQsT0FBT0UsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2tlZXJ0aGlnYWRpcGVsbGk6d1BYalNkWm54bjJ1dDBVdUBrZWVydGhpY2x1c3RlcjAuZGRvZm1rcy5tb25nb2RiLm5ldC90c19uZXh0X2F1dGg/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/user/list-todos.ts":
/*!**************************************!*\
  !*** ./pages/api/user/list-todos.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return;\n    }\n    const userCollectionName = req.url.split(\"?\")[1];\n    const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    const db = client.db();\n    const result = await db.collection(userCollectionName).find();\n    const data = await result.toArray();\n    client.close();\n    res.status(201).json(data);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9saXN0LXRvZG9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBRXBELGVBQWVDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUNoRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBTztLQUNSO0lBRUQsTUFBTUMsa0JBQWtCLEdBQUdILEdBQUcsQ0FBQ0ksR0FBRyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhELE1BQU1DLE1BQU0sR0FBRyxNQUFNUiwwREFBaUIsRUFBRTtJQUN4QyxNQUFNUyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQVUsQ0FBQ04sa0JBQWtCLENBQUMsQ0FBQ08sSUFBSSxFQUFFO0lBQzdELE1BQU1DLElBQUksR0FBRyxNQUFNSCxNQUFNLENBQUNJLE9BQU8sRUFBRTtJQUVuQ04sTUFBTSxDQUFDTyxLQUFLLEVBQUUsQ0FBQztJQUNmWixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQztDQUM1QjtBQUVELGlFQUFlWixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL3VzZXIvbGlzdC10b2Rvcy50cz8yZWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogbW9kZWxzLlJlcXVlc3QsIHJlczogbW9kZWxzLlJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXNlckNvbGxlY3Rpb25OYW1lID0gcmVxLnVybC5zcGxpdChcIj9cIilbMV07XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbih1c2VyQ29sbGVjdGlvbk5hbWUpLmZpbmQoKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJDb2xsZWN0aW9uTmFtZSIsInVybCIsInNwbGl0IiwiY2xpZW50IiwiZGIiLCJyZXN1bHQiLCJjb2xsZWN0aW9uIiwiZmluZCIsImRhdGEiLCJ0b0FycmF5IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/list-todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/list-todos.ts"));
module.exports = __webpack_exports__;

})();