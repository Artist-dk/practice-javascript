describe("My test suite",() => {
  it("Test title",()=>{
    cy.visit("");
    cy.title().should('eq','OrangeHRM');
  }),
  it("Test title",()=>{
    cy.visit("");
    cy.title().should('eq','OrangeHRM123');
  })
})

