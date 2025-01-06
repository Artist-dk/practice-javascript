// Assersions
require('@cypress/xpath');

// npm install -D @cypress/xpath

describe("Assertions demo", () => {
  it ("Iplicit assertions", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.url().should("include","orangehrmlive.com")
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("contain", "orangehrm")
  })

  it ("Iplicit assertions", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.url().should("include","orangehrmlive.com")
    .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .and("contain", "orangehrm")
    .and('not.contain', 'greenhrm')

    cy.title().should('include', 'Orange')
    .and('eq','OrangeHRM')
    .and('contain','HRM')

    cy.get('.orangehrm-login-branding > img').should('be.visible') // logo visible
    .and ('exist') //logo exist

    cy.xpath("//a").should('have.length', '5')
  })
})