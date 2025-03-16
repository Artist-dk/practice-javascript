// JS016-inOperator.js
// Concept: Inoperator
//
// Description: Write JavaScript code to practice Inoperator here.

console.log("Practicing Inoperator in JS016-inOperator.js");

console.log("=== The 'in' Operator in JavaScript ===");

console.log("\n=== Using 'in' with Objects ===");

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log("'name' in person:", "name" in person); // true
console.log("'age' in person:", "age" in person); // true
console.log("'country' in person:", "country" in person); // false

console.log("\n=== Using 'in' with Nested Objects ===");

const employee = {
    id: 101,
    details: {
        department: "Engineering",
        position: "Software Developer"
    }
};

console.log("'details' in employee:", "details" in employee); // true
console.log("'position' in employee.details:", "position" in employee.details); // true
console.log("'salary' in employee.details:", "salary" in employee.details); // false

console.log("\n=== Using 'in' with Arrays ===");

const numbers = [10, 20, 30, 40];

console.log("0 in numbers:", 0 in numbers); // true (index 0 exists)
console.log("2 in numbers:", 2 in numbers); // true (index 2 exists)
console.log("4 in numbers:", 4 in numbers); // false (index 4 does not exist)

console.log("\n=== Using 'in' with Undefined or Empty Array Slots ===");

const arr = [1, , 3]; // Empty slot at index 1
console.log("1 in arr:", 1 in arr); // false (index 1 is empty)
console.log("2 in arr:", 2 in arr); // true (index 2 has a value)

console.log("\n=== Using 'in' with Global Variables (window object) ===");

console.log("'document' in window:", "document" in window); // true (browser environment)
console.log("'localStorage' in window:", "localStorage" in window); // true
