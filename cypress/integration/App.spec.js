context('App', () => {
  beforeEach(() => {
    cy.visit('https://web-shop-rupert.herokuapp.com/')
  })

  it('Adds and deletes item to the basket', () => {
    cy.contains('Add to cart')
      .click()

      cy.contains("Remove From Basket").should('be.visible')

      cy.contains('Remove All Items')
        .click()

        cy.contains("Remove from cart").should('not.be.visible')
  })

  it('Remove From Basket should not be visible when initually open', () => {
    cy.contains('Remove From Basket').should('not.be.visible')
  })
})
