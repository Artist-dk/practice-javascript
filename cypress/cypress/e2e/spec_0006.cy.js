
require("@cypress/xpath");

describe("Assertion Demo", () => {
  it ("Implicit Assertion", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.xpath("//a").should('have.length', '5') // No of links
    cy.get("input[placeholder='Username']").type("Admin") 
    cy.get("input[placeholder='Username']").should('have.value', 'Admin')
  })

  // https://docs.cypress.io/app/references/assertions
  it ("Explicit Assertion", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName = 'xyz';

    cy.get(".oxd-userdropdown-name").then( (x) => {
      // BDD approach (BDD - Beheavioral driven development approach)
      let actName = x.text()
      expect(actName).to.equal(expName)

      // TDD Style (TDD - Test driven development)
      assert.equal(actName, expName)
      assert.notEqual(actName, expName)
      
    })
  })
})

/*

1. Implicit assertion

  should
  and

eq 
contain
exit
have.length
have.value


2. Explicit assertions

  expect
  assert

*/