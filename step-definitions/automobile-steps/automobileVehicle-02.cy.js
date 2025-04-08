import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Automobile', () => {
    cy.acessarAbaAutomobile()
})

And('visualizo a seção Enter Vehicle Data', () => {
    cy.visualizarSecaoEVD()
})

When('preencho campo obrigatório com dado de veículo inválido', () => {
    cy.preencherFormulario1InvalidoAuto()
})

Then('sistema exibe mensagem de erro', () => {
    cy.visualizarMessagemErro()
})
