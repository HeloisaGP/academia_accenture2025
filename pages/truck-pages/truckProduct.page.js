// Mapeamento dos seletores do formulário 
const ELEMENTOS_TRUCK_PRODUCT = {
    startDate: '#startdate',
    insuranceSum: '#insurancesum',
    damageInsurance: '#damageinsurance',
    optionalProducts: 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check',
    buttonNext: '#nextselectpriceoption'
}

// Dados válidos 
const TRUCK_PRODUCT = {
    startDate: "04/10/2026",
    insuranceSum: "3.000.000,00",
    meritRating: 'Bonus 2',
    damageInsurance: 'Full Coverage',
    optionalProducts: 'Euro Protection',
    courtesyCar: 'Yes'
}

// Dado inválido
const DADO_INVÁLIDO_PRODUCT = {
    startDateErrada: '2025/01/05' // Formato incorreto
}

Cypress.Commands.add('acessarSecaoEPD', () => {
    cy.get('#enterproductdata').click()
})

Cypress.Commands.add('preencherFormulario3ValidoTruck', () => {
    cy.get(ELEMENTOS_TRUCK_PRODUCT.startDate).type(TRUCK_PRODUCT.startDate)
    cy.get(ELEMENTOS_TRUCK_PRODUCT.insuranceSum).select(TRUCK_PRODUCT.insuranceSum)
    cy.get(ELEMENTOS_TRUCK_PRODUCT.damageInsurance).select(TRUCK_PRODUCT.damageInsurance)
    cy.get(ELEMENTOS_TRUCK_PRODUCT.optionalProducts).click()
})

Cypress.Commands.add('preencherFormulario3InvalidoTruck', () => {
    cy.get(ELEMENTOS_TRUCK_PRODUCT.startDate).type(DADO_INVÁLIDO_PRODUCT.startDateErrada)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO

    cy.get(ELEMENTOS_TRUCK_PRODUCT.insuranceSum).select(TRUCK_PRODUCT.insuranceSum)
    cy.get(ELEMENTOS_TRUCK_PRODUCT.damageInsurance).select(TRUCK_PRODUCT.damageInsurance)
    cy.get(ELEMENTOS_TRUCK_PRODUCT.optionalProducts).click()
})

Cypress.Commands.add('visualizarMensagemErro', () => {
    cy.get('#annualmileage').should('be.visible')
})

Cypress.Commands.add('visualizarSecaoEPD', () => {
    cy.get('#enterproductdata > .counter').should('be.visible')
})