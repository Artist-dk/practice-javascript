// JS015-spreadRestOperator.js
// Concept: Spreadrestoperator
//
// Description: Write JavaScript code to practice Spreadrestoperator here.

console.log("Practicing Spreadrestoperator in JS015-spreadRestOperator.js");

console.log("=== Spread and Rest Operators in JavaScript ===");

console.log("\n=== Spread Operator with Arrays ===");

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8]; // Spreading existing array into a new one

console.log("Original Numbers:", numbers);
console.log("New Numbers:", newNumbers);

console.log("\n=== Spread Operator with Objects ===");

const person = { name: "John", age: 30 };
const updatedPerson = { ...person, city: "New York", age: 31 }; // Overriding and adding properties

console.log("Original Person:", person);
console.log("Updated Person:", updatedPerson);

console.log("\n=== Spread Operator for Function Arguments ===");

function sum(a, b, c) {
    return a + b + c;
}
const nums = [10, 20, 30];
console.log("Sum:", sum(...nums)); // Passing array elements as arguments

console.log("\n=== Rest Operator with Function Parameters ===");

function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of multiple numbers:", sumAll(1, 2, 3, 4, 5));

console.log("\n=== Rest Operator in Object Destructuring ===");

const user = { id: 101, username: "johndoe", email: "john@example.com", role: "admin" };
const { username, email, ...otherDetails } = user;

console.log("Username:", username);
console.log("Email:", email);
console.log("Other Details:", otherDetails);

console.log("\n=== Rest Operator in Array Destructuring ===");

const [first, second, ...remaining] = [10, 20, 30, 40, 50];
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);
