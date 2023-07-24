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

  it('should read and log the content of services', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.services;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-rJ7Xm0RFn > .tatsu-text-inner > ul').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the qualifications content', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.qualifications;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-rk3Y_JAAY3 > .tatsu-text-inner > ul').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the content of a application_process', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.application_process;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-rk0YdJR0t2 > .tatsu-text-inner > ul').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it("Should have the academic support heading", () => {
    cy.get('#ascp > .tatsu-text-inner > h4')
      .should('have.text', 'Academic Support & College Planning').should('be.visible')
  })

  it("Should have our mission on academic support", () => {
    cy.get('.tatsu-rkXgt_kR0tn > .tatsu-text-inner > h4')
      .should('have.text', 'Mission').should('be.visible')
  })

  it("Should have the following heading", () => {
    cy.get('.tatsu-S1Ngt_JA0Kn > .tatsu-text-inner > p')
      .should('have.text', 'Our mission is to support high-achieving, under-resourced juniors and seniors in navigating the transition from high-school to college by providing personalized tutoring assistance with their school academics, standardized testing prep, and college advising mentorship so that they can have the opportunities and access to pursue their career dream path.').should('be.visible')
  })

  it('should read and log the content of services_provided', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.services_provided;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-HkQN4ACF2').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the content of college_planning', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.college_planning;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-Bk5xKdyCRK3 > .tatsu-text-inner').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the content of personalized_mentorship', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.personalized_mentorship;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-rkjeYuyC0K3 > .tatsu-text-inner').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the content of academic_resources', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.academic_resources;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-SJ3eYOJ00Yh > .tatsu-text-inner').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the content of academic_support_qaulifications', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.academic_support_qaulifications;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-BkBJkRM53 > .tatsu-text-inner').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

  it('should read and log the content of support_application_process', () => {
    cy.readJson(Cypress.env('file_path')).then((jsonData) => {
      cy.log(jsonData)
      const program = jsonData.support_application_process;
      cy.wrap(program).each((item) => {
        cy.get('.tatsu-SkW-KdyCRt3 > .tatsu-text-inner > ul').within(() => {
          cy.contains(item[0]).should("be.visible")
        })
      });
      cy.go('back');
    });
  });

})
