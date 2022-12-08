describe("test navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("test searchbar", () => {
    it("accepts input", () => {
      cy.get("#search-navbar").type("test type");
    });
    it("gets username input and shows result based on that", () => {
      cy.get("#search-navbar").type("secondaccount");
      cy.get("#search-result").click();
    });
    it("redirects to username page while searched", () => {
      cy.get("#search-navbar").type("secondaccount");
      cy.get("#search-result").click();
      cy.url().should("include", "zlYamrqVCbRX3c1qeZAnDO0OiQ52");
    });
    it("shows error message when username was not found", () => {
      cy.get("#search-navbar").type("thridaccount");
      cy.wait(3500);
      cy.get("#search-error");
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
        cy.url().should("include", "/user");
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
