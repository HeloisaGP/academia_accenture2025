import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Truck', () => {
    cy.acessarAbaTruck()
})

And('preencho com dados do caminhão válidos a Enter Vehicle Data', () => {
    cy.preencherFormulario1ValidoTruck()
})

And('clico no botão next da Enter Vehicle Data', () => {
    cy.avancarSecaoEID()
})

And('preencho com dados do caminhão válidos a Enter Insurant Data', () => {
    cy.preencherFormulario2ValidoTruck()
})

And('clico no botão next da Enter Insurant Data', () => {
    cy.avancarSecaoEPD()
})

And('preencho com dados do caminhão válidos a Enter Product Data', () => {
    cy.preencherFormulario3ValidoTruck()
})

And('clico no botão next da Enter Product Data', () => {
    cy.avancarSecaoSPO()
})

And('acesso a seção Select Price Option', () => {
    cy.visualizarSecaoSPO()
})

When('clico na opção de plano desejada', () => {
    cy.selecionarPlano()
})
        
And('clico no botão next da Select Price Option', () => {
    cy.avancarSecaoSQ()
})
        
Then('visualizo a seção Send Quote', () => {
    cy.visualizarSecaoSQ()
})