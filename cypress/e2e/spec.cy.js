/**
 * Cypress commands to cover
 * 1. visit
 * 2. contains
 * 3. get
 * 4. type
 * 5. click
 * 6. test assertions like should, and, contains
 * 7. viewport 'hide something at a certain viewport to show this command'
 * 8. debug
 */


/**
 * Explain how to chose what to test
 * 1. npx cypress open 3 min
 * 3. Visit the site test 4 min
 * 4. Add todo tests 3 min
 * 4. Explain that each test runs independently from each other so sessions, cookies and local storage won't be preserved. 1 min
 * 6. Go over time travel in cypress 2 min
 * 7. Don't test implementation details, test features 1 min
 * 8. Rewrite the tests to use data-test attributes 2 min
 * 9. Custom Functions 2 min
 * 10. Show different browsers and explain cross browser testing (Safari experimental https://docs.cypress.io/guides/guides/launching-browsers#Firefox-Browsers)
 * 11. Show running in headless and point out CI/CD pipelines
 * 12. Go back to explain story about finding niche in the business
 *
 * */
describe('Todo App Testing', () => {
  it('finds the app and adds todo', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Eat breakfast')
    cy.contains('Add').click()
  })

  it('adds a todo with tests', () => {
    cy.visit('http://localhost:3000/')
    //Tests that the site has loaded
    cy.contains('Todo App')
    cy.get('input').type('Eat breakfast')
    //Test that the input field works
    cy.get('input').should('have.value', 'Eat breakfast')
    cy.contains('Add').click()
    //Test that the add button works
    cy.get('li p').should('have.text', 'Eat breakfast')
  })

  it('adds a todo and marks it as complete', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Todo App')
    cy.get('input').type('Eat breakfast')
    cy.contains('Add').click()
    cy.get('#completeTask').click()
  })

  it('finds the app and adds todo', () => {
    cy.visit('http://localhost:3000/')
    cy.addTodo('Write speech');
  })
})