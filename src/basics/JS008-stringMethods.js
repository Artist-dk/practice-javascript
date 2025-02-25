// JS008-stringMethods.js
// Concept: Stringmethods
//
// Description: Write JavaScript code to practice Stringmethods here.

console.log("Practicing Stringmethods in JS008-stringMethods.js");

console.log("=== String Methods in JavaScript ===");

let str = "  Hello, JavaScript!  ";

console.log("\n=== Basic String Properties ===");
console.log("Original String:", `"${str}"`);
console.log("Length of String:", str.length);

console.log("\n=== Case Conversion ===");
console.log("Uppercase:", str.toUpperCase()); // "  HELLO, JAVASCRIPT!  "
console.log("Lowercase:", str.toLowerCase()); // "  hello, javascript!  "

console.log("\n=== Removing Whitespace ===");
console.log("Trim:", `"${str.trim()}"`); // Removes leading and trailing spaces
console.log("Trim Start:", `"${str.trimStart()}"`); // Removes leading spaces
console.log("Trim End:", `"${str.trimEnd()}"`); // Removes trailing spaces

console.log("\n=== Finding and Extracting Substrings ===");
console.log("Character at index 7:", str.charAt(7)); // "J"
console.log("Character code of 'J':", str.charCodeAt(7)); // ASCII code of 'J'
console.log("Substring from index 2 to 9:", str.substring(2, 9)); // "Hello, "
console.log("Slice from index 2 to 9:", str.slice(2, 9)); // "Hello, "
console.log("Slice with negative index (-10 to -1):", str.slice(-10, -1)); // "JavaScrip"

console.log("\n=== Checking Substrings ===");
console.log("Includes 'JavaScript':", str.includes("JavaScript")); // true
console.log("Starts with '  Hello':", str.startsWith("  Hello")); // true
console.log("Ends with 'Script!  ':", str.endsWith("Script!  ")); // true
console.log("Index of 'JavaScript':", str.indexOf("JavaScript")); // 8
console.log("Last index of 'a':", str.lastIndexOf("a")); // 11

console.log("\n=== Replacing and Modifying Strings ===");
console.log("Replace 'JavaScript' with 'World':", str.replace("JavaScript", "World")); // "  Hello, World!  "
console.log("Replace all 'o' with '0':", str.replaceAll("o", "0")); // "  Hell0, JavaScript!  "
console.log("Repeat 3 times:", str.repeat(3)); // Repeats the string 3 times

console.log("\n=== Splitting Strings ===");
let csv = "apple,banana,orange,grape";
console.log("Split by comma:", csv.split(",")); // ["apple", "banana", "orange", "grape"]
console.log("Split by empty string:", str.split("")); // Splits every character

console.log("\n=== Joining Strings ===");
let words = ["Hello", "World", "JavaScript"];
console.log("Joined with space:", words.join(" ")); // "Hello World JavaScript"

console.log("\n=== Template Literal with String Methods ===");
let name = "Alice";
let greeting = `Hello, ${name.toUpperCase()}!`;
console.log(greeting); // "Hello, ALICE!"

