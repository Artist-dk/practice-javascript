
// Null vs Undefined:
// Write a function to check if a given variable is null or undefined.

var a = null, b, c = 1;

function check(p) {
  if(p == null && typeof p != 'undefined') {
    return "Given Variable is Null"
  } else if(typeof p == 'undefined') {
    return "Given Variable is Undefined"
  } else {
    return "Given variable is not either null or undefined"
  }
}

console.log(check(a)) // Given Variable is Null
console.log(check(b)) // Given Variable is Undefined
console.log(check(c)) // Given variable is not either null or undefined