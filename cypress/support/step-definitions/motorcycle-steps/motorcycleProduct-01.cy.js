import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis Vehicle Insurance', () => {
    cy.visit('/')
})

And('clico na aba Motorcycle', () => {
    cy.acessarAbaMotorcycle()
})

And('acesso a seção Enter Product Data', () => {
    cy.acessarSecaoEPD()
})

When('preencho campos obrigatórios com dados de seguro da motocicleta válidos', () => {
    cy.preencherFormulario3ValidoMotor()
})

And('clico no botão Next da seção Enter Product Data', () => {
    cy.avancarSecaoSPO()
})

Then('acesso a seção Select Price Option', () => {
    cy.visualizarSecaoSPO()
})