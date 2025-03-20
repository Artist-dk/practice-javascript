const symbol = Symbol('id');
const obj = { [symbol]: 123 };
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);
console.log(obj[symbols[0]]);