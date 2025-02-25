// JS020-functionHoisting.js
// Concept: Functionhoisting
//
// Description: Write JavaScript code to practice Functionhoisting here.

console.log("Practicing Functionhoisting in JS020-functionHoisting.js");

console.log("=== Function Hoisting in JavaScript ===");

console.log("\n=== Hoisting with Function Declarations ===");

// Calling the function before its declaration (Function Declaration is hoisted)
console.log(sayHello("Alice"));

function sayHello(name) {
    return `Hello, ${name}!`;
}

// Function declarations are fully hoisted, meaning they can be called before they appear in the code.

console.log("\n=== Hoisting with Function Expressions ===");

// console.log(sayHi("Bob")); // ❌ Error: Cannot access 'sayHi' before initialization
const sayHi = function (name) {
    return `Hi, ${name}!`;
};
console.log(sayHi("Bob"));

// Function expressions are NOT hoisted like function declarations. They behave like variables and must be defined before use.

console.log("\n=== Hoisting with Arrow Functions ===");

// console.log(sayBye("Charlie")); // ❌ Error: Cannot access 'sayBye' before initialization
const sayBye = (name) => `Bye, ${name}!`;
console.log(sayBye("Charlie"));

// Arrow functions are also NOT hoisted because they are assigned to a variable.

console.log("\n=== Hoisting with var, let, and const ===");

console.log(hoistedVar); // ✅ Undefined (var is hoisted but not initialized)
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ❌ Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted the same way";

// console.log(hoistedConst); // ❌ Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am also not hoisted like var";

// Variables declared with `var` are hoisted but not initialized.
// Variables declared with `let` and `const` are not accessible before their declaration.

console.log("\n=== Summary of Function Hoisting ===");
// ✅ Function declarations are hoisted completely.
// ❌ Function expressions (including arrow functions) are NOT hoisted.
// ❌ Variables declared with `let` and `const` are NOT hoisted in the same way as `var`.

