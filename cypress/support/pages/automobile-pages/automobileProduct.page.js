// Mapeamento dos seletores do formulário 
const ELEMENTOS_AUTOMOBILE_PRODUCT = {
    startDate: '#startdate',
    insuranceSum: '#insurancesum',
    meritRating: '#meritrating',
    damageInsurance: '#damageinsurance',
    optionalProducts: 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check',
    courtesyCar: '#courtesycar',
    buttonNext: '#nextselectpriceoption'
}

// Dados válidos 
const AUTOMOBILE_PRODUCT = {
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

Cypress.Commands.add('preencherFormulario3ValidoAuto', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.startDate).type(AUTOMOBILE_PRODUCT.startDate)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.insuranceSum).select(AUTOMOBILE_PRODUCT.insuranceSum)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.meritRating).select(AUTOMOBILE_PRODUCT.meritRating)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.damageInsurance).select(AUTOMOBILE_PRODUCT.damageInsurance)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.optionalProducts).click()
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.courtesyCar).select(AUTOMOBILE_PRODUCT.courtesyCar)
})

Cypress.Commands.add('avancarSecaoSPO', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.buttonNext).click()
})

Cypress.Commands.add('preencherFormulario3InvalidoAuto', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.startDate).type(DADO_INVÁLIDO_PRODUCT.startDateErrada)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO

    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.insuranceSum).select(AUTOMOBILE_PRODUCT.insuranceSum)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.meritRating).select(AUTOMOBILE_PRODUCT.meritRating)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.damageInsurance).select(AUTOMOBILE_PRODUCT.damageInsurance)
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.optionalProducts).click()
    cy.get(ELEMENTOS_AUTOMOBILE_PRODUCT.courtesyCar).select(AUTOMOBILE_PRODUCT.courtesyCar)
})

Cypress.Commands.add('visualizarMensagemErro', () => {
    cy.get('#annualmileage').should('be.visible')
})

Cypress.Commands.add('visualizarSecaoEPD', () => {
    cy.get('#startdate').should('be.visible')
})
