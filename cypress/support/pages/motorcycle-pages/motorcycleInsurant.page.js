// Mapeamento dos elementos
const ELEMENTOS_MOTORCYCLE_INSURANT = {
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
const MOTORCYCLE_INSURANT = {
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
Cypress.Commands.add('preencherFormulario2ValidoMotor', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.firstName).type(Cypress.env('insurantFirstName'))
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.lastName).type(Cypress.env('insurantLastName'))
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.dateOfBirth).type(Cypress.env('insurantDateOfBirth'))
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.coutry).select(MOTORCYCLE_INSURANT.coutry)
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.zipCode).type(Cypress.env('insurantZipCode'))
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.occupation).select(MOTORCYCLE_INSURANT.occupation)
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.hobbies).click()
})

Cypress.Commands.add('avancarSecaoEPD', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.buttonNext).click()
})

Cypress.Commands.add('preencherFormulario2InvalidoMotor', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.firstName).type(Cypress.env('insurantFirstName'))

    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.lastName).type(DADO_INVALIDO_INSURANT.lastnameErrado)
    // CAMPO PREENCHIDO COM DADO INVÁLIDO

    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.dateOfBirth).type(Cypress.env('insurantDateOfBirth'))
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.coutry).select(MOTORCYCLE_INSURANT.coutry)
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.zipCode).type(Cypress.env('insurantZipCode'))
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.occupation).select(MOTORCYCLE_INSURANT.occupation)
    cy.get(ELEMENTOS_MOTORCYCLE_INSURANT.hobbies).click()
})

Cypress.Commands.add('visualizarMensagemErro', () => {
    cy.get('#annualmileage').should('be.visible')
})

Cypress.Commands.add('avancarSecaoEID', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.buttonNext).click()
})