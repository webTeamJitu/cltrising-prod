// import { services } from "../../../CLT-Rising-master/CLT-Rising-master/cypress/utilis/service"

describe("Program section test case", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('CLTRising'))
  })

  it("Should have the following heading", () => {
    cy.get('#sfp > .tatsu-text-inner > h4')
      .should('have.text', 'Student-Family Partnerships')
  })

  it("Should have the following heading", () => {
    cy.get('.tatsu-SydcBR0Fh > .tatsu-text-inner > h4')
      .should('have.text', 'Mission')
  })

  it("Should have the following heading", () => {
    cy.get('.tatsu-HkEtu10CFn > .tatsu-text-inner > p')
      .should('have.text', 'Our mission is to empower high-achieving, under-resourced Charlotte area students and families to achieve long term economic mobility through strategic family-centered advocacy and impactful community connections by providing collaboration with a trained and trusted Student-Family Advocate (SFA) whose partnership centers on student growth & development as well as family stability & self-sufficiency, health & wellness, education & careers, and financial literacy & management.')
  })

  it("should find the services lists", () => {
    cy.get('.tatsu-rJ7Xm0RFn > .tatsu-text-inner > ul > li').each(($li, index, $list) => {
      const itemText = $li.text();
      cy.contains(`${itemText}`).should('be.visible')
    });
  });

  it("should find information on qualifies for the program", () => {
    cy.get('.tatsu-rk3Y_JAAY3 > .tatsu-text-inner > ul > li').each(($li, index, $list) => {
      const itemText = $li.text();
      cy.contains(`${itemText}`).should('be.visible')
    });
  });

  it("should find the application process", () => {
    cy.get('.tatsu-rk0YdJR0t2 > .tatsu-text-inner > ul > li').each(($li, index, $list) => {
      const itemText = $li.text();
      cy.contains(`${itemText}`).should('be.visible')
    });
  });

})
