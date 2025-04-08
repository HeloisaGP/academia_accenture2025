// Mapeia os seletores dos campos da aba "Enter Vehicle Data"
const ELEMENTOS_TRUCK_VEHICLE = {
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
const TRUCK_VEHICLE = {
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

Cypress.Commands.add('preencherFormulario1ValidoTruck', () => {
    cy.get(ELEMENTOS_TRUCK_VEHICLE.make).select(TRUCK_VEHICLE.make)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.enginePerformance).type(TRUCK_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.dateOfManufacture).type(TRUCK_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.numberOfSeats).select(TRUCK_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.fuelType).select(TRUCK_VEHICLE.fuelType)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.payLoad).type(TRUCK_VEHICLE.payLoad)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.totalWeight).type(TRUCK_VEHICLE.totalWeight)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.listPrice).type(TRUCK_VEHICLE.listPrice)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.annualMileage).type(TRUCK_VEHICLE.annualMileage)
})

Cypress.Commands.add('avancarSecao', () => {
    cy.get(ELEMENTOS_TRUCK_VEHICLE.buttonNext).click()
})

// Preenche o formulário com dado inválido
Cypress.Commands.add('preencherFormulario1InvalidoTruck', () => {
    cy.get(ELEMENTOS_TRUCK_VEHICLE.make).select(TRUCK_VEHICLE.make)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.enginePerformance).type(TRUCK_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.dateOfManufacture).type(TRUCK_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.numberOfSeats).select(TRUCK_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.fuelType).select(TRUCK_VEHICLE.fuelType)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.payLoad).type(TRUCK_VEHICLE.payLoad)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.totalWeight).type(TRUCK_VEHICLE.totalWeight)
    cy.get(ELEMENTOS_TRUCK_VEHICLE.listPrice).type(TRUCK_VEHICLE.listPrice)

    cy.get(ELEMENTOS_TRUCK_VEHICLE.annualMileage).type(DADO_INVALIDO_VEHICLE.annualMileageErrado) 
    // CAMPO PREENCHIDO COM DADO INVÁLIDO
})

Cypress.Commands.add('visualizarMessagemErro', () => {
    cy.get('.invalid > .icon').should('be.visible')
});
