// parsing json response

describe("Parsing JSON response",()=>{
    it("Parsing smple json response",()=>{
        // 

        let totalprice = 0;

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products/',
            qs: { limit:3 }
        })
        .then((response)=>{

            // cy.log(response.body)
            // console.log(response)

            expect(response.status).to.equal(200)
            // expect(response.body[0].id).to.equal(1)
            // expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            // expect(response.body[0].price).to.equal(109.95)

            response.body.forEach(el=>{
                totalprice = totalprice + el.price;
            })
            
            // expect(totalprice).to.equal(899.23); // limit = 5
            expect(totalprice).to.equal(188.24); // limit = 5
        })
    })
})