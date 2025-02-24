describe("API testing", ()=> {

    it("Approach 1 - hard coded json object", () => {
        const requestBody = {
            tourist_name: "Mike",
            tourist_email: "john1234@gmail.com",
            tourist_location: "Paris"
        }
        
        cy.request({
            method: 'POST',
            url: "http://restapi.adequateshop.com/api/Tourist",
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("Mike")
            expect(response.body.tourist_email).to.eq("john1234@gmail.com")
            expect(response.body.tourist_location).to.eq("Paris")
        })
    })
    
    it("Approach 2 - Dynamically gerating json object", () => {
        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Paris"
        }
        
        cy.request({
            method: 'POST',
            url: "http://restapi.adequateshop.com/api/Tourist",
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })
    
    it("Approach 3 - Using fixture", () => {
        cy.fixture('tourist'.then((data)=> {
            const requestBody = data;
        
            cy.request({
                method: 'POST',
                url: "http://restapi.adequateshop.com/api/Tourist",
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            })
        }))
    })

})