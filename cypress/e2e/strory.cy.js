describe("the Story section", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('CLTRising'))
    })

    it("Should find the", () => {
        cy.readFile(Cypress.env("story_file")).then((stories) => {
            const data = stories.stories
            cy.wrap(data).each((story) => {
                cy.get('#successes > .tatsu-section-overlay')
                cy.contains(story[0]).should("be.visible")
            })
        })
        cy.go("back")
    })
})