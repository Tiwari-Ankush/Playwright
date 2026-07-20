"use strict";
// String Enum for testing environments
var Environment;
(function (Environment) {
    Environment["DEV"] = "https://dev.example.com";
    Environment["STAGING"] = "https://staging.example.com";
    Environment["PROD"] = "https://example.com";
})(Environment || (Environment = {}));
// Usage: You get autocomplete and guarantee you didn't misspell the URL
let currentEnv = Environment.STAGING;
console.log(currentEnv); // Outputs: "https://staging.example.com"

//run command:  node .\enums_string.js   