import Login from "../support/pages/login";


describe("Login test", () => {

	it("Should log in with correct credentials", () => {
		Login.logar('Admin','admin123')
		cy.url().should("include", "/dashboard");
		})
	
	
	it("Should show an error message with invalid credentials", () => {
		Login.logar('Admininastro','admin123')
		cy.get("button[type=submit]").click();
		cy.get("div[role='alert']").should("be.visible");
	});
})

describe("Verification sideBar", () => {
	beforeEach("login", () => {
		Login.logar('Admin','admin123')
	})
	it("should close sideBar", () => {
		cy.get("button[type=button]").click();
		cy.get(".oxd-sidepanel").should("have.class", "oxd-sidepanel toggled");
	});

	it("testing search button", () => {
		let palavraDeBusca = "admin";
		palavraDeBusca = palavraDeBusca.charAt(0).toUpperCase().concat(palavraDeBusca.slice(1));
		cy.get(".oxd-main-menu-search").type(palavraDeBusca);
		cy.get(".oxd-main-menu")
			.find("li", "first-child")
			.should("have.text", palavraDeBusca);
	});
});
