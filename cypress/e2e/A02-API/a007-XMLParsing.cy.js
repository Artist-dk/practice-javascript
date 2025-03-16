// Handle XML paload and parsing XML response

// npm install xml2js
const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray: false})
let petid = null

describe("XML Parsing",()=>{

    const xmlPayload = ""
    before("creting PET",()=>{
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            body: xmlPayload,
            headers: {
                'Content-Type':'application/xml',
                'accept':'application/xml'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                // petid = result.Pet.id;
                expect(result.Pet.name).to.equal("Jimmy")
                expect(result.Pet.id).to.equal(petid)
            })
        })
    })
    it("Fetching pet data-parsing xml response",()=>{
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/"+petid,
            headers: {
                'Content-Type':'application/xml',
                'accept':'application/xml'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                // petid = result.Pet.id;
                expect(result.Pet.id).equal(petid);
                expect(result.Pet.name).equal("Jimmy")
            })
        })
    })
})


// https://transform.tools/json-to-json-schema