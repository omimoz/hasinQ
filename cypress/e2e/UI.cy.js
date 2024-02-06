// I don't use this library before so I try to read doc and use somthing but I know I must work on this and I try to learn it fast beacuse I realy enjoy to use this
/// <reference types="Cypress" />
describe("check Home Page", () => {
  it("should render Nav", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="Nav"]').should("have.length", 2);
    cy.get(".home").contains("خانه");
    cy.get(".about").contains("درباره ما");
  });
  it("should render cards", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="card"]').should("have.length.greaterThan", 1);
  });
  it("about page works", () => {
    cy.visit("http://localhost:5173/about");
    cy.get('[data-testid="aboutContent"]').should("exist");
  });
  it("single page works", () => {
    cy.visit("http://localhost:5173/1");
    cy.get(".img").should("exist");
    cy.get(".title").should("exist");
    cy.get(".desc").should("exist");
  });
});
