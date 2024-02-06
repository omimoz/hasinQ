/// <reference types="Cypress" />
describe("API Call Tests", () => {
  it("should load all cards from the API", () => {
    cy.intercept("GET", "http://localhost:3031/data").as("getCards");
    cy.visit("http://localhost:5173/");
    cy.wait("@getCards");
    cy.get('[data-testid="card"]').should("have.length.greaterThan", 1); // Assuming 8 posts are returned
  });
});
describe("API Call Tests", () => {
  it("should load all cards from the API", () => {
    cy.intercept("GET", "http://localhost:3031/data/1").as("getCards");
    cy.visit("http://localhost:5173/1");
    cy.wait("@getCards");
    cy.get(".img").should("exist");
    cy.get(".title").should("exist");
    cy.get(".desc").should("exist");
  });
});
