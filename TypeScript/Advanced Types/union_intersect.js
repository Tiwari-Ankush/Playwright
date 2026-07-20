"use strict";
// --- UNION (|) ---
// Playwright timeouts can often be a number (milliseconds) or a string ("5s")
let timeoutConfig;
timeoutConfig = 30000; // Valid
timeoutConfig = "30s"; // Also valid
// timeoutConfig = true; // TS ERROR: Not a number or string
console.log(`Timeout is set to: ${timeoutConfig}`); // Outputs: Timeout is set to: 30s
console;
// A Playwright Locator (like a text box) needs to do both!
let webElement;
webElement = {
    click: () => console.log("Clicked!"),
    fill: (text) => console.log(`Typed: ${text}`)
};
console.log(webElement.click()); // Outputs: Clicked!
console.log(webElement.fill("Hello, Playwright!")); // Outputs: Typed: Hello, Playwright!
