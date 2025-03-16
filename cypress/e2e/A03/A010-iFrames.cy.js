import 'cypress-iframe';

const url = 'http://127.0.0.1:5500/practice-javascript/src/testing/cypress/cypress/e2e/A03/A010.html';

describe('Handling frames', ()=>{
    beforeEach(() => {
        cy.visit(url);
    });

    it('Approach 1', ()=>{
        cy.visit(url);
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome {ctrl+a}");
        cy.get('[aria-label="Bold"]').click();
    })
    it('Approach 2', ()=>{
        cy.visit(url);
        cy.getIframe().clear().type("Welcome {ctrl+a}");
        cy.get('[aria-label="Bold"]').click();
    })
    it('Approach 3 - by using cypress-iframe plugin', ()=>{
        // npm install -D  cypress-iframe
        cy.visit(url);
        cy.frameLoaded('#mce_0_ifr');   // Load the frame
        cy.iframe('#mce_0_ifr');
        cy.iframe("#mce_0_ifr").clear().type('Welcome {ctrl+a}');
        cy.get("[aria-label='Bold'").click();
    })
})