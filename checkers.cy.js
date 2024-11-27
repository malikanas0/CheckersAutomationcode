describe('Verify that site must be opened',()=>{
    it('Verify that site must be opened',()=>{//Test for verify the website is opened or not
        cy.visit('https://www.gamesforthebrain.com/game/checkers/')//visit the website
        cy.url().should('include','https://www.gamesforthebrain.com/game/checkers/')
        cy.get('h1').should('have.text','Checkers')
        //verify that table is visible
        //it('verify the table is visible',()=>{
            cy.get('.boardWrapper').should('be.visible')
            cy.get('[name="space62"]').click().should('have.attr', 'src', 'you2.gif')
            cy.get('[name="space73"]').click().should('be.visible').should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            //expect($el).to.have.value('test@dev.com')
            cy.get('[name="space22"]').click()
            cy.get('[name="space13"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space71"]').click()
            cy.get('[name="space62"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space42"]').click()
            cy.get('[name="space24"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space31"]').click()
            cy.get('[name="space22"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space51"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space33"]').click()//.should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space13"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space04"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space02"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space13"]').click()
            cy.wait(3000)
            cy.get('[name="space04"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space15"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space13"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space04"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space22"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space13"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space11"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space33"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space00"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space11"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space11"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space22"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space33"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space44"]').click().should('have.attr', 'src', 'gray.gif')
            cy.wait(3000)
            cy.get('[name="space20"]').should('have.attr', 'src', 'you1.gif').click()
            cy.get('[name="space02"]').click().should('have.attr', 'src', 'you1.gif')
            cy.wait(3000)
            cy.get('[name="space73"]').click()
            cy.get('[name="space64"]').click()
            cy.wait(3000)
            cy.get('[name="space64"]').click()
            cy.get('[name="space75"]').click()
            cy.wait(3000)
            cy.get('[name="space15"]').click()
            cy.get('[name="space26"]').click()
            cy.wait(3000)
            cy.get('[name="space13"]').click()
            cy.get('[name="space24"]').click()
            cy.wait(3000)
            cy.get('[name="space02"]').click()
            cy.get('[name="space24"]').click()
            cy.wait(3000)
            cy.get('[name="space04"]').click()
            cy.get('[name="space15"]').click()
            cy.wait(3000)
            cy.get('[name="space15"]').click()
            cy.get('[name="space26"]').click()
            cy.wait(3000)
            cy.get('[name="space26"]').click()
            cy.get('[name="space37"]').click().should('have.attr', 'src', 'you1k.gif')
})
})