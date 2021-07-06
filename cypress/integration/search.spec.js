// search2.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Test search", () => {
  it("should show card(s) for specified search term", () => {
    cy.visit("http://localhost:3000/effective-ways-to-scale-development");

    cy.get("input").type("batman");

    cy.get("ul")
      .find("li:last-child > div:last-child > p:first-child")
      .contains("Managing Change and Business Transformation");
  });
});
