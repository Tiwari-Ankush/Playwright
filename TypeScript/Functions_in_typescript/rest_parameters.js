"use strict";
const assignTestTags = (testName, ...tags) => {
    console.log(`Test: ${testName}`);
    console.log(`Tags applied: ${tags.join(", ")}`);
};
// You can pass as many tags as you want
assignTestTags("Checkout Flow", "@smoke", "@critical", "@payment");
console.log(assignTestTags("Login Flow", "@smoke")); // Outputs: Test: Login Flow, Tags applied: @smoke
