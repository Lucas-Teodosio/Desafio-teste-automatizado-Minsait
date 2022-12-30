const el = require('./elements').ELEMENTS

class Login {
    logar(usuario, senha){
        cy.visit(el.url)
        cy.get(el.campoUsername).type(usuario)
        cy.get(el.campoPassword).type(senha)
        cy.get(el.botaoLogin).click()
    }

    preencherUsername(username){
        cy.get(el.campoUsername).type(username)
    }

    preencherPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarNoBotaoLogin(){
        cy.get(el.botaoLogin).click()
    }
}

export default new Login()
