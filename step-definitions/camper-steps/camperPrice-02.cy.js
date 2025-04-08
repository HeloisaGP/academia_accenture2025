import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Camper', () => {
    cy.acessarAbaCamper()
})

And('preencho com dados do trailer válidos a Enter Vehicle Data', () => {
    cy.preencherFormulario1ValidoCamper()
})

And('clico no botão next da Enter Vehicle Data', () => {
    cy.avancarSecaoEID()
})

And('preencho com dados do trailer válidos a Enter Insurant Data', () => {
    cy.preencherFormulario2ValidoCamper()
})

And('clico no botão next da Enter Insurant Data', () => {
    cy.avancarSecaoEPD()
})

And('preencho com dado do trailer inválido a Enter Product Data', () => {
    cy.preencherFormulario3InvalidoCamper()
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