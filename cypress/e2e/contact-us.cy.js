describe("Contact us form test case", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('CLTRising'))
    })

    it('Contact us content', () => {
        cy.readJson(Cypress.env('contact_path')).then((jsonData) => {
            const data = jsonData.contact_text
            cy.wrap(data).each((item) => {
                cy.get('.tatsu-rJZMhgACYh')
                    .should("be.visible")
            })
        });
        cy.go("back")
    });

    it("Input field interaction", () => {


        cy.waitUntilDataLoaded().then(() => {
            cy.readJson('cypress/fixtures/contact-us.json').then((jsonData) => {
                expect(jsonData).not.be.empty;
                // expect(jsonData).to.have.property('key', 'expectedValue');
                const data = jsonData.form_test
    
                cy.get('#wpforms-364-field_0')
                    .type(`${data.firstName}`)
                    .should("be.visible", "have.value", `${data.firstName}`)
    
                    .get('#wpforms-364-field_0-last')
                    .type(`${data.lastName}`)
                    .should("be.visible", "have.value", `${data.lastName}`)
    
                    .get('#wpforms-364-field_1')
                    .type(`${data.email}`)
                    .should("be.visible", "have.value", `${data.email}`)
    
                    .get('#wpforms-364-field_2')
                    .type(`${data.message}`)
                    .should("be.visible", "have.value", `${data.message}`)
    
                    .get('.g-recaptcha')
                    .find("iframe[title='reCAPTCHA']")
                    .should("be.visible")
                    
                    .get('.wpforms-submit-container')
                    .find("button[name='wpforms[submit]']")
                    .should("be.visible")
            });
          });


    })
})