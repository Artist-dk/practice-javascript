class User3 {

    private _courseCount = 1

    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string) {
        this.email = email
        this.name = name
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const artist3 = new User3("exmaple@artist.com", "artist")

// artist3.deleteToken()