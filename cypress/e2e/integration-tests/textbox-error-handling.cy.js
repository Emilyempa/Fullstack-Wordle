describe("Error handling of textbox component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show error message with correct length", () => {
    cy.get(":nth-child(1) > .MuiButton-root").click();
    cy.get("input").click().type("test");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("p").should("contain.text", "Your guess must be 2 letters long");
  });

  it("should show error message that describes error for number input", () => {
    cy.get(":nth-child(1) > .MuiButton-root").click();
    cy.get("input").click().type("22");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("p").should(
      "contain.text",
      "Input contains invalid characters, only letters A-Z are allowed."
    );
  });

  it("should show error message that describes error when input is empy", () => {
    cy.get(":nth-child(1) > .MuiButton-root").click();    
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("p").should(
      "contain.text",
      "Please enter a guess before submitting."
    );
  });

  it("should show error message that describes error special character input", () => {
    cy.get(":nth-child(1) > .MuiButton-root").click();
    cy.get("input").click().type("!@#$%^&*()_+");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("p").should(
      "contain.text",
      "Input contains invalid characters, only letters A-Z are allowed."
    );
  });
  it("should show error message that describes error when mixed input", () => {
    cy.get(":nth-child(1) > .MuiButton-root").click();
    cy.get("input").click().type("n2p?");
    cy.get(":nth-child(1) > :nth-child(1) > .MuiButtonBase-root").click();
    cy.get("p").should(
      "contain.text",
      "Input contains invalid characters, only letters A-Z are allowed."
    );
  });
});
