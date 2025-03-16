// JS018-functionParameters.js
// Concept: Functionparameters
//
// Description: Write JavaScript code to practice Functionparameters here.

console.log("Practicing Functionparameters in JS018-functionParameters.js");

console.log("=== Function Parameters in JavaScript ===");

console.log("\n=== Required Parameters ===");
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice");

console.log("\n=== Default Parameters ===");
function introduce(name = "Guest", age = 18) {
    console.log(`Name: ${name}, Age: ${age}`);
}
introduce(); // Uses default values
introduce("Bob", 25);

console.log("\n=== Rest Parameters ===");
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of numbers:", sumAll(1, 2, 3, 4, 5));

console.log("\n=== Passing Functions as Parameters (Callback Functions) ===");
function executeTask(taskName, callback) {
    console.log(`Starting task: ${taskName}`);
    callback();
}
executeTask("Download File", () => console.log("Task completed!"));

console.log("\n=== Destructuring Function Parameters ===");
function printUser({ name, age, city = "Unknown" }) {
    console.log(`User: ${name}, Age: ${age}, City: ${city}`);
}
const user = { name: "Charlie", age: 28 };
printUser(user);

console.log("\n=== Parameter Order: Required, Default, and Rest ===");
function showDetails(name, age = 30, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(", ")}`);
}
showDetails("David", 35, "Reading", "Swimming");
showDetails("Emma");

console.log("\n=== Using Arguments Object (Only in Regular Functions) ===");
function showArguments() {
    console.log("Arguments:", arguments);
}
showArguments(10, 20, 30);
