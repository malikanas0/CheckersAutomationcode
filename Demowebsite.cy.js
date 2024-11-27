describe('Automate full demo website',()=>{
    it('first sign in page automation',()=>{
        cy.visit('https://bstackdemo.com/')
        cy.get('#signin').click()
        //cy.get('[class=" css-tlfecz-indicatorContainer"]').eq('0').click()
        //cy.get('#username').click().find('demouser')//.should('have.text', 'demouser')
        //cy.get('#username').click().find('option:selected').should('have.text', 'demouser')
    })
})