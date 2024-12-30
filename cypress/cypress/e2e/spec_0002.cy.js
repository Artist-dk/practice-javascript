// cypress - assertsions

// assertions on web elements

// const cypress = require("cypress")
// const {describe} = require("mocha")

describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // should, and

    // cy.url().should('include','orangehrmlive.com')
    // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain', 'orangehrm')

    // below block is same as above

    // cy.url().should('include','orangehrmlive.com')
    // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // .should('contain', 'orangehrm')

    // below block is same as above 2 code blocks

    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrm')
    .and('not.contain', 'greenhrm')

    cy.title().should('include', `Orange`)
    .and('eq', "OrangeHRM")
    .and('contain', 'HRM')

    cy.get('.orangehrm-login-branding > img').should('be.visible')  // Logo visible
    .and('exist') // logo exist

    // cy.xpath("//a").should('have.length', '1')  // No of links

    cy.get("input[placeholder='Username'").type("Admin")  // provide a value into inputbox
    cy.get("input[placeholder='Username']").should('have.value','Admin') // value

  })
})