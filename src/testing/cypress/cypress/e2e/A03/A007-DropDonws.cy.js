describe("Handle dropdowns",()=>{
  it("Dropdown with select", ()=>{
    cy.visit("https://www.zoho.com/commerce/free-demo.html")

    cy.get("#zcf_address_country")
    .select('Italy')
    .should('have.value','Italy')
  })
  it('Dropdown with select',()=>{
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country")
    .select('Italy')
    .should('have.value','Italy')
  })
  it("Dropdown without select",()=>{
    cy.visit("https://www.dumyticket.com/dummy-ticket-for-visa-application/")
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search_field').type('Italy').type('{enter}')
    cy.get("#select2-billing_country-container").should('have.text','Italy')
  })
  it('Auto suggested dropdown',()=>{
    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click()
  })
  it('Dynamic dropdown',()=>{
    cy.visit('https://www.google.com/')
    cy.get('input[name="q"]').type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.length',11)
    cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
      if($el.text()=='cypress automation tool') {
        cy.wrap($el).click()
      }
    })
    cy.get('input[name="q"]').should('have.value','cypress automation tool')
  })
})