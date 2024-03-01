import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given("go to the web site {string}", (website : string) => {
    cy.visit(website);
});

Given("go to the e-commerce web site", () => {
    cy.visit('www.automationexercise.com');
});

Given("access to the menu {string}", (menu:string) => {
    cy.get('li').contains(menu).click();
});
