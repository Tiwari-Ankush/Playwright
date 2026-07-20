"use strict";
// TypeScript only knows this is 'unknown' data
let rawData = "Playwright is awesome";
// We assert (cast) it as a string so we can use string methods on it safely
let lengthOfString = rawData.length;
console.log(lengthOfString); // Outputs: 21
