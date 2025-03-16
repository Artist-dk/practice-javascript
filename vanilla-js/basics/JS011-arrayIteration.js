// JS011-arrayIteration.js
// Concept: Arrayiteration
//
// Description: Write JavaScript code to practice Arrayiteration here.

console.log("Practicing Arrayiteration in JS011-arrayIteration.js");

console.log("=== Array Iteration Methods in JavaScript ===");

let numbers = [10, 20, 30, 40, 50];

console.log("\n=== Using for Loop ===");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

console.log("\n=== Using for...of Loop ===");
for (let num of numbers) {
    console.log(num);
}

console.log("\n=== Using forEach() ===");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

console.log("\n=== Using map() ===");
let doubled = numbers.map(num => num * 2);
console.log("Doubled Array:", doubled);

console.log("\n=== Using filter() ===");
let filtered = numbers.filter(num => num > 25);
console.log("Numbers greater than 25:", filtered);

console.log("\n=== Using reduce() ===");
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

console.log("\n=== Using some() ===");
console.log("Are there numbers greater than 45?", numbers.some(num => num > 45));

console.log("\n=== Using every() ===");
console.log("Are all numbers greater than 5?", numbers.every(num => num > 5));

console.log("\n=== Using find() ===");
console.log("First number greater than 25:", numbers.find(num => num > 25));

console.log("\n=== Using findIndex() ===");
console.log("Index of first number greater than 25:", numbers.findIndex(num => num > 25));

console.log("\n=== Using entries() ===");
for (let [index, num] of numbers.entries()) {
    console.log(`Index ${index}: ${num}`);
}

console.log("\n=== Using keys() ===");
for (let key of numbers.keys()) {
    console.log("Key:", key);
}

console.log("\n=== Using values() ===");
for (let value of numbers.values()) {
    console.log("Value:", value);
}
