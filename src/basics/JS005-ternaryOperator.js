// JS005-ternaryOperator.js
// Concept: Ternaryoperator
//
// Description: Write JavaScript code to practice Ternaryoperator here.

console.log("Practicing Ternaryoperator in JS005-ternaryOperator.js");

console.log("=== Basic Ternary Operator Example ===");

let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Can Vote:", canVote); // "Yes, you can vote."

console.log("\n=== Multiple Conditions with Ternary Operator ===");

let num = 10;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log("Number Status:", result); // "Positive"

console.log("\n=== Using Ternary for Even/Odd Check ===");

let number = 7;
let isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(`${number} is`, isEven); // "7 is Odd"

console.log("\n=== Nested Ternary Example ===");

let marks = 85;
let grade = marks >= 90 ? "A" :
            marks >= 80 ? "B" :
            marks >= 70 ? "C" :
            marks >= 60 ? "D" : "F";
console.log("Grade:", grade); // "B"

console.log("\n=== Assigning Values with Ternary Operator ===");

let user = "admin";
let accessLevel = user === "admin" ? "Full Access" : "Restricted Access";
console.log("User Access Level:", accessLevel); // "Full Access"

console.log("\n=== Using Ternary with Function Calls ===");

function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, Guest!";
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("")); // "Hello, Guest!"

console.log("\n=== Ternary Operator vs if-else ===");

let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cold";
console.log("Weather:", weather); // "Hot"

// Equivalent if-else statement
if (temperature > 25) {
    weather = "Hot";
} else {
    weather = "Cold";
}
console.log("Weather (if-else):", weather); // "Hot"

console.log("\n=== Using Ternary Operator in Template Literals ===");

let loggedIn = true;
console.log(`Welcome, ${loggedIn ? "User" : "Guest"}!`); // "Welcome, User!"
