import Login from '../pageObjects/login'

describe('Login(POMlogin)',{tags:'@POMlogin'}, function(){
    const login = new Login()

    it('SignIn', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type('qamilestone.academy@gmail.com')
        login.password().type('admin123')
        login.signInButton().should('be.visible').click()
        cy.get('input[type="password5"]').should('be.visible')//expect to fail
    })
})