describe("Authentication", () => {
    it("Basic authentication",() => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth/',
            auth: {
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })

    it("Digest authentication",() => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth/',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })


    const token = Cypress.env('GITHUB_TOKEN'); // Use environment variable
    it("Bearer Token authentication",() => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/users/repos',
            headers: {
                Authorization: 'Bearer '+token,
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it("API key authentication",()=> {
        const apiKey = Cypress.env('OPENWEATHER_API_KEY'); // Use environment variable
        cy.request({
            method: 'GET',
            url: 'api.openweathermap.org/data/2.5/forecast/daily',
            qs: {
                q: 'Delhi',
                appid: apiKey, 
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})