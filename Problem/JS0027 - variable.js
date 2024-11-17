// Global Scope Pollution: Write a program where you declare a variable without var, let, or const. Demonstrate how it becomes globally accessible.

function globVar() {
  a = "I am global"
  console.log(a)
}

globVar()

console.log(a)

a = "overwitten"
console.log(a)