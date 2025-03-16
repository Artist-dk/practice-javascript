describe("Check Radio buttons", () => {
  it("Checking Radio buttons", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    // visibility of radio buttons
    cy.get("input#male").should('be.visible')
    cy.get('input#female').should('be.visible')

    // selecting radio buttons
    cy.get("input#male").check().should('be.checked')
    cy.get('input#female').should('not.be.checked')

    cy.get("input#female").check().should('be.checked')
    cy.get("input#male").should('not.be.checked')
  })
})