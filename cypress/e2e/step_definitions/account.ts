import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given("connect with the account {string}", (accountLabel : string) => {
    cy.fixture('credentials.json').then(credentials => {
        var account = credentials[accountLabel];
        cy.get('[data-qa="login-email"]').type(account.email);
        cy.get('[data-qa="login-password"]').type(account.pwd);
        cy.get('[data-qa="login-button"]').click();
    })
});
