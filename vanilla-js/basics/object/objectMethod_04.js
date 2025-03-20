// 4
const obj = {a:1, b:2, c:{a:1, b:2}};
const sealed = Object.seal(obj);
console.log(Object.isSealed(sealed));
console.log(Object.isSealed(obj));
