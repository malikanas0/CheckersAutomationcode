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
        cy.get(demoqaverifyaddnewuser.clickonwebtales).click().should('have.id','item-3')
        cy.get(demoqaverifyaddnewuser.clickonaddbutton).click().should('have.text','Add')
        cy.get(demoqaverifyaddnewuser.adduserfirstname).type('Alden').should('have.value', 'Alden')
        cy.get(demoqaverifyaddnewuser.adduserlastname).type('Cantrell').should('have.value', 'Cantrell')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserEmail).type('test@test.com').should('have.value', 'test@test.com')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.adduserage).type('30').should('have.value', '30')
        cy.wait(3000)
        cy.get(demoqaverifyaddnewuser.addusersalary).type('12345').should('have.value', '12345')
        cy.get(demoqaverifyaddnewuser.adduserdepartment).type('QA').should('have.value', 'QA')
        cy.get(demoqaverifyaddnewuser.clickonsubmitbtn).click().should('have.text','Submit')
    })
    it('verify user can edit row in a table',()=>{
        cy.get(verifyeditfunctionality.navigatetoelement).eq(0).click()
        cy.get(verifyeditfunctionality.clickonwebtales).click().should('have.id','item-3')
        cy.wait(3000)
        cy.get(verifyeditfunctionality.clickonsecroweditbox).should('have.id','edit-record-2').click()
        cy.wait(3000)
        cy.get(verifyeditfunctionality.clearfirstname).should('have.value', 'Alden').clear().type('Gerimedica').and('have.value', 'Gerimedica')
        cy.get(verifyeditfunctionality.clearlastname).should('have.value', 'Cantrell').clear().type('BV').and('have.value', 'BV')
        cy.get(verifyeditfunctionality.clickonsubmitbtn).click().should('have.text','Submit')
    })
})
