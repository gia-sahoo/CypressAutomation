describe('My First TestSuite', () => {

    it('Testcase01 - Visits the Kitchen Sink', () => {
      expect(true).to.equal(true)
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.contains('Examples of actions').should('be.visible')
      // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@email.com').should('have.value','fake@email.com')
    .type('{del}{selectall}{backspace}')
      
    })

    it('Testcase02', () => {
        expect(true).to.equal(true)
      })

      it('Testcase03 Select from dropdown', () => {
        expect(true).to.equal(true)
      })

      it.only("Login Test", function () {
        //Arrange
        cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
        //Act
        cy.fixture("logindetails.json").then((user) => {
          cy.get('input[type="email"]').type(user.email);
          cy.get('input[type="password"]').type(user.password);
        });
    
        cy.get('button[type="submit"]').click();
        //Assert
        cy.contains("No articles are here... yet.").should("be.visible");
      });


   

  })