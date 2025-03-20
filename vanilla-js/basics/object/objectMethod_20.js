const obj = {name: 'Artist', age: 26 };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);