describe("My test suite", () => {
    it("typing in input fields", () => {
        // cy.visit("https://google.com/")
        cy.visit("https://trytestingthis.netlify.app/")
        cy.get('input[type="text"][id="fname"]').type("Digambar")
    })
})