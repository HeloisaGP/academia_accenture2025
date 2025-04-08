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

When('preencho campo obrigatório com dado de trailer inválido', () => {
    cy.preencherFormulario1InvalidoCamper()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})