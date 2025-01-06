describe("Checking check boxes", () => {
  cy.visit("https://itera-qa.azurewebsites.net/home/automation")

  // Visibility of the element
  cy.get("input#monday").should('be.visible')

  // Selecting single check box - monday
  cy.get("input#monday").check().should('be.checked')

  // Unselecting checkbox
  cy.get("input#monday").uncheck().should('not.be.checked')

  // Selecting all the check boxes
  cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
  cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
  
  // Select first checkbox
  cy.get("input.form-check-input[type='checkbox']").first().check()
  cy.get("input.form-check-input[type='checkbox']").last().check() 
  
})