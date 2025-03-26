interface User1 {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?:string
    startTrail(): string
    getCoupon(couponname: string, value: number):number
    githubToken: string
}
// interface User1 {
//     githubToken: string
// }

interface Admin1 extends User1 {
    role: "admin" | "ta" | "learner"
}

const artist: Admin1 = {
    dbId: 22,
    role: "admin",
    githubToken: 'shdk',
    email: "example@mail.com",
    userId: 3211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "artist10", off: 10) => {
        return 10
    }
}
artist.email = "artist@gmail.com";
// artist.dbId = 33

console.log(artist)