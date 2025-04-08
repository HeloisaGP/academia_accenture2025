import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Motorcycle', () => {
    cy.acessarAbaMotorcycle()
})

And('visualizo a seção Enter Vehicle Data', () => {
    cy.visualizarSecaoEVD()
})

When('preencho campos obrigatórios com dados de motocicleta corretos', () => {
    cy.preencherFormulario1ValidoMotor()
})

And('clico no botão Next', () => {
    cy.avancarSecaoEID()
})

Then('avanço para seção Enter Insurant Data', () => {
    cy.acessarSecaoEID()
})