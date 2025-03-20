const obj = {};
Object.defineProperties(obj, {
    name: { value: 'Cormier', writable: false },
    age: { value: 30, writable: true }
})
console.log(obj.name);