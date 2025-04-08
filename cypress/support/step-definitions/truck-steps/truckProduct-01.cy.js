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

When('preencho campos obrigatórios com dados de seguro do caminhão válidos', () => {
    cy.preencherFormulario3ValidoTruck()
})

And('clico no botão Next da seção Enter Product Data', () => {
    cy.avancarSecaoSPO()
})

Then('acesso a seção Select Price Option', () => {
    cy.visualizarSecaoSPO()
})