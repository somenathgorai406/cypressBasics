/// <reference types = 'cypress'/>
describe('First AI Cypress Studio Code Generatio', () => {
    it('TC 1 ', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[minlength="2"]').click();
        cy.get('input[minlength="2"]').type('Somenath');
        cy.get('[name="email"]').type('Gorai');
        cy.get('#exampleInputPassword1').click();
        cy.get('#exampleInputPassword1').type('sdfasdf');
        cy.get('#exampleCheck1').check();
        cy.get('#inlineRadio2').check();
        cy.get('[name="bday"]').click();
        cy.get('[name="bday"]').click();
        cy.get('input.btn').click();
    })

}
)