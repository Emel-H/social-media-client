describe('Login with invalid credentials and get error message', () => {
  it('login', () => {
    cy.visit('https://emel-h.github.io/social-media-client/')
    cy.wait(500)
    cy.get('#registerForm').find('.modal-footer').find('button').focused().contains('Login').click()
    cy.get('#loginForm').find('#loginEmail').focused()
    cy.wait(500)
    cy.get('#loginEmail').type('emeHas54817@stud.noroff.no', { delay: 100 })
    cy.get('#loginPassword').type('emelhass{enter}')

    cy.on('window:alert', (t) => {
      // assertions
      expect(t).contains('Either your username was not found or your password is incorrect')
    })
  })
})
