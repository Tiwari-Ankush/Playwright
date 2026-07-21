"use strict";
// A type is much more flexible. While it can define the shape of an object, it can also define Unions (string | number), Tuples, and basic primitives. However, once a type is created, it cannot be reopened and changed.
const config = {
    headless: true
};
const locator = "button";
const coords = [10, 20];
console.log(config); // Output: { headless: true }
console.log(locator); // Output: button
console.log(coords); // Output: [ 10, 20 ]
