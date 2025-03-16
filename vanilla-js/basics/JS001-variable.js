// JS001-variable.js
// Concept: Variable
//
// Description: Write JavaScript code to practice Variable here.

console.log("Practicing Variable in JS001-variable.js");

// Declaring variables using var (function-scoped)
var name = "Artist";
console.log("Name:", name);

// Declaring variables using let (block-scoped)
let age = 25;
console.log("Age:", age);

// Declaring constants using const (cannot be reassigned)
const country = "IND";
console.log("Country:", country);

// Demonstrating variable reassignment
name = "Anonymous"; // Allowed (var is mutable)
age = 30; // Allowed (let is mutable)
console.log("Updated Name:", name);
console.log("Updated Age:", age);

// Data types in variables
let isStudent = true; // Boolean
let score = 95.5; // Number
let city = "New York"; // String
let hobbies = ["Reading", "Cycling", "Gaming"]; // Array
let address = { street: "123 Main St", zip: "10001" }; // Object
let job; // Undefined

console.log("Is Student:", isStudent);
console.log("Score:", score);
console.log("City:", city);
console.log("Hobbies:", hobbies);
console.log("Address:", address);
console.log("Job:", job); // Undefined

// Example of using template literals
console.log(`Hello, my name is ${name}, I am ${age} years old and I live in ${city}.`);

