// working with dropdowns


describe('handle dropdowns', () => {
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country")
    // .select("India")
    // .should("have.value", "India")

    .select("Canada")
    .should("have.value", "Canada")

  })
})

// https://www.zoho.com/commerce/free-demo.html
// id="zcf_address_country"