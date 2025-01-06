describe("Study circle test", () => {
  it ("css selector", () => {
    cy.visit("http://localhost:3000/")
    cy.get("a[href='/account']").click()
    cy.get(".form-cont").contains("USER LOGIN")
    cy.get("input[name='username']").type("artist")
    cy.get("input[name='password']").type('hack')
    cy.get('input[type="submit"]').click()
  })
})