class User2 {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const artist2 = new User2("example@artist.com", "artist")
artist2.city = "pune"