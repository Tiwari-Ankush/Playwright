"use strict";
// Defining a Tuple: The first item MUST be a number, the second MUST be a string
let apiResponse;
apiResponse = [200, "Success"]; // Works perfectly
// apiResponse = ["Success", 200]; // TS ERROR: Order matters!
// apiResponse = [200, "Success", "Extra Data"]; // TS ERROR: Only 2 items allowed!
console.log(apiResponse); // Outputs: [200, "Success"]  
