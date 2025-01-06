// https://itera-qa.azurewebsites.net/home/automation

// radio buttons

describe("Check UI Elements", () => {
  it("Checking Radio Buttons", ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get("input[name='username']").type("Admin")
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit']").click()

    // bisibility of radio buttons
    cy.get("a[href='/web/index.php/admin/viewAdminModule']").click()
    // cy.get("input[type='checkbox']").check().should('be.checked')
    // cy.get("input[type='checkbox']").should('be.visible')

    // // selecting radio buttons
    // cy.get("input#male").check().should('be.checked')
    // cy.get("input#female").should('not.be.checked')

  })
})