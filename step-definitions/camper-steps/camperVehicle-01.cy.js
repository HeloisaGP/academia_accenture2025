import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Camper', () => {
    cy.acessarAbaCamper()
})

And('visualizo a seção Enter Vehicle Data', () => {
    cy.visualizarSecaoEVD()
})

When('preencho campos obrigatórios com dados de trailer válidos', () => {
    cy.preencherFormulario1ValidoCamper()
})

And('clico no botão Next', () => {
    cy.avancarSecaoEID()
})

Then('avanço para seção Enter Insurant Data', () => {
    cy.acessarSecaoEID()
})