"use strict";
// 3. The Implementation (uses type narrowing to handle both)
function openPage(target) {
    if (typeof target === "string") {
        console.log(`Opening URL: ${target}`);
    }
    else if (typeof target === "number") {
        console.log(`Opening internal page ID: ${target}`);
    }
}
// Both calls are completely valid in TypeScript!
openPage("https://example.com"); // Outputs: Opening URL: https://example.com
openPage(404); // Outputs: Opening internal page ID: 404
