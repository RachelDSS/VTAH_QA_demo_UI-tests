import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given("Go to the web site {string}", (website : string) => {
    cy.visit(website);
});