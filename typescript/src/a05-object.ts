// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User) {
//     return {name:"",email:"",isActive:true}
// }

// createUser({name:"",email:"",isActive:true})



type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number 
}

let myUser: User = {
    _id: "1234",
    name: "aritst",
    email: "artist@.com",
    isActive: false
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "artist@gmail.com"

export {}