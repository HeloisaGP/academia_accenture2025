import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Camper', () => {
    cy.acessarAbaCamper()
})

And('acesso a seção Enter Product Data', () => {
    cy.acessarSecaoEPD()
})

When('preencho campo obrigatório com dado de seguro do trailer inválido', () => {
    cy.preencherFormulario3InvalidoCamper()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})