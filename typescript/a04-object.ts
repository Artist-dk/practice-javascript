const User = {
    name: "Artist",
    email: "artist@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "artist", isPaid: false}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "react.js", price: 399}
}


export {}