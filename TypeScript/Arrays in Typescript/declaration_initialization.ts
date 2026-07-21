// Industry Standard Syntax (Preferred)
let testUsers: string[] = ["Alice", "Bob", "Charlie"];
let statusCodes: number[] = [200, 404, 500];

// Generic Syntax (Does the exact same thing)
let browsers: Array<string> = ["Chromium", "Firefox"];
console.log(browsers); // Output: [ 'Chromium', 'Firefox' ]
console.log(testUsers); // Output: [ 'Alice', 'Bob', 'Charlie' ]
console.log(statusCodes); // Output: [ 200, 404, 500 ]