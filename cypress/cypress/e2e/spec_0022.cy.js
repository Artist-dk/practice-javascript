
// custom commands
// handling links

describe('Custom commands', () => {
  it("handling links", () => {
    // ]
    cy.visit("https://practicetestautomation.com/practice-test-login/", {failOnStatusCode: false})

    // cy.wait(100000)

    cy.get('input[id="username"]').type("student")
    cy.get('input[id="password"').type("Password123")
    // cy.get('button[id="submit"]').click()
    cy.clickLink("Apple MacBook Pro 13-inch");

  })
  it("overwritting existing command ",()=> {
    // 
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    // using custom commands
    // cy.clickLink();
    cy.get("#login h5:first-of-type").should('have.text','Test case 1: Positive LogIn test');
  })
  it("Login command",() => {
    // 
    cy.visit("https://practicetestautomation.com/practice-test-login/")
    cy.clickLink("Log in")

    cy.loginapp("test@gmail.com","test123")

    cy.get(".ico-account").should('have.text', 'my account')
  })
})

// https://demo.nopcommerce.com