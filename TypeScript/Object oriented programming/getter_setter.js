"use strict";
// Getters and setters allow you to tightly control how a private property is read or updated by the outside world.
class User {
    _username = "defaultUser";
    // Getter for username
    get username() {
        return this._username;
    }
    // Setter for username
    set username(newUsername) {
        if (newUsername.length < 5) {
            console.log("Username must be at least 5 characters long.");
        }
        else {
            this._username = newUsername;
        }
    }
}
const user = new User();
// Accessing the username using the getter
console.log(user.username); // Output: defaultUser  
const anotherUser = new User();
// Updating the username using the setter
anotherUser.username = "newUser123"; // Valid
console.log(anotherUser.username); // Output: newUser123
// Attempting to set an invalid username
anotherUser.username = "abc"; // Output: Username must be at least 5 characters long.
console.log(anotherUser.username); // Output: newUser123 (unchanged)
