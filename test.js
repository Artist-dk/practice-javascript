// const student = {
//   name: "John Doe",
//   rollNo: 4444,
//   MobNo: 3322332255
// }

// for (key in student) {
//   console.log(`${key}: ${student[key]}`)
// }






// // Object literals
// let name = "Artist"
// let age = 23
// let rn = "RollNo"

// const student = {
//   name,
//   age, 
//   [rn]: 1020,
//   show(){
//     console.log(this.name)
//     console.log(this.age)
//     console.log(this.RollNo)
//   },
//   'show all'() {
//     return this
//   }
// }

// console.log(student.show())
// console.log(student['show all']())








// // Object literals
// let fname = "Digambar"
// let lname = "Kumbhar"
// let course = "Btech"

// function student(fname, lname, course) {
//   let fullname = fname + " " + lname;
//   return {fullname, course}
// } 

// let s = student(fname, lname, course)

// console.log(s.fullname)
// console.log(s.course)









// // Destructuring Array
// let user = ["Digambar Kumbhar", 25, "Atpadi", ["Male", 25000]]
// let [name, age = 23, city, [gender, salary]] = user
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(gender)
// console.log(salary)







// // Destructuring Array
// function user([name, age = 23, city]) {
//   console.log(name)
//   console.log(age) 
//   console.log(city)
// }
// user(["Digambar Kumbhar", 25, "Atpadi"])







// // Destructuring Object
// const user = {
//   name: "Digambar Kumbhar",
//   age: 23,
//   city: "Atpadi"
// }
// let {name: n, age, city} = user

// console.log(n)
// console.log(age)
// console.log(city)








// // OOP - class
// class car {
//   constructor(parameters) {
//     this.name = parameters;
//     console.log(parameters)
//     console.log("Constructor function")
//   }
//   details() {
//     console.log(this.name)
//   }
//   static staticMethod() {
//     console.log("Static Function")
//   }
// }
// let a = 
//   new car("TATA")
// let b = new car("TOYOTA")

// console.log(a.name)
// console.log(b.name)
// a.details()
// // a.staticMethod()
// car.staticMethod()







// // Inheritance
// class employee {
//   constructor(name) {
//     console.log("Constructor: Employee "+name);
//   }
// }
// class manager extends employee {
//   constructor() {
//     super("Kernel");
//     console.log("Constructor: Manager");
//   }
// }
// // let a = new employee();
// let b = new manager("John Doe");







// // Promise
// let complete = false;

// let prom = new Promise(function(resolve, reject) {
//   if(complete) {
//     resolve("Promise resolved")
//   } else {
//     reject("Promise rejected")
//   }
// })
// console.log(prom)




// String method

let text = "Hello, World!";
let text2 = "JavaScript Kernel"
// console.log(text.length)
// console.log(text.at(1))
// console.log(text.charAt(0))
// console.log(text.charCodeAt(0))
// console.log(text.slice(0,5))
// console.log(text.slice(-5))
// console.log(text.slice(-5,-1))
// console.log(text.substring(0,5))
// console.log(text.substr(0,5))
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text.concat(" ---> ", text2))

text = "        Hello, World!            "
// console.log(text.trim())
// console.log(text.trimStart())
// console.log(text.trimEnd())

text = "H"
// console.log(text.padStart(4,"0"))
// console.log(text.padEnd(4, "_"))

text = "Hello, World!"
// console.log(text.repeat(4))
// console.log(text.replace("World", "JavaScript"))
// console.log(text.replace("world", "JavaScript"))
// console.log(text.replace(/WORLD/i, "JavaScript")) // using regular expression

text = "Sell! Sell! Sell!"
// console.log(text.replace(/Sell/g, "Wellcome"))
// console.log(text.replaceAll("Sell", "Welcome"))

// console.log(text.split("!"))
// console.log(text.split(""))

// console.log(text.indexOf("S"))
// console.log(text.indexOf("!"))
// console.log(text.lastIndexOf("!"))
// console.log(text.lastIndexOf("S"))
// console.log(text.search("ll"))
// console.log(text.search(/Sell/))

// console.log(text.match("ll"))
// console.log(text.match(/l!/))
// console.log(text.matchAll("Sell"))
// console.log(Array.from(text.matchAll("Sell")))

// console.log(text.includes("ll!"))
// console.log(text.includes("$"))

// console.log(text.startsWith("Sell"))
// console.log(text.startsWith("sell"))
// console.log(text.startsWith('a'))
// console.log(text.startsWith("!",4))

// console.log(text.endsWith("Sell!"))
// console.log(text.endsWith("!"))
// console.log(text.endsWith("l",3))


 


// Hoisting
g 