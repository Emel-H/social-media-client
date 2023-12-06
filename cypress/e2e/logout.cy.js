describe('Logout from accessed profile using logout button', () => {
  it('logout', () => {
    cy.visit('/')
    cy.url().then(url => {
      cy.wait(500)
      cy.get('#registerForm').find('.modal-footer').find('button').focused().contains('Login').click()
      cy.get('#loginForm').find('#loginEmail').focused()
      cy.wait(500)
      cy.get('#loginEmail').type('emeHas54817@stud.noroff.no')
      cy.get('#loginPassword').type('emelhassen{enter}')
      cy.url().should('contain', 'Emel_Hassen')
      cy.wait(500)
      cy.get('button').contains('Logout').click()
      cy.url().should('equal', url)
    })
  })
})
