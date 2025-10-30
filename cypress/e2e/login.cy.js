describe("React Login Page", () => {
  // her testten önce sayfayı aç
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should login successfully with correct credentials", () => {
    cy.get('[data-testid="email-input"]').type("test@demo.com");
    cy.get('[data-testid="password-input"]').type("123456");
    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="dashboard-title"]')
      .should("be.visible")
      .and("contain", "Dashboard");
  });

  it("should show error with wrong credentials", () => {
    cy.get('[data-testid="email-input"]').type("wrong@demo.com");
    cy.get('[data-testid="password-input"]').type("wrongpass");
    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="error-message"]')
      .should("be.visible")
      .and("contain", "E-posta veya şifre hatalı.");
  });
});
