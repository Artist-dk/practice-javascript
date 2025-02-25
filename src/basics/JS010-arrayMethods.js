// JS010-arrayMethods.js
// Concept: Arraymethods
//
// Description: Write JavaScript code to practice Arraymethods here.

console.log("Practicing Arraymethods in JS010-arrayMethods.js");

console.log("=== Array Methods in JavaScript ===");

let fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log("\n=== Basic Array Properties ===");
console.log("Original Array:", fruits);
console.log("Array Length:", fruits.length);

console.log("\n=== Adding and Removing Elements ===");

// Add to the end
fruits.push("Elderberry");
console.log("After push('Elderberry'):", fruits);

// Remove from the end
let lastFruit = fruits.pop();
console.log("After pop():", fruits, "| Removed:", lastFruit);

// Add to the beginning
fruits.unshift("Apricot");
console.log("After unshift('Apricot'):", fruits);

// Remove from the beginning
let firstFruit = fruits.shift();
console.log("After shift():", fruits, "| Removed:", firstFruit);

console.log("\n=== Accessing and Modifying Elements ===");
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);
fruits[1] = "Blueberry"; // Modifying an element
console.log("After modifying index 1:", fruits);

console.log("\n=== Searching in Arrays ===");
console.log("Index of 'Cherry':", fruits.indexOf("Cherry"));
console.log("Includes 'Banana':", fruits.includes("Banana"));
console.log("Find 'Cherry':", fruits.find(fruit => fruit === "Cherry"));
console.log("Find Index of 'Cherry':", fruits.findIndex(fruit => fruit === "Cherry"));

console.log("\n=== Filtering and Transforming Arrays ===");

// Filtering
let filteredFruits = fruits.filter(fruit => fruit.startsWith("B"));
console.log("Fruits that start with 'B':", filteredFruits);

// Mapping
let fruitLengths = fruits.map(fruit => fruit.length);
console.log("Lengths of each fruit:", fruitLengths);

// Sorting
console.log("Sorted Fruits:", fruits.sort());

// Reversing
console.log("Reversed Fruits:", fruits.reverse());

console.log("\n=== Combining and Slicing Arrays ===");

// Concatenation
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated Arrays:", allFruits);

// Slice (does not modify original)
let slicedFruits = allFruits.slice(1, 4);
console.log("Sliced Fruits (index 1 to 4):", slicedFruits);

console.log("\n=== Removing and Replacing Elements ===");

// Splice (modifies original array)
let removedItems = fruits.splice(1, 2, "Mango", "Peach");
console.log("After splice(1, 2, 'Mango', 'Peach'):", fruits);
console.log("Removed Items:", removedItems);

console.log("\n=== Joining Arrays into Strings ===");
console.log("Joined Fruits:", fruits.join(", "));

console.log("\n=== Reducing an Array ===");

let numbers = [10, 20, 30, 40];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

console.log("\n=== Checking Conditions in Arrays ===");

console.log("Every element has more than 3 letters:", fruits.every(fruit => fruit.length > 3));
console.log("Some elements have more than 6 letters:", fruits.some(fruit => fruit.length > 6));

console.log("\n=== Flattening an Array ===");

let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened Array:", nestedArray.flat(2));
