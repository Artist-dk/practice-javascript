
// Primitive Data Types Identification:
// Write a function identifyType(value) that takes an input and returns its type (e.g., string, number, symbol, etc.).

function identifyType(value) {
  return typeof value
}

console.log(identifyType("Hello"))
console.log(identifyType(1))
console.log(identifyType(true))
console.log(identifyType(undefined))
console.log(identifyType(Symbol('a')))
console.log(identifyType(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER))