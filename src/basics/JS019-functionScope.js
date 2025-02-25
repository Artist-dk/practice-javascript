// JS019-functionScope.js
// Concept: Functionscope
//
// Description: Write JavaScript code to practice Functionscope here.

console.log("Practicing Functionscope in JS019-functionScope.js");

console.log("=== Function Scope in JavaScript ===");

console.log("\n=== Global Scope ===");
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible inside the function
}
showGlobal();

console.log("\n=== Local (Function) Scope ===");
function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // Accessible inside the function
}
localScopeExample();
// console.log(localVar); // ❌ Error: localVar is not defined

console.log("\n=== Block Scope (let & const) ===");
if (true) {
    let blockScopedVar = "I exist only in this block";
    const blockConst = "I am also block-scoped";
    console.log(blockScopedVar);
}
// console.log(blockScopedVar); // ❌ Error: blockScopedVar is not defined

console.log("\n=== Function Scope vs Block Scope ===");
function functionScope() {
    var functionVar = "I exist in function scope";
    if (true) {
        var functionVar = "Re-declared inside block";
    }
    console.log(functionVar); // ✅ Still accessible (var is function-scoped)
}
functionScope();

console.log("\n=== Lexical Scope (Nested Functions) ===");
function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessible due to lexical scope
    }

    innerFunction();
}
outerFunction();

console.log("\n=== Hoisting with var ===");
console.log(hoistedVar); // ✅ Undefined (var is hoisted but not initialized)
var hoistedVar = "I am hoisted";
// console.log(hoistedLet); // ❌ Error: Cannot access before initialization
let hoistedLet = "I am not hoisted the same way";

console.log("\n=== Function Scope with var, let, and const ===");
function testScope() {
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a, b, c); // ✅ Accessible inside the function
}
testScope();
// console.log(a, b, c); // ❌ Error: Not accessible outside

console.log("\n=== Closure: Preserving Scope ===");
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log("Count:", count);
    };
}
const counter = outer();
counter();
counter();
