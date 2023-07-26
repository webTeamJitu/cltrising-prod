describe("Footer tests", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('CLTRising'))
    })


    // logo

    it("should find the logo for the footer", () => {
        cy.get('#bottom-widgets-wrap')
            .find("a", "img[class='loaded']")
            .should("be.visible")
    })

    // about
    it("Should show about us info for the footer section", () => {
        cy.readFile(Cypress.env('footer')).then((data) => {
            const about = data.about

            cy.wrap(about).each(item => {
                cy.get(':nth-child(2) > .widget_text').within(() => {
                    cy.contains(item[0]).should("be.visible", "not.be.empty")
                })
            })
            cy.go("back")
        })
    })

    // resources
    it("Should show resources in the footer", () => {
        cy.readFile(Cypress.env('footer')).then((data) => {
            const resources = data.resources

            cy.wrap(resources).each(item => {
                cy.get(':nth-child(3) > .widget_text').within(() => {
                    cy.contains(item[0]).should("be.visible")
                })
            })
            cy.go("back")
        })
    })

    // contact us
    it("Should show contact information", () => {
        cy.readFile(Cypress.env('footer')).then((data) => {
            const contact = data.contact

            cy.wrap(contact).each(item => {
                cy.get(':nth-child(4) > .widget_text').within(() => {
                    cy.contains(item[0]).should("be.visible")
                })
            })
            cy.go("back")
        })
    })

})