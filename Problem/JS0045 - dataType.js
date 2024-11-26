
// Deep Type Checking:
// Write a function deepTypeCheck(value) that determines if a value is primitive or non-primitive and prints its type.

// var a = {name: "Digambar"}
// var a = () => {return true}
// var a = null
// var a = [1, "hello"]
// var a = 12
// var a = "Hello"
// var a = Symbol('a')
var a = BigInt(98888888888888888888888888888888888888888888888888888888888)

console.log(typeof a)

function deepTypeCheck(val) {
  let typeCheck = (v) => {
    return v === null || (typeof v != 'object' && typeof v != 'function')
  }
  if(typeCheck(val)) console.log("Value is primitive and it's type is : "+ typeof val)
  else  console.log("Value is not primitive and it's type is : "+ typeof val)
}

deepTypeCheck(a)