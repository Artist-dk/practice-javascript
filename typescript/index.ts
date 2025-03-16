console.log("Hello, TypeScript!");

let firstName: string = "Dylan";
console.log(firstName)
// firstName = 10;  // Error: Type 'number' is not assignable to type 'string'.

let all: any = true;
console.log(all)
all = 10;
console.log(all)
all = "Hello";
console.log(all)

// unknown is a similar, but safer alternative to any.

