describe("Dropdown", () => {
  it("Dropdown it", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container")
    .click()
    cy.get(".select2-search__field").type("Canada").type("{enter}")
    cy.get("#select2-billing_country-container")
    .should("have.text","Canada")
  })
})