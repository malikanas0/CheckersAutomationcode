import { loginPageSelectors } from "../../utlis/locator"

describe('Seperate selectors using pom' , function(){
    it('login page selectors' , function() {

        cy.visit('https://www.demoblaze.com/')
        cy.get(loginPageSelectors.loginpagevisit).click()
        cy.wait(4000)
        cy.get(loginPageSelectors.usernameInput).type('Alitest@gmail.com')
        cy.get(loginPageSelectors.passwordInput).type('Password@123')
        cy.wait(4000)
        cy.get(loginPageSelectors.loginButton).eq(2).click()
        /*cy.get('#login2').click()
        cy.wait(3000)
        cy.get('#loginusername').click().type('Alitest@gmail.com')
        cy.get('#loginpassword').click().type('Password@123')
        cy.wait(4000)
        //cy.get('input[type="button"]').click()
        cy.get('[class="btn btn-primary"]').eq(2).click();*/
    })
})