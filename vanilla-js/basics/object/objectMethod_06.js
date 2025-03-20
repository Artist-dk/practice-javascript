// 6 
const obj1 = {name: 'Khabib'};
Object.freeze(obj1);
obj1.name = 'Bob'; 
console.log(obj1.name);