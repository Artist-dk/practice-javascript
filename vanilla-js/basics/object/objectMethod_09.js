const obj = {};
Object.defineProperty(obj, 'name', {
    value: 'Artist',
    writable: false
});
console.log(obj.name);