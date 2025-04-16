describe("wordle test with mock API response and Database POST", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("GET", "/api/random-word?length=4&allowRepeats=false", {
      statusCode: 200,
      body: { word: "test" },
    }).as("mockedWord");

    cy.intercept("POST", "/highscores", {
      statusCode: 201,
    }).as("postHighscore");
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
    cy.get(
      ":nth-child(1) > :nth-child(1) > .css-5uxyq9 > :nth-child(1) > :nth-child(1)"
    ).should("have.css", "background-color", "rgb(211, 47, 47)");
    cy.get(
      ":nth-child(1) > :nth-child(1) > .css-5uxyq9 > :nth-child(1) > :nth-child(2)"
    ).should("have.css", "background-color", "rgb(211, 47, 47)");
    cy.get(".css-5uxyq9 > :nth-child(1) > :nth-child(3)").should(
      "have.css",
      "background-color",
      "rgb(211, 47, 47)"
    );
    cy.get(".css-5uxyq9 > :nth-child(1) > :nth-child(4)").should(
      "have.css",
      "background-color",
      "rgb(211, 47, 47)"
    );
    cy.get("input").click().type("tste");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get(":nth-child(2) > .css-4ohggp").should(
      "have.css",
      "background-color",
      "rgb(46, 125, 50)"
    );
    cy.get(".css-5uxyq9 > :nth-child(2) > :nth-child(2)").should(
      "have.css",
      "background-color",
      "rgb(255, 152, 0)"
    );
    cy.get(".css-5uxyq9 > :nth-child(2) > :nth-child(3)").should(
      "have.css",
      "background-color",
      "rgb(255, 152, 0)"
    );
    cy.get(".css-5uxyq9 > :nth-child(2) > :nth-child(4)").should(
      "have.css",
      "background-color",
      "rgb(255, 152, 0)"
    );
    cy.get("input").click().type("test");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get(
      ":nth-child(1) > :nth-child(1) > .css-5uxyq9 > :nth-child(3) > :nth-child(1)"
    ).should("have.css", "background-color", "rgb(46, 125, 50)");
    cy.get(
      ":nth-child(1) > :nth-child(1) > .css-5uxyq9 > :nth-child(3) > :nth-child(2)"
    ).should("have.css", "background-color", "rgb(46, 125, 50)");
    cy.get(
      ":nth-child(1) > :nth-child(1) > .css-5uxyq9 > :nth-child(3) > :nth-child(3)"
    ).should("have.css", "background-color", "rgb(46, 125, 50)");
    cy.get(
      ":nth-child(1) > :nth-child(1) > .css-5uxyq9 > :nth-child(3) > :nth-child(4)"
    ).should("have.css", "background-color", "rgb(46, 125, 50)");
    cy.contains("Congratulations! You guessed correctly in 3 guesses!");
    cy.get("input").eq(1).click().type("Olle");
    cy.get(".MuiPaper-root > .MuiBox-root > .MuiButton-contained").click();
    cy.wait("@postHighscore").its("response.statusCode").should("eq", 201);
  });
});
