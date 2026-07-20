"use strict";
let retryCount = 0;
// Basic Assignment
retryCount = 1;
// Compound Assignments
retryCount += 1; // Equivalent to: retryCount = retryCount + 1 (Now 2)
retryCount -= 1; // Equivalent to: retryCount = retryCount - 1 (Now 1)
retryCount *= 5; // Equivalent to: retryCount = retryCount * 5 (Now 5)
console.log(retryCount); // Outputs: 5
