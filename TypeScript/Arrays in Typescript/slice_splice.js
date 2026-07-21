"use strict";
// The Cutters
let fruits = ["Apple", "Banana", "Cherry", "Date"];
// SLICE: Give me a copy from index 1 up to (but not including) index 3
let copied = fruits.slice(1, 3);
// copied is ["Banana", "Cherry"]. 'fruits' is completely unchanged.
// SPLICE: Go to index 1, remove 2 items, and add "Kiwi"
fruits.splice(1, 2, "Kiwi");
// 'fruits' is permanently changed to ["Apple", "Kiwi", "Date"]
console.log(copied); // Output: [ 'Banana', 'Cherry' ]
console.log(fruits); // Output: [ 'Apple', 'Kiwi', 'Date' ]
