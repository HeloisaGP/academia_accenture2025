// Mapeamento dos seletores
const ELEMENTOS_TRUCK_PRICE = {
    selectionOpcion: 'tr > .group > :nth-child(2) > .ideal-radio',
    buttonNext: '#nextsendquote'
}

// Dados fixos (não sensíveis)
const TRUCK_PRICE = {
    selectionOpcion: "Gold",
}

Cypress.Commands.add('selecionarPlano', () => {
    cy.get(ELEMENTOS_TRUCK_PRICE.selectionOpcion).click()
})

Cypress.Commands.add('avancarSecaoSQ', () => {
    cy.wait(1000)
    cy.get(ELEMENTOS_TRUCK_PRICE.buttonNext).click()
})

Cypress.Commands.add('visualizarMensagemAlerta', () => {
    cy.get('#xLoaderPrice').should('be.visible')
})

Cypress.Commands.add('avancarSecaoSPO', () => {
    cy.get(ELEMENTOS_TRUCK_PRODUCT.buttonNext).click()
})

Cypress.Commands.add('visualizarSecaoSPO', () => {
    cy.get('#selectpriceoption > .counter').should('be.visible')
})