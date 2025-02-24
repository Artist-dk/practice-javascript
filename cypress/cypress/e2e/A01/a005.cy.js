// alerts

describe("alerts", ()=>{

    // 1: Alert
    it('JS alerts',()=>{
        cy.visit({url:'https://the-internet.herokuapp.com/javascript_alerts'})
        cy.get('button[onclick="jsAlert()"').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        // alert window automatically closed by cypress
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    // 2: confirm alert
    it('Confirmation alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('Confirmation alert - cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.on('window:confirm',()=>false )
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    // prompt alert
    it('Prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        // cypress will automatically close prompted alert - it will use OK button - by default
        
        // cy.on('window:prompt',()=>false)
        cy.get('#result').should('have.text', 'You entered: welcome')
    })
    // authenticated alert
    it.only('Authenticated alert',()=>{
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{
        //     auth: {username: 'admin', password:'admin'}
        // })
        // cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
        
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })
})

// https://the-internet.herokuapp.com/javascript_alerts