describe("Home test", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('CLTRising'))
  })

  it("should find home page image", () => {
    cy.get('.tatsu-r1-99gT75h > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-single-image > .tatsu-single-image-inner > .tatsu-gradient-border')
      .should(
        'be.visible',
        "have.attr",
        "src",
        "http://cltrising.jitudevops.com/wp-content/uploads/2020/05/home-photos-alt.png"
      );
  });

  it("Should find the header texts on the home section", () => {
    cy.get('.tatsu-inline-text-inner ');
    cy.contains("Improve your academic skills Sharpen your test-taking strategies Enhance your college planning. Achieve your career goals, strengthen your family, and optimize your quality of life.")
  })

  it("Should find the vision content", () => {
    cy.get('#home');
    cy.contains('Our vision is to support Charlotte area students and families by creating access to opportunities to optimize quality of life.')
  })

  it("Should find the values", () => {
    cy.get('.tatsu-S12qqg6mq2 > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-module > .tatsu-text-inner > ul > li')
      .should('have.text', 'CLTRising advocates emphasize collaboration with families and community partnerships in all programming.')
  })
  
  it("Should find the values", () => {
    cy.get('.tatsu-Bk99ceaX5h > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-module > .tatsu-text-inner > .ak-ul > li > p')
      .should('have.text', 'Students and families take ownership of their goals with the support of CLTRising advocates.')
  })

  it("Should find the values", () => {
    cy.get('.tatsu-r109clTX5h > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-module > .tatsu-text-inner > ul > li')
          .should('have.text', 'Commitment from CLTRising advocates and families creates long-term growth and success.')
  })
  
})
