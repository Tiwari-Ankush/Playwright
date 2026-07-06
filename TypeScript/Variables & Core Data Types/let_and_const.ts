// let allows reassignment
let browserName = "Chromium";
browserName = "Firefox"; // Perfectly fine

// const prevents reassignment
const maxRetries = 3;
// maxRetries = 5; // TS ERROR: Cannot assign to 'maxRetries' because it is a constant.

console.log(browserName); // Firefox
console.log(maxRetries); // 3