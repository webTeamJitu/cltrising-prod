// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands/jsonCommands.js

// cypress/support/commands/jsonCommands.js
import 'cypress-wait-until';

Cypress.Commands.add('readJson', (filePath) => {
  cy.readFile(filePath);
});

Cypress.Commands.add('waitUntilDataLoaded', () => {
  cy.waitUntil(() =>
    cy.readFile('cypress/fixtures/contact-us.json').then((jsonData) => {
      // Replace this condition with the actual condition to check if data is loaded
      // For example, check if a specific property exists in the jsonData
      return jsonData && !Cypress._.isEmpty(jsonData);
    })
  );
});

