// const cypress = require("cypress");

describe('Cypress Selectos',() => {

    it('SampleSelectos',() =>{
        Cypress.config('defaultCommandTimeout', 10000);

        cy.visit('https://react-redux.realworld.io/#/?_k=l3qfn0')
        //Verify the popular tags are visible
        cy.contains('Popular Tags', { timeout: 10000 }).should('be.visible')

        //Click on Implementations Popular Tag
        cy.get('.sidebar').contains('implementations').click()
        //Global Fee includes only Implementation
        cy.get('.outline-active').contains('implementations',{ timeout: 10000 }).should('be.visible')

        //Verify all the search results have Implementations Tag
        //There are multiple DIVs
        cy.get('.article-preview').then(els => {
            for (let index=0; index < els.length; index++){
                console.log(index)
                console.log(els.length)
                cy.get('.article-preview').eq(index).contains('implementations',{ timeout: 10000 }).should('be.visible')
            }
        })

    })

    it('SignIn',() =>{


    })



});