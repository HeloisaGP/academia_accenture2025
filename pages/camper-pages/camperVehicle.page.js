// Mapeia os seletores dos campos da aba "Enter Vehicle Data"
const ELEMENTOS_CAMPER_VEHICLE = {
    make: '#make',
    enginePerformance: '#engineperformance',
    dateOfManufacture: '#dateofmanufacture',
    numberOfSeats: '#numberofseats',
    fuelType: '#fuel',
    payLoad: '#payload',
    totalWeight: '#totalweight',
    listPrice: '#listprice',
    annualMileage: '#annualmileage',
    buttonNext: '#nextenterinsurantdata'
}

// Dados válidos para preencher o formulário
const CAMPER_VEHICLE = {
    make: "Volkswagen",
    enginePerformance: "120",
    dateOfManufacture: "05/12/2020",
    numberOfSeats: "2",
    fuelType: "Petrol",
    payLoad: "650",
    totalWeight: "1650",
    listPrice: "55000",
    annualMileage: "15000"
}

// Dado inválido para testar validações de campo
const DADO_INVALIDO_VEHICLE = {
    annualMileageErrado: 'INVALIDO' // Texto ao invés de número válido
}

Cypress.Commands.add('visualizarSecaoEVD', () => {
    cy.get('#selectedinsurance').should('be.visible')
    cy.get('.invalid').should('be.visible')
})

Cypress.Commands.add('preencherFormulario1ValidoCamper', () => {
    cy.get(ELEMENTOS_CAMPER_VEHICLE.make).select(CAMPER_VEHICLE.make)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.enginePerformance).type(CAMPER_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.dateOfManufacture).type(CAMPER_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.numberOfSeats).select(CAMPER_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.fuelType).select(CAMPER_VEHICLE.fuelType)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.payLoad).type(CAMPER_VEHICLE.payLoad)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.totalWeight).type(CAMPER_VEHICLE.totalWeight)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.listPrice).type(CAMPER_VEHICLE.listPrice)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.annualMileage).type(CAMPER_VEHICLE.annualMileage)
})

Cypress.Commands.add('avancarSecao', () => {
    cy.get(ELEMENTOS_CAMPER_VEHICLE.buttonNext).click()
})

// Preenche o formulário com dado inválido
Cypress.Commands.add('preencherFormulario1InvalidoCamper', () => {
    cy.get(ELEMENTOS_CAMPER_VEHICLE.make).select(CAMPER_VEHICLE.make)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.enginePerformance).type(CAMPER_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.dateOfManufacture).type(CAMPER_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.numberOfSeats).select(CAMPER_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.fuelType).select(CAMPER_VEHICLE.fuelType)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.payLoad).type(CAMPER_VEHICLE.payLoad)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.totalWeight).type(CAMPER_VEHICLE.totalWeight)
    cy.get(ELEMENTOS_CAMPER_VEHICLE.listPrice).type(CAMPER_VEHICLE.listPrice)

    cy.get(ELEMENTOS_CAMPER_VEHICLE.annualMileage).type(DADO_INVALIDO_VEHICLE.annualMileageErrado) 
    // CAMPO PREENCHIDO COM DADO INVÁLIDO
})

Cypress.Commands.add('visualizarMessagemErro', () => {
    cy.get('.invalid > .icon').should('be.visible')
});
