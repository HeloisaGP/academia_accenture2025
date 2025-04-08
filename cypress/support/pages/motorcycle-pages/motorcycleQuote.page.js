const ELEMENTOS_MOTORCYCLE_QUOTE = {
    email: '#email',
    username: '#username',
    password: '#password',
    confirmPassword: '#confirmpassword',
    buttonSend: '#sendemail' 
}

const MOTORCYCLE_QUOTE = {
    username: "MariaTeste"
}

const DADO_INVÁLIDO_QUOTE = {
    email: "ABC"
}

Cypress.Commands.add('preencherFormulario5ValidoMotor', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.email).type(Cypress.env('insurantEmail'))
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.username).type(MOTORCYCLE_QUOTE.username)
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.password).type(Cypress.env('insurantPassword'))
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.confirmPassword).type(Cypress.env('insurantPassword'))
})

Cypress.Commands.add('mensagemSucesso', () => {
    cy.wait(2000)
    cy.get('.sa-success').should('be.visible')
})

Cypress.Commands.add('enviarCotacao', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.buttonSend).click()
})

Cypress.Commands.add('preencherFormulario5InvalidoMotor', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.email).type(DADO_INVÁLIDO_QUOTE.email)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO

    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.username).type(MOTORCYCLE_QUOTE.username)
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.password).type(Cypress.env('insurantPassword'))
    cy.get(ELEMENTOS_MOTORCYCLE_QUOTE.confirmPassword).type(Cypress.env('insurantPassword'))
})

Cypress.Commands.add('mensagemErroEnvio', () => {
    cy.get('.sa-warning').should('be.visible')
})

Cypress.Commands.add('visualizarSecaoSQ', () => {
    cy.get('#email').should('be.visible')
})