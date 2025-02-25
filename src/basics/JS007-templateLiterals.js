// JS007-templateLiterals.js
// Concept: Templateliterals
//
// Description: Write JavaScript code to practice Templateliterals here.

console.log("Practicing Templateliterals in JS007-templateLiterals.js");

console.log("=== Basic Template Literal ===");

let name = "Alice";
let age = 25;

// Using template literals
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

console.log("\n=== Multi-line Strings with Template Literals ===");

// Traditional multi-line string using \n
let traditionalMultiline = "This is line 1\nThis is line 2\nThis is line 3";
console.log(traditionalMultiline);

// Using template literals for multi-line strings
let templateMultiline = `This is line 1
This is line 2
This is line 3`;
console.log(templateMultiline);

console.log("\n=== Expression Evaluation in Template Literals ===");

let a = 10;
let b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // 15
console.log(`The product of ${a} and ${b} is ${a * b}.`); // 50
console.log(`Is ${a} greater than ${b}? ${a > b}`); // true

console.log("\n=== Function Calls inside Template Literals ===");

function getGreeting(name) {
    return `Hello, ${name}!`;
}

console.log(`Message: ${getGreeting("Alice")}`);

console.log("\n=== Using Ternary Operators inside Template Literals ===");

let score = 80;
console.log(`You have ${score >= 50 ? "passed" : "failed"} the test.`);

console.log("\n=== Nested Template Literals ===");

let student = {
    name: "Bob",
    marks: 85
};

let result = `Student Info:
  Name: ${student.name}
  Marks: ${student.marks}
  Status: ${student.marks >= 50 ? "Pass" : "Fail"}
`;
console.log(result);

console.log("\n=== Escaping Backticks in Template Literals ===");

let escapeBacktick = `This is how you use \`backticks\` inside a template literal.`;
console.log(escapeBacktick);

