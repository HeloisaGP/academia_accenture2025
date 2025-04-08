import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Automobile', () => {
    cy.acessarAbaAutomobile()
})

And('acesso a seção Enter Product Data', () => {
    cy.acessarSecaoEPD()
})

When('preencho campo obrigatório com dado de seguro do automóvel inválido', () => {
    cy.preencherFormulario3InvalidoAuto()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})