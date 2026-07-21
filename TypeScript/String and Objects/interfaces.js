"use strict";
// When you create objects, TypeScript needs to know their exact "shape" (what keys they have and what data types those keys hold). You have two ways to define this shape: type and interface.
const user = {
    username: "testUser_1",
    timeout: 5000
};
const admin = {
    username: "adminUser_1",
    timeout: 10000,
    adminLevel: 1
};
console.log(user); // Output: { username: 'testUser_1', timeout: 5000 }
console.log(admin); // Output: { username: 'adminUser_1', timeout: 10000, adminLevel: 1 }   
