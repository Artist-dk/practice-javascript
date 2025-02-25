describe("My test suite", ()=> {
    beforeEach(()=>{
    })
    it("check",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('input[id="user-name"]').type("standard_user")
        cy.get("input#password").type("secret_sauce")
        cy.get("input#login-button").click()
        cy.wait(1000)
        cy.get('div.app_logo').should('be.visible')
    })
})