describe("Apply section", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('CLTRising'))
    })

    it("Check the doc image and the two buttons", () => {
        cy.get('#action-image > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-single-image > .tatsu-single-image-inner > img')
            .should("have.attr", "src", "http://cltrising.jitudevops.com/wp-content/uploads/2022/03/app-docs-2022.png")

            cy.get('.tatsu-two-third > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad')
            .find("a")
            .should("have.length", 2)
            .each(($link) => {
                cy.wrap($link).should("have.attr", "href").and("not.be.empty");
              });
    })
})