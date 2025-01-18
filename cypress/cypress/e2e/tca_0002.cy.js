describe("My test suite", () => {
  it("first test", () => {
    cy.visit("https://example.cypress.io/commands/traversal");
    cy.get("h4 a[href=\"https://on.cypress.io/children\"]").should("have.text", ".children()")
    cy.get("h4 a[href=\"https://on.cypress.io/closest\"]").should("have.text", ".closest()")
    cy.get("h4 a[href=\"https://on.cypress.io/eq\"]").should("have.text", ".eq()")
    cy.log("Mission Completed!")
  })
})