// Mapeamento dos elementos
const ELEMENTOS_AUTOMOBILE_INSURANT = {
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
const AUTOMOBILE_INSURANT = {
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
Cypress.Commands.add('preencherFormulario2ValidoAuto', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.firstName).type(Cypress.env('insurantFirstName'))
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.lastName).type(Cypress.env('insurantLastName'))
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.dateOfBirth).type(Cypress.env('insurantDateOfBirth'))
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.coutry).select(AUTOMOBILE_INSURANT.coutry)
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.zipCode).type(Cypress.env('insurantZipCode'))
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.occupation).select(AUTOMOBILE_INSURANT.occupation)
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.hobbies).click()
})

Cypress.Commands.add('avancarSecaoEPD', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.buttonNext).click()
})

Cypress.Commands.add('preencherFormulario2InvalidoAuto', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.firstName).type(Cypress.env('insurantFirstName'))

    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.lastName).type(DADO_INVALIDO_INSURANT.lastnameErrado)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO

    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.dateOfBirth).type(Cypress.env('insurantDateOfBirth'))
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.coutry).select(AUTOMOBILE_INSURANT.coutry)
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.zipCode).type(Cypress.env('insurantZipCode'))
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.occupation).select(AUTOMOBILE_INSURANT.occupation)
    cy.get(ELEMENTOS_AUTOMOBILE_INSURANT.hobbies).click()
})

Cypress.Commands.add('visualizarMensagemErro', () => {
    cy.get('#annualmileage').should('be.visible')
})

Cypress.Commands.add('visualizarSecaoEID', () => {
    cy.get('#firstname').should('be.visible')
})