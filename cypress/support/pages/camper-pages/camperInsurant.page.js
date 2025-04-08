// Mapeamento dos elementos
const ELEMENTOS_CAMPER_INSURANT = {
    firstName: '#firstname',
    lastName: '#lastname',
    dateOfBirth: '#birthdate',
    coutry: '#country',
    zipCode: '#zipcode',
    occupation: '#occupation',
    hobbies: ':nth-child(5) > .ideal-check',
    buttonNext: '#nextenterproductdata'
}

// Dados fixos (não sensíveis)
const CAMPER_INSURANT = {
    coutry: "Brazil",
    occupation: "Farmer",
    hobbies: "Other"
}

// Dado inválido
const DADO_INVALIDO_INSURANT = {
    lastnameErrado: '000'
}

// Verifica se seção está visível
Cypress.Commands.add('acessarSecaoEID', () => {
    cy.get('#enterinsurantdata').click()
})

// Preenche com dados válidos 
Cypress.Commands.add('preencherFormulario2ValidoCamper', () => {
    cy.get(ELEMENTOS_CAMPER_INSURANT.firstName).type(Cypress.env('insurantFirstName'))
    cy.get(ELEMENTOS_CAMPER_INSURANT.lastName).type(Cypress.env('insurantLastName'))
    cy.get(ELEMENTOS_CAMPER_INSURANT.dateOfBirth).type(Cypress.env('insurantDateOfBirth'))
    cy.get(ELEMENTOS_CAMPER_INSURANT.coutry).select(CAMPER_INSURANT.coutry)
    cy.get(ELEMENTOS_CAMPER_INSURANT.zipCode).type(Cypress.env('insurantZipCode'))
    cy.get(ELEMENTOS_CAMPER_INSURANT.occupation).select(CAMPER_INSURANT.occupation)
    cy.get(ELEMENTOS_CAMPER_INSURANT.hobbies).click()
})

Cypress.Commands.add('avancarSecaoEPD', () => {
    cy.get(ELEMENTOS_CAMPER_INSURANT.buttonNext).click()
})

Cypress.Commands.add('visualizarSecaoEPD', () => {
    cy.get('#enterproductdata > .counter').should('be.visible')
})

Cypress.Commands.add('preencherFormulario2InvalidoCamper', () => {
    cy.get(ELEMENTOS_CAMPER_INSURANT.firstName).type(Cypress.env('insurantFirstName'))

    cy.get(ELEMENTOS_CAMPER_INSURANT.lastName).type(DADO_INVALIDO_INSURANT.lastnameErrado)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO

    cy.get(ELEMENTOS_CAMPER_INSURANT.dateOfBirth).type(Cypress.env('insurantDateOfBirth'))
    cy.get(ELEMENTOS_CAMPER_INSURANT.coutry).select(CAMPER_INSURANT.coutry)
    cy.get(ELEMENTOS_CAMPER_INSURANT.zipCode).type(Cypress.env('insurantZipCode'))
    cy.get(ELEMENTOS_CAMPER_INSURANT.occupation).select(CAMPER_INSURANT.occupation)
    cy.get(ELEMENTOS_CAMPER_INSURANT.hobbies).click()
})

Cypress.Commands.add('visualizarMensagemErro', () => {
    cy.get('#annualmileage').should('be.visible')
})

Cypress.Commands.add('visualizarSecaoEID', () => {
    cy.get('#firstname').should('be.visible')
})