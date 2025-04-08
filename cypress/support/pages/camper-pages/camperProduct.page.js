// Mapeamento dos seletores do formulário 
const ELEMENTOS_CAMPER_PRODUCT = {
    startDate: '#startdate',
    insuranceSum: '#insurancesum',
    damageInsurance: '#damageinsurance',
    optionalProducts: 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check',
    buttonNext: '#nextselectpriceoption'
}

// Dados válidos 
const CAMPER_PRODUCT = {
    startDate: "04/10/2026",
    insuranceSum: "3.000.000,00",
    damageInsurance: 'Full Coverage',
    optionalProducts: 'Euro Protection',
}

// Dado inválido
const DADO_INVÁLIDO_PRODUCT = {
    startDateErrada: '2025/01/05' // Formato incorreto
}

Cypress.Commands.add('acessarSecaoEPD', () => {
    cy.get('#enterproductdata').click()
})

Cypress.Commands.add('preencherFormulario3ValidoCamper', () => {
    cy.get(ELEMENTOS_CAMPER_PRODUCT.startDate).type(CAMPER_PRODUCT.startDate)
    cy.get(ELEMENTOS_CAMPER_PRODUCT.insuranceSum).select(CAMPER_PRODUCT.insuranceSum)
    cy.get(ELEMENTOS_CAMPER_PRODUCT.damageInsurance).select(CAMPER_PRODUCT.damageInsurance)
    cy.get(ELEMENTOS_CAMPER_PRODUCT.optionalProducts).click()
})

Cypress.Commands.add('avancarSecaoSPO', () => {
    cy.get(ELEMENTOS_CAMPER_PRODUCT.buttonNext).click()
})

Cypress.Commands.add('preencherFormulario3InvalidoCamper', () => {
    cy.get(ELEMENTOS_CAMPER_PRODUCT.startDate).type(DADO_INVÁLIDO_PRODUCT.startDateErrada)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO
    
    cy.get(ELEMENTOS_CAMPER_PRODUCT.insuranceSum).select(CAMPER_PRODUCT.insuranceSum)
    cy.get(ELEMENTOS_CAMPER_PRODUCT.damageInsurance).select(CAMPER_PRODUCT.damageInsurance)
    cy.get(ELEMENTOS_CAMPER_PRODUCT.optionalProducts).click()
})

Cypress.Commands.add('visualizarMensagemErro', () => {
    cy.get('#annualmileage').should('be.visible')
})