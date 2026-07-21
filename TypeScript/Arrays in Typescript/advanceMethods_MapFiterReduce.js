"use strict";
// Advanced mrthods - Map, Filter, Reduce
const numbers = [1, 2, 3, 4, 5];
// MAP: Multiply everything by 10
const tens = numbers.map(num => num * 10);
// Result: [10, 20, 30, 40, 50]
// FILTER: Keep only numbers greater than 2
const bigNums = numbers.filter(num => num > 2);
// Result: [3, 4, 5]
// REDUCE: Add them all together (accumulator keeps the running total)
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Result: 15
console.log(tens); // Output: [ 10, 20, 30, 40, 50 ]
console.log(bigNums); // Output: [ 3, 4, 5 ]
console.log(sum); // Output: 15 
