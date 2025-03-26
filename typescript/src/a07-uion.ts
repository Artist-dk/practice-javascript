let score: number | string = 33

score = 44
score = '55'

type User0 = {
    name: string,
    id: number
}

type Admin = {
    username: string;
    id: number
}

let artist0: User0 | Admin = {name: 'artist', id: 334}

artist0 = { username: "hc", id: 334 }

// function getDbId(id: number | string) {
//     console.log(`DB id is: ${id}`);
// }

getDbId(9)
getDbId('3')

function getDbId(id: number | string) {
    if(typeof id === 'string') {
        id.toLowerCase()
    }
}

// array

const data1: number[] = [1, 2, 3, 4]
const data2: string[] = ['1', '2', '3', '4']
const data3: (string | number)[] = ['1', '2', 3]
const data4: (string | number | boolean )[] = ['1', '2', 3, true]

// let seatAllotment: 'alise' 