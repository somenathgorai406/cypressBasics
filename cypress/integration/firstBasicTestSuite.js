/// <reference types = 'cypress'/>
describe('First Basic Testing', () => {
    it('TC 1 url and assertion', () => {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.url().should('include', 'loginpagePractise');
        cy.url().should('eq', 'https://rahulshettyacademy.com/loginpagePractise/');
        cy.url().should('contain', 'rahulshettyacademy');

        cy.get('#username').type('Somenath');
        cy.get('#signInBtn').click();
        cy.get('[style*="block"]').should('be.visible');
    })
    it('TC 2 Basic Login', () => {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.url().should('include', 'loginpagePractise');
        cy.url().should('eq', 'https://rahulshettyacademy.com/loginpagePractise/');
        cy.url().should('contain', 'rahulshettyacademy');

        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.get('#signInBtn').click();
        cy.screenshot();

    })

}
)