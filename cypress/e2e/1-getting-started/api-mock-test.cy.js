/// <reference types="cypress" />

describe("e2e wordle test with mock API response", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("GET", "/api/random-word?length=4&allowRepeats=false", {
      statusCode: 200,
      body: { word: "test" },
    }).as("mockedWord");
  });

  it("displays one dropdown, 2 radiobuttons and start play button", () => {
    cy.get("#number-select-label").should(
      "contain.text",
      "Choose length of word"
    );
    cy.get("#number-select").should("contain.text", "2").click();
    cy.get('[data-value="4"]').click();
    cy.get(
      ":nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(":nth-child(1) > .MuiButton-root").click();
    cy.wait("@mockedWord").then((interception) => {
      expect(interception.response.body.word).to.equal("test");
    });
    cy.get("input").click().type("waxz");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("input").click().type("tste");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("input").click().type("test");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
  });
});
