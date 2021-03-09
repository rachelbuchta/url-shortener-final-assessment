describe('Url Shortener', () => {
  beforeEach(() => {
    cy.fixture('example.json')
      .then((data) => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 201,
          body: data
        })
      })
      cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
        statusCode: 201,
        body: {
          "long_url": "https://frontend.turing.io/lessons/module-3/intro-to-cypress-testing.html",
          "title": "Ohhhh Cypress.."
        }
      })
  cy.visit('http://localhost:3000/')
  })

  it('Should display page title and the existing shortened URLs', () => {
    cy.get('header').children('h1').should('contain', 'URL Shortener')
    cy.get('section').children('.url').should('have.length', 1)
  })

  it('Should have a form section with required input fields', () => {
    cy.get('form').children('input').should('have.length', 2)
  })

  it('Should be able to fill out Title input in form', () => {
    cy.get('input[name="title"]')
      .type('Ohhhh Cypress..')
      .should('have.value', 'Ohhhh Cypress..')
  })

  it('Should be able to fill out Url to shorten input in form', () => {
    cy.get('input[name="urlToShorten"]')
      .type("https://frontend.turing.io/lessons/module-3/intro-to-cypress-testing.html")
      .should('have.value', "https://frontend.turing.io/lessons/module-3/intro-to-cypress-testing.html")
  })
})