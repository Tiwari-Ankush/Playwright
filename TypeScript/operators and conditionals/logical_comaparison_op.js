"use strict";
let isVisible = true;
let isEnabled = false;
let rowCount = 5;
// Comparison
console.log(rowCount === 5); // true (Strict equality - checks value AND type)
console.log(rowCount !== 3); // true (Strict inequality)
console.log(rowCount > 10); // false (Greater than)
// Logical AND (&&) - BOTH sides must be true
console.log(isVisible && isEnabled); // false
// Logical OR (||) - AT LEAST ONE side must be true
console.log(isVisible || isEnabled); // true
// Logical NOT (!) - Reverses the boolean state
console.log(!isVisible); // false
