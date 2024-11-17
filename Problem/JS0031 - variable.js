// Declare a variable with a BigInt value.

let a =  1234567890123456789012345678901234567890n

console.log(a)
console.log(typeof a)

// Create two unique Symbol variables and compare them.

let b = Symbol('uniqueSymbol')
let c = Symbol('uniqueSymbol')

console.log(b === c)
console.log(b.toString());
console.log(c.toString());