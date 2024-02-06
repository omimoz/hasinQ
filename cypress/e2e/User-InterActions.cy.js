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

describe("RemovePost functionality", () => {
  it("should click the remove button and remove the item correctly", () => {
    cy.visit("http://localhost:5173/"); // Adjust the URL based on your application's address
    const cardId = "6";

    // Wait for the card to be loaded (assuming there's an initial loading phase)
    cy.get(`#Btn${cardId}`).should("exist");

    // Click the remove button
    cy.get(`#Btn${cardId}`).click();

    // Wait for the card to be removed
    cy.get(`#Btn${cardId}`).should("not.exist", { timeout: 10000 });

    // Ensure the error message is not in the DOM
    cy.contains("مشکلی در اتصال ایجاد شده است").should("not.exist");
  });
});
