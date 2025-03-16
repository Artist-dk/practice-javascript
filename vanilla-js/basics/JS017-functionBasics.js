// JS017-functionBasics.js
// Concept: Functionbasics
//
// Description: Write JavaScript code to practice Functionbasics here.

console.log("Practicing Functionbasics in JS017-functionBasics.js");

console.log("=== Function Basics in JavaScript ===");

console.log("\n=== Function Declaration ===");
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

console.log("\n=== Function Expression ===");
const add = function (a, b) {
    return a + b;
};
console.log("Sum:", add(5, 10));

console.log("\n=== Arrow Function ===");
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 3));

console.log("\n=== Function with Default Parameters ===");
function introduce(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(introduce()); // Uses default value
console.log(introduce("Bob"));

console.log("\n=== Function with Rest Parameters ===");
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of all numbers:", sumAll(1, 2, 3, 4, 5));

console.log("\n=== Function Returning Another Function ===");
function outerFunction(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}
const sayHello = outerFunction("Hello");
console.log(sayHello("Charlie"));

console.log("\n=== Immediately Invoked Function Expression (IIFE) ===");
(function () {
    console.log("This function runs immediately!");
})();

console.log("\n=== Higher-Order Function (Function as Argument) ===");
function operate(a, b, operation) {
    return operation(a, b);
}
console.log("Using addition:", operate(5, 3, add));
console.log("Using multiplication:", operate(5, 3, multiply));

console.log("\n=== Callback Function Example ===");
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}
fetchData((message) => console.log(message));
