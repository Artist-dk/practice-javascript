describe("my suite", () => {
  it("Navigation test - go()", () => {
    // 
    cy.orangehrm();
    cy.wait(5000)
    cy.go('back') // cy.go(1)
    cy.go('forword')  // cy.go(-1)
    cy.go('back')
    cy.wait(5000)
    cy.reload()

  })
})