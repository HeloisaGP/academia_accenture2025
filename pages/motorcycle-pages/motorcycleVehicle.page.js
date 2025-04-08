// Mapeia os seletores dos campos da aba "Enter Vehicle Data"
const ELEMENTOS_MOTORCYCLE_VEHICLE = {
    make: '#make',
    model: '#model',
    cylinderCapacity: '#cylindercapacity',
    enginePerformance: '#engineperformance',
    dateOfManufacture: '#dateofmanufacture',
    numberOfSeats: '#numberofseatsmotorcycle',
    fuelType: '#fuel',
    payLoad: '#payload',
    totalWeight: '#totalweight',
    listPrice: '#listprice',
    annualMileage: '#annualmileage',
    buttonNext: '#nextenterinsurantdata'
}

// Dados válidos para preencher o formulário
const MOTORCYCLE_VEHICLE = {
    make: "Volkswagen",
    model: "Motorcycle",
    cylinderCapacity: '500',
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

Cypress.Commands.add('preencherFormulario1ValidoMotor', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.make).select(MOTORCYCLE_VEHICLE.make)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.model).select(MOTORCYCLE_VEHICLE.model)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.cylinderCapacity).type(MOTORCYCLE_VEHICLE.cylinderCapacity)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.enginePerformance).type(MOTORCYCLE_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.dateOfManufacture).type(MOTORCYCLE_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.numberOfSeats).select(MOTORCYCLE_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.listPrice).type(MOTORCYCLE_VEHICLE.listPrice)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.annualMileage).type(MOTORCYCLE_VEHICLE.annualMileage)
})

Cypress.Commands.add('visualizarSecaoEID', () => {
    cy.get('#firstname').should('be.visible')
})

// Preenche o formulário com dado inválido
Cypress.Commands.add('preencherFormulario1InvalidoMotor', () => {
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.make).select(MOTORCYCLE_VEHICLE.make)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.enginePerformance).type(MOTORCYCLE_VEHICLE.enginePerformance)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.dateOfManufacture).type(MOTORCYCLE_VEHICLE.dateOfManufacture)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.numberOfSeats).select(MOTORCYCLE_VEHICLE.numberOfSeats)
    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.listPrice).type(MOTORCYCLE_VEHICLE.listPrice)

    cy.get(ELEMENTOS_MOTORCYCLE_VEHICLE.annualMileage).type(DADO_INVALIDO_VEHICLE.annualMileageErrado) 
    // CAMPO PREENCHIDO COM DADO INVÁLIDO
})

Cypress.Commands.add('visualizarMessagemErro', () => {
    cy.get('.invalid > .icon').should('be.visible')
});
