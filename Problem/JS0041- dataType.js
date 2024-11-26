
// Symbol Uniqueness:
// Write a function that creates two Symbols with the same description. Check if they are equal.

var a = Symbol("Hello"), b = Symbol("Hello")

if(a === b) console.log("Symbols are equal") 
else console.log("Symbols are not equal")