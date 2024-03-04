import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("go to the web site {string}", (website : string) => {
    cy.visit(website);
});

Given("go to the e-commerce web site", () => {
    cy.visit('www.automationexercise.com');
});

Given("access to the menu {string}", (menu:string) => {
    cy.get('li').contains(menu).click();
});

Then("the menu {string} is display", (menu:string) => {
    cy.get('li').contains(menu)
        .should('exist')
        .should('be.visible');
});

Then("the menu {string} is not display", (menu:string) => {
    cy.get('li').contains(menu)
        .should('not.exist');
});

