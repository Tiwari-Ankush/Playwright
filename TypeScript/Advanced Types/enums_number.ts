// 1. Auto-incrementing (Starts at 0 by default)
enum UserRole {
  Admin,  // assigned 0
  Editor, // assigned 1
  Viewer  // assigned 2
}

let myRole: UserRole = UserRole.Editor;
console.log(myRole); // Outputs: 1


// 2. Explicit Assignment (Great for API testing)
enum StatusCode {
  OK = 200,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500
}

let responseCode: StatusCode = StatusCode.OK;
console.log(responseCode); // Outputs: 200