const proto = {greet() {console.log('Hello!');}};
const obj = {};
Object.setPrototypeOf(obj, proto);
obj.greet();