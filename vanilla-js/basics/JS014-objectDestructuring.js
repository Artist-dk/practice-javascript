// JS014-objectDestructuring.js
// Concept: Objectdestructuring
//
// Description: Write JavaScript code to practice Objectdestructuring here.

console.log("Practicing Objectdestructuring in JS014-objectDestructuring.js");

console.log("=== Object Destructuring in JavaScript ===");

// Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["Reading", "Traveling", "Cycling"]
};

console.log("\n=== Basic Object Destructuring ===");
const { firstName, lastName, age } = person;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);

console.log("\n=== Destructuring with a Different Variable Name ===");
const { firstName: fName, lastName: lName } = person;
console.log("fName:", fName);
console.log("lName:", lName);

console.log("\n=== Destructuring Nested Objects ===");
const { address: { city, country } } = person;
console.log("City:", city);
console.log("Country:", country);

console.log("\n=== Destructuring with Default Values ===");
const { middleName = "No Middle Name" } = person;
console.log("Middle Name:", middleName);

console.log("\n=== Destructuring Arrays within an Object ===");
const { hobbies: [hobby1, hobby2] } = person;
console.log("First Hobby:", hobby1);
console.log("Second Hobby:", hobby2);

console.log("\n=== Function Parameter Destructuring ===");
function printPersonDetails({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}
printPersonDetails(person);

console.log("\n=== Using the Rest Operator in Destructuring ===");
const { firstName: name, ...restDetails } = person;
console.log("Name:", name);
console.log("Rest Details:", restDetails);
