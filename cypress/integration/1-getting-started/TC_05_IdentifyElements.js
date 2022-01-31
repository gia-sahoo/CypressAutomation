describe('Create and mark-unmark as favorite', function () {
    const uniqueSeed = Date.now().toString();
    const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);

    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('form').within(($form) => {
            // cy.get() will only search for elements within form, not within the entire document
            cy.get('input[type = "email"]').type('qamilestone.academy@gmail.com')
            cy.get('input[type = "password"]').type('admin123')
            cy.root().submit()   // submits the form yielded from 'within'
        })
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
    })

    it('Create a post', function () {
        const uniqueId = getUniqueId();
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('test-'+uniqueId)
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as favorite', function () {
        cy.get('ul.navbar-nav').children().contains('Admin2').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        // cy.url().should('include', 'favorites')
        // cy.wait(20000)
        // cy.get('.article-preview').eq(0).children().get('.ion-heart').should('be.visible')
        // cy.get('.ion-heart').first({ timeout: 10000 }).click()
        // cy.reload()
        // cy.contains('No articles are here... yet.').should('be.visible')
        // cy.go('back')
    })
})