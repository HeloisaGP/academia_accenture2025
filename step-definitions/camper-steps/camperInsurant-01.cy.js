import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Camper', () => {
    cy.acessarAbaCamper()
})

And('acesso a seção Enter Insurant Data', () => {
    cy.acessarSecaoEID()
})

When('preencho campos obrigatórios com dados válidos', () => {
    cy.preencherFormulario2ValidoCamper()
})

And('clico no botão Next da seção Enter Insurant Data', () => {
    cy.avancarSecaoEPD()
})

Then('visualizo a seção Enter Product Data', () => {
    cy.visualizarSecaoEPD()
})