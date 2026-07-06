// String annotation
let testName: string = "Login Validation";
let errorMessage: string = `Test failed: ${testName}`;

// Number annotation
let timeoutInMs: number = 30000;
let successRate: number = 99.5;

// Boolean annotation
let isTestPassing: boolean = true;
let isHeadless: boolean = false;

// How TypeScript protects you:
// timeoutInMs = "thirty seconds"; // TS ERROR: Type 'string' is not assignable to type 'number'.
console.log(`Timeout: ${timeoutInMs} ms`);
console.log(`Success Rate: ${successRate}%`);
console.log(`Is Test Passing: ${isTestPassing}`);
console.log(`Is Headless: ${isHeadless}`);
console.log(errorMessage);