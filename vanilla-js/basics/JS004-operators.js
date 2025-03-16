// JS004-operators.js
// Concept: Operators
//
// Description: Write JavaScript code to practice Operators here.

console.log("Practicing Operators in JS004-operators.js");

console.log("=== Arithmetic Operators ===");
let a = 10, b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0 (Remainder)
console.log("Exponentiation:", a ** b); // 100000 (10^5)

// Increment & Decrement
let x = 5;
console.log("Post-Increment:", x++); // 5 (then x becomes 6)
console.log("After Post-Increment:", x); // 6
console.log("Pre-Increment:", ++x); // 7
console.log("Post-Decrement:", x--); // 7 (then x becomes 6)
console.log("After Post-Decrement:", x); // 6
console.log("Pre-Decrement:", --x); // 5

console.log("\n=== Comparison Operators ===");
console.log("Equal (==):", 5 == "5"); // true (type conversion)
console.log("Strict Equal (===):", 5 === "5"); // false (no type conversion)
console.log("Not Equal (!=):", 5 != "5"); // false
console.log("Strict Not Equal (!==):", 5 !== "5"); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false
console.log("Greater or Equal:", a >= b); // true
console.log("Less or Equal:", a <= b); // false

console.log("\n=== Logical Operators ===");
console.log("AND (&&):", true && false); // false
console.log("OR (||):", true || false); // true
console.log("NOT (!):", !true); // false

console.log("\n=== Bitwise Operators ===");
console.log("Bitwise AND (&):", 5 & 1); // 1 (0101 & 0001 = 0001)
console.log("Bitwise OR (|):", 5 | 1); // 5 (0101 | 0001 = 0101)
console.log("Bitwise XOR (^):", 5 ^ 1); // 4 (0101 ^ 0001 = 0100)
console.log("Bitwise NOT (~):", ~5); // -6 (~00000101 = 11111010)
console.log("Left Shift (<<):", 5 << 1); // 10 (0101 << 1 = 1010)
console.log("Right Shift (>>):", 5 >> 1); // 2 (0101 >> 1 = 0010)

console.log("\n=== Assignment Operators ===");
let y = 10;
y += 5; // y = y + 5
console.log("Addition Assignment (+=):", y); // 15
y -= 3; // y = y - 3
console.log("Subtraction Assignment (-=):", y); // 12
y *= 2; // y = y * 2
console.log("Multiplication Assignment (*=):", y); // 24
y /= 4; // y = y / 4
console.log("Division Assignment (/=):", y); // 6
y %= 4; // y = y % 4
console.log("Modulus Assignment (%=):", y); // 2
y **= 3; // y = y ** 3
console.log("Exponentiation Assignment (**=):", y); // 8

console.log("\n=== Ternary Operator ===");
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can Vote:", canVote); // Yes

console.log("\n=== Type Operators ===");
console.log("Typeof:", typeof 123); // "number"
console.log("Instanceof:", [] instanceof Array); // true

