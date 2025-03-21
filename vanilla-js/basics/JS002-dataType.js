// JS002-dataType.js
// Concept: Datatype
//
// Description: Write JavaScript code to practice Datatype here.

console.log("Practicing Datatype in JS002-dataType.js");

// String
let name = "Alice";
console.log("String:", name);

// Number
let age = 25;
let score = 99.5;
console.log("Number (Integer):", age);
console.log("Number (Float):", score);

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent);

// Undefined
let address;
console.log("Undefined:", address);

// Null
let phoneNumber = null;
console.log("Null:", phoneNumber);

// Symbol (Unique identifier)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol comparison:", id1 === id2); // false (each Symbol is unique)

// BigInt (for very large numbers)
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber);

// Object (Collection of key-value pairs)
let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
console.log("Object:", person);

// Array (List of values)
let hobbies = ["Reading", "Cycling", "Gaming"];
console.log("Array:", hobbies);

// Type Checking
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of address:", typeof address);
console.log("Type of phoneNumber:", typeof phoneNumber);
console.log("Type of id1:", typeof id1);
console.log("Type of bigNumber:", typeof bigNumber);
console.log("Type of person:", typeof person);
console.log("Type of hobbies:", typeof hobbies);