describe("wordle API test", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("GET", "/api/random-word?length=4&allowRepeats=false").as(
      "fetchWord"
    );
  });

  it("tests if word fetch works and gets word length 4 and repeat false", () => {
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
    cy.wait("@fetchWord").then((interception) => {
      expect(interception.request.url).to.contain("length=4");
      expect(interception.request.url).to.contain("allowRepeats=false");
      expect(interception.response.statusCode).to.equal(200);
    });
  });
});
