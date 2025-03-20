// 8
const person = {greet() {console.log("Hello!");}};
const student = Object.create(person);
student.greet();