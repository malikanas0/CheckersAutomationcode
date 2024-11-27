import { demoqaverifyaddnewuser } from "../../utlis/demoqalocator"
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('demoqa site automation',()=>{
    it('verify user can enter new data into the table',()=>{
        cy.visit('https://demoqa.com/')
        cy.url().should('include','com')
        cy.get(demoqaverifyaddnewuser.navigatetoelement).eq(0).click()
        cy.get(demoqaverifyaddnewuser.clickonwebtales).click()
        cy.get(demoqaverifyaddnewuser.clickonaddbutton).click()
        cy.get(demoqaverifyaddnewuser.adduserfirstname).type('Alden')
        cy.get(demoqaverifyaddnewuser.adduserlastname).type('Cantrell')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserEmail).type('test@test.com')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserage).type('30')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.addusersalary).type('12345')
        cy.get(demoqaverifyaddnewuser.adduserdepartment).type('QA')
        cy.get(demoqaverifyaddnewuser.clickonsubmitbtn).click()
    })
})