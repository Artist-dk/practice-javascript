var a = 10
var b = "hello"
var c = true
var d 
var e = null
var f = Symbol('a')

console.log(`a : type: ${typeof a},\tvalue: ${a}`)
console.log(`b : type: ${typeof b},\tvalue: ${b}`)
console.log(`c : type: ${typeof c},\tvalue: ${c}`)
console.log(`d : type: ${typeof d},\tvalue: ${d}`)
console.log(`e : type: ${typeof e},\tvalue: ${e}`)

process.stdout.write(`f : type: ${typeof f},\tvalue: `);
console.log(f);

console.log(typeof `${Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER}`)

console.log(typeof function() {console.log("Hello World")});

console.log(typeof {a: "hello"})

var g = {a: {b: {c: 1}}}
console.log(g.a.b)
console.log(typeof g)

// Null vs Undefined:
// Write a function to check if a given variable is null or undefined.

// BigInt Addition:
// Write a program to add two BigInt numbers and print the result.

// Template Literals:
// Use template literals to generate a dynamic greeting message based on user inputs (name and age).

// Symbol Uniqueness:
// Write a function that creates two Symbols with the same description. Check if they are equal.

// Type Conversion:
// Convert a string "123" into a number and a number 123 into a string. Validate the conversions using typeof.

// Array Basics:
// Write a program to create an array of numbers from 1 to 10, then find the sum of all elements.

// Object Manipulation:
// Create an object with keys name, age, and profession. Update the age key and add a new hobby key.

// Deep Type Checking:
// Write a function deepTypeCheck(value) that determines if a value is primitive or non-primitive and prints its type.

// Clone an Object:
// Write a function to clone an object and demonstrate that modifying the clone doesn't affect the original.

// Count Character Frequency:
// Write a program that takes a string input and returns an object representing the frequency of each character.

// Unique Values in an Array:
// Use a Set to find and print the unique values in an array.

// Map Operations:
// Write a program that demonstrates the use of Map. Add, retrieve, and delete entries, then print all entries.

// Compare Two Objects:
// Write a function to check if two objects have the same keys and values.

// RegExp Matching:
// Write a program that validates an email address using a regular expression.

// Challenge Problems
// Nested Object Traversal:
// Write a function to retrieve a deeply nested value from an object.

// Dynamic Type Checker:
// Write a utility function that takes an array of mixed data types and returns an object summarizing the count of each type.