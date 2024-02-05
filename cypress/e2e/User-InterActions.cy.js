/// <reference types="Cypress" />
describe("check Navigations", () => {
  it("should routs works fine", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="aboutLink"]').click();
    cy.location("pathname").should("equal", "/about");
    cy.get('[data-testid="homeLink"]').click();
    cy.location("pathname").should("equal", "/");
    cy.get('[data-testid="cardLink1"]').click();
    cy.location("pathname").should("equal", "/1");
    cy.get('[data-testid="backLink"]').click();
    cy.location("pathname").should("equal", "/");
  });
});
describe("check removeCard work", () => {
  it("remove card shoud work", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="removeBtn5"]').click();
  });
  it("check list cart", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="removeBtn5"]').should("not.exist");
  });
});
