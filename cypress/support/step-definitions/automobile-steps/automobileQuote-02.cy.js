import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Automobile', () => {
    cy.acessarAbaAutomobile()
})

And('preencho com dados válidos a Enter Vehicle Data', () => {
    cy.preencherFormulario1ValidoAuto()
})

And('clico no botão next da Enter Vehicle Data', () => {
    cy.avancarSecaoEID()
})

And('preencho com dados válidos a Enter Insurant Data', () => {
    cy.preencherFormulario2ValidoAuto()
})

And('clico no botão next da Enter Insurant Data', () => {
    cy.avancarSecaoEPD()
})

And('preencho com dados válidos a Enter Product Data', () => {
    cy.preencherFormulario3ValidoAuto()
})

And('clico no botão next da Enter Product Data', () => {
    cy.avancarSecaoSPO()
})

And('acesso a seção Select Price Option', () => {
    cy.visualizarSecaoSPO()
})

And('clico na opção de plano desejada', () => {
    cy.selecionarPlano()
})
        
And('clico no botão next da Select Price Option', () => {
    cy.avancarSecaoSQ()
})
        
And('visualizo a seção Send Quote', () => {
    cy.visualizarSecaoSQ()
})

When('preencho campos obrigatórios com dado de login inválido', () => {
    cy.preencherFormulario5InvalidoAuto()
})

And('clico no botão send', () => {
    cy.enviarCotacao()
})

Then('é exibida mensagem de erro', () => {
    cy.mensagemErroEnvio()
})