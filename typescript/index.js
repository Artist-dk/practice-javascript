console.log("Hello, TypeScript!");
var firstName = "Dylan";
console.log(firstName);
// firstName = 10;  // Error: Type 'number' is not assignable to type 'string'.
var all = true;
console.log(all);
all = 10;
console.log(all);
all = "Hello";
console.log(all);
// unknown is a similar, but safer alternative to any.
