// JS013-objectBasics.js
// Concept: Objectbasics
//
// Description: Write JavaScript code to practice Objectbasics here.

console.log("Practicing Objectbasics in JS013-objectBasics.js");

console.log("=== Object Basics in JavaScript ===");

// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["Reading", "Traveling", "Cycling"],
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};

console.log("\n=== Accessing Object Properties ===");
console.log("First Name:", person.firstName);
console.log("Last Name:", person["lastName"]); // Alternative way
console.log("City:", person.address.city);
console.log("First Hobby:", person.hobbies[0]);

console.log("\n=== Calling Object Methods ===");
console.log(person.greet());

console.log("\n=== Modifying Object Properties ===");
person.age = 35;
console.log("Updated Age:", person.age);

console.log("\n=== Adding New Properties ===");
person.occupation = "Software Developer";
console.log("Added Occupation:", person.occupation);

console.log("\n=== Deleting Properties ===");
delete person.isStudent;
console.log("After Deleting isStudent:", person);

console.log("\n=== Looping Through Object Properties ===");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("\n=== Object.keys(), Object.values(), and Object.entries() ===");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

console.log("\n=== Checking Property Existence ===");
console.log("'age' in person:", "age" in person);
console.log("'salary' in person:", "salary" in person);

console.log("\n=== Creating an Object with a Constructor Function ===");
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
        return `${this.brand} ${this.model}, Year: ${this.year}`;
    };
}

let car1 = new Car("Toyota", "Camry", 2022);
console.log(car1.getDetails());

console.log("\n=== Creating an Object with Object.create() ===");
let protoPerson = {
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

let anotherPerson = Object.create(protoPerson);
anotherPerson.name = "Alice";
console.log(anotherPerson.greet());
