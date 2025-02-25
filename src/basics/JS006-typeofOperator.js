// JS006-typeofOperator.js
// Concept: Typeofoperator
//
// Description: Write JavaScript code to practice Typeofoperator here.

console.log("Practicing Typeofoperator in JS006-typeofOperator.js");

console.log("=== Using typeof Operator ===");

// Primitive Data Types
console.log("Type of 'Hello':", typeof "Hello"); // string
console.log("Type of 42:", typeof 42); // number
console.log("Type of 3.14:", typeof 3.14); // number
console.log("Type of true:", typeof true); // boolean
console.log("Type of undefined:", typeof undefined); // undefined
console.log("Type of null:", typeof null); // object (JavaScript quirk)
console.log("Type of Symbol('id'):", typeof Symbol("id")); // symbol
console.log("Type of 9007199254740991n (BigInt):", typeof 9007199254740991n); // bigint

console.log("\n=== Non-Primitive Data Types ===");

// Object
let person = { name: "Alice", age: 25 };
console.log("Type of { name: 'Alice', age: 25 }:", typeof person); // object

// Array (typeof returns 'object' for arrays)
let hobbies = ["Reading", "Cycling", "Gaming"];
console.log("Type of ['Reading', 'Cycling', 'Gaming']:", typeof hobbies); // object

// Function
function greet() {
  return "Hello!";
}
console.log("Type of function greet():", typeof greet); // function

// Date (typeof still returns 'object')
let today = new Date();
console.log("Type of new Date():", typeof today); // object

console.log("\n=== typeof with Variables ===");

let x;
console.log("Type of uninitialized variable:", typeof x); // undefined

x = 10;
console.log("Type of x after assigning number:", typeof x); // number

x = "Hello";
console.log("Type of x after assigning string:", typeof x); // string

x = true;
console.log("Type of x after assigning boolean:", typeof x); // boolean

x = null;
console.log("Type of x after assigning null:", typeof x); // object (JavaScript quirk)

x = {};
console.log("Type of x after assigning object:", typeof x); // object

x = [];
console.log("Type of x after assigning array:", typeof x); // object

x = function () {};
console.log("Type of x after assigning function:", typeof x); // function

console.log("\n=== typeof with Type Coercion ===");

console.log("Type of '5' + 2:", typeof ("5" + 2)); // string ("52")
console.log("Type of '5' - 2:", typeof ("5" - 2)); // number (3)
console.log("Type of '5' * 2:", typeof ("5" * 2)); // number (10)
console.log("Type of '5' / 2:", typeof ("5" / 2)); // number (2.5)
console.log("Type of 'Hello' * 2:", typeof ("Hello" * 2)); // number (NaN)

console.log("\n=== Checking if a Variable is an Array ===");

// typeof can't distinguish between an object and an array
console.log("Is hobbies an array?", Array.isArray(hobbies)); // true
console.log("Is person an array?", Array.isArray(person)); // false

