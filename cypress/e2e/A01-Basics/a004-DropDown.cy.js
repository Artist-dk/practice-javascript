// dropdowns

/// <reference types="Cypress" />

describe('my test suite', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it.skip('first test', () =>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Italy').should('have.value','Italy')
    })

    it.skip('dropdown without select tag', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field')
        .type('Canada')
        .should('have.value', 'Canada')
    })

    it.skip('auto suggest dropdown',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.wait(2000)
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it.only('Dynamic dropdown',()=>{
        cy.visit('https://www.google.com/')
        cy.get('textarea[name="q"]').type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d > span').should('have.length',13)
        cy.get('div.wM6W7d > span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation') {
                cy.wrap($el).click()
            }
        })
    })
})

