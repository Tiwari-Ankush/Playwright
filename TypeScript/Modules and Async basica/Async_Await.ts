// The function MUST be marked 'async' to use 'await' inside it
async function performLogin() {
    console.log("1. Starting test...");

    // The script PAUSES here until the page finishes loading
    await page.goto("https://example.com/login"); 
    console.log("2. Page is loaded!");

    // The script PAUSES here until the button is successfully clicked
    await page.click("#submit-button");
    console.log("3. Button clicked!");
}