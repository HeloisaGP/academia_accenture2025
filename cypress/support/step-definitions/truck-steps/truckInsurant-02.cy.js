import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Truck', () => {
    cy.acessarAbaTruck()
})

And('acesso a seção Enter Insurant Data', () => {
    cy.acessarSecaoEID()
})

When('preencho campo obrigatório com dado inválido', () => {
    cy.preencherFormulario2InvalidoTruck()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})