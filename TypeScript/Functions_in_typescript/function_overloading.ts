// 1. Signature one: Pass a string URL
function openPage(url: string): void;
// 2. Signature two: Pass an ID number
function openPage(pageId: number): void;

// 3. The Implementation (uses type narrowing to handle both)
function openPage(target: string | number): void {
    if (typeof target === "string") {
        console.log(`Opening URL: ${target}`);
    } else if (typeof target === "number") {
        console.log(`Opening internal page ID: ${target}`);
    }
}

// Both calls are completely valid in TypeScript!

openPage("https://example.com"); // Outputs: Opening URL: https://example.com
openPage(404); // Outputs: Opening internal page ID: 404
