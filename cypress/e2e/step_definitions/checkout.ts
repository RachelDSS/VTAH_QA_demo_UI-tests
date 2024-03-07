import {Then, When} from "@badeball/cypress-cucumber-preprocessor";


When("pay with the {string} credit card informations", (cardLabel : string) => {
    cy.fixture('cards.json').then(cards => {
        var card = cards[cardLabel];
        cy.get('[data-qa="name-on-card"]').type(card.name);
        cy.get('[data-qa="card-number"]').type(card.number);
        cy.get('[data-qa="cvc"]').type(card.cvc);
        cy.get('[data-qa="expiry-month"]').type(card.expMonth);
        cy.get('[data-qa="expiry-year"]').type(card.expYear);

        cy.get('[data-qa="pay-button"]').click();
    });
});

Then("the delivery address is the address of {string}", (accountLabel : string) => {
    cy.fixture('credentials.json').then(credentials => {
        var account = credentials[accountLabel];

        cy.get('#address_delivery').find('.address_firstname.address_lastname')
            .should('contain', `${account.firstname} ${account.lastname}`);

        cy.get('#address_delivery').find('.address_address1.address_address2')
            .should('contain', account.address);

        cy.get('#address_delivery').find('.address_postcode')
            .should('contain', account.postcode);

        cy.get('#address_delivery').find('.address_country_name')
            .should('contain', account.country);

        cy.get('#address_delivery').find('.address_phone')
            .should('contain', account.phone);
    });
});

Then("the order is successfully validate", () => {
    cy.get('#form').should('contain', "Congratulations! Your order has been confirmed!");
});
