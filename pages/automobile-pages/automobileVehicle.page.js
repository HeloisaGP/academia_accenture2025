// Mapeia os seletores dos campos da aba "Enter Vehicle Data"
const ELEMENTOS_AUTOMOBILE_VEHICLE = {
    make: '#make',
    enginePerformance: '#engineperformance',
    dateOfManufacture: '#dateofmanufacture',
    numberOfSeats: '#numberofseats',
    fuelType: '#fuel',
    listPrice: '#listprice',
    annualMileage: '#annualmileage',
    buttonNext: '#nextenterinsurantdata'
}

// Dados válidos para preencher o formulário
const AUTOMOBILE_VEHICLE = {
    make: "Volkswagen",
    enginePerformance: "120",
    dateOfManufacture: "05/12/2020",
    numberOfSeats: "2",
    fuelType: "Petrol",
    listPrice: "55000",
    annualMileage: "15000"
}

// Dado inválido para testar validações de campo
const DADO_INVALIDO_VEHICLE = {
    annualMileageErrado: 'INVALIDO' // Texto ao invés de número válido
}

Cypress.Commands.add('vizualizarSecaoEVD', () => {
    cy.get('#selectedinsurance').should('be.visible')
    cy.get('.invalid').should('be.visible')
})

Cypress.Commands.add('preencherFormulario1ValidoAuto', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.make).select(AUTOMOBILE_VEHICLE.make)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.enginePerformance).type(AUTOMOBILE_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.dateOfManufacture).type(AUTOMOBILE_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.numberOfSeats).select(AUTOMOBILE_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.fuelType).select(AUTOMOBILE_VEHICLE.fuelType)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.listPrice).type(AUTOMOBILE_VEHICLE.listPrice)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.annualMileage).type(AUTOMOBILE_VEHICLE.annualMileage)
})

Cypress.Commands.add('avancarSecao', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.buttonNext).click()
})

// Preenche o formulário com dado inválido
Cypress.Commands.add('preencherFormulario1InvalidoAuto', () => {
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.make).select(AUTOMOBILE_VEHICLE.make)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.enginePerformance).type(AUTOMOBILE_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.dateOfManufacture).type(AUTOMOBILE_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.numberOfSeats).select(AUTOMOBILE_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.fuelType).select(AUTOMOBILE_VEHICLE.fuelType)
    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.listPrice).type(AUTOMOBILE_VEHICLE.listPrice)

    cy.get(ELEMENTOS_AUTOMOBILE_VEHICLE.annualMileage).type(DADO_INVALIDO_VEHICLE.annualMileageErrado) 
    // CAMPO PREENCHIDO COM DADO INVÁLIDO
})

Cypress.Commands.add('visualizarMessagemErro', () => {
    cy.get('.invalid > .icon').should('be.visible')
});
