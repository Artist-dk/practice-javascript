
function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean) => {}

addTwo(5) 
getUpper("artist")
signUpUser("artist","digambarckumbhar@outlook.com",false)
loginUser("a", "a@o.com", true)


// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 Ok"
// }


const getHello = (s: string): string => {
    return ''
}

const heros = ['tho', 'siderman','ironman']

heros.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}
function handleError(errmsg: string): never {
    console.log(errmsg);
}



export{}