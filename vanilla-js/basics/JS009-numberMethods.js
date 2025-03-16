// JS009-numberMethods.js
// Concept: Numbermethods
//
// Description: Write JavaScript code to practice Numbermethods here.

console.log("Practicing Numbermethods in JS009-numberMethods.js");

console.log("=== Number Methods in JavaScript ===");

let num = 123.456789;

console.log("\n=== Basic Number Properties ===");
console.log("Original Number:", num);
console.log("Maximum Safe Integer:", Number.MAX_SAFE_INTEGER);
console.log("Minimum Safe Integer:", Number.MIN_SAFE_INTEGER);
console.log("Maximum Value:", Number.MAX_VALUE);
console.log("Minimum Value:", Number.MIN_VALUE);
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);
console.log("Is NaN (Not a Number):", Number.isNaN(num));

console.log("\n=== Rounding Methods ===");
console.log("Round:", Math.round(num)); // 123
console.log("Floor:", Math.floor(num)); // 123
console.log("Ceil:", Math.ceil(num)); // 124
console.log("Truncate:", Math.trunc(num)); // 123
console.log("To Fixed (2 decimals):", num.toFixed(2)); // "123.46"
console.log("To Precision (4 digits):", num.toPrecision(4)); // "123.5"

console.log("\n=== Checking Number Types ===");
console.log("Is Integer:", Number.isInteger(num)); // false
console.log("Is Finite:", Number.isFinite(num)); // true
console.log("Is NaN:", Number.isNaN(num)); // false

console.log("\n=== Converting Strings to Numbers ===");
let strNum = "42.99";
console.log("String to Number (parseInt):", parseInt(strNum)); // 42
console.log("String to Number (parseFloat):", parseFloat(strNum)); // 42.99
console.log("Using Number():", Number(strNum)); // 42.99
console.log("Using Unary + Operator:", +strNum); // 42.99

console.log("\n=== Exponential and Logarithmic Methods ===");
console.log("Power (2^3):", Math.pow(2, 3)); // 8
console.log("Square Root of 16:", Math.sqrt(16)); // 4
console.log("Cube Root of 27:", Math.cbrt(27)); // 3
console.log("Logarithm (ln 10):", Math.log(10)); // Natural log of 10
console.log("Base 10 Log of 100:", Math.log10(100)); // 2

console.log("\n=== Random and Absolute Value ===");
console.log("Random Number (0 to 1):", Math.random());
console.log("Random Number (1 to 100):", Math.floor(Math.random() * 100) + 1);
console.log("Absolute Value of -10:", Math.abs(-10)); // 10

console.log("\n=== Min and Max Values ===");
console.log("Min of (10, 5, 20):", Math.min(10, 5, 20)); // 5
console.log("Max of (10, 5, 20):", Math.max(10, 5, 20)); // 20

console.log("\n=== Converting Numbers to Strings ===");
let numVal = 255;
console.log("Number to String:", numVal.toString()); // "255"
console.log("Number to Binary:", numVal.toString(2)); // "11111111"
console.log("Number to Hexadecimal:", numVal.toString(16)); // "ff"
