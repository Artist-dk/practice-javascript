// JS003-typeCoercion.js
// Concept: Typecoercion
//
// Description: Write JavaScript code to practice Typecoercion here.

console.log("Practicing Typecoercion in JS003-typeCoercion.js");

console.log("=== Implicit Type Coercion ===");

// String + Number -> String
console.log("10" + 5); // "105" (Number converted to String)
console.log(5 + "10"); // "510"

// String - Number -> Number
console.log("10" - 5); // 5 (String converted to Number)

// String * Number -> Number
console.log("10" * 2); // 20

// String / Number -> Number
console.log("20" / 2); // 10

// Boolean + Number -> Number
console.log(true + 1); // 2 (true is converted to 1)
console.log(false + 1); // 1 (false is converted to 0)

// Null + Number -> Number
console.log(null + 5); // 5 (null is treated as 0)

// Undefined + Number -> NaN
console.log(undefined + 5); // NaN (undefined cannot be converted)

console.log("\n=== Explicit Type Conversion (Type Casting) ===");

// Convert String to Number
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN (invalid number)

// Convert Boolean to Number
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Convert Number to String
console.log(String(123)); // "123"
console.log(String(true)); // "true"

// Convert Boolean to String
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false (empty string is falsy)
console.log(Boolean("Hello")); // true (non-empty string is truthy)

// Using parseInt() and parseFloat()
console.log(parseInt("42.5")); // 42
console.log(parseFloat("42.5")); // 42.5

console.log("\n=== Special Cases ===");

// "0" is truthy in Boolean but converts to 0 in Number
console.log(Boolean("0")); // true
console.log(Number("0")); // 0

// Empty array is truthy in Boolean but converts to 0 in Number
console.log(Boolean([])); // true
console.log(Number([])); // 0

// Empty object is truthy in Boolean but NaN in Number
console.log(Boolean({})); // true
console.log(Number({})); // NaN

// Null and Undefined differences
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
