class User4 {

    protected _courseCount = 1

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

class SubUser extends User4 {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const artist4 = new User4("exmaple@artist.com", "artist")

// artist3.deleteToken()