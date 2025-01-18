// Capture screenshot

describe("mysuite", () => {
  it("Capture screenshots & Videos", () => {
    cy.visit("https://google.com")
    cy.screenshot("screenshot1");
    cy.get("").screenshot("");

    // Automatically capture screenshot and video on test failuer - only when ou execute through
    cy.get("").click() //
    cy.get("div[id='content'] h2").should('have.text', 'Tablets')

  })
})

// npx cypress run --spec cypress/e2e/spec_0024.cy.js