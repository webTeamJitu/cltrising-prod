describe("Header tests", () => {
  beforeEach(() => {
    cy.visit("https://cltrising.com/");
  });

  it("Should CLT RISING logo and should be able to link", () => {
    cy.get(".logo").should("be.visible").find("a", 'img[class="loaded"]').click();
  });

  it("Should find 7 nav bar links", () => {
    cy.get("#menu")
      .find("a")
      .click({ multiple: true })
      .should("have.length", 7)
      .each(($link) => {
        cy.wrap($link).should("have.attr", "href").and("not.be.empty");
      });
  });
  
});
