
let a = "Good global"
function hello() {
    let a = "Good morning"
    {
        let a = "Good afternoon"
        console.log("Hello: "+a)
    }
    let b = function hello1() {
        console.log("I am b "+a)
    }
    return b
}
a = hello()
a()
console.log("_________________")


/*
output will be:
Hello: Good afternoon
I am b Good morning
_________________
*/
