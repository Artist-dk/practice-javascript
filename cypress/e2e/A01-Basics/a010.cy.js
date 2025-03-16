// describe('Right-Click Context Menu', () => {
//     it('should display context menu on right-click', () => {
//         cy.visit('https://webdriveruniversity.com/Actions/index.html');
//         cy.get('#double-click').rightclick();
//         cy.get('#double-click').should('have.class', 'div-double-click');
//     });
// });


describe('User Profile Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.thecatapi.com/v1/images/search?limit=10', { fixture: 'userProfile.json' }).as('getUser');
        // cy.visit('');
        cy.wait('@getUser');
    });

    it('should display user profile information', () => {
        cy.get('.profile-name').should('contain', 'John Doe');
        cy.get('.profile-email').should('contain', 'john.doe@example.com');
    });
});
