// scope of let and var

// variable declared with var keyword can be defined/used before decaration
a = 23; // variable definition
console.log("Line 1: "+a);
var a;  // variable declaration

{
  var a = 20;
  console.log("Line 2: "+a)
}
console.log("Line 3: "+a)

// varible declared with let keyword cannot be used before declaration
// it has block scope
let b = 10;
console.log("Line 4: "+b)

{
  let b = 11;
  console.log("Line 5: "+b)
}
console.log("Line 6: "+b)