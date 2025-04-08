// Mapeamento dos seletores
const ELEMENTOS_MOTORCYCLE_PRICE = {
    selectionOpcion: 'tr > .group > :nth-child(2) > .ideal-radio',
    buttonNext: '#nextsendquote'
}

// Dados fixos (não sensíveis)
const MOTORCYCLE_PRICE = {
    selectionOpcion: "Gold",
}

Cypress.Commands.add('selecionarPlano', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_PRICE.selectionOpcion).click()
})

Cypress.Commands.add('avancarSecaoSQ', () => {
    cy.wait(1000)
    cy.get(ELEMENTOS_MOTORCYCLE_PRICE.buttonNext).click()
})

Cypress.Commands.add('visualizarMensagemAlerta', () => {
    cy.get('#xLoaderPrice').should('be.visible')
})
