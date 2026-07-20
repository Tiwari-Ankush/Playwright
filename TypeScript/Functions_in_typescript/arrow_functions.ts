// Standard arrow function
const verifyTitle = (title: string): boolean => {
    return title === "Dashboard";
};
console.log(verifyTitle("Dashboard")); // Outputs: true

// Implicit return (If the function is just one line, you can omit the braces and 'return')
const isSuccess = (code: number): boolean => code === 200;
console.log(isSuccess(200)); // Outputs: true

// How you will see it in Playwright:
// test('Verify Login', async () => { ... });

