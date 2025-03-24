describe("Check Radio buttons", () => {
  it("Checking Radio buttons", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    // visibility of the elements
    cy.get("input#monday").should('be.visible')

    // selecting single check box
    cy.get("input#monday").check().should('be.checked')

    // Unselecting checkbox
    cy.get('input#monday').should('not.be.checked')

    // Selecting all the check boxes
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('be.checked')

    // select first checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

  })
})