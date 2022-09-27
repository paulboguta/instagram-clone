describe("test setup form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/setup");
  });

  describe("test username form", () => {
    it("accepts input", () => {
      cy.get("#input-username").type("test");
    });
    it("shows alert when username is incorrect", () => {
      cy.get("#input-username").type("123");
      cy.get("#button-confirm-setup").click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains(
          "Wrong username! It has to be from 4 to 16 characters"
        );
      });
    });
  });

  describe("test bio form", () => {
    it("accepts input", () => {
      cy.get("#setup-bio").type("test bio");
    });
    it("shows alert when bio is larger than 120 characters", () => {
      cy.get("#setup-bio").type(
        "test biotest biotest biotest biotest biotest biotest biotest biotest biotest biotst bio"
      );
      cy.on("window:alert", (t) => {
        expect(t).to.contains("Bio is too long! Maximum is 120 characters.");
      });
    });
  });

  describe("test profile pic form", () => {
    it("shows memojis to choose after clicking button preview", () => {
      cy.get("#button-preview").click();
      cy.get("#button-memoji").should("be.visible");
    });
    it("chooses firt memoji and clicks confirm and exits form", () => {
      cy.get("#button-preview").click();
      cy.get("#button-memoji").click();
      cy.get("#button-confirm-memoji").click();
      cy.get("#button-memoji").should("not.exist");
    });
    it("enters form again and chooses second memoji and exits form", () => {
      cy.get("#button-preview").click();
      cy.get("#button-memoji").next().click();
      cy.get("#button-confirm-memoji").click();
      cy.get("#button-memoji").should("not.exist");
    });
    it("cant confirm if profile pic is not chosen", () => {
      cy.get("#input-username").type("test");
      cy.get("#button-confirm-setup").click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains("You have to choose profile picture!");
      });
    });
  });
});
