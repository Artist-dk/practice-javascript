// Shadowing: Write a program to show variable shadowing. Declare a variable outside a block and another variable with the same name inside the block.

let x = 10

if (true) {
  let x = 20
  console.log(x)
}

console.log(x)