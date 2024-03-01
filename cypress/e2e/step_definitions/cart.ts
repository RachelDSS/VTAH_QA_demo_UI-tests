import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When("access to the cart by the confirmation modale", () => {
    cy.get('#cartModal').contains('View Cart').click();
});

When(/^(proceed to|confirm the) checkout$/, () => {
    cy.get('.check_out').click();
});

Then("a cart confirmation message is display", () => {
    cy.get('#cartModal').should('be.visible');
});

Then("a checkout confirmation message is display", () => {
    cy.get('#checkoutModal').should('be.visible');
});

Then("the product {string} is display in the cart", (productName:string) => {
    cy.get('#cart_info').should('contain', productName);
});