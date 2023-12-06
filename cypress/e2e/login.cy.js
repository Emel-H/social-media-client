describe('Login and access profile', () => {
  it('login', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerForm').find('.modal-footer').find('button').focused().contains('Login').click()
    cy.get('#loginForm').find('#loginEmail').focused()
    cy.wait(500)
    cy.get('#loginEmail').type('emeHas54817@stud.noroff.no', { delay: 50 })
    cy.get('#loginPassword').type('emelhassen{enter}')
    cy.url().should('contain', 'Emel_Hassen')
    cy.url().should('contain', 'profile')
  })
})
