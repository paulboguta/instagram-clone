// "shU1M5oNmMNstdZ1HSruGBrUca12"

describe("test profile page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/user/shU1M5oNmMNstdZ1HSruGBrUca12");
  });
  it("handles follow button", () => {
    cy.get("#button-follow").click();
  });
});
