import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When("search product by key words {string}", (search : string) => {
    cy.get('#search_product').type(search);
    cy.get('#submit_search').click();
});

When("add the product {string} to cart", (productName:string) => {
    cy.get('.product-image-wrapper').contains(productName)
        .parentsUntil('.product-image-wrapper')
        .find('.add-to-cart').first().click();
});

Then("the product {string} is display", (productName:string) => {
    cy.get('.product-image-wrapper').contains(productName).should('exist');
});