describe('Navigation Tests', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('should navigate threw the app', () => {
        cy.get('.css-1t6c9ts > [href="/about"]').click();
        cy.url().should('include', '/about');        
        cy.get('.MuiContainer-root > .MuiBox-root').should('exist');
        cy.get('.css-1t6c9ts > [href="/highscores"]').click();
        cy.url().should('include', '/highscores');
        cy.get('h2').should('contain.text', 'Highest Scores List');
        cy.get('.server-nav > [href="/"]').click();
        cy.url().should('include', '/');
        cy.get(':nth-child(1) > .MuiButton-root').should('exist');
    });

});