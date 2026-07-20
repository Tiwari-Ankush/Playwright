"use strict";
// 1. Auto-incrementing (Starts at 0 by default)
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer"; // assigned 2
})(UserRole || (UserRole = {}));
let myRole = UserRole.Editor;
console.log(myRole); // Outputs: 1
// 2. Explicit Assignment (Great for API testing)
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
let responseCode = StatusCode.OK;
console.log(responseCode); // Outputs: 200


//run command: node .\enums_number.js