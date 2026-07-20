let statusCode: number = 404;

if (statusCode === 200) {
    console.log("Test Passed: Page loaded successfully.");
} else if (statusCode === 401 || statusCode === 403) {
    console.log("Test Failed: Authentication error.");
} else {
    // This runs if none of the above conditions are met
    console.log(`Test Failed: Unexpected status code ${statusCode}`);
}