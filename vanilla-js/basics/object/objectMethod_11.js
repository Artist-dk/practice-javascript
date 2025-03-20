const obj = {};
console.log(Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));