// Just for a test
describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'graphQl + Vue')
  })
})
