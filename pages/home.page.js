const ABA_AUTOMOBILE = '#nav_automobile'
const ABA_TRUCK = '#nav_truck'
const ABA_MOTORCYCLE = '#nav_motorcycle'
const ABA_CAMPER = '#nav_camper'

Cypress.Commands.add('acessarAbaAutomobile', () => {
  cy.get(ABA_AUTOMOBILE).click()
})

Cypress.Commands.add('acessarAbaCamper', () => {
  cy.get(ABA_CAMPER).click()
})

Cypress.Commands.add('acessarAbaMotorcycle', () => {
  cy.get(ABA_MOTORCYCLE).click()
})

Cypress.Commands.add('acessarAbaTruck', () => {
  cy.get(ABA_TRUCK).click()
})

