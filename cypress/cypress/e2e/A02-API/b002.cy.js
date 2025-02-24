describe("API testing",() => {
    it("Passing Query parameters", () => {
        cy.request({
            method: "GET",
            url: "https://postman-rest-api-learner.glitch.me/info",
            qs: {id:1}
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.message).to.eq("You made a GET request!");
            expect(response.body.message).has.length(1);
        })
    })
})