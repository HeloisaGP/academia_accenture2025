import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Truck', () => {
    cy.acessarAbaTruck()
})

And('acesso a seção Enter Product Data', () => {
    cy.acessarSecaoEPD()
})

When('preencho campo obrigatório com dado de seguro do caminhão inválido', () => {
    cy.preencherFormulario3InvalidoTruck()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})