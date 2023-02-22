const index: string = "http://localhost:3000/";

describe("Navegar por el portfolio", () => {
  it("Debe ir desde la página de Inicio a about me", () => {
    // Start from the index page
    cy.visit(index);

    // Find a link with an href attribute containing "about" and click it
    // cy.get('a[href*="/aboutMe"]').click();

    // The new url should include "/about"
    // cy.url().should("include", "/aboutMe");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("A designer who loves perfect and simple things.");
  });
  it("Navbar debe tener el logo con el nombre del cliente y su rol", () => {
    cy.visit(index);
    cy.get("p").contains("Agustin Ietta");
    cy.get("p").contains("Product Designer");
  });
  it("La presentación debe tener el titulo que solicito el cliente", () => {
    cy.visit(index);
    cy.get("h1").contains("A designer who loves perfect and simple things.");
  });
  it("Visualizar el nombre de los proyectos que el cliente solicito en el diseño", () => {
    cy.visit(index);
    cy.get("h2").contains("Apolo");
    cy.get("h3").contains("Quiero!");
    cy.get("h3").contains("MercadoPOS");
  });
  it("Footer debe visualizar email del cliente y al hacer click en él copiarlo en el portapapeles", () => {
    cy.visit(index);
    cy.get("button").contains("agustinfrancoietta@gmail.com");
    cy.wait(750); // Tiempo de espera para hacer click en el botón de copiar email
    cy.get("p").contains("Copy email").realClick
  });
});
