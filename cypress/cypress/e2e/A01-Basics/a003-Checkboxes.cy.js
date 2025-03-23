describe('my test suite', ()=>{
    beforeEach(()=>{
        cy.visit('https://trytestingthis.netlify.app/');
    })
    it('test radio buttons', ()=>{
        cy.get('input[type="radio"][name="gender"]').eq(0).check().should('have.be','checked')
        cy.get('input[type="radio"][name="gender"]').eq(1).check().should('have.be','checked')
    })
    it('test checkboxes',()=>{
        cy.get('input[type="checkbox"][name="option1"]').eq(0).check().should('have.be','checked')
        cy.get('input[type="checkbox"][name="option1"]').eq(0).uncheck().should('have.not.be','checked')
        cy.get('input[type="checkbox"][name="option1"]').eq(0).check()
        cy.get('input[type="checkbox"][name="option1"]').eq(0).should('have.be','checked')
    })
})
// cy.get('input[type="radio"][name="gender"]').eq(0).uncheck().should('have.not.be','checked')