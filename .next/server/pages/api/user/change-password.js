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
exports.id = "pages/api/user/change-password";
exports.ids = ["pages/api/user/change-password"];
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

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

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

/***/ "(api)/./pages/api/user/change-password.ts":
/*!*******************************************!*\
  !*** ./pages/api/user/change-password.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"PATCH\") {\n        return;\n    }\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req: req\n    });\n    if (!session) {\n        res.status(401).json({\n            message: \"Not authenticated!\"\n        });\n        return;\n    }\n    const username = session.user?.name;\n    const oldPassword = req.body.oldPassword;\n    const newPassword = req.body.newPassword;\n    const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n    const usersCollection = client.db().collection(\"users\");\n    const user = await usersCollection.findOne({\n        username\n    });\n    if (!user) {\n        res.status(404).json({\n            message: \"User not found.\"\n        });\n        client.close();\n        return;\n    }\n    const currentPassword = user.password;\n    const passwordsAreEqual = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.verifyPassword)(oldPassword, currentPassword);\n    if (!passwordsAreEqual) {\n        res.status(403).json({\n            message: \"Invalid password.\"\n        });\n        client.close();\n        return;\n    }\n    const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(newPassword);\n    const result = await usersCollection.updateOne({\n        username: username\n    }, {\n        $set: {\n            password: hashedPassword\n        }\n    });\n    client.close();\n    res.status(200).json({\n        message: \"Password updated!\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFbUI7QUFDYjtBQUVwRCxlQUFlSSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUMxQixPQUFPO0tBQ1I7SUFFRCxNQUFNQyxPQUFPLEdBQUcsTUFBTVIsNERBQVUsQ0FBQztRQUFFSyxHQUFHLEVBQUVBLEdBQUc7S0FBRSxDQUFDO0lBRTlDLElBQUksQ0FBQ0csT0FBTyxFQUFFO1FBQ1pGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztRQUN4RCxPQUFPO0tBQ1I7SUFFRCxNQUFNQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0ssSUFBSSxFQUFFQyxJQUFJO0lBQ25DLE1BQU1DLFdBQVcsR0FBR1YsR0FBRyxDQUFDVyxJQUFJLENBQUNELFdBQVc7SUFDeEMsTUFBTUUsV0FBVyxHQUFHWixHQUFHLENBQUNXLElBQUksQ0FBQ0MsV0FBVztJQUV4QyxNQUFNQyxNQUFNLEdBQUcsTUFBTWYsMERBQWlCLEVBQUU7SUFFeEMsTUFBTWdCLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxFQUFFLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUV2RCxNQUFNUixJQUFJLEdBQUcsTUFBTU0sZUFBZSxDQUFDRyxPQUFPLENBQUM7UUFBRVYsUUFBUTtLQUFFLENBQUM7SUFFeEQsSUFBSSxDQUFDQyxJQUFJLEVBQUU7UUFDVFAsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsaUJBQWlCO1NBQUUsQ0FBQyxDQUFDO1FBQ3JETyxNQUFNLENBQUNLLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTztLQUNSO0lBRUQsTUFBTUMsZUFBZSxHQUFHWCxJQUFJLENBQUNZLFFBQVE7SUFFckMsTUFBTUMsaUJBQWlCLEdBQUcsTUFBTXhCLHlEQUFjLENBQUNhLFdBQVcsRUFBRVMsZUFBZSxDQUFDO0lBRTVFLElBQUksQ0FBQ0UsaUJBQWlCLEVBQUU7UUFDdEJwQixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxtQkFBbUI7U0FBRSxDQUFDLENBQUM7UUFDdkRPLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPO0tBQ1I7SUFFRCxNQUFNSSxjQUFjLEdBQUcsTUFBTTFCLHVEQUFZLENBQUNnQixXQUFXLENBQUM7SUFFdEQsTUFBTVcsTUFBTSxHQUFHLE1BQU1ULGVBQWUsQ0FBQ1UsU0FBUyxDQUM1QztRQUFFakIsUUFBUSxFQUFFQSxRQUFRO0tBQUUsRUFDdEI7UUFBRWtCLElBQUksRUFBRTtZQUFFTCxRQUFRLEVBQUVFLGNBQWM7U0FBRTtLQUFFLENBQ3ZDO0lBRURULE1BQU0sQ0FBQ0ssS0FBSyxFQUFFLENBQUM7SUFDZmpCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLG1CQUFtQjtLQUFFLENBQUMsQ0FBQztDQUN4RDtBQUVELGlFQUFlUCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkLnRzP2E2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmltcG9ydCB7IGhhc2hQYXNzd29yZCwgdmVyaWZ5UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBBVENIXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcTogcmVxIH0pO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgYXV0aGVudGljYXRlZCFcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB1c2VybmFtZSA9IHNlc3Npb24udXNlcj8ubmFtZTtcbiAgY29uc3Qgb2xkUGFzc3dvcmQgPSByZXEuYm9keS5vbGRQYXNzd29yZDtcbiAgY29uc3QgbmV3UGFzc3dvcmQgPSByZXEuYm9keS5uZXdQYXNzd29yZDtcblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQuXCIgfSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gdXNlci5wYXNzd29yZDtcblxuICBjb25zdCBwYXNzd29yZHNBcmVFcXVhbCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKG9sZFBhc3N3b3JkLCBjdXJyZW50UGFzc3dvcmQpO1xuXG4gIGlmICghcGFzc3dvcmRzQXJlRXF1YWwpIHtcbiAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBwYXNzd29yZC5cIiB9KTtcbiAgICBjbGllbnQuY2xvc2UoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChuZXdQYXNzd29yZCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLnVwZGF0ZU9uZShcbiAgICB7IHVzZXJuYW1lOiB1c2VybmFtZSB9LFxuICAgIHsgJHNldDogeyBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSB9XG4gICk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJQYXNzd29yZCB1cGRhdGVkIVwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJoYXNoUGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJuYW1lIiwidXNlciIsIm5hbWUiLCJvbGRQYXNzd29yZCIsImJvZHkiLCJuZXdQYXNzd29yZCIsImNsaWVudCIsInVzZXJzQ29sbGVjdGlvbiIsImRiIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJjbG9zZSIsImN1cnJlbnRQYXNzd29yZCIsInBhc3N3b3JkIiwicGFzc3dvcmRzQXJlRXF1YWwiLCJoYXNoZWRQYXNzd29yZCIsInJlc3VsdCIsInVwZGF0ZU9uZSIsIiRzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/change-password.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/change-password.ts"));
module.exports = __webpack_exports__;

})();