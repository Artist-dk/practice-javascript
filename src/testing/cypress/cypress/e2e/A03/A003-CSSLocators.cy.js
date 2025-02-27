describe("CSSLocators",()=>{
  it("CSSLocators",()=>{
    cy.visit("http://automationpractice.com/index.php")
    cy.get("input#search_query_top").type("T-Shirts")
    cy.get("[name='submit_search']").click()
    cy.get(".lighter").contains("T-Shirts")
  })
  it("XPath Locators",()=>{
    cy.visit("http://automationpractice.com/index.php");
    cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7)
  })
})

// npm install -D cypress-xpath