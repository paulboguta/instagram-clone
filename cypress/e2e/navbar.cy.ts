const uid = "shU1M5oNmMNstdZ1HSruGBrUca12";

describe("test navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("test logo button", () => {
    cy.get("#logo-navbar").click();
    cy.url().should("include", "/");
  });

  describe("test searchbar", () => {
    it("accepts input", () => {
      cy.get("#search-navbar").type("test type");
    });
  });

  describe("test buttons", () => {
    describe("test buttons navigation", () => {
      it("test button home", () => {
        cy.get("#button-nav-home").click();
        cy.url().should("include", "/");
      });
      it("test button profile", () => {
        cy.get("#button-nav-profile").click();
        cy.url().should("include", "/profile");
      });
      it("test button DMs", () => {
        cy.get("#button-nav-messages").click();
        cy.url().should("include", "/messages");
      });
      it("test button notifications", () => {
        cy.get("#button-nav-notifications").click();
        cy.url().should("include", "/notifications");
      });
    });
  });
});
