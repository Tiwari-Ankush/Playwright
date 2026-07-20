"use strict";
// Function Declaration (Hoisted - can be called above this line)
function performLogin(username) {
    console.log(`Logging in user: ${username}`);
}
// Function Expression (Not hoisted - must be defined before calling)
const clickSubmit = function (buttonId) {
    console.log(`Clicking element: ${buttonId}`);
};
const username = "testUser";
performLogin(username);
clickSubmit("#submit-button");
