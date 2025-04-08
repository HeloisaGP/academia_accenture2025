import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Automobile', () => {
    cy.acessarAbaAutomobile()
})

And('preencho com dados da motocicleta válidos a Enter Vehicle Data', () => {
    cy.preencherFormulario1ValidoAuto()
})

And('clico no botão next da Enter Vehicle Data', () => {
    cy.avancarSecaoEID()
})

And('preencho com dados da motocicleta válidos a Enter Insurant Data', () => {
    cy.preencherFormulario2ValidoAuto()
})

And('clico no botão next da Enter Insurant Data', () => {
    cy.avancarSecaoEPD()
})

And('preencho com dado da motocicleta inválido a Enter Product Data', () => {
    cy.preencherFormulario3InvalidoAuto()
})

When('clico no botão next da Enter Product Data', () => {
    cy.avancarSecaoSPO()
})

And('acesso a seção Select Price Option', () => {
    cy.visualizarSecaoSPO()
})

Then('visualizo uma mensagem de alerta', () => {
    cy.visualizarMensagemAlerta()
})