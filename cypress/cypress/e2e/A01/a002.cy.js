const { cyan } = require("colorette")

describe('My test suite',()=>{
    it('test login',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
    })
})