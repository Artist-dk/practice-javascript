var a = 10
var b = "hello"
var c = true
var d 
var e = null
var f = Symbol('a')

console.log(`a : type: ${typeof a},\tvalue: ${a}`)
console.log(`b : type: ${typeof b},\tvalue: ${b}`)
console.log(`c : type: ${typeof c},\tvalue: ${c}`)
console.log(`d : type: ${typeof d},\tvalue: ${d}`)
console.log(`e : type: ${typeof e},\tvalue: ${e}`)

process.stdout.write(`f : type: ${typeof f},\tvalue: `);
console.log(f);

console.log(typeof `${Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER}`)

console.log(typeof function() {console.log("Hello World")});

console.log(typeof {a: "hello"})

var g = {a: {b: {c: 1}}}
console.log(g.a.b)
console.log(typeof g)


