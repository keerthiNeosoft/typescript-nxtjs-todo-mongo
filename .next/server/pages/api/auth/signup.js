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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBRWxDLGVBQWVFLFlBQVksQ0FBQ0MsUUFBUSxFQUFFO0lBQzNDLE1BQU1DLGNBQWMsR0FBRyxNQUFNSiw4Q0FBSSxDQUFDRyxRQUFRLEVBQUUsRUFBRSxDQUFDO0lBQy9DLE9BQU9DLGNBQWMsQ0FBQztDQUN2QjtBQUVNLGVBQWVDLGNBQWMsQ0FBQ0YsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDN0QsTUFBTUUsT0FBTyxHQUFHLE1BQU1MLGlEQUFPLENBQUNFLFFBQVEsRUFBRUMsY0FBYyxDQUFDO0lBQ3ZELE9BQU9FLE9BQU8sQ0FBQztDQUNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn0iXSwibmFtZXMiOlsiaGFzaCIsImNvbXBhcmUiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwidmVyaWZ5UGFzc3dvcmQiLCJpc1ZhbGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://keerthigadipelli:wPXjSdZnxn2ut0Uu@keerthicluster0.ddofmks.mongodb.net/ts_next_auth?retryWrites=true&w=majority\");\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBbUIsQ0FDdEMsOEhBQThILENBQy9IO0lBRUQsT0FBT0UsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL2tlZXJ0aGlnYWRpcGVsbGk6d1BYalNkWm54bjJ1dDBVdUBrZWVydGhpY2x1c3RlcjAuZGRvZm1rcy5tb25nb2RiLm5ldC90c19uZXh0X2F1dGg/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcblxuICByZXR1cm4gY2xpZW50O1xufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/signup.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(400).json({\n            message: \"Not Authorized\"\n        });\n    }\n    const data = req.body;\n    const { username , password  } = data;\n    if (!username || username.trim().length < 3 || !password || password.trim().length < 7) {\n        res.status(422).json({\n            message: \"Invalid input - password should also be at least 7 characters long.\"\n        });\n        return;\n    }\n    const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const db = client.db();\n    const existingUser = await db.collection(\"users\").findOne({\n        username\n    });\n    if (existingUser) {\n        res.status(422).json({\n            message: \"User exists already!\"\n        });\n        client.close();\n        return;\n    }\n    const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.hashPassword)(password);\n    const result = await db.collection(\"users\").insertOne({\n        username: username,\n        password: hashedPassword\n    });\n    res.status(201).json({\n        message: \"Created user!\"\n    });\n    client.close();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBQ0c7QUFFcEQsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBaUI7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGdCQUFnQjtTQUFFLENBQUMsQ0FBQztLQUM1RDtJQUVELE1BQU1DLElBQUksR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBRXJCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR0gsSUFBSTtJQUVuQyxJQUNFLENBQUNFLFFBQVEsSUFDVEEsUUFBUSxDQUFDRSxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsSUFDMUIsQ0FBQ0YsUUFBUSxJQUNUQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUMxQjtRQUNBVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPLEVBQ0wscUVBQXFFO1NBQ3hFLENBQUMsQ0FBQztRQUNILE9BQU87S0FDUjtJQUVELE1BQU1PLE1BQU0sR0FBRyxNQUFNZCwwREFBaUIsRUFBRTtJQUV4QyxNQUFNZSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO0lBRXRCLE1BQU1DLFlBQVksR0FBRyxNQUFNRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1FBQUVSLFFBQVE7S0FBRSxDQUFDO0lBRXZFLElBQUlNLFlBQVksRUFBRTtRQUNoQmIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsc0JBQXNCO1NBQUUsQ0FBQyxDQUFDO1FBQzFETyxNQUFNLENBQUNLLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTztLQUNSO0lBRUQsTUFBTUMsY0FBYyxHQUFHLE1BQU1yQix1REFBWSxDQUFDWSxRQUFRLENBQUM7SUFFbkQsTUFBTVUsTUFBTSxHQUFHLE1BQU1OLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDSyxTQUFTLENBQUM7UUFDcERaLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsUUFBUSxFQUFFUyxjQUFjO0tBQ3pCLENBQUM7SUFFRmpCLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLGVBQWU7S0FBRSxDQUFDLENBQUM7SUFDbkRPLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFLENBQUM7Q0FDaEI7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHM/N2YxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiTm90IEF1dGhvcml6ZWRcIiB9KTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gZGF0YTtcblxuICBpZiAoXG4gICAgIXVzZXJuYW1lIHx8XG4gICAgdXNlcm5hbWUudHJpbSgpLmxlbmd0aCA8IDMgfHxcbiAgICAhcGFzc3dvcmQgfHxcbiAgICBwYXNzd29yZC50cmltKCkubGVuZ3RoIDwgN1xuICApIHtcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICBtZXNzYWdlOlxuICAgICAgICBcIkludmFsaWQgaW5wdXQgLSBwYXNzd29yZCBzaG91bGQgYWxzbyBiZSBhdCBsZWFzdCA3IGNoYXJhY3RlcnMgbG9uZy5cIixcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcblxuICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgZXhpc3RzIGFscmVhZHkhXCIgfSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5pbnNlcnRPbmUoe1xuICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gIH0pO1xuXG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJDcmVhdGVkIHVzZXIhXCIgfSk7XG4gIGNsaWVudC5jbG9zZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSIsImJvZHkiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidHJpbSIsImxlbmd0aCIsImNsaWVudCIsImRiIiwiZXhpc3RpbmdVc2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjbG9zZSIsImhhc2hlZFBhc3N3b3JkIiwicmVzdWx0IiwiaW5zZXJ0T25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();