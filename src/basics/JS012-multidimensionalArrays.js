// JS012-multidimensionalArrays.js
// Concept: Multidimensionalarrays
//
// Description: Write JavaScript code to practice Multidimensionalarrays here.

console.log("Practicing Multidimensionalarrays in JS012-multidimensionalArrays.js");

console.log("=== Multidimensional Arrays in JavaScript ===");

// Creating a 2D Array (Matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("\n=== Accessing Elements ===");
console.log("Matrix:", matrix);
console.log("Element at [0][1]:", matrix[0][1]); // 2
console.log("Element at [2][2]:", matrix[2][2]); // 9

console.log("\n=== Iterating Over a 2D Array ===");

// Using nested for loop
console.log("Using nested for loop:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Using forEach
console.log("\nUsing forEach:");
matrix.forEach((row, i) => {
    row.forEach((value, j) => {
        console.log(`matrix[${i}][${j}] = ${value}`);
    });
});

console.log("\n=== Modifying Elements ===");
matrix[1][1] = 99; // Changing middle element
console.log("Modified Matrix:", matrix);

console.log("\n=== Adding Rows and Columns ===");

// Adding a new row
matrix.push([10, 11, 12]);
console.log("After adding a new row:", matrix);

// Adding a new column to each row
matrix.forEach(row => row.push(row.reduce((a, b) => a + b))); // Adding sum as a new column
console.log("After adding a new column:", matrix);

console.log("\n=== Flattening a Multidimensional Array ===");
let flatArray = matrix.flat(); // Converts 2D array to 1D
console.log("Flattened Array:", flatArray);

console.log("\n=== Creating a 3D Array ===");
let cube = [
    [
        [1, 2], 
        [3, 4]
    ], 
    [
        [5, 6], 
        [7, 8]
    ]
];
console.log("3D Array:", cube);
console.log("Accessing cube[1][0][1]:", cube[1][0][1]); // 6
