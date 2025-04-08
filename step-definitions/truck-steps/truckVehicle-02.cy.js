import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Truck', () => {
    cy.acessarAbaTruck()
})

And('visualizo a seção Enter Vehicle Data', () => {
    cy.visualizarSecaoEVD()
})

When('preencho campo obrigatório com dado de caminhão inválido', () => {
    cy.preencherFormulario1InvalidoTruck()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})
