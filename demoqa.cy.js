import { demoqaverifyaddnewuser } from "../../utlis/demoqalocator"
import { verifyeditfunctionality } from "../../utlis/demoqalocator";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    beforeEach(()=>{cy.visit('https://demoqa.com/')})
describe('demoqa site automation',()=>{
    it('verify user can enter new data into the table',()=>{
        //cy.visit('https://demoqa.com/')
        cy.url().should('include','com')
        cy.get(demoqaverifyaddnewuser.navigatetoelement).eq(0).click()
        cy.get(demoqaverifyaddnewuser.clickonwebtales).click()
        cy.get(demoqaverifyaddnewuser.clickonaddbutton).click()
        cy.get(demoqaverifyaddnewuser.adduserfirstname).type('Alden')
        cy.get(demoqaverifyaddnewuser.adduserlastname).type('Cantrell')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserEmail).type('test@test.com').should('have.value', 'test@test.com')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserage).type('30').should('have.value', '30')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.addusersalary).type('12345').should('have.value', '12345')
        cy.get(demoqaverifyaddnewuser.adduserdepartment).type('QA')//.should('have.text', 'QA')
        cy.get(demoqaverifyaddnewuser.clickonsubmitbtn).click()
    })
    it('verify user can edit row in a table',()=>{
        cy.get(verifyeditfunctionality.navigatetoelement).eq(0).click()
        cy.get(verifyeditfunctionality.clickonwebtales).click()
        cy.get(verifyeditfunctionality.clickonsecroweditbox).click()
        cy.get(verifyeditfunctionality.clearfirstname).clear().type('Gerimedica')//.should('have.text', 'Gerimedica')
        cy.get(verifyeditfunctionality.clearlastname).clear().type('BV')
        cy.get(verifyeditfunctionality.clickonsubmitbtn).click()
    })
})
