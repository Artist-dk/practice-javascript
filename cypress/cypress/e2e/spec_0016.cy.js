describe("Handling tables", () => {

  // beforeEach is hook of cypress
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php")
    cy.get("input[name='username']").clear().type("demo")
    cy.get("input#input-password").clear().type("demo")
    cy.get("button[type='submit']").click()

    cy.get("#menu-customer").click()
    cy.get("#collapse-5>li:first-child").click()

  })
  it.skip("Check Number Rows & Columns", () => {
    cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length", "6")
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length", "10")
  })
  it("Check Cell data from specific row and column", () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
      .contains("leduyquan25741244@gmail.com");
  })
  it("Pagination", ()=>{
    //
  })
})