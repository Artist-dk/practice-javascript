describe("", ()=> {
    it("", () => {
        // 
        cy.request({
            method: "GET",
            url: "http://localhost:8081/account/createnew",
            qs: {page:2}
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).has.length(6);
            expect(response.body.data[0]).have.property("id",7);
            expect(response.body.data[0]).has.property('first_name','Michael')
        })
    })
})