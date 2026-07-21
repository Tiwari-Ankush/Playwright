let rawUIPrice = "   Total: $50.00   ";

// Clean the text
let cleanPrice = rawUIPrice.trim(); 
// Result: "Total: $50.00"

// Check for a value
console.log(cleanPrice.includes("$50")); // true

// Remove the text to just get the number
let numberOnly = cleanPrice.replace("Total: $", ""); 
// Result: "50.00"

// Split a string into an array
let orderStatus = "Order-12345-Shipped";
let parts = orderStatus.split("-"); 
// Result: ["Order", "12345", "Shipped"]

console.log(cleanPrice); // Output: Total: $50.00
console.log(numberOnly); // Output: 50.00
console.log(parts); // Output: [ 'Order', '12345', 'Shipped' ]  

