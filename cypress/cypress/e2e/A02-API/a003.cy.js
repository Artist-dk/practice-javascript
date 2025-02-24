// Query Prarmeters

describe("API Testing",()=>{
    it("query parameters",()=>{
        // 

        const queryParm = {page:2}
        cy.request({
            method: 'GET',
            // url: "https://reqres.in/api/users?page=2"
            url: "https://reqres.in/api/users",
            qs: queryParm
        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            cy.log(response.body);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).has.length(6);

            expect(response.body.data[0]).have.property('id',7);
            expect(response.body.data[0]).has.property('first_name','Michael');
        })
    })

})