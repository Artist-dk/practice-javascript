describe("My test suite",() => {
  it("Test title",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq','OrangeHRM');
  }),
  it("Test title",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq','OrangeHRM123');
  })
})

