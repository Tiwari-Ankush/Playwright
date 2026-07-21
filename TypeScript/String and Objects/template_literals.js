"use strict";
let username = "testUser_1";
let role = "Admin";
// Old way (Clunky and hard to read):
let oldMessage = "User " + username + " logged in as " + role + ".";
// Template Literal (Clean and readable):
let newMessage = `User ${username} logged in as ${role}.`;
// Perfect for dynamic locators in Playwright:
let dynamicSelector = `button[name="${username}"]`;
console.log(oldMessage); // Output: User testUser_1 logged in as Admin.
console.log(newMessage); // Output: User testUser_1 logged in as Admin.
console.log(dynamicSelector); // Output: button[name="testUser_1"]  
