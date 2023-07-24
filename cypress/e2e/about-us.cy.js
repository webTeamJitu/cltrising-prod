// const cypress = require("cypress")

describe("About us test case", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('CLTRising'))
    })

    it("Should find the images of the team members section 1", () => {
        cy.get('.tatsu-S1uC5kAAt2 > .tatsu-section-pad > .tatsu-row-has-one-half > .tatsu-row')
        .find("img")
        .should("have.length", 2, "be.visible")
    })

    it("Should find the images of the team members section 2", () => {
        cy.get('.tatsu-S1uC5kAAt2 > .tatsu-section-pad > .tatsu-row-has-three-cols > .tatsu-row')
        .find("img")
        .should("have.length", 3, "be.visible")
    })

    it("Should find the images of the team members section 3", () => {
        cy.get('.tatsu-S1uC5kAAt2 > .tatsu-section-pad > .tatsu-row-has-four-cols > .tatsu-row')
        .find("img")
        .should("have.length", 2, "be.visible")
    })

})