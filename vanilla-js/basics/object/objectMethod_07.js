// 7 
const obj2 = {name: 'Alice'};
Object.seal(obj2);
obj2.name = 'Bob';
obj2.age = 25;
console.log(obj2)